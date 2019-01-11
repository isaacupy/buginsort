class Bar{
    constructor(bot, maxv){
        this.base = bot;
        this.maxv = maxv
        this.color = [random(0,255),random(0,255),random(0,255)];
    }
    render(pos,numv){
        this.altura = map(numv, 0, this.maxv , 0, height);
        rect(pos * this.base, height ,this.base, this.altura * -1);
        fill(this.color[0], this.color[1], this.color[2])
    }
    selected(pos, numv){
        this.altura = map(numv, 0, this.maxv, 0, height);
        rect(pos * this.base, height,this.base, this.altura * -1);
        fill(255,0,0)
    }
}
var howmany = 1000;
var numbers = [];
var bars = [];
var xratio;
var upperlimit;
var smallind;
var smallval;
var tempstor;
var testval = 0;
function setup(){
    createCanvas(1000,600);
    for (i = 0; i < howmany; i++) {
        numbers.push(random(1, 5000));
    }
    xratio = width / howmany;
    upperlimit = Math.floor(max(numbers));

    for (i = 0; i < howmany; i++) {
        bars.push(new Bar(xratio, upperlimit));
    } 
    noStroke();
    frameRate();
}

function draw(){
    background(150);
    text(upperlimit, 150, 150)
    text(bars.length, 150, 160)
    text(numbers.length, 150, 170)
    for (i = 0; i < numbers.length; i++) {
        bars[i].render(i, Math.floor(numbers[i]));
    }
    for (i = 0; i < numbers.length; i++){
        for(j = i;j < numbers.length; j++){
            if (i == j){}
            else {
                if(numbers[i] < numbers[j]){
                }
                else {
                    smallind = j
                }
            }
        }
        tempstor = numbers[i]
        numbers[i] = numbers[smallind]
        numbers[smallind] = tempstor
    }
    if (testval < numbers.length){
        testval++
    }
    text(testval,0 , 10)
}