// create video variable
var vid;

// setup canvas
function setup() {
    createCanvas(800, 600);
    // load video
    vid = createVideo(['assets/hello1.mp4']);
    // video size
    vid.size(640, 480);
    // video position
    vid.position(400, 300);
    // loop video
    vid.loop();
}


var value = 0;

// check if mouse is pressed
// if yes, stop looping
// hide video
function mousePressed(){

    if (value===0){
        vid.stop();
        vid.hide();
        value = 1;
    }

}

