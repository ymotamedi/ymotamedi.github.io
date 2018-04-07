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
    vid.hide();
}

// check if space is pressed
// if yes, play video
// can repeat multiple times
function keyPressed(){
    if (keyCode=== 32){
        vid.show();
        vid.play();
    }

}

