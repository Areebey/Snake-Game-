// A simple Snake Game 

function init(){
    let canvas=document.getElementById("mycanvas");

    W = H = canvas.width =600 ,canvas.height = 600;
    pen=canvas.getContext('2d');
    cs=50 // cell size

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
            }
        },

        updateSnake:function(){
            console.log("Updateing Snake")

            this.cells.pop();
            let headX=this.cells[0].x;
            let headY=this.cells[0].y;
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
    pen.clearRect(0,0,W,H)
    snake.drawSnake()
};

function update(){
    snake.updateSnake();
};

function gameLoop(){
    draw();
    update();
};

init();

let f = setInterval(gameLoop(),100);