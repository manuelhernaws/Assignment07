/*eslint-env browser*/
window.addEventListener("load", function () {


var Jukebox = function () {
    "use strict";
    var albums = [], self;
    
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
                
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};
    
var select = document.getElementById("select");
    var album = [["biggie ", " Ready to die"], ["Tupac ", "All eyes on me"], "Dyablo", "Destruccion"];
    var i;
    for (i = 0; i < album.length; i += 1) {
        var opt = album[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
    
var pl = function play () {
    document.getElementById("play").addEventListener("click", function(){
    });
    
}
    
var Favalbum = function () {
    document.getElementById("favAlbum").addEventListener("click", function(){
    document.getElementById("favAlbum").innerHTML = alert("Your Favorite Album is " + Jukebox.favoriteAlbum());
    });
    
}
var jbox = new Jukebox();
Favalbum();
pl();
});