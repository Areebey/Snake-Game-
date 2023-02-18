// A simple Snake Game Code 

function init(){
    let canvas=document.getElementById("mycanvas");
    W = H = canvas.width =600 ,canvas.height = 600;
    pen=canvas.getContext('2d');
    cs=50 // cell size
    game_Over=false;
    score=5;

food_img=new Image();
food_img.src="images/apple.png"

trophy=new Image();
trophy.src="images/trophy.png"

   food = getRandomFood();

    snake={
        init_len:5,
        color:"red",
        cells:[],
        direction:"right",

        createSnake:function(){
            for(let i=this.init_len;i>0;i--){
                this.cells.push({x:1,y:0});
            }
        },

        drawSnake:function(){
            for(let i=0;i< this.cells.length;i++){
                pen.fillStyle=this.color;
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs=3,cs=3);

                pen.fillRect(food.x,food.y,cs,cs);
            }
        },
        updateSnake:function(){
            console.log("Updateing Snake")

            let headX=this.cells[0].x;
            let headY=this.cells[0].y;
            if(headX==food.x && headY==food.y){
                console.log("Food eat");
                food= getRandomFood();
                score ++;
            }
            else{
                this.cells.pop();
            }

            this.cells.pop();

            let nextX, nextY;
            if(this.direction=="right"){
                nextX=headX+1;
                nextY=headY;
            }else if(this .direction=="left"){
                nextX=headX-1;
                nextY=headY
            }else if(this.direction=="down"){
                nextX=headX;
                nextY=headY+1;
            }else{
                nextX=headX;
                nextY=headY-1;
            }

            this.cells.unshift({x:nextX,y:nextY });

            let last_x=Math.round(W/cs);
            let last_y=Math.round(H/cs);
           if(this.cells[0].y<0 ||this.cells[0].x<0  ||this.cells[0].x>last_x || this.cells[0].y>last_y)
             game_Over=true;
        }
        };

    snake.createSnake();

    // Add event listener for keyboard access
    function keyPressd(e){
        if(e.key=="ArrowRight"){
            snake.direction="right"
        }else if(e.key=="ArrowLeft"){
            snake.direction="left"
        }else if(e.key=="ArrowDown"){
            snake.direction="down"
        }else{
            snake.direction="up"
        }
        console.log(snake.direction)
    }
    document.addEventListener("keydown",keyPressd)
};

function draw(){
    pen.clearRect(0,0,W,H);
    snake.drawSnake();

    pen.fillStyle=food.color;
    pen.drawImage(food_img,food.x*cs,food.y*cs,cs,cs);

    pen.drawImage(trophy,18,20,cs,cs)
    pen.fillStyle="blue";
    pen.font="30px  Roboto";
    pen.fillText(score,50,50);
};
function update(){
    snake.updateSnake();
};

function getRandomFood(){

    let foodX=Math.round(Math.random()*(W-cs)/cs);
    let foodY=Math.round(Math.random()*(H-cs)/cs);

    let food={
        x:foodX,
        y:foodY,
        color:"yellow",
    }
    return food;
}

function gameLoop(){
if(game_Over==true){
    clearInterval(f);
    alert("Gome Over");
    return
}
    draw();
    update();
};

init();

let f = setInterval(gameLoop(),100);