var jukebox = {
  initialize: function() {
    this.activateSongModal();
  },

  activateSongModal: function() {
    console.log("==activateSongModal==");
    var self = this;    //this is the key code
    console.log("this:", this);
    console.log("self:", self);
    document.getElementById("findBtn").addEventListener("click", function(){
      console.log("-- click:findBtn --");
      console.log("this:", this);
      console.log("self:", self);
      self.showModal();
    })
  },

  showModal: function() {
    console.log("showModal");
  }
}
jukebox.initialize();
