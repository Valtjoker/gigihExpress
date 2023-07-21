const songs = require("../models");

class Controller {
  static async getSongs(req, res) {
    try {
      const songList = await songs;
      res.status(200).json(songList);
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  static async getSortedSongs(req, res) {
    try {
      const songList = await songs;
      const compare = (a, b) => {
        const playCountA = a.playCount;
        const playCountB = b.playCount;
        let comparison = 0;
        if (playCountA > playCountB) {
          comparison = 1;
        } else if (playCountA < playCountB) {
          comparison = -1;
        }
        return comparison;
      };
      const sorted = await songList.sort(compare);

      res.status(200).json(sorted);
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  static async addSong(req, res) {
    try {
      const songList = await songs;
      const { song, artist, album, playCount = 0 } = req.body;
      if (!song || !artist || !album) {
        throw error;
      }
      await songList.push({
        song,
        artist,
        album,
        playCount,
      });

      res.status(200).json(songList);
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}

module.exports = Controller;
