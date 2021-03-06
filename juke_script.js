var jukebox = {
  musicLibrary: [],
    // {title:"New Face", artist:"PSY", url:"music/NewFace.mp3"},
    // {title:"Through The Night", artist:"IU", url:"music/ThroughTheNight.mp3"},
    // {title:"Wild Flower", artist:"Park HyoShin", url:"music/WildFlower.mp3"}

  initialize: function() {
    this.activateUI();
    this.audioPlayer();
    this.activateQueuedSong();
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
    var self = this;    //this is the key code
    var title = document.getElementById('title').value;
    var artist = document.getElementById('artist').value;
    var url = document.getElementById('url').value;
    var nextMusic = new jukebox.Music(title, artist, url);
    jukebox.musicLibrary.push(nextMusic);
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
    var nextListItem = "";
    for (var i = 0; i < jukebox.musicLibrary.length; i++) {
      nextMusic = jukebox.musicLibrary[i];
      nextMusicTitle = nextMusic.title;
      nextListItem += "<li id='title_" + i + "'>" + nextMusicTitle + "</li>"
    };
    document.getElementById('songList').innerHTML = nextListItem;
  },
// ====== CREATE CLICKABLE LINK FOR PLAYLIST ========
  activatePlaylist: function() {
  var listArray = document.getElementById('songList').getElementsByTagName('li');
  console.log(listArray);
    for (var i = 0; i < listArray.length; i++) {
      nextListItem = listArray[i];
      nextListItem.addEventListener("click", jukebox.displaySelectedSong);
    };
  },
  // ======= DISPLAY SELECTED SONG INFO ========
  displaySelectedSong: function(event) {
    var titleID = event.currentTarget.id;
    var titleIndex = titleID.indexOf("_") + 1;
    var songIndex = titleID.substring(titleIndex);
    var selectedSong = jukebox.musicLibrary[songIndex];
    var songTags = document.getElementById("selectedSong").getElementsByTagName("p");
    songTags[0].innerText = selectedSong.title;
    songTags[1].innerText = selectedSong.artist;
    songTags[2].innerText = selectedSong.url;
    songTags[3].innerText = selectedSong.artwork;
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = selectedSong.url;
    audioPlayer.play();
    var artwork = document.getElementById("artwork");
    var artStr = "url('" + selectedSong.image + "')"
  },
  // ====== ACTIVATE QUEUED SONG ======
  activateQueuedSong: function() {
    console.log("==activateQueuedSong==");
    $('#playBtn').on('click', function(){
    			$("#audioPlayer").attr("src","music/NewFace.mp3").trigger('play');
    			$('#artwork').css('backgroundImage','url(images/newface.jpg)'); // image codes
    		})
  },
  // ====== AUDIO PLAYER CONTROL =======
  audioPlayer: function() {
    var self = this;
    var audioPlayer = document.getElementById('audioPlayer');
    // ====== PLAY BUTTON ACTION ======
    document.getElementById('playBtn').addEventListener("click", function(){
      audioPlayer.play();
    });
    // ====== PAUSE BUTTON ACTION ======
    document.getElementById('pauseBtn').addEventListener("click", function(){
      audioPlayer.pause();
    });
  }
}
jukebox.initialize();

// var backBtn = document.getElementById('backBtn');
// var pauseBtn = document.getElementById('pauseBtn');
// var nextBtn = document.getElementById('nextBtn');
