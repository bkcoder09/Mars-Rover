var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var r_height=100;
var r_width=70;
var r_x_pos=10;
var r_y_pos=10;
var r_image="rover.png";
var b_image="mars.jpg";
function add(){
    bg=new Image();
    bg.onload=uploadBackground;
    bg.src=b_image;
    
    rover=new Image();
    rover.onload=uploadRover;
    rover.src=r_image;
}
function uploadBackground(){
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover, r_x_pos, r_y_pos, r_width, r_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38')
    {
        up();
        console.log("up key");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
}

function up(){
    if( r_y_pos >= 0 ){
        r_y_pos = r_y_pos -10;
        console.log("When up arrow key is pressed =" + r_x_pos + " | " + r_y_pos);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if( r_x_pos >= 0 ){
        r_x_pos = r_x_pos -10;
        console.log("When left arrow key is pressed =" + r_y_pos + " | " + r_x_pos);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if( r_x_pos <= 700 ){
        r_x_pos = r_x_pos +10;
        console.log("When right arrow key is pressed =" + r_y_pos + " | " + r_x_pos);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if( r_y_pos <= 500 ){
        r_y_pos = r_y_pos +10;
        console.log("When down arrow key is pressed =" + r_x_pos + " | " + r_y_pos);
        uploadBackground();
        uploadRover();
    }
}