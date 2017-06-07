var jukebox = {
  musicLibrary: [],

  initialize: function() {
    this.activateSongModal();
    this.audioPlayer();
  },
// ======= save button activation =======
  activateSongModal: function() {
    // console.log("==activateSongModal==");
    var self = this;    //this is the key code
    // console.log("this:", this);
    // console.log("self:", self);
    document.getElementById("saveBtn").addEventListener("click", function(){
      // console.log("-- click:saveBtn --");
      // console.log("this:", this);
      // console.log("self:", self);
      self.savedMusicInfo();
    })
  },

  savedMusicInfo: function() {
    // console.log("showModal");
    var title = document.getElementById('title').value;
    var artist = document.getElementById('artist').value;
    var url = document.getElementById('url').value;
    var nextMusic = new jukebox.Music(title, artist, url);
    console.log(nextMusic);
    jukebox.musicLibrary.push(nextMusic);
    console.log(jukebox.musicLibrary);
  },
// ====== Music constructor ======
  Music: function(title, artist, url) {
    this.title = title;
    this.artist = artist;
    this.url = url;
  },

  // ====== Audio player =======
  audioPlayer: function() {
    // console.log("audioPlayer");
    var self = this;
    // console.log("this:", this);
    var audioPlayer = document.getElementById('audioPlayer');
    // ====== PLAY BUTTON ACTION ======
    document.getElementById('playBtn').addEventListener("click", function(){
      console.log("==play==");
      audioPlayer.play();
    });
    // ====== PAUSE BUTTON ACTION ======
    document.getElementById('pauseBtn').addEventListener("click", function(){
      console.log("==pause==");
      audioPlayer.pause();
    });
  }
}
jukebox.initialize();

// var backBtn = document.getElementById('backBtn');
// var pauseBtn = document.getElementById('pauseBtn');
// var nextBtn = document.getElementById('nextBtn');
