const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADTUlEQVRIS63VTWgUZxgH8P+7Mzsf+2U2SrPJKBoEA1WKUMzupaKHpgoetadCnaBN9FRaLLRQEW17KKIed1V21dJLbU/FRqiixx219NDaVi+NmnWNZT+cze7Ozsf7yoxEYpnMRJI5DQzP+5v3P8/7DEHANVHM7iXAVyAkwQCNgZYjDp3KH7jzZ1DdwmckBLirrE29KQgcTNOBZTrQdYP2es631LSPnp34zQqDlgTIcvTlOowxNBsG6o3uHw6he899eOt+EBIGeBHxUW5ElDjEYwKSKdFbzzAsVB61/q4lWlsvv3/XXAwJBOaL9pe29slE3MgoOSHF+N0DAwnwfASNehe1WudkYVw7sixgYfFkMXtSikU/VZQU3LhmHjVZ17Sz59Tbt/2QJe3glUIGMnEhe3PgjcR2Ny5dN/Df0873ebX8gS/wshUBUMK+PKveuhzWGZPF0fdiceHq4FAK3a6FyoyuFca13GKA14ruw8qM/ldhXNscBnz03duDUSY83jCchu04ePBvs5ZXtTW+wGQpW12/IZ1xP9r0dAM9g2bOH9Rmg5DDpW0ZwvFVD7CpW1ctqNqQP1DM/ZJRErvdFqw+bqHdMccKqvZr4AEsbdsVj4lTbkTttolqtXWloGp7FtlB7uv+1fIX6bSM9pyJJ9W5a3m1PAYC5ou4H7mUvT44mNwZTwio17to1Dsn8qp21Bc4cGl0WCLcP+vW9wkRQrxddNrW6cyw9NmxnTfthUX7ftgs9LcTP8dkfmxIWeW16cOHTdO22EheLU8v2qYTxezn6bT8zeo1MS/T2dk5GB3rHgNOMd6+SsFxnE3eJcAnohwdUZQkQAjqtTYadePHwri2L/CgHbuxg3/ywPhdUZJbJOnF3GnpPS9fw7ABAkgij3h8flS46REYPRvVig5KoebV8oXAg3bw4ugmjkV+6u+Xt/T1SSDE/wy6sTxrdiHHBYgCH4q8ssqLjOPHZYk/kkiKEUHg4Y5qBgbLpDBNG62W5Rhde4rjsGdISUEUgxHf1zx0MfsWdTBGCHIAeQeABbAyBdPmfziTpdz+SASlMOT1Z9GCoJeCLAtwrTBk2UAYsiKAH+JN2YreXDHg/wilzJ3Oz1YUmEcYY2fce0LIx88BFi6vvp70RPYAAAAASUVORK5CYII=";
class MyExtension {

  constructor() {}

  getInfo() {
      return {
        id: 'myExtension',
        name: formatMessage({
              id: 'myExtension',
              defaultMessage: 'Some Blocks',
              description: 'Extension name'
        }),

        colour: '#8BC34A',
        colourSecondary: '#7CB342',
        colourTertiary: '#689F38',

        menuIconURI: icon,

        blocks: [
              {

                  opcode: 'myReporter',
                  blockType: 'reporter',
                  branchCount: 0,
                  terminal: false,
                  blockAllThreads: false,
                  text: formatMessage({
                      id: 'myReporter',
                      defaultMessage: 'letter [LETTER_NUM] of [TEXT]',
                      description: 'Label on the "myReporter" block'
                  }),
                  arguments: {
                      LETTER_NUM: {
                          type: 'number',
                          default: 1
                      },
                      TEXT: {
                          type: 'string',
                          default: formatMessage({
                              id: 'myReporter.TEXT_default',
                              defaultMessage: 'text',
                              description: 'Default for "TEXT" argument of "myReporter"'
                          })
                      }
                  },
                  func: 'myReporter',
                  filter: ['someBlocks.wedo2', 'sprite', 'stage']
              }
          ]

          myReporter({args}) {
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
          }
        }
      }
    }

Scratch.extensions.register(new MyExtension());
