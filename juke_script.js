var jukebox = {
  musicLibrary: [
    {title:"New Face", artist:"PSY", url:"music/New Face.mp3"},
    {title:"Through The Night", artist:"IU", url:"music/ThroughTheNight.mp3"},
    {title:"Wild Flower", artist:"Park HyoShin", url:"music/WildFlower.mp3"}
  ],

  initialize: function() {
    this.activateUI();
    this.audioPlayer();
  },
  // ======= ACTIVATE SAVE BUTTON =========
activateUI: function() {
  var self = this;
  var saveBtn = document.getElementById("saveBtn");
  saveBtn.addEventListener("click", function(){
    self.saveNewSong();
  });
},
// ======= ADD NEW SONG =======
  saveNewSong: function() {
    // console.log("==activateSongModal==");
    var self = this;    //this is the key code
    // console.log("this:", this);
    // console.log("self:", self);
    var title = document.getElementById('title').value;
    var artist = document.getElementById('artist').value;
    var url = document.getElementById('url').value;
    var nextMusic = new jukebox.Music(title, artist, url);
    console.log(nextMusic);
    jukebox.musicLibrary.push(nextMusic);
    console.log(jukebox.musicLibrary);
    // console.log("-- click:saveBtn --");
    // console.log("this:", this);
    // console.log("self:", self);
    // self.savedMusicInfo();
    this.createPlaylist();
    this.activatePlaylist();
  },
// ====== MUSIC CONSTRUCTOR ======
  Music: function(title, artist, url) {
    this.title = title;
    this.artist = artist;
    this.url = url;
  },
// ====== DISPLAY MUSIC PLAYLIST =======
  createPlaylist: function() {
    console.log("==createPlaylist==");
    var nextListItem = "";
    for (var i = 0; i < jukebox.musicLibrary.length; i++) {
      nextMusic = jukebox.musicLibrary[i];
      nextMusicTitle = nextMusic.title;
      nextListItem += "<li id='title_" + i + "'>" + nextMusicTitle + "</li>"
    };
    console.log(nextListItem);
    document.getElementById('songList').innerHTML = nextListItem;
  },
// ====== CREATE CLICKABLE LINK FOR PLAYLIST ========
  activatePlaylist: function() {
  console.log("==activatePlaylist==");
  var listArray = document.getElementById('songList').getElementsByTagName('li');
  console.log(listArray);
  for (var i = 0; i < listArray.length; i++) {
    nextListItem = listArray[i];
    console.log(nextListItem);
    nextListItem.addEventListener("click", jukebox.displaySelectedSong);
  };
  },
  // ======= DISPLAY SELECTED SONG INFO ========
  displaySelectedSong: function(event) {
    console.log("==displaySelectedSong==");
    var titleID = event.currentTarget.id;
    console.log(event.currentTarget.id);
    var titleIndex = titleID.indexOf("_") + 1;
    console.log(titleIndex);
    var songIndex = titleID.substring(titleIndex);
    console.log(songIndex);
    var selectedSong = jukebox.musicLibrary[songIndex];
    console.log(selectedSong);
    var songTags = document.getElementById("selectedSong").getElementsByTagName("p");
    console.log(songTags);
    songTags[0].innerText = selectedSong.title;
    songTags[1].innerText = selectedSong.artist;
    songTags[2].innerText = selectedSong.url;
  },


  // ====== AUDIO PLAYER CONTROL=======
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
