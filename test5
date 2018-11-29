// scratch-vm/src/extensions/scratch3_[YOUR_EXTENSION_NAME_HERE]/index.js
const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
class Scratch3MyExtension {
    constructor (runtime) {
        this.runtime = runtime;
    }
    getInfo () {
        return {
            id: 'myExtension', // Replace with the ID you specified in scratch-gui
            name: 'My Extension',
            blocks: [
                {
                    opcode: 'exponent',
                    text: '[BASE] ^ [POWER]',
                    blockType: BlockType.REPORTER,
                    arguments: {
                        BASE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 2
                        },
                        POWER: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 3
                        }
                    }
                }
            ]
        };
    }
    exponent (args, util) {
        const {BASE, POWER} = args;
        return Math.pow(BASE, POWER);
    }
}
module.exports = Scratch3MyExtension;
