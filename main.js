canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
Array_mars=["pic_1.jfif","pic_2.jfif","pic_3.jpg","pic_4.jpg","mars.jpg"];
random_number=Math.floor(Math.random()*5);
rover_width=100;
rover_height=100;
background_image=Array_mars[random_number];
console.log("background_image="+background_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    
    ctx.drawImage(background_imgTag, 0, 0, canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
      if(keyPressed == '38')
      {
          up();
          console.log("up");

      }
      if(keyPressed == '40')
      {
          down();
          console.log("down");

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

}

function up()
{
   if(rover_y>0){
       rover_y=rover_y-10;
       console.log("when_up_arrow_is_pressed"+rover_x+rover_y);
       uploadBackground();
       uploadrover();


   }
}

function down()
{
   if(rover_y<=500){
       rover_y=rover_y+10;
       console.log("when_down_arrow_is_pressed"+rover_x+rover_y);
       uploadBackground();
       uploadrover();
       

   }
}

function left()
{
   if(rover_x>=0){
       rover_x=rover_x-10;
       console.log("when_left_arrow_is_pressed"+rover_x+rover_y);
       uploadBackground();
       uploadrover();
       

   }
}

function right()
{
   if(rover_x<=700){
       rover_x=rover_x+10;
       console.log("when_right_arrow_is_pressed"+rover_x+rover_y);
       uploadBackground();
       uploadrover();
       

   }
}