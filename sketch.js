var guy, guy_running;

function preload (){
  guy_running = loadAnimation ("runner_1.png","runner_2.png","runner_3.png");
}

function setup(){
  createCanvas (600,200);
  guy = createSprite (50,160,50,50);
  guy.addAnimation ("guy_running", guy_running);
  guy.scale= 0.15;
}

function draw() {
background("white");




drawSprites();
}