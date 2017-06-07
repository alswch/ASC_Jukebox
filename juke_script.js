var jukebox = {
  musicLibrary: [],

  initialize: function() {
    this.activateSongModal();
  },

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
  }
}
jukebox.initialize();
