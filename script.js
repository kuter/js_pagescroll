function set_progress() {
    'use strict';
    var bottom_page = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var position = window.scrollY;
    var percent = Math.round(position / bottom_page * 100) + '%';
    document.getElementById("progress").style.width = percent;
}
document.addEventListener("scroll", function() {
    set_progress();
});

