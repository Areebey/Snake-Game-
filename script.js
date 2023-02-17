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
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs,cs);
            }
        },

        updateSnake:function(){
            this.cells.pop();
            let headX=this.cells[0].x;
            let headY=this.cells[0].y;
        
            let X=headX + 1;
            let Y=headY;
            this.cells.unshift({x:X,y:Y});
            console.log("Updateing Snake")
        }
    };



    snake.createSnake();
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