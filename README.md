# djs-minesweeper
 Discord.js MineSweeper

# Dependencies
* None, but was designed to be used with [Discord.js](https://github.com/discordjs/discord.js).

# Example
```js
    const { Minesweeper } = require('./index.js');
    const board = new Minesweeper().start();
    // send board in a MessageEmbed/RichEmbed description field.
```