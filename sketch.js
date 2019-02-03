var data;

function preload() {
	data = loadJSON("data.json");
}

function setup() {
  noCanvas(400, 400);
  createElement('h1', "酥酥每日精选");
  var news = data.feeds;
  for (var i = 0; i < news.length; i ++) {
    createElement('h5', news[i].date);
  	createElement('h2', news[i].title);
    createElement('a', news[i].link);
    createElement('h5', news[i].author);
    createElement('br');
  }
  
  // createp;
}

function draw() {
  background(220);
}