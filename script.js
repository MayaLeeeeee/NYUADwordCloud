// const TagCloud = require('TagCloud');

var texts = [
    'NYUAD','Purple','Abu Dhabi','Education',
    'Mental Health',
];

var otherOne = [
  'NYUAD',
];
var tc = TagCloud('.content', texts);
console.log(tc);

// switch style
// function toDefault() { document.body.classList.remove('light'); }

// add tag
function addTag() {
    if (!tc) return;

    var newWord = window.prompt("Enter a new Keyword!");
      texts.push(newWord);
      tc.update(texts);

}
//remove tag
function removeTag() {
    if (!tc) return;
    texts.pop();
    tc.update(texts);
}

var otherOne = [];

// make new loud
function toCreate() {
      if (otherOne.length >= 3) return;
      otherOne.push(TagCloud('.content', texts));
}

//destroy cloud
function toDestroy() {
    var last = otherOne[otherOne.length - 1];
    if (!last) return;
    last.destroy();
    otherOne.pop();
}
// pause animation
function pause() {
    [].concat(tc, otherOne).forEach(function (e) { return e.pause() });
}

//resume animation
function resume() {
    [].concat(tc, otherOne).forEach(function (e) { return e.resume() });
}
