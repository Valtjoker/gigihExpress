const songs = require("./songs.json");

songlist = JSON.parse(JSON.stringify(songs));

module.exports = songlist;
