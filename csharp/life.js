function randCell() {
    return Math.floor(Math.random() * 2);
}

function cloneWorld() {
    // fix this so we have exactly two copies instead of creating a new copy every time
    var newworld = []
    for (var i = 0; i < world.length; i++) {
	newworld[i] = world[i].slice();
    }
    return newworld;
}

function addIfDefined(a, b) {
    if (typeof b !== 'undefined') {
	return a + b;
    }
    return a;
}

function neighbors(x, y) {
    var total = 0;

    var row = world[x-1];
    if (typeof row !== 'undefined') {
	total = addIfDefined(total, row[y-1]);
	total = addIfDefined(total, row[y]);
	total = addIfDefined(total, row[y+1]);
    }
    total = addIfDefined(total, world[x][y-1]);
    total = addIfDefined(total, world[x][y+1]);
    row = world[x+1];
    if (typeof row !== 'undefined') {
	total = addIfDefined(total, row[y-1]);
	total = addIfDefined(total, row[y]);
	total = addIfDefined(total, row[y+1]);
    }

    return total;
}
var age = 0; //defines a variable to keep track of length of game
var neighboursLimit = 3; //defines the limit of number of neighbours before death

function generation() {
    var newworld = cloneWorld();
	age++; //increments age of game each generation;
	$('#age').text(age);
    for (var x = 0; x < worldx; ++x) {
	for (var y = 0; y < worldy; ++y) {
	    var ncnt = neighbors(x, y);
	    if (ncnt === neighboursLimit) {
		newworld[x][y] = 1;
	    }
	    else if ((ncnt < neighboursLimit-1) || (ncnt  > neighboursLimit)) {
		newworld[x][y] = 0;
	    }
	}
    }
    world = newworld;
}

function setPixel(imagedata, x, y, r, g, b, a) {
    var idx = (y * imagedata.width + x) * 4;

    imagedata.data[idx] = r;
    imagedata.data[idx+1] = g;
    imagedata.data[idx+2] = b;
    imagedata.data[idx+3] = a;

    return imagedata;
}

function drawWorld() {
    var canvas = $('#lifeCanvas')[0];
    var ctx = canvas.getContext('2d');
    var canvasWidth = $('#lifeCanvas').width();
    var canvasHeight = $('#lifeCanvas').height();
    var imagedata = ctx.createImageData(canvasWidth, canvasHeight);
    for (var x = 0; x < worldx; ++x) {
	for (var y = 0; y < worldy; ++y) {
	    var col = 255*world[x][y];
	    setPixel(imagedata, x, y, col, col, col, 255);
	}
    }
    ctx.putImageData(imagedata, 0, 0, 0, 0, canvasWidth, canvasHeight);
}

function doGeneration() {
    generation();
    drawWorld();
}

function init() {
    var canvas = $('#lifeCanvas')[0];
    var ctx = canvas.getContext('2d');
    var width = $("#lifeContainer").width();
    var height = $("#lifeContainer").height();
    canvas.style.width =  width + 'px';
    canvas.style.height =  height + 'px';
    ctx.width = width;
    ctx.heigh = height;
    worldx = width;
    worldy = height;
    world = _.range(worldx).map(function () {
        return _.range(worldy).map(randCell);
    });

    setInterval(function() { generation(); drawWorld(); }, 150);
}
