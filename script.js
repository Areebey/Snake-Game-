// A simple Snake Game 

function init(){
    let canvas=document.getElementById("mycanvas");

    W = H = canvas.width =1000 ,canvas.height = 1000;
    pen=canvas.getContext('2d');
    cs=50 // cell size

    snake={
        init_len:5,
        color:"red",
        cells:[],
        direction:"right",

        createSnake:function(){
            for(let i=this.init_len;i>=0;i--){
                this.cells.push({x:1,y:0});
            }
        },

        drawSnake:function(){
            for(let i=0;i< this.cells.length;i++){
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs,cs);
            }
        }
    };

    snake.createSnake();
};

function draw(){
    snake.drawSnake()
};

function update(){

};

function gameLoop(){
    draw();
    update();
};

init();
let f = setInterval(gameLoop,100);