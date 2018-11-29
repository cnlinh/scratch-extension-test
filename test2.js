const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADTUlEQVRIS63VTWgUZxgH8P+7Mzsf+2U2SrPJKBoEA1WKUMzupaKHpgoetadCnaBN9FRaLLRQEW17KKIed1V21dJLbU/FRqiixx219NDaVi+NmnWNZT+cze7Ozsf7yoxEYpnMRJI5DQzP+5v3P8/7DEHANVHM7iXAVyAkwQCNgZYjDp3KH7jzZ1DdwmckBLirrE29KQgcTNOBZTrQdYP2es631LSPnp34zQqDlgTIcvTlOowxNBsG6o3uHw6he899eOt+EBIGeBHxUW5ElDjEYwKSKdFbzzAsVB61/q4lWlsvv3/XXAwJBOaL9pe29slE3MgoOSHF+N0DAwnwfASNehe1WudkYVw7sixgYfFkMXtSikU/VZQU3LhmHjVZ17Sz59Tbt/2QJe3glUIGMnEhe3PgjcR2Ny5dN/Df0873ebX8gS/wshUBUMK+PKveuhzWGZPF0fdiceHq4FAK3a6FyoyuFca13GKA14ruw8qM/ldhXNscBnz03duDUSY83jCchu04ePBvs5ZXtTW+wGQpW12/IZ1xP9r0dAM9g2bOH9Rmg5DDpW0ZwvFVD7CpW1ctqNqQP1DM/ZJRErvdFqw+bqHdMccKqvZr4AEsbdsVj4lTbkTttolqtXWloGp7FtlB7uv+1fIX6bSM9pyJJ9W5a3m1PAYC5ou4H7mUvT44mNwZTwio17to1Dsn8qp21Bc4cGl0WCLcP+vW9wkRQrxddNrW6cyw9NmxnTfthUX7ftgs9LcTP8dkfmxIWeW16cOHTdO22EheLU8v2qYTxezn6bT8zeo1MS/T2dk5GB3rHgNOMd6+SsFxnE3eJcAnohwdUZQkQAjqtTYadePHwri2L/CgHbuxg3/ywPhdUZJbJOnF3GnpPS9fw7ABAkgij3h8flS46REYPRvVig5KoebV8oXAg3bw4ugmjkV+6u+Xt/T1SSDE/wy6sTxrdiHHBYgCH4q8ssqLjOPHZYk/kkiKEUHg4Y5qBgbLpDBNG62W5Rhde4rjsGdISUEUgxHf1zx0MfsWdTBGCHIAeQeABbAyBdPmfziTpdz+SASlMOT1Z9GCoJeCLAtwrTBk2UAYsiKAH+JN2YreXDHg/wilzJ3Oz1YUmEcYY2fce0LIx88BFi6vvp70RPYAAAAASUVORK5CYII=";

var MyExtension = function () {
};

MyExtension.prototype.constructor = function () {
};

MyExtension.prototype.getInfo = function () {
    return {
      id: 'myExtension',
      name: formatMessage({
            id: 'myExtension',
            defaultMessage: 'Some Blocks',
            description: 'Extension name'
        }),

        blocks: [
              {
                  // Required: the machine-readable name of this operation.
                  // This will appear in project JSON.
                  opcode: 'myReporter', // becomes 'someBlocks.myReporter'

                  // Required: the kind of block we're defining, from a predefined list:
                  // 'command' - a normal command block, like "move {} steps"
                  // 'reporter' - returns a value, like "direction"
                  // 'Boolean' - same as 'reporter' but returns a Boolean value
                  // 'hat' - starts a stack if its value is truthy
                  // 'conditional' - control flow, like "if {}" or "if {} else {}"
                  // A 'conditional' block may return the one-based index of a branch to
                  // run, or it may return zero/falsy to run no branch.
                  // 'loop' - control flow, like "repeat {} {}" or "forever {}"
                  // A 'loop' block is like a conditional block with two differences:
                  // - the block is assumed to have exactly one child branch, and
                  // - each time a child branch finishes, the loop block is called again.
                  blockType: 'reporter',

                  // Required for conditional blocks, ignored for others: the number of
                  // child branches this block controls. An "if" or "repeat" block would
                  // specify a branch count of 1; an "if-else" block would specify a
                  // branch count of 2.
                  // TODO: should we support dynamic branch count for "switch"-likes?
                  branchCount: 0,

                  // Optional, default false: whether or not this block ends a stack.
                  // The "forever" and "stop all" blocks would specify true here.
                  terminal: false,

                  // Optional, default false: whether or not to block all threads while
                  // this block is busy. This is for things like the "touching color"
                  // block in compatibility mode, and is only needed if the VM runs in a
                  // worker. We might even consider omitting it from extension docs...
                  blockAllThreads: false,

                  // Required: the human-readable text on this block, including argument
                  // placeholders. Argument placeholders should be in [MACRO_CASE] and
                  // must be [ENCLOSED_WITHIN_SQUARE_BRACKETS].
                  text: formatMessage({
                      id: 'myReporter',
                      defaultMessage: 'letter [LETTER_NUM] of [TEXT]',
                      description: 'Label on the "myReporter" block'
                  }),

                  // Required: describe each argument.
                  // Argument order may change during translation, so arguments are
                  // identified by their placeholder name. In those situations where
                  // arguments must be ordered or assigned an ordinal, such as interaction
                  // with Scratch Blocks, arguments are ordered as they are in the default
                  // translation (probably English).
                  arguments: {
                      // Required: the ID of the argument, which will be the name in the
                      // args object passed to the implementation function.
                      LETTER_NUM: {
                          // Required: type of the argument / shape of the block input
                          type: 'number',

                          // Optional: the default value of the argument
                          default: 1
                      },

                      // Required: the ID of the argument, which will be the name in the
                      // args object passed to the implementation function.
                      TEXT: {
                          // Required: type of the argument / shape of the block input
                          type: 'string',

                              // Optional: the default value of the argument
                          default: formatMessage({
                              id: 'myReporter.TEXT_default',
                              defaultMessage: 'text',
                              description: 'Default for "TEXT" argument of "myReporter"'
                          })
                      }
                  },

                  // Required: the function implementing this block.
                  func: 'myReporter',

                  // Optional: list of target types for which this block should appear.
                  // If absent, assume it applies to all builtin targets -- that is:
                  // ['sprite', 'stage']
                  filter: ['someBlocks.wedo2', 'sprite', 'stage']
              },
          ],

          // Optional: define extension-specific menus here.
        menus: {
            // Required: an identifier for this menu, unique within this extension.
            menuA: [
                // Static menu: list items which should appear in the menu.
                {
                    // Required: the value of the menu item when it is chosen.
                    value: 'itemId1',

                    // Optional: the human-readable label for this item.
                    // Use `value` as the text if this is absent.
                    text: formatMessage({
                        id: 'menuA_item1',
                        defaultMessage: 'Item One',
                        description: 'Label for item 1 of menu A'
                    })
                },

                // The simplest form of a list item is a string which will be used as
                // both value and text.
                'itemId2'
            ],

            // Dynamic menu: returns an array as above.
            // Called each time the menu is opened.
            menuB: 'getItemsForMenuB'
        },

}}

/**
 * Implement myReporter.
 * @param {object} args - the block's arguments.
 * @property {string} MY_ARG - the string value of the argument.
 * @returns {string} a string which includes the block argument value.
 */
MyExtension.prototype.myReporter = function (args) {
    // This message contains ICU placeholders, not Scratch placeholders
    const message = formatMessage({
        id: 'myReporter.result',
        defaultMessage: 'Letter {LETTER_NUM} of {TEXT} is {LETTER}.',
        description: 'The text template for the "myReporter" block result'
    });

    // Note: this implementation is not Unicode-clean; it's just here as an example.
    const result = args.TEXT.charAt(args.LETTER_NUM);

    return message.format({
        LETTER_NUM: args.LETTER_NUM,
        TEXT: args.TEXT,
        LETTER: result
    });
};

Scratch.extensions.register(new MyExtension());
