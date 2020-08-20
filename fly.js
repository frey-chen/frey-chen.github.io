var saveCode = [1, 0, 0];

//if you've entered a save code previously and want to go back to the
//start of the game again you will need to reset your save code

//game engine
var game;
//default size of the blocks/assets
var BLOCK_SIZE = 20;

//default font
textFont(createFont("Trebuchet MS"));

var levels = [
    {
        angle: 0,
        grid: [
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
            "------------------------------------------------------------",
        ]
    }, // menu
    {
        angle: 10,
        grid: [
            "BBBBBBBBBBB",
            "B---------B",
            "B-BBBBBBB-B",
            "B----B----B",
            "B-BB-B-BB-B",
            "B+BBPB-BB-B",
            "B----B-E--B",
            "B-BBBBBBB-B",
            "B---------B",
            "BBBBBBBBBBB"
            ]
    }, // level 1
    {
        angle: 20,
        grid: [
            "BBBBBBBUBBBBBBB",
            "B-----B-B-----B",
            "B-BBBBB-BBBBB-B",
            "B-B---------B-B",
            "B-B-BBBBBBB-B-B",
            "B+------P-----B",
            "BBB-B-BBB-B-BBB",
            "L---B-B B-B---R",
            "BBB-B-BBB-B-BBB",
            "B-------------B",
            "B-B-BBBBBBB-B-B",
            "B-B---------B+B",
            "B-BBBBB-BBBBB-B",
            "B-E---B-B-----B",
            "BBBBBBBDBBBBBBB"
            ]
    }, // level 2
    {
        angle: 20,
        grid: [
            "BBBBBBBBBBUBBBBBBBBBBBB",
            "B--+----P---B  B------B",
            "B-BBBB-BB-B-B  B-B-BB-B",
            "L---------B-BBBB-B-BB-R",
            "B-BBBBBBB-B--E---B-BB-B",
            "BBBBBBBBBBBBBBBDBBBBBBB"
        ]
    }, // level 3
    {
        angle: 60,
        grid: [
            "  BBBBBBBBBBB  ",
            " B---P-------B ",
            "B--BBBBBBBBB--B",
            "B-B---------B-B",
            "B-B-BBBBBBB-B-R",
            "B-B-B-----B-B-B",
            "B-B-B-B-B-B-B-B",
            "B-B-B-B-B-B-B-B",
            "B-B-B-BDB-B-B-B",
            "B-B---B B-B-B-B",
            "B-B-BBBBBBB-BEB",
            "B-B---------B-B",
            "B--BBBBBBBBB--B",
            " B-----------B ",
            "  BBBBBBBBBBB  "
            ]
    }, // level 4
    {
        angle: 40,
        grid: [
            "BBBBBBBBBBBBBBBBBBBBB",
            "L-------------------R",
            "BBBBB-BBBB-BBBB-BBBBB",
            "B---B-B-EB-BE-B-B---B",
            "B-B-B-B-BB-BB-B-B-B-B",
            "B-B-B-B-------B-B-B-B",
            "B-B-B-B-BBBBB-B-B-B-B",
            "B-B---------------B-B",
            "B-BBB-BBBBBBBBB-BBB-B",
            "B--------BPB--------B",
            "B-BBB-BBBB-BBBB-BBB-B",
            "B-------------------B",
            "BBBBBDBBBBBBBBBDBBBBB"
            ]
    }, // level 5
    {
        angle: 30,
        grid: [
            "BBBBBUBBBBB   BBBBBUBBBBB",
            "B-+-------B   B-------+-B",
            "B-BBB-BBB-BBBBB-BBB-BBB-B",
            "L-------B-------B-------R",
            "BBB-BBB-B-BBPBB-B-BBB-BBB",
            "B-----------------------B",
            "B-BBB-B-B-BBBBB-B-B-BBB-B",
            "L--E--B---B   B---B--E--R",
            "B-BBB-B-B-BBBBB-B-B-BBB-B",
            "B-----------------------B",
            "BBB-BBB-B-BBEBB-B-BBB-BBB",
            "L-------B-------B-------R",
            "B-BBB-BBB-BBBBB-BBB-BBB-B",
            "B-------+-B   B-+-------B",
            "BBBBBDBBBBB   BBBBBDBBBBB"
            ]
    }, // level 6   
    {
        angle: 40,
        grid: [
            "BBBUBBBBBBBBBBBBBUBBB",
            "B------E------------B",
            "B-B-BBBBBBBBBBBBB-B-B",
            "L---------+---------R",
            "B-B-BBB-BBBBB-BBB-B-B",
            "B-B-B-----B-----B-B-B",
            "B+B-B-BBB-B-BBB-B-B-B",
            "B-B---B-------B---BEB",
            "B-B-B-B-BB-BB-B-B-B-B",
            "B-B-B---B-P-B---B-B-B",
            "B-BEBBB-B-B-B-BBB-B-B",
            "B-B-B---B---B---B-B-B",
            "B-B-B-B-BB-BB-B-B-B-B",
            "B-B---B-------B---B-B",
            "B-B-B-BBB-B-BBB-B-B+B",
            "B-B-B-----B-----B-B-B",
            "B-B-BBB-BBBBB-BBB-B-B",
            "L---------+---------R",
            "B-B-BBBBBBBBBBBBB-B-B",
            "B-------------E-----B",
            "BBBDBBBBBBBBBBBBBDBBB"
            ]
    }, // level 7
    {
        angle: 50,
        grid: [
            "  B   B      B   B  ",
            " B-B B-B    B-B B-B ",
            "B---B---BBBB---B---B",
            "L-B---B------B-+-B-R",
            "B-BBBBBBBBBBBBBBBB-B",
            "B------------------B",
            "BBBBB-BB-B-B-B-BBBBB",
            "    B-B-+----B-B    ",
            "    B-B-BBBBEB-B    ",
            "    BEB-BBBB-B-B     ",
            "    B-B------B-B    ",
            "BBBBB-B-B-B-BB-BBBBB",
            "B------------------B",
            "B-BBB-BBBBBBBB-BBB-B",
            "L-B-------P------B-R",
            "B-B-BBB-BBBB-BBB-B-B",
            "B-B-----B  B-----B-B",
            "B-BBB-BB    BB-BBB+B",
            "B----+B      B-----B",
            "BBBDBB        BBDBBB"
            ]
    }, // level 8
    {
        angle: 50,
        grid: [
            "BBBBBBBBBBBBBB   BBBBBBBBBBBBB",
            "B------------B   B-----------B",
            "B-BBB-BB-BBB-B   B-B-B-B-B-B-B",
            "B---E--------B   B-B-B-B-B-B-R",
            "L-BBBBBBBBBB-B   B-B-B-B-B-B-B",
            "B--------+---B   B-----B-E---B",
            "B-B-BBBBBB-B-B   B-BB-BBB-BB-B",
            "B-----------PB   B-----------B",
            "BBBBBBBBBBBBBB   BBBBBBBBBBBBB",
            "                              ",
            "BBBBBBBBBBBBBB   BBBBBBUBBBBBB",
            "B------------B   B-----------B",
            "B-BBB-BB-BBB-B   B-BB-BBB-BB-B",
            "B-B---BB---B-B   B-B--B-B--B-B",
            "B-B-B----B-B-B   B-BB-B-B-BB-B",
            "B-B-BBBBBB-B B   B--B-B-B-B--B",
            "B-B--------B-B   B-B-E----+B-B",
            "B-BBBBBBBBBB-B   B-BBBB-BBBB-B",
            "B------------B   B-----------B",
            "BBBBBBBDBBBBBB   BBBBBBBBBBBBB"
            ]
    }, // level 9
    {
        angle: 50,
        grid: [
            "BBBBBBBBUBBBBBBBBBBBBBBBBBB     ",
            "B---------------E---------B     ",
            "B-BBBBBBB-BBBBBBB-BBBBBBB-B     ",
            "B-B-----B-B-----B-B-------B     ",
            "B-BEBBB-B-B-BBB-B-B-BBBBBBB     ",
            "B-B-B B-B-B-B B-B-B-B           ",
            "B-B-BBB B B-BBB-B-B-B           ",
            "B-B-----B-B-----B-B+B           ",
            "B-B-BBBBB-B-BBB-B-B-B           ",
            "B+B-B-----B-B-B-B-B-BBBBBBB     ",
            "B-B-B-BBB-B-B-B-B-B-------B     ",
            "B-B-B-B-B-B-B-B-B-BBBBBBB-BBBBBB",
            "B------------P-----------------B",
            "BBB-BBB-B-BBB-BBBBBBB-BBBB-BBBEB",
            "  B-B-BB BB-B-B-----B-B-BB-B-B-B",
            "  B-B---B---B-B-BBB-B-B---BB-B-B",
            "  L-B-B---B-B-B-B B-B-B-B--B-B-B",
            "  B-B-BBBBB-B-B-BBB-B-B+BB---B-R",
            "  B-B-B-B-B-B-B-----B-B-B-BB-B-B",
            "  B-B-B-B-B+B-B-BBB-B-B-B-BB-B-B",
            "  B-B-B-B-B-B-B-B-B-B-B-B-BB-B-B",
            "  B-B-B-B-B-B-B-B-B-B-B-B-BB-B-B",
            "  B-B-B-BEB-B-B-B-B-B-B-B-BB-B-B",
            "  B----------------------------B",
            "  BBBBBBBBBBBBBBBBBBBBBBDBBBBBBB"
]
    }, // level 10
    {
        angle: 60,
        grid: [
            "BBBUBBBBBBBBBBBBBBUBBB",
            "B--------------------B",
            "B-B-B-BBBBBBBBBB-B-B-B",
            "L--EB-BB      BB-BE--R",
            "B-BBB-B BB  BB B-BBB-B",
            "B+----B BB  BB B----+B",
            "B-BBB-B        B-BBB-B",
            "B---B-B        B-B---B",
            "BBB-B-BB BBBB BB-B-BBB",
            "B-B-B--BBBBBBBB--B-B-B",
            "B-E-BB---BBBB---BB-E-B",
            "B-B-BBBB--P---BBBB-B-B",
            "B-BBB----BBBB----BBB-B",
            "B-----BBBBBBBBBB-----B",
            "BB-B-BB--------BB-B-BB",
            "B-+B--B-B-BB-B-B--B+-B",
            "B-BBB-B-B----B-B-BBB-B",
            "B-BB--B-BBBBBB-B--BB-B",
            "L-BB-BB-B----B-BB-BB-R",
            "B-EB-BB---BB---BB-BE-B",
            "BB----+-B----B-+----BB",
            "BBBDBBBBBBBBBBBBBBDBBB"
            ]
    }, // level 11
    {
        angle: 40,
        grid: [
            "BBBBBBB       BBBBBBB",
            "B------B BUB B--E---B",
            "B-BBBB--BB-BB--BBBB-B",
            "B-B---B--B-B--B---B-B",
            "B-B-B--B-----B--B-B-B",
            "B---B-BBBBBBBBB-B---B",
            "B-B-B-----------B-B-B",
            "B-B-B-BBBBBBBBB-B-B-B",
            "B-B-B-+---------B-B-B",
            "B---BBBBBBBBBBBBB---B",
            "B-B---------------B-B",
            "B-B-BBBBBBBBBBBBB-B-B",
            "B-B-B           B-B-B",
            "B-B--B         B--B+B",
            "BEBB--B       B--BB-B",
            "B--BB--B     B--BB--B",
            " B--BB--B   B--BB--B ",
            "  B--BB--B B--BB--B  ",
            " BBB-B B--B--B B-BBB ",
            " L---B  B---B  B---R ",
            " BBB-B   B-B   B-BBB ",
            "  B--B   BPB   B--B  ",
            " B--B    B-B    B--B ",
            "B--B     B-B     B--B",
            "B-B      B-B      BEB",
            "B-B     B---B     B-B",
            "B-B    B--B--B    B-B",
            "B-B   B--B B--B   B-B",
            "B-B  B--B   B--B  B-B",
            "B+B B--B     B--B B-B",
            "B--B B-BBBBBBB-B B--B",
            " B--B-----------B--B ",
            "  B--B-B-B-B-B-B--B  ",
            " BBB-B-BEB-B-B-B-BBB ",
            " L---B-B-B-B-B-B---R ",
            " BBB-B-B-B-B-B-B-BBB ",
            "  B--B-B-B-B-B+B--B  ",
            " B-B-B--BB-BB--B-B-B ",
            "B------B BDB B------B",
            "BBBBBBB       BBBBBBB"
            ]
    }, // level 12
    {
        angle: 50,
        grid: [
            "BBBBBBBBBB  BBBBBBBBBBBBBBBBBBBB        BBBBBBBBBB",
            "B---E----B  B-------------------B       B--------B",
            "B-BBBBBB-B  B-B-BBBBB-BBBBBBBBB--B      B-B-B-BB-B",
            "B-B--+-B-B  B-B-B-----B-----E--B--B     B--B-B---B",
            "B-B-BB-B-B  B-B-B-BBBBB-BBBBB-B--B      B-B----B-B",
            "B--------B  B-B-B-B----------B--B       B-B+B-B--B",
            "BBB-B-B-BBBBBBBBB-B-BBBBBBBB-B-B        B-B-B-BB-B",
            "L---BPB----R L----B-B      B-B-B        B-B-B-B--R",
            "BBB-B-B-BBBBBBBBB-B-BBBBBBBB-B--B       B-B----B-B",
            "B--------B  B-B-B-B-----------B--B      B-B-B-BB-B",
            "B-B-BB-B-B  B-B-B-BBB-BBBBBBB--B--B     B-B-B-B--B",
            "B-B----B-B  B-B-B-E-----------B--B      B-B-E--B-B",
            "B-BBBBBB-B  B-B-BBBBB-BBBBBBBB--B       B-BBBBBB-B",
            "B--------B  B----------+-------B        B--------B",
            "BBBBBBBBBB  BBBBBBBBBBBBBBBBBBB         BBBBBBBBBB"
            ]
    }, // level 13
    {
        angle: 40,
        grid: [
            "BBBBBBBBBBBBUBBBBBBBBBBBBBBB",
            "B------------BB------------B",
            "B-BBBB-BBBBB-BB-BBBBB-BBBB-B",
            "B+B  B-B   B-BB-B   B-B  B+B",
            "B-B  B-B   B-BB-B   B-B  B-B",
            "B-BBBB-BBBBB-BB-BBBBB-BBBB-B",
            "B--------------------------B",
            "B-BBBB-BB-BBBBBBBB-BB-BBBB-B",
            "B------BB-BBBBBBBB-BB------B",
            "BBBBBB-BB----BB----BB-BBBBBB",
            "     B-BBBBB-BB-BBBBB-B     ",
            "     B-BB----------BB-B     ",
            "     B-BB-B BBBB B-BB-B     ",
            "BBBBBB-BB-BEB  B B-BB-BBBBBB",
            "L     ----B BBBB B----     R",
            "BBBBBB-BB-BE E  EB-BB-BBBBBB",
            "     B-BB-BBBBBBBB-BB-B     ",
            "     B-BB----P-----BB-B     ",
            "     B-BB-BBBBBBBB-BB-B     ",
            "BBBBBB-BB-BBBBBBBB-BB-BBBBBB",
            "B------------BB------------B",
            "B-BBBB-BBBBB-BB-BBBBB-BBBB-B",
            "B+--BB----------------BB--+B",
            "BBB-BB-BB-BBBBBBBB-BB-BB-BBB",
            "B------BB----BB----BB------B",
            "B-BBBBBBBBBB-BB-BBBBBBBBBB-B",
            "B--------------------------B",
            "BBBBBBBBBBBBBBBDBBBBBBBBBBBB"
        ]
    }, // level 14
    {
        angle: 60,
        grid: [
            "                                                  ",
            "  B B                                             ",
            "  BUB  BBBBBBBBBBBBBBBB        BBBBBBBBBBBBBBB    ",
            "  B-B  B-------------R          L-----------R     ",
            "  B-B  B-BBBBBBBBBBBBBB        BB-BBBB-BBBB-BB    ",
            "  B-B  B-B                      B-B  B-B  B-B     ",
            "  B-B  B-B                      B-B  BEB  B-B     ",
            "  BEB  B-B    BBBBBBBBBBBBBBB   B-B  B-B  B-B     ",
            "  B-B  BDB     L------------B   BDB  B-B  BDB     ",
            "  B-B  B B    BBBBBBBBBBBBB-B   B B  B-B  B B     ",
            "  B-B                     B-B        B-B          ",
            "  B-BBBBBBBBBB B B        B-B        BDB          ",
            "  B---------R  BUB     BBBB-B        B B          ",
            "  B-BBBBBBBBBB B-B      L---B                     ",
            "  B-B          B-B     BBBBBB                     ",
            "  B-B          B-B                                ",
            "  B-B          B-B                                ",
            "  B-B          B-B                                ",
            "  B-B          B-B                                ",
            "  B-B   BBBBBBBB-B                                ",
            "  B-B   B--------B    BBBBBBBBBBBBBB              ",
            "  B-B   B-BBBBBBBB    B-------------B             ",
            "  B-B   BEB           B-BBBBBBB-BBB--B            ",
            "  BDB   B-B           B-B     B----B--B           ",
            "  B B   B-B           BPB     B-BB--B--B          ",
            "        B-BBBBBBBB    B-B     B-B B-EB--B         ",
            "        B-----+--B    B--B    B-B  B--B--B        ",
            "        B-BBBBBB-B     B--B   BDB   B--B--B       ",
            "        B--------B      B--B  B B    B--B--B      ",
            "        B-BBBBBB-B       B--B         B--B--B     ",
            "        B--------B        B--B         B--B-B     ",
            "        BBBBBBBBBB         B-B          B-B-B     ",
            "                       BBBBB-B          B-B-B     ",
            "                        L----B          B+B-B     ",
            "                       BBBBB-B BBBBBBBBBB-B-B     ",
            "                          B--B  L---------B-B     ",
            "  BBBBBBBBBBBBB          B--B-BBBBBBBB-B-B--B     ",
            "  B----------R          B--B------------B--B      ",
            "  B-BBBBBBBBBBB        B--B BBB-BBBBBB-B--B       ",
            "  B-B                 B--B    B-B     B-EB        ",
            "  B-BBBBBBBBBBB       B-B     B-B    B--B         ",
            "  B-----E----R        B+B     B-B   B--B          ",
            "  B-BBBBBBBBBBB       B-B     B-B  B--B           ",
            "  B-B                 B-BBBBBBB-BBB--B            ",
            "  B-BBBBBBBBBBB       B-------------B             ",
            "  B+---------R        BBBBBBBBBBBBBB              ",
            "  BBBBBBBBBBBBB                                   ",
            "                                                  "
            ]
    }  // level 15
];

{
    //Key|Button stuff
    var clicked = false;
    var hover = false;
    var keys = [];
    keyPressed = function () {
        keys[keyCode] = true;
    };
    keyReleased = function () {
        keys[keyCode] = false;
    };
    mouseClicked = function () {
        clicked = true;
    };
} //Keys/Mouse

/** @created_by MKaelin368 (KWC) (c) 2018 */
var setKALoopTimeout = function (ms) {
  var method_name = "KAInfiniteLoopSetTimeout";
  if (method_name in this) {
    this[method_name](ms >>> 0);
  }
};

//Buttons
var Button = function (config) {
    this.x = config.x;
    this.y = config.y;
    this.size = config.size || 100;
    this.content = config.content || "Home";
    this.page = config.page || "home";
    this.func = config.func || function() {};
    this.textSize = config.textSize || this.size / 5;
    this.borderColor = color(12, 31, 3, 20);
    this.backColor = color(242, 224, 24, 150);//color(46, 154, 154);
    this.textColor = color(215, 212, 212);
    this.backColorHover = color(242, 224, 24, 100);//color(46, 154, 154, 200);
    this.textColorHover = color(245, 242, 242);
    this.growth = 0;
    //draw the buttons and perform the button logic
    this.draw = function () {
        pushStyle();
        textAlign(CENTER, CENTER);
        textSize(this.textSize + (this.growth * 0.1));
        noStroke();
        
        //circles
        if (dist(mouseX, mouseY, this.x, this.y) <= this.size / 2) { //hover
            this.growth = constrain(this.growth + 0.5, 0, 10);
            if (clicked) {
                this.func();
            }
            
            fill(this.backColorHover);
            arc(this.x, 
                this.y, 
                this.size, 
                this.size,
                20 + sin(frameCount * 15) * 20 + 180 * ((1 - 1) / 2), 
                (360 - 20) - sin(frameCount * 15) * 20 + 180 * ((1 - 1) / 2));
            
            fill(80);
            ellipse(this.x + ((this.size * 0.15 - sin(frameCount * 15) * 20*this.size/250) * 1), 
                    this.y - this.size * 0.25 - sin(frameCount * 15) * 20*this.size/250, 
                    this.size/10, 
                    this.size/10);
            
            //ellipse(this.x, this.y, this.size, this.size);

            stroke(this.borderColor);
            fill(this.textColorHover);
            switch(this.content) {
                case "Play":
                    triangle(this.x + this.size*0.25, this.y, this.x - this.size*0.15, this.y - this.size*0.25, this.x - this.size*0.15, this.y + this.size*0.25);
                    break;
                case "How":
                    pushStyle();
                        textSize(this.size*0.6);
                        text("?", this.x, this.y);
                    popStyle();
                    break;
                case "Home":
                    pushStyle();
                    beginShape();
                        vertex(this.x+this.size*0.25, this.y); //1
                        vertex(this.x+this.size*0.25, this.y+this.size*0.25); //2
                        vertex(this.x+this.size*0.07, this.y+this.size*0.25); //3
                        vertex(this.x+this.size*0.07, this.y+this.size*0.12); //4
                        vertex(this.x-this.size*0.07, this.y+this.size*0.12); //5
                        vertex(this.x-this.size*0.07, this.y+this.size*0.25); //6
                        vertex(this.x-this.size*0.25, this.y+this.size*0.25); //7
                        vertex(this.x-this.size*0.25, this.y); //8
                        vertex(this.x, this.y-this.size*0.2); //9
                        vertex(this.x+this.size*0.25, this.y); //10
                    endShape();
                    noFill();
                    stroke(this.textColorHover);
                    strokeWeight(this.size*0.05);
                    line(this.x-this.size*0.27, this.y-this.size*0.05, this.x, this.y-this.size*0.27);
                    line(this.x+this.size*0.27, this.y-this.size*0.05, this.x, this.y-this.size*0.27);
                    line(this.x+this.size*0.15, this.y-this.size*0.19, this.x+this.size*0.15, this.y-this.size*0.25);
                    popStyle();
                    break;
                case "Replay":
                    pushStyle();
                        noFill();
                        stroke(this.textColorHover);
                        strokeWeight(5);
                        pushMatrix();
                            translate(this.x, this.y);
                            rotate(frameCount * 5);
                            arc(0, 0, this.size * 0.6, this.size * 0.6, 1, 275);
                            noStroke();
            
                fill(this.textColorHover);
                            translate(this.size * 0.30, -this.size * 0.18);
                            rotate(-70);
                            triangle(0, -this.size * 0.1, -this.size * 0.14, -this.size * 0.3, this.size * 0.14, -this.size * 0.3);
                        popMatrix();
                    popStyle();
                    break;
                case "Scoreboard":
                    pushStyle();
                        noFill();
                        stroke(this.textColorHover);
                        strokeWeight(4);
                        line(this.x-this.size*0.23, this.y-this.size*0.2, this.x+this.size*0.23, this.y-this.size*0.2);
                        line(this.x-this.size*0.23, this.y, this.x+this.size*0.23, this.y);
                        line(this.x-this.size*0.23, this.y+this.size*0.2, this.x+this.size*0.23, this.y+this.size*0.2);
                    popStyle();
                    break;
                case "Save":
                    pushStyle();
                        noFill();
                        strokeWeight(2);
                        stroke(this.textColorHover);
                        //outer
                        beginShape();
                            vertex(this.x-this.size*0.26, this.y-this.size*0.25);
                            vertex(this.x+this.size*0.17, this.y-this.size*0.25);
                            vertex(this.x+this.size*0.26, this.y-this.size*0.15);
                            vertex(this.x+this.size*0.26, this.y+this.size*0.25);
                            vertex(this.x-this.size*0.26, this.y+this.size*0.25);
                            vertex(this.x-this.size*0.26, this.y-this.size*0.25);
                        endShape();
                        
                        noStroke();
                        fill(this.textColorHover);
                        //inner
                        rect(this.x-this.size*0.15, this.y-this.size*0.26, this.size*0.27, this.size*0.18, 2);
                        rect(this.x-this.size*0.18, this.y, this.size*0.36, this.size*0.26, 2);
                        fill(this.backColorHover);
                        rect(this.x-this.size*0.02, this.y-this.size*0.23, this.size*0.07, this.size*0.14);
                        noFill();
                        stroke(this.backColorHover);
                        strokeWeight(1);
                        //lines
                        line(this.x-this.size*0.12, this.y+this.size*0.07, this.x+this.size*0.11, this.y+this.size*0.07);
                        line(this.x-this.size*0.12, this.y+this.size*0.14, this.x+this.size*0.11, this.y+this.size*0.14);
                        line(this.x-this.size*0.12, this.y+this.size*0.20, this.x+this.size*0.11, this.y+this.size*0.20);
                    popStyle();
                    break;
                case "Sound":
                    pushStyle();
                        noStroke();
                        fill(this.textColorHover);
                        triangle(this.x, this.y - this.size * 0.3, this.x, this.y + this.size * 0.3, this.x - this.size * 0.3, this.y);
                        rect(this.x - this.size * 0.3, this.y - this.size * 0.1, this.size * 0.3, this.size * 0.2);
                        if(game.sound) {
                            noFill();
                            stroke(this.textColorHover);
                            strokeWeight(this.size/20);
                            arc(this.x + this.size * 0.1, this.y, this.size * 0.2, this.size * 0.2, -91, 90);
                            arc(this.x + this.size * 0.1, this.y, this.size * 0.4, this.size * 0.4, -81, 80);
                        }
                        else {
                            noFill();
                            stroke(this.textColorHover);
                            strokeWeight(this.size/20);
                            line(this.x + this.size * 0.1, this.y - this.size * 0.1, this.x + this.size * 0.25, this.y + this.size * 0.1);
                            line(this.x + this.size * 0.1, this.y + this.size * 0.1, this.x + this.size * 0.25, this.y - this.size * 0.1);
                        }
                    popStyle();
                    break;
                default:
                    text(this.content, this.x, this.y);
            }
        }
        else { //not hover
            this.growth = constrain(this.growth - 0.5, 0, 10);
            noStroke();
            
            fill(this.backColor);
            noFill();
            stroke(this.backColor);
            ellipse(this.x, this.y, this.size, this.size);
            noStroke();
            
            fill(this.textColor);
            switch(this.content) {
                case "Play":
                    triangle(this.x + this.size*0.25, this.y, this.x - this.size*0.15, this.y - this.size*0.25, this.x - this.size*0.15, this.y + this.size*0.25);
                    break;
                case "How":
                    pushStyle();
                        textSize(this.size*0.6);
                        text("?", this.x, this.y);
                    popStyle();
                    break;
                case "Home":
                    pushStyle();
                    beginShape();
                        vertex(this.x+this.size*0.25, this.y); //1
                        vertex(this.x+this.size*0.25, this.y+this.size*0.25); //2
                        vertex(this.x+this.size*0.07, this.y+this.size*0.25); //3
                        vertex(this.x+this.size*0.07, this.y+this.size*0.12); //4
                        vertex(this.x-this.size*0.07, this.y+this.size*0.12); //5
                        vertex(this.x-this.size*0.07, this.y+this.size*0.25); //6
                        vertex(this.x-this.size*0.25, this.y+this.size*0.25); //7
                        vertex(this.x-this.size*0.25, this.y); //8
                        vertex(this.x, this.y-this.size*0.2); //9
                        vertex(this.x+this.size*0.25, this.y); //10
                    endShape();
                    noFill();
                    stroke(this.textColor);
                    strokeWeight(this.size*0.05);
                    line(this.x-this.size*0.27, this.y-this.size*0.05, this.x, this.y-this.size*0.27);
                    line(this.x+this.size*0.27, this.y-this.size*0.05, this.x, this.y-this.size*0.27);
                    line(this.x+this.size*0.15, this.y-this.size*0.19, this.x+this.size*0.15, this.y-this.size*0.25);
                    popStyle();
                    break;
                case "Replay":
                    pushStyle();
                        noFill();
                        stroke(this.textColor);
                        strokeWeight(5);
                        pushMatrix();
                            translate(this.x, this.y);
                            rotate(sin(frameCount * 5) * 20);
                            arc(0, 0, this.size * 0.6, this.size * 0.6, 1, 275);
                            noStroke();
                            fill(this.textColor);
                            translate(this.size * 0.30, -this.size * 0.18);
                            rotate(-70);
                            triangle(0, -this.size * 0.1, -this.size * 0.14, -this.size * 0.3, this.size * 0.14, -this.size * 0.3);
                        popMatrix();
                    popStyle();
                    break;
                case "Scoreboard":
                    pushStyle();
                        noFill();
                        stroke(this.textColor);
                        strokeWeight(4);
                        line(this.x-this.size*0.23, this.y-this.size*0.2, this.x+this.size*0.23, this.y-this.size*0.2);
                        line(this.x-this.size*0.23, this.y, this.x+this.size*0.23, this.y);
                        line(this.x-this.size*0.23, this.y+this.size*0.2, this.x+this.size*0.23, this.y+this.size*0.2);
                    popStyle();
                    break;
                case "Save":
                    pushStyle();
                        noFill();
                        strokeWeight(2);
                        stroke(this.textColorHover);
                        //outer
                        beginShape();
                            vertex(this.x-this.size*0.26, this.y-this.size*0.25);
                            vertex(this.x+this.size*0.17, this.y-this.size*0.25);
                            vertex(this.x+this.size*0.26, this.y-this.size*0.15);
                            vertex(this.x+this.size*0.26, this.y+this.size*0.25);
                            vertex(this.x-this.size*0.26, this.y+this.size*0.25);
                            vertex(this.x-this.size*0.26, this.y-this.size*0.25);
                        endShape();
                        
                        noStroke();
                        fill(this.textColorHover);
                        //inner
                        rect(this.x-this.size*0.15, this.y-this.size*0.26, this.size*0.27, this.size*0.18, 2);
                        rect(this.x-this.size*0.18, this.y, this.size*0.36, this.size*0.26, 2);
                        fill(this.backColorHover);
                        rect(this.x-this.size*0.02, this.y-this.size*0.23, this.size*0.07, this.size*0.14);
                        noFill();
                        stroke(this.backColorHover);
                        strokeWeight(1);
                        //lines
                        line(this.x-this.size*0.12, this.y+this.size*0.07, this.x+this.size*0.11, this.y+this.size*0.07);
                        line(this.x-this.size*0.12, this.y+this.size*0.14, this.x+this.size*0.11, this.y+this.size*0.14);
                        line(this.x-this.size*0.12, this.y+this.size*0.20, this.x+this.size*0.11, this.y+this.size*0.20);
                    popStyle();
                    break;
                case "Sound":
                    pushStyle();
                        noStroke();
                        fill(this.textColor);
                        triangle(this.x, this.y - this.size * 0.3, this.x, this.y + this.size * 0.3, this.x - this.size * 0.3, this.y);
                        rect(this.x - this.size * 0.3, this.y - this.size * 0.1, this.size * 0.3, this.size * 0.2);
                        if(game.sound) {
                            noFill();
                            stroke(this.textColor);
                            strokeWeight(this.size/20);
                            arc(this.x + this.size * 0.1, this.y, this.size * 0.2, this.size * 0.2, -91, 90);
                            arc(this.x + this.size * 0.1, this.y, this.size * 0.4, this.size * 0.4, -81, 80);
                        }
                        else {
                            noFill();
                            stroke(this.textColor);
                            strokeWeight(this.size/20);
                            line(this.x + this.size * 0.1, this.y - this.size * 0.1, this.x + this.size * 0.25, this.y + this.size * 0.1);
                            line(this.x + this.size * 0.1, this.y + this.size * 0.1, this.x + this.size * 0.25, this.y - this.size * 0.1);
                        }
                    popStyle();
                    break;
                default:
                    text(this.content, this.x, this.y);
            }
        }

        popStyle();
    };
};

//Transition for the menu scenes (pacman)
var Transition = function(config) {
    this.x = config.x || -300;
    this.y = config.y || 300;
    this.size = config.size || 1200;
    this.vx = config.vx || 15;
    this.active = config.active || false;
    this.scene = config.scene || "home";
    
    this.reset = function() {
        this.x = -300;
    };
    this.draw = function() {
        if(this.active) {
            fill(227, 215, 111);
            arc(this.x, 
                this.y, 
                this.size, 
                this.size,
                20 + sin(frameCount * 15) * 20 + 180 * ((1 - 1) / 2), 
                (360 - 20) - sin(frameCount * 15) * 20 + 180 * ((1 - 1) / 2));
            
            fill(80);
            ellipse(this.x + ((this.size * 0.15 - sin(frameCount * 15) * 20*this.size/250) * 1), 
                    this.y - this.size * 0.25 - sin(frameCount * 15) * 20*this.size/250, 
                    this.size/10, 
                    this.size/10);
        }
    };
    this.update = function() {
        if(this.active) {
            this.x+= this.vx;
            
            if(this.x === 495) {
                game.scene = this.scene;
            }
            else if(this.x > 1500) {
                this.reset();
                this.active = false;
            }
        }
    };
    this.run = function() {
        this.draw();
        this.update();
    };
};

//Transition for the game over and complete scenes (blocks)
var TransitionBlocks = function() {
    this.blocks = [];
    this.blockSize = 75;
    this.fullImage = "";
    this.active = false;
    
    this.draw = function() {
        var block;
        noFill();
        stroke(240, 235, 235, 20);
        strokeWeight(1);
        for(var i = 0; i < this.blocks.length; i++) {
            block = this.blocks[i];
            
            pushMatrix();
                translate(block.x, block.y);
                block.angle+= block.vx;
                rotate(block.angle);
                image(block.img, 0, 0);
                rect(0, 0, this.blockSize, this.blockSize);
            popMatrix();
        }
    };
    this.update = function() {
        var block;
        for(var i = this.blocks.length-1; i >= 0; i--) {
            block = this.blocks[i];
            
            if(block.y > height * 1.1) {
                this.blocks.splice(i, 1);
            }
            else {
                block.vy+= 0.2;
                block.y+= block.vy;
            }
        }
        
        if(this.blocks.length === 0) {
            this.active = false;
        }
    };
    this.init = function() {
        this.blocks.length = 0;
        
        for(var i = 0; i < width; i+= this.blockSize) {
            for(var j = 0; j < height; j+= this.blockSize) {
                var img = get(i, j, this.blockSize, this.blockSize);
                this.blocks.push(
                    {
                        img: img,
                        x: i,
                        y: j,
                        vx: random(-3, 3),
                        vy: random(-5, -2),
                        angle: 0
                    });
            }
        }
        this.active = true;
    };
    this.run = function() {
        if(this.active) {
            this.draw();
            this.update();
        }
    };
};

//The player (Pacman)
var Player = function(config) {
    this.x = config.x || 300;
    this.y = config.y || 300;
    this.w = config.w || BLOCK_SIZE;
    this.h = config.h || BLOCK_SIZE;
    this.vx = config.vx || 0;
    this.vy = config.vy || 0;
    this.speed = config.speed || ~~(BLOCK_SIZE / 8);
    this.px = 0;
    this.py = 0;
    this.nx = 0; //next x
    this.ny = 0; //next y
    this.dir = "";
    this.canMove = {
        left: true,
        right: true,
        up: true,
        down: true
    };
    this.dead = false;
    
    this.radius = this.w; //size of the pacman
    this.color = color(242, 224, 24, 200); //color of the pacman
    this.eyeColor = color(50, 50, 50, 200); //eye color of the pacman
    this.eatSpeed = 25; //how quick the mouth opens/shuts
    this.amplitude = 15; //how wide the mouth opens
    this.direction = 1; //-1 faces/moves left, 1 faces/moves right
    this.angle = 0;
    this.scale = 1;
    this.mouthOpen = 0;
    
    this.update = function() {
        if(this.dir === "LEFT" && this.canMove.left) {
            this.vx = -this.speed;
            this.vy = 0;
            this.angle = 180;
        }
        else if(this.dir === "RIGHT" && this.canMove.right) {
            this.vx = this.speed;
            this.vy = 0;
            this.angle = 0;
        }
        else if(this.dir === "UP" && this.canMove.up) {
            this.vx = 0;
            this.vy = -this.speed;
            this.angle = 270;
        }
        else if(this.dir === "DOWN" && this.canMove.down) {
            this.vx = 0;
            this.vy = this.speed;
            this.angle = 90;
        }
        
        this.px = this.x;
        this.py = this.y;
        
        this.x+= this.vx;
        this.y+= this.vy;
    };
    this.move = function() {
        this.nx = this.x;
        this.ny = this.y;
        
        if(keys[LEFT] || keys[65]) {
            this.dir = "LEFT";
        }
        else if(keys[RIGHT] || keys[68]) {
            this.dir = "RIGHT";
        }
        else if(keys[UP]) { //need to add W key
            this.dir = "UP";
        }
        else if(keys[DOWN]) { //need to add S key
            this.dir = "DOWN";
        }
        
        if(this.dir === "LEFT") {
            this.nx-= this.speed;
        }
        else if(this.dir === "RIGHT") {
            this.nx+= this.speed;
        }
        else if(this.dir === "UP") {
            this.ny-= this.speed;
        }
        else if(this.dir === "DOWN") {
            this.ny+= this.speed;
        }
    };
    this.draw = function() {
        noStroke();
        fill(122, 7, 118);
        
        //draw in current direction with mouth moving
        pushMatrix();
            translate(this.x + this.w / 2, this.y + this.h / 2);
            rotate(this.angle);
            
            if(this.dir === "LEFT" && this.canMove.left) {
                rotate(-this.angle);
                scale(-this.scale, this.scale);
            }

            if(!this.dead) {
                this.mouthOpen = sin(frameCount * this.eatSpeed);
            }
            else {
                this.mouthOpen = constrain(this.mouthOpen + 0.075, 0, 12);// sin(frameCount * this.eatSpeed);
            }
        
            //body/mouth
            fill(this.color);
            arc(0, 
                0, 
                this.radius, 
                this.radius, 
                this.amplitude + this.mouthOpen * this.amplitude + 180 * ((this.direction - 1) / 2), 
                (360 - this.amplitude) - this.mouthOpen * this.amplitude + 180 * ((this.direction - 1) / 2));
            
            if(!this.dead) {
                //eye
                fill(this.eyeColor);
                ellipse(((this.radius * 0.15 - this.mouthOpen * this.amplitude*this.radius/250) * this.direction), 
                        -this.radius * 0.25 - this.mouthOpen * this.amplitude*this.radius/250, 
                        this.radius/10, 
                        this.radius/10);
            }
                
        popMatrix();
    };
};

//Explosions for the food and when you die
var Explosion = function (config) {
    this.used = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.xspeed = config.xspeed || random(-2, 2);
    this.yspeed = config.yspeed || random(-2, 2);
    this.size = config.size || 15;
    this.cornerRadius = config.cornerRadius || 0;
    this.angle = 0;
    this.anglespeed = config.anglespeed || random(-5, 5);
    this.timeToLive = 255;
    this.timeToLiveSpeed = random(3, 6);
    this.backColor = config.backColor || color(random(255), random(255), random(255));
    
    //handle the movement of the explosion
    this.update = function () {
        this.x+= this.xspeed;
        this.y+= this.yspeed;
        
        this.angle += this.anglespeed;
        this.timeToLive-= this.timeToLiveSpeed;
        if(this.timeToLive <= 0) {
            this.used = false;
        }
    };
    
    //draw the explosion on the screen
    this.draw = function () {
        pushMatrix();
            translate(this.x, this.y);
            rotate(this.angle);
            noStroke();
            fill(this.backColor, this.timeToLive);
            rect(-this.size / 2, -this.size / 2, this.size, this.size, this.cornerRadius);
        popMatrix();
    };
    
    this.run = function () {
        this.update();
        this.draw();
    };
};

//Main blocks
var Block = function(config) {
    this.used = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.w = config.w || BLOCK_SIZE;
    this.h = config.h || BLOCK_SIZE;
    //this.color = config.color || color(~~random(10, 40), ~~random(10, 40), ~~random(175, 250));
    this.color = config.color || color(~~random(50, 70));
};
Block.prototype.draw = function() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
};
Block.prototype.run = function() {
    this.draw();  
};

//Portals (inherits from Block)
var Portal = function(config) {
    Block.call(this, config);
    
    this.type = config.type;
    
    switch(this.type) {
        case "L":
            this.x-= this.w;
            break;
        case "R":
            this.x+= this.w;
            break;
        case "U":
            this.y-= this.h;
            break;
        case "D":
            this.y+= this.h;
            break;
    }
};
Portal.prototype = Object.create(Block.prototype);
Portal.prototype.draw = function() {
    fill(this.color);
    noStroke();
    switch(this.type) {
        case "L":
            rect(this.x + this.w, this.y, this.w, this.h);
            break;
        case "R":
            rect(this.x - this.w, this.y, this.w, this.h);
            break;
        case "U":
            rect(this.x, this.y + this.h, this.w, this.h);
            break;
        case "D":
            rect(this.x, this.y - this.h, this.w, this.h);
            break;
    }
};

//Food (inherits from Block)
var Food = function(config) {
    Block.call(this, config);
    this.type = config.type || "Normal";
};
Food.prototype = Object.create(Block.prototype);
Food.prototype.draw = function() {
    fill(this.color);
    noStroke();
    if(this.type === "Normal") {
        rect(this.x, this.y, this.w, this.h, 50);
    }
    else {
        pushMatrix();
            translate(this.x + this.w / 2, this.y + this.h / 2);
            scale(1.25 + sin(frameCount * 5) * 0.25);
            fill(28, 230, 217);
            ellipse(0, 0, this.w, this.h);
        popMatrix();
    }
};

//The enemy ghosts (inherit from Block)
var Enemy = function(config) {
    Block.call(this, config);
    this.spawn = {
        x: this.x,
        y: this.y
    };
    this.SPEED_NORMAL = ~~(BLOCK_SIZE / 8);
    this.SPEED_EATEN = ~~(this.SPEED_NORMAL * 2);
    this.SPEED_VULNERABLE = ~~(this.SPEED_NORMAL / 2);
    this.speed = this.SPEED_NORMAL;
    
    //States are NORMAL, EATEN, VULNERABLE
    this.state = "NORMAL";
    
    this.TIME_EATEN = 240; // 4 seconds
    this.TIME_VULNERABLE = 360; // 6 seconds
    this.timer = 0;
    
    this.scale = 1;
    
    this.vx = 0;
    this.vy = 0;
    
    this.px = 0;
    this.py = 0;
    this.nx = 0; //next x
    this.ny = 0; //next y
    this.dir = "RIGHT";
    this.canMove = {
        left: true,
        right: true,
        up: true,
        down: true
    };
    
    //choose random direction and color
    var r = ~~random(4);
    switch(r) {
        case 0:
            this.vx = -1;
            this.vy = 0;
            this.color = color(230, 21, 230);
            break;
        case 1:
            this.vx = 1;
            this.vy = 0;
            this.color = color(40, 232, 23);
            break;
        case 2:
            this.vx = 0;
            this.vy = -1;
            this.color = color(232, 222, 28);
            break;
        case 3:
            this.vx = 0;
            this.vy = 1;
            this.color = color(242, 59, 27);
            break;
    }
};
Enemy.prototype = Object.create(Block.prototype);
Enemy.prototype.draw = function() {
    if(this.state === "NORMAL") {
        fill(this.color);
    }
    else if(this.state === "EATEN") {
        fill(81, 84, 81, 100);
    }
    else { //VULNERABLE
        fill(this.color, map(frameCount % 100, 0, 100, 100, 240));
    }
    
    noStroke();
    
    pushMatrix();
        translate(this.x, this.y);
        if(this.dir === -1) {
            scale(-this.scale, this.scale);
            translate(-this.w, 0);        
        }
        //body
        beginShape();
            vertex(this.w * 0.5, 0);
            bezierVertex(this.w * 0.9, 0, this.w, this.h * 0.25, this.w, this.h * 0.5);
            bezierVertex(this.w, this.h, this.w * 0.8, this.h * 1.2, this.w * 0.66, this.h * 0.66);
            bezierVertex(this.w * 0.66, this.h * 1.1, this.w * 0.33, this.h * 1.1, this.w * 0.33, this.h * 0.66);
            bezierVertex(this.w * 0.33, this.h, 0, this.h * 1.2, 0, this.h * 0.5);
            bezierVertex(0, this.h * 0.25, this.w * 0.1, 0, this.w * 0.5, 0);
        endShape(CLOSE);
        
        //eyes
        fill(this.eyeColor);
        ellipse(this.w * 0.33 + this.vx, this.h/3.5, this.w/3, this.w/3);
        ellipse(this.w - this.w * 0.33 + this.vx, this.h/3.5, this.w/3, this.w/3);
        //eye ball
        fill(40, 40, 40);
        ellipse(this.w/3 + this.vx, this.h/3.5, this.w/10, this.w/10);
        ellipse(this.w - this.w/3 + this.vx, this.h/3.5, this.w/10, this.w/10);
    popMatrix();
};
Enemy.prototype.update = function() {
    if(this.state === "EATEN") {
        if(this.timer++ >= this.TIME_EATEN) {
            this.state = "NORMAL";
            this.speed = this.SPEED_NORMAL;
            this.timer = 0;
        }
    }
    else if(this.state === "VULNERABLE") {
        if(this.timer++ >= this.TIME_VULNERABLE) {
            this.state = "NORMAL";
            this.speed = this.SPEED_NORMAL;
            this.timer = 0;
        }
    }
    
    if(this.dir === "LEFT" && this.canMove.left) {
        this.vx = -this.speed;
        this.vy = 0;
    }
    else if(this.dir === "RIGHT" && this.canMove.right) {
        this.vx = this.speed;
        this.vy = 0;
    }
    else if(this.dir === "UP" && this.canMove.up) {
        this.vx = 0;
        this.vy = -this.speed;
    }
    else if(this.dir === "DOWN" && this.canMove.down) {
        this.vx = 0;
        this.vy = this.speed;
    }
    
    this.px = this.x;
    this.py = this.y;
    
    this.x+= this.vx;
    this.y+= this.vy;
};
Enemy.prototype.move = function() {
    this.nx = this.x;
    this.ny = this.y;
    
    if(this.vx !== 0) {
        this.dir = random() < 0.5 ? "UP" : "DOWN";
    }
    else {
        this.dir = random() < 0.5 ? "LEFT" : "RIGHT";
    }

    if(this.dir === "LEFT") {
        this.nx-= this.speed;
    }
    else if(this.dir === "RIGHT") {
        this.nx+= this.speed;
    }
    else if(this.dir === "UP") {
        this.ny-= this.speed;
    }
    else if(this.dir === "DOWN") {
        this.ny+= this.speed;
    }
};

//Main Game engine
var Game = function(config) {
    this.scene = "load";
    this.level = 1;
    this.score = 0;
    this.score_total = 0;
    this.score_best = 0;
    this.viewed = false;
    this.gameOver = false;
    this.lives = 3;
    this.shake = 0;
    this.SHAKEDOWN = 0.1;
    this.levelStarted = false;
    this.scale = 1;
    this.SCALE_MIN = 1;
    this.SCALE_MAX = 3;
    this.angle = 0;
    this.angleRange = 0;
    this.scaleDir = 1;
    
    this.curLoad = 0;
    this.loaded = false;
    this.images = undefined;
    
    this.transition = new Transition({});
    this.transitionBlocks = new TransitionBlocks();
    
    this.START_DELAY = 180;
    this.REPLAY_DELAY = 240;
    this.ANIMATION_DELAY = 240;
    this.startDelay = 0;
    this.replayDelay = 0;
    this.animationDelay = 0;
    this.angleTimer = 0;
    this.scaleTimer = -90;
    this.animationTimer = 0;
    
    this.player = new Player({});
    this.levels = levels;
    this.grid = this.levels[this.level].grid;
    this.blockSize = BLOCK_SIZE;
    this.blocks = [];
    this.enemies = [];
    this.portals = [];
    this.foods = [];
    this.cam = {
        x: 0,
        y: 0
    };
    this.world = {
        w: 0,
        h: 0
    };
    this.spawn = {
        x: 0,
        y: 0
    };
    //contains the current highscores
    this.highscores = [
        {
            name: "Could be you",
            score: 0
        },
        {
            name: "Could be you",
            score: 0
        },
        {
            name: "Could be you",
            score: 0
        },
        {
            name: "Could be you",
            score: 0
        },
        {
            name: "Could be you",
            score: 0
        },
        {
            name: "Could be you",
            score: 0
        },
        {
            name: "Could be you",
            score: 0
        },
        {
            name: "Could be you",
            score: 0
        },
        {
            name: "Could be you",
            score: 0
        },
        {
            name: "Could be you",
            score: 0
        }
    ];
    //sorts the highscores in decending order
    this.highscores.sort(function(a, b) {
       return b.score - a.score; 
    });
    this.buttons = {
        play: new Button({
            x: 300,
            y: 310,
            size: 160,
            content: "Play",
            page: "play",
            func: function() {
                game.level = saveCode[0] || 1;
                game.score = 0;
                game.score_total = saveCode[1] || 0;
                game.score_best = saveCode[2] || 0;
                game.levelStarted = false;
                game.scene = "play";
                game.init();
            }
        }),
        replay: new Button({
            x: 300,
            y: 370,
            content: "Replay",
            page: "play",
            func: function() {
                game.scene = "play";
                game.reset();
                game.init();
            }
        }),
        how: new Button({
            x: 300,
            y: 500,
            content: "How",
            page: "how",
            func: function() {
                //game.scene = "how";
                game.transition.scene = "how";
                game.transition.active = true;
            }
        }),
        scoreboard: new Button({
            x: 450,
            y: 500,
            content: "Scoreboard",
            page: "scoreboard",
            func: function() {
                //game.scene = "scoreboard";
                game.transition.scene = "scoreboard";
                game.transition.active = true;
            }
        }),
        save: new Button({
            x: 420,
            y: 510,
            size: 60,
            content: "Save",
            page: "",
            func: function() {
                println("Save Code");
            }
        }),
        home: new Button({
            x: 300,
            y: 500,
            content: "Home",
            page: "home",
            func: function() {
                //game.scene = "home";
                game.transition.scene = "home";
                game.transition.active = true;
            }
        }),
        sound: new Button({
            x: 150,
            y: 500,
            content: "Sound",
            page: "sound",
            func: function() {
                game.sound = !game.sound;
            }
        })
    };
    this.fonts = {
        body: createFont("Trebuchet MS"),
        title: createFont("Arial Black")
    };
    
    this.sound = true;
    this.sounds = {
        portal: getSound("retro/whistle2"),
        crash: getSound("retro/boom1"),
        clink: getSound("rpg/metal-clink"),
        eat: getSound("retro/hit1"),
        completed: getSound("rpg/battle-spell"),
        eat_special: getSound("retro/coin")
    };
    this.sounds.eat.audio.playbackRate = 10;
    
    this.blocksRepository = [];
    this.foodsRepository = [];
    
    this.explosionsRepository = [];
    this.explosions = [];
    
    //draws the main Pacman title
    this.drawTitle = function(x, y, backColor) {
        pushMatrix();
            translate(x, y);
        
            noStroke();
            fill(backColor);
            
            //P
            beginShape();
                vertex(50, 100);
                vertex(80, 100);
                vertex(80, 180);
                vertex(50, 180);
                vertex(50, 100);
            endShape();
            arc(80, 125, 75, 50, -90, 90);
            
            //A
            beginShape();
                vertex(145, 100);
                vertex(185, 180);
                vertex(105, 180);
                vertex(145, 100);
            endShape();
            
            //C
            arc(220, 140, 80, 80, 20, 340);
            
            //dash
            rect(280, 130, 40, 20);
            
            //M
            beginShape();
                vertex(340, 100);
                vertex(380, 140);
                vertex(420, 100);
                vertex(420, 180);
                vertex(340, 180);
                vertex(340, 100);
            endShape();
            
            //A
            beginShape();
                vertex(460, 100);
                vertex(500, 180);
                vertex(420, 180);
                vertex(460, 100);
            endShape();
            
            //N
            beginShape();
                vertex(500, 100);
                vertex(540, 140);
                vertex(540, 100);
                vertex(570, 100);
                vertex(570, 180);
                vertex(500, 180);
                vertex(500, 100);
            endShape();
            
            noStroke();
            fill(80);
            ellipse(88, 125, 8, 8); //P
            ellipse(145, 150, 10, 10); //A
            ellipse(460, 150, 10, 10); //A
        popMatrix();
    };
    
    //sets up the inital images and repositories
    this.setup = function() {
        //load the plane images
        this.images = {
            backImage: function () {
                noStroke();
                for (var i = 0; i < width; i += 40) {
                    for (var j = 0; j < height; j += 40) {
                        var c = floor(random(200, 255));
                        fill(c, c, c, 50);
                        rect(i, j, 40, 40);
                    }
                }
                return get(0, 0, width, height);
            },
            back: function() {
                background(0, 0, 0, 0);
            
                noStroke();
                
                fill(240, 240, 240, 20);
                var s = 0;
                for(var i = 0; i < 200; i++) {
                    s = floor(random(20, 50));
                    
                    ellipse(random(600), random(600), s, s);
                }
                
                filter(BLUR, 6);
                
                return get(0, 0, width, height);  
            },
            backHome: function() {
                background(0, 0, 0, 0);
            
                noStroke();
                
                fill(240, 240, 240, 20);
                var s = 0;
                for(var i = 0; i < 200; i++) {
                    s = floor(random(20, 50));
                    
                    ellipse(random(600), random(600), s, s);
                }
                
                fill(255, 226, 108, 100);
                //arc(310, 310, 235, 235, 30, 330);
                ellipse(310, 320, 200, 200);
                
                filter(BLUR, 6);
                
                return get(0, 0, width, height);  
            },
            title: function() {
                background(0, 0, 0, 0);
            
                game.drawTitle(-50, -100, color(220));
                game.drawTitle(-42, -92, color(80));
                game.drawTitle(-47, -97, color(212, 195, 68));
                
                return get(0, 0, 530, 90); 
            }
        };
        
        //initialize blocks for reuse
        for(var i = 0; i < 600; i++) {
            this.blocksRepository.push(new Block({
                w: this.blockSize,
                h: this.blockSize
            }));
        }
        
        //initialize foods for reuse
        for(var i = 0; i < 350; i++) {
            this.foodsRepository.push(new Food({
                w: this.blockSize * 0.5,
                h: this.blockSize * 0.5
            }));
        }
        
        //initialize explosions for reuse
        for(var i = 0; i < 100; i++) {
            this.explosionsRepository.push(new Explosion({}));
        }
    };
    this.setup();
    
    //gets an unused block
    this.getBlock = function(config) {
        for(var i = 0; i < this.blocksRepository.length; i++) {
            if(this.blocksRepository[i].used === false) {
                this.blocksRepository[i].x = config.x;
                this.blocksRepository[i].y = config.y;
                this.blocksRepository[i].w = config.w || this.blockSize;
                this.blocksRepository[i].h = config.h || this.blockSize;
                this.blocksRepository[i].backColor = config.backColor;
                this.blocksRepository[i].used = true;
                return this.blocksRepository[i];
            }
        }
        
        //if no block found in the repository then return a new block object
        var b = new Block({
            used: true,
            x: config.x,
            y: config.y,
            w: config.w || this.blockSize,
            h: config.h || this.blockSize,
            backColor: config.backColor
        });
        
        this.blocksRepository.push(b);
        return b;
    };
    
    //gets an unused food
    this.getFood = function(config) {
        for(var i = 0; i < this.foodsRepository.length; i++) {
            if(this.foodsRepository[i].used === false) {
                this.foodsRepository[i].x = config.x;
                this.foodsRepository[i].y = config.y;
                this.foodsRepository[i].w = config.w || this.blockSize * 0.35;
                this.foodsRepository[i].h = config.h || this.blockSize * 0.35;
                this.foodsRepository[i].color = config.color;
                this.foodsRepository[i].type = config.type || "Normal";
                this.foodsRepository[i].used = true;
                return this.foodsRepository[i];
            }
        }
        
        //if no block found in the repository then return a new block object
        var f = new Food({
            used: true,
            x: config.x,
            y: config.y,
            w: config.w || this.blockSize * 0.35,
            h: config.h || this.blockSize * 0.35,
            color: config.color,
            type: config.type || "Normal"
        });
        
        this.foodsRepository.push(f);
        return f;
    };
    
    //used to pre-load the images
    this.load = function (s) {
        var obj = Object.keys(this.images);
        this.images[obj[this.curLoad]] = this.images[obj[this.curLoad]]();
        this.curLoad++;
        
        background(80, 80, 80);
        pushStyle();
            fill(255);
            textAlign(CENTER, CENTER);
            textSize(24);
            text('Loading...', 300, 250);
            noStroke();
            fill(240);
            rect(100, 300, this.curLoad * 40, 5, 5);
        popStyle();
    
        if(this.curLoad < obj.length){
            this.loaded = false;
        }
        else{
            this.loaded = true;
            this.scene = s;
        }
    };
    
    //builds up the level grid/assets
    this.setLevelGrid = function() {
        //get the current game level grid
        this.grid = this.levels[this.level].grid;
        
        this.cam.x = 0;
        this.cam.y = 0;

        this.world.w = 0;
        this.world.h = this.levels[this.level].grid.length * this.blockSize;
        
        //get the sprites and create/store appropriately
        for(var row = 0; row < this.levels[this.level].grid.length; row++) {
            
            this.world.w = max(this.world.w, this.grid[row].length * 30);
            
            for(var col = 0; col < this.grid[row].length; col++) {
                if(this.grid[row][col] === " ") {
                    continue;
                }
                else if(this.grid[row][col] === "P") { //player
                    this.player.x = col * this.blockSize;
                    this.player.y = row * this.blockSize;
                    this.spawn.x = col * this.blockSize;
                    this.spawn.y = row * this.blockSize;
                    this.player.vx = 0;
                    this.player.vy = 0;
                    this.player.dir = "";
                    this.player.angle = 0;
                }
                else if(this.grid[row][col] === "B") { //block
                
                    this.blocks.push(this.getBlock({
                        x: col * this.blockSize,
                        y: row * this.blockSize,
                        w: this.blockSize,
                        h: this.blockSize
                    }));
                    /*
                    this.blocks.push(new Block({
                        x: col * this.blockSize,
                        y: row * this.blockSize,
                        w: this.blockSize,
                        h: this.blockSize
                    }));
                    */
                }
                else if(this.grid[row][col] === "E") { //enemy
                    this.enemies.push(new Enemy({
                        x: col * this.blockSize,
                        y: row * this.blockSize,
                        w: this.blockSize,
                        h: this.blockSize
                    }));
                }
                else if(this.grid[row][col] === "-") { //food
                    
                    this.foods.push(this.getFood({
                        x: col * this.blockSize + this.blockSize * 0.35,
                        y: row * this.blockSize + this.blockSize * 0.35,
                        w: this.blockSize * 0.3,
                        h: this.blockSize * 0.3,
                        color: color(220, 220, 220),
                        type: "Normal"
                    }));
                
                    /*
                    this.foods.push(new Food({
                        x: col * this.blockSize + this.blockSize * 0.35,
                        y: row * this.blockSize + this.blockSize * 0.35,
                        w: this.blockSize * 0.3,
                        h: this.blockSize * 0.3,
                        color: color(220, 220, 220)
                    }));
                    */
                }
                else if(this.grid[row][col] === "+") { //food special
                    
                    this.foods.push(this.getFood({
                        x: col * this.blockSize + this.blockSize * 0.35,
                        y: row * this.blockSize + this.blockSize * 0.35,
                        w: this.blockSize * 0.3,
                        h: this.blockSize * 0.3,
                        color: color(220, 220, 220),
                        type: "Special"
                    }));
                    
                    /*
                    this.foods.push(new Food({
                        x: col * this.blockSize + this.blockSize * 0.35,
                        y: row * this.blockSize + this.blockSize * 0.35,
                        w: this.blockSize * 0.3,
                        h: this.blockSize * 0.3,
                        color: color(220, 220, 220),
                        type: "Special"
                    }));
                    */
                }
                else if(this.grid[row][col] === "L" || 
                        this.grid[row][col] === "R" ||
                        this.grid[row][col] === "U" ||
                        this.grid[row][col] === "D") { //portals
                    this.portals.push(new Portal({
                        x: col * this.blockSize,
                        y: row * this.blockSize,
                        w: this.blockSize,
                        h: this.blockSize,
                        color: color(103, 156, 100),
                        type: this.grid[row][col]
                    }));
                }
            }
        }
    };
    
    //initializes/resets objects
    this.init = function() {
        this.blocks.length = 0;
        this.enemies.length = 0;
        this.portals.length = 0;
        this.foods.length = 0;
        this.explosions.length = 0;
        
        for(var i = 0; i < this.blocksRepository.length; i++) {
            this.blocksRepository[i].used = false;
        }

        for(var i = 0; i < this.foodsRepository.length; i++) {
            this.foodsRepository[i].used = false;
        }
        
        for(var i = 0; i < this.explosionsRepository.length; i++) {
            this.explosionsRepository[i].used = false;
        }
        
        this.score = 0;
        this.gameOver = false;
        this.shake = 0;
        this.lives = 3;
        this.replayDelay = 180;
        this.animationDelay = 180;
        this.startDelay = 0;
        this.player.dead = false;
        this.scaleDir = 1;
        this.animationTimer = 0;
        
        this.angleRange = this.levels[this.level].angle;
        
        this.setLevelGrid();
    };
    this.init();
    
    //gets an unused explosion
    this.getExplosion = function(config) {
        for(var i = 0; i < this.explosionsRepository.length; i++) {
            if(this.explosionsRepository[i].used === false) {
                this.explosionsRepository[i].x = config.x;
                this.explosionsRepository[i].y = config.y;
                this.explosionsRepository[i].size = config.size || 15;
                this.explosionsRepository[i].backColor = config.backColor;
                this.explosionsRepository[i].cornerRadius = config.cornerRadius || 0;
                this.explosionsRepository[i].xspeed = config.xspeed || random(-2, 2);
                this.explosionsRepository[i].yspeed = config.yspeed || random(-2, 2);
                this.explosionsRepository[i].timeToLive = 255;
                this.explosionsRepository[i].used = true;
                return this.explosionsRepository[i];
            }
        }
        
        //if no block found in the repository then return a new block object
        var ex = new Explosion({
            used: true,
            x: config.x,
            y: config.y,
            size: config.size || 15,
            backColor: config.backColor,
            cornerRadius: config.cornerRadius || 0,
            xspeed: config.xspeed || random(-2, 2),
            yspeed: config.yspeed || random(-2, 2),
            timeToLive: 255
        });
        
        this.explosionsRepository.push(ex);
        return ex;
    };
    
    //runs the explosions
    this.runExplosions = function() {
        //run through each used explosion and display it
        for(var i = this.explosions.length - 1; i >= 0; i--) {
            if(this.explosions[i].used) {
                this.explosions[i].run();
                
                if(this.explosions[i].used === false) {
                    this.explosions.splice(i, 1);
                }
            }
        }
    };
    
    //shakes the screen
    this.shakeScreen = function() {
        //if there is a shake
        if(this.shake > 0) {
            //slowly reduce the shaking
            this.shake = lerp(this.shake, 0, this.SHAKEDOWN);
            //perform a random translate horizontal and vertically
            translate(round(random(-this.shake, this.shake)), round(random(-this.shake, this.shake)));
        }
    };
    
    //checks if the player can move in the next direction
    this.collisionNext = function(player, obj2) {
        if( player.nx + player.w > obj2.x && 
            player.ny + player.h > obj2.y && 
            player.nx < obj2.x + obj2.w && 
            player.ny < obj2.y + obj2.h) {
            return true;
        }
        return false;
    };
    
    //general collision of objects
    this.collision = function(player, obj2) {
        if( player.x + player.w > obj2.x && 
            player.y + player.h > obj2.y && 
            player.x < obj2.x + obj2.w && 
            player.y < obj2.y + obj2.h) {
            return true;
        }
        return false;
    };
    
    //manages the eating of the food
    this.checkEatFood = function() {
        for(var i = this.foods.length - 1; i >= 0 ; i--) {
            var food = this.foods[i];
            
            //check if anywhere close to the player and exit if not
            if(food.x + food.w < this.player.x) { continue; }
            if(food.x > this.player.x + this.player.w) { continue; }
            if(food.y + food.h < this.player.y) { continue; }
            if(food.y > this.player.y + this.player.h) { continue; }

            if(this.collision(this.player, food)) {
                this.score+= 10;
                
                var ex;
                for(var n = 0; n < 5; n++) {
                    ex = this.getExplosion(
                        {
                            x: food.x, 
                            y: food.y,
                            size: 4,
                            backColor: color(random(200, 240)),
                            cornerRadius: 10
                        });
                    if(ex) {
                        this.explosions.push(ex);
                    }
                }
                
                if(this.sound){
                    if(food.type === "Special") {
                        this.sounds.eat_special.audio.play();
                    }
                    else {
                        this.sounds.eat.audio.play();
                    }
                }
                
                //if special food then set the enemies to vulnerable
                if(food.type === "Special") {
                    for(var j = 0; j < this.enemies.length; j++) {
                        this.enemies[j].state = "VULNERABLE";
                        this.enemies[j].timer = 0;
                        this.enemies[j].speed = this.enemies[j].SPEED_VULNERABLE;
                    }
                }
                
                this.foods[i].used = false;
                this.foods.splice(i, 1);
                return;
            }
        }
        
        if(this.foods.length === 0) {
            if(this.sound) {
                this.sounds.completed.audio.play();
            }
                    
            this.score_total+= this.score;
            if(this.score_total > this.score_best) {
                this.score_best = this.score_total;
            }
            this.startDelay = 0;
            this.scene = "next";
            return;
        }
    };
    
    //manages the player entering the portals
    this.checkEnterPortal = function() {
        for(var i = this.portals.length - 1; i >= 0 ; i--) {
            var portal = this.portals[i];
            
            //check if anywhere close to the player and exit if not
            if(portal.x + portal.w < this.player.x) { continue; }
            if(portal.x > this.player.x + this.player.w) { continue; }
            if(portal.y + portal.h < this.player.y) { continue; }
            if(portal.y > this.player.y + this.player.h) { continue; }

            if(this.collision(this.player, portal)) {
                if(this.sound) {
                    this.sounds.portal.audio.play();
                }
                    
                var index = i;
                
                while(index === i) {
                    index = ~~random(this.portals.length);
                }
                
                var p = this.portals[index];
                
                this.player.x = p.x;
                this.player.y = p.y;
                
                switch(p.type) {
                    case "L":
                        this.player.dir = "RIGHT";
                        this.player.x+= p.w;
                        break;
                    case "R":
                        this.player.dir = "LEFT";
                        this.player.x-= p.w;
                        break;
                    case "U":
                        this.player.dir = "DOWN";
                        this.player.y+= p.h;
                        break;
                    case "D":
                        this.player.dir = "UP";
                        this.player.y-= p.h;
                        break;
                }

                return;
            }
        }
    };
    
    //checks if the player can move
    this.checkMove = function(arr) {
        this.player.canMove = {
            left: true,
            right: true,
            up: true,
            down: true
        };

        for(var i = 0; i < arr.length; i++) {
            var block = arr[i];
            
            //check if anywhere close to the player and exit if not
            if(block.x + block.w < this.player.x) { continue; }
            if(block.x > this.player.x + this.player.w) { continue; }
            if(block.y + block.h < this.player.y) { continue; }
            if(block.y > this.player.y + this.player.h) { continue; }
            
            //check if can move in the next direction
            if(this.collisionNext(this.player, block)) {
                if(this.player.dir === "LEFT") { //left
                    if(this.player.nx < block.x + block.w){
                        this.player.canMove.left = false;
                        break;
                    }
                }
                else if(this.player.dir === "RIGHT") { //right
                    if(this.player.nx + this.player.w > block.x){
                        this.player.canMove.right = false;
                        break;
                    }
                }
                else if(this.player.dir === "UP") { //up
                    if(this.player.ny < block.y + block.h){
                        this.player.canMove.up = false;
                        break;
                    }
                }
                else if(this.player.dir === "DOWN") { //down
                    if(this.player.ny + this.player.h > block.y){
                        this.player.canMove.down = false;
                        break;
                    }
                }
            }
        }
    };
    
    //checks if the enemies can move
    this.checkEnemiesMove = function(arr) {
        for(var i = 0; i < this.enemies.length; i++) {
        
            var enemy = this.enemies[i];
            
            enemy.canMove = {
                left: true,
                right: true,
                up: true,
                down: true
            };
    
            for(var j = 0; j < arr.length; j++) {
                var block = arr[j];
                
                //check if anywhere close to the block and exit if not
                if(block.x + block.w < enemy.x) { continue; }
                if(block.x > enemy.x + enemy.w) { continue; }
                if(block.y + block.h < enemy.y) { continue; }
                if(block.y > enemy.y + enemy.h) { continue; }
                
                //check if can move in the next direction
                if(this.collisionNext(enemy, block)) {
                    if(enemy.dir === "LEFT") { //left
                        if(enemy.nx < block.x + block.w){
                            enemy.canMove.left = false;
                            break;
                        }
                    }
                    else if(enemy.dir === "RIGHT") { //right
                        if(enemy.nx + enemy.w > block.x){
                            enemy.canMove.right = false;
                            break;
                        }
                    }
                    else if(enemy.dir === "UP") { //up
                        if(enemy.ny < block.y + block.h){
                            enemy.canMove.up = false;
                            break;
                        }
                    }
                    else if(enemy.dir === "DOWN") { //down
                        if(enemy.ny + enemy.h > block.y){
                            enemy.canMove.down = false;
                            break;
                        }
                    }
                }
            }
        }
    };
    
    //checks if the player collides with an enemy
    this.checkPlayerEnemyCollision = function() {
        for(var i = this.enemies.length - 1; i >= 0; i--) {
            var enemy = this.enemies[i];
            
            if(enemy.state === "EATEN") {
                continue;
            }
            
            //check if anywhere close to the player and exit if not
            if(enemy.x + enemy.w < this.player.x) { continue; }
            if(enemy.x > this.player.x + this.player.w) { continue; }
            if(enemy.y + enemy.h < this.player.y) { continue; }
            if(enemy.y > this.player.y + this.player.h) { continue; }
            
            if(this.collision(this.player, enemy)) {
                this.shake = 20;
                
                if(enemy.state === "NORMAL") {
                    //loose a life
                    this.lives--;
                    
                    if(this.sound) {
                        this.sounds.crash.audio.play();
                    }
                    
                    var ex;
                    for(var n = 0; n < 10; n++) {
                        ex = this.getExplosion(
                            {
                                x: this.player.x + this.player.w / 2, 
                                y: this.player.y + this.player.h / 2,
                                size: 5,
                                xspeed: random(-0.5, 0.5),
                                yspeed: random(-0.5, 0.5),
                                backColor: this.player.color,
                                cornerRadius: 10
                            });
                        if(ex) {
                            this.explosions.push(ex);
                        }
                    }
                    
                    if(this.lives <= 0) {
                        //game over
                        this.gameOver = true;
                        this.animationDelay = 0;
                        this.player.dead = true;
                        this.transitionBlocks.init();
                        
                        if(this.score_total + this.score > this.score_best) {
                            this.score_best = this.score_total + this.score;
                        }
                        
                        return;
                    }
                    else {
                        //continue with level
                        this.scene = "replay";
                        this.animationDelay = 0;
                        this.player.dead = true;

                        return;
                    }
                }
                else { //VULNERABLE
                    if(this.sound) {
                        this.sounds.clink.audio.play();
                    }
                    
                    enemy.state = "EATEN";
                    enemy.speed = enemy.SPEED_EATEN;
                    enemy.timer = 0;
                    this.score+= 500;
                }
            }
        }
    };
    
    //moves the player
    this.move = function(arr) {
        for(var i = 0; i < arr.length; i++) {
            var block = arr[i];

            if(this.collision(this.player, block)) {
                if(this.player.px + this.player.w <= block.x){
                    this.player.x = block.x - this.player.w;
                }
                
                else if(this.player.py + this.player.h <= block.y){
                    this.player.y = block.y - this.player.h;
                }    
                
                else if(this.player.px >= block.x + block.w){
                    this.player.x = block.x + block.w;
                }   
                
                else if(this.player.py >= block.y + block.h){
                    this.player.y = block.y + block.h;
                }    
            }
        }
    };
    
    //moves the enemies
    this.moveEnemies = function() {
        for(var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i];
            
            enemy.draw();
            enemy.move();

            for(var j = 0; j < this.blocks.length; j++) {
                if(this.collision(enemy, this.blocks[j])) {
                    
                    var block = this.blocks[j];
                    
                    if(enemy.px + enemy.w <= block.x){
                        enemy.x = block.x - enemy.w;
                    }
                    
                    else if(enemy.py + enemy.h <= block.y){
                        enemy.y = block.y - enemy.h;
                    }    
                    
                    else if(enemy.px >= block.x + block.w){
                        enemy.x = block.x + block.w;
                    }   
                    
                    else if(enemy.py >= block.y + block.h){
                        enemy.y = block.y + block.h;
                    }
                    
                    switch(enemy.dir) {
                        case "LEFT":
                            enemy.vx = -enemy.speed;
                            enemy.vy = 0;
                            break;
                        case "RIGHT":
                            enemy.vx = enemy.speed;
                            enemy.vy = 0;
                            break;
                        case "UP":
                            enemy.vx = 0;
                            enemy.vy = -enemy.speed;
                            break;
                        case "DOWN":
                            enemy.vx = 0;
                            enemy.vy = enemy.speed;
                            break;
                    }
                    
                    break;
                }
            }
        }
    };
    
    //checks if an enemy enters a portal
    this.checkEnemyEnterPortal = function() {
        for(var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i];
            
            for(var j = this.portals.length - 1; j >= 0 ; j--) {
                var portal = this.portals[j];
                
                //check if anywhere close to the enemy and exit if not
                if(portal.x + portal.w < enemy.x) { continue; }
                if(portal.x > enemy.x + enemy.w) { continue; }
                if(portal.y + portal.h < enemy.y) { continue; }
                if(portal.y > enemy.y + enemy.h) { continue; }
    
                if(this.collision(enemy, portal)) {
                    var index = j;
                    
                    while(index === j) {
                        index = ~~random(this.portals.length);
                    }
                    
                    var p = this.portals[index];
                    
                    enemy.x = p.x;
                    enemy.y = p.y;
                    
                    switch(p.type) {
                        case "L":
                            enemy.vx = enemy.speed;
                            enemy.vy = 0;
                            enemy.x+= p.w;
                            break;
                        case "R":
                            enemy.vx = -enemy.speed;
                            enemy.vy = 0;
                            enemy.x-= p.w;
                            break;
                        case "U":
                            enemy.vx = 0;
                            enemy.vy = enemy.speed;
                            enemy.y+= p.h;
                            break;
                        case "D":
                            enemy.vx = 0;
                            enemy.vy = -enemy.speed;
                            enemy.y-= p.h;
                            break;
                    }
    
                    break;
                }
            }
        }
    };
    
    //scales the game
    this.scaleGame = function() {
        this.scaleTimer = this.scaleTimer + 1 * this.scaleDir;
        
        if(this.scaleTimer === -90 || this.scale === 90) {
            this.scaleDir*= -1;
        }
    };
    
    //resets at each level change
    this.reset = function() {
        //reset the scene
        this.player.x = this.spawn.x;
        this.player.y = this.spawn.y;
        this.player.vx = 0;
        this.player.vy = 0;
        this.player.dir = "";
        this.player.angle = 0;
        this.player.dead = false;
        this.scaleDir = 1;
        this.startDelay = 0;

        for(var i = 0; i < this.enemies.length; i++) {
            var enemy = this.enemies[i];
            
            enemy.x = enemy.spawn.x;
            enemy.y = enemy.spawn.y;
            enemy.state = "NORMAL";
            enemy.speed = enemy.SPEED_NORMAL;
            enemy.timer = 0;
        }
    };
    
    //displays the assets without game play
    this.playScene = function() {
        image(this.images.backImage, 0, 0);
        image(this.images.back, 0, 0);
        
        this.cam.x = ~~(lerp(this.cam.x, width / 2 - this.player.x - this.player.w / 2, 0.1));
        this.cam.y = ~~(lerp(this.cam.y, height / 2 - this.player.y - this.player.h / 2, 0.1));
    
        pushMatrix();
            translate(this.cam.x, this.cam.y);
            
            translate(this.player.x, this.player.y);
                
            rotate(this.angle);
            
            this.scale = constrain(this.scale + 0.025, 1, this.SCALE_MAX);
            scale(this.scale, this.scale);
            translate(-this.player.x, -this.player.y);
            
            for(var i = this.foods.length - 1; i >= 0; i--) {
                this.foods[i].draw();
            }

            this.player.draw();

            for(var i = 0; i < this.blocks.length; i++) {
                this.blocks[i].draw();
            }
            
            for(var i = 0; i < this.enemies.length; i++) {
                this.enemies[i].draw();
            }
            
            for(var i = 0; i < this.portals.length; i++) {
                this.portals[i].draw();
            }
            
            this.runExplosions();
        popMatrix();
    };
    
    //handles the next level change
    this.next = function() {
        if(this.startDelay++ < this.START_DELAY) {
            this.playScene();
            
            pushStyle();
                rectMode(CENTER);
                textAlign(CENTER, CENTER);
                textSize(40);
                fill(255, 70);
                rect(300, 300, 300, 220);
                fill(0, 150);
                text("LEVEL\nCOMPLETED", 300, 280);
                textSize(24);
                text("Press C for a Save Code", 300, 360);
            popStyle();
        }
        else {
            this.level++;
    
            if(this.level === this.levels.length) {
                this.scene = "complete";
                this.score_best = max(this.score_best, this.score + this.score_total);
                this.transitionBlocks.init();
                return;
            }
            else {
                this.init();
                this.reset();
                this.scene = "play";
            }
        }
    };
    
    //displays the stats (score, points, level)
    this.stats = function() {
        pushStyle();
            textAlign(RIGHT);
            textSize(24);
            fill(255);
            text("Level: " + this.level, 580, 30);
            textAlign(LEFT);
            //text("Score: " + this.score, 20, 30);
            text("Score: " + (this.score_total + this.score), 20, 30);
            textAlign(CENTER);
            text("Lives: " + this.lives, width * 0.5, 30);
        popStyle();
    };
    
    //handles the actual game play
    this.play = function() {
        if(this.paused) {
            pushStyle();
                noStroke();
                image(this.screenImage, 0, 0, width, height);
                rectMode(CENTER);
                fill(255, 70);
                rect(width/2, height/2, 300, 150);
                textAlign(CENTER, CENTER);
                textSize(40);
                fill(0, 150);
                text("PAUSED", width/2, height*0.47);
                textSize(30);
                text("Press P to resume", width/2, height*0.55);
            popStyle();
            return;
        }
        
        image(this.images.backImage, 0, 0);
        image(this.images.back, 0, 0);
        
        this.shakeScreen();
        
        this.cam.x = ~~(lerp(this.cam.x, width / 2 - this.player.x - this.player.w / 2, 0.1));
        this.cam.y = ~~(lerp(this.cam.y, height / 2 - this.player.y - this.player.h / 2, 0.1));
        
        if(this.gameOver) {
            this.playScene();

            if(this.animationDelay++ >= this.ANIMATION_DELAY) {
                this.scene = "gameover";
                this.gameOver = false;
                this.animationDelay = 0;
            }
        }
        else if(this.startDelay++ < this.START_DELAY) {
            pushMatrix();
                translate(this.cam.x, this.cam.y);
                
                translate(this.player.x, this.player.y);
                
                if(this.angle > 0) {
                    this.angle = ~~constrain(this.angle - 1, -this.angleRange, this.angleRange);// sin(frameCount * 0.5) * 50;
                }
                else if(this.angle < 0) {
                    this.angle = ~~constrain(this.angle + 1, -this.angleRange, this.angleRange);// sin(frameCount * 0.5) * 50;
                }
                else {
                    this.angle = 0;
                }
                
                rotate(this.angle);
                
                this.scale = constrain(this.scale - 0.025, 1, this.SCALE_MAX);
                scale(this.scale, this.scale);
                translate(-this.player.x, -this.player.y);
                
                
                for(var i = this.foods.length - 1; i >= 0; i--) {
                    this.foods[i].draw();
                }
                
                this.player.draw();
                
                this.runExplosions();
                
                for(var i = 0; i < this.blocks.length; i++) {
                    this.blocks[i].draw();
                }
                
                for(var i = 0; i < this.enemies.length; i++) {
                    this.enemies[i].draw();
                }
                
                for(var i = 0; i < this.portals.length; i++) {
                    this.portals[i].draw();
                }
            popMatrix();
            
            pushStyle();
                rectMode(CENTER);
                textAlign(CENTER, CENTER);
                textSize(40);
                fill(255, 70);
                rect(300, 300, 250, 200);
                fill(0, 150);
                text("LEVEL " + this.level, 300, 250);
                textSize(70);
                text((3 - ~~(this.startDelay / 60)), 300, 350);
            popStyle();
        }
        else if(this.startDelay === this.START_DELAY + 1) {
            this.animationTimer = 0;
            this.scale = 1;
            this.scaleTimer = -90;
        }
        else {
            pushMatrix();
                translate(this.cam.x, this.cam.y);
                
                translate(this.player.x, this.player.y);
                
                this.animationTimer++;
                this.angle = sin(this.animationTimer * 0.5) * this.angleRange;
                
                rotate(this.angle);

                this.scaleGame();
                this.scale = 2 + sin(this.scaleTimer);

                scale(this.scale, this.scale);
                
                translate(-this.player.x, -this.player.y);
                
                for(var i = this.foods.length - 1; i >= 0; i--) {
                    this.foods[i].run();
                }
                
                this.runExplosions();
                
                this.checkEatFood();
            
                this.player.draw();
                this.player.move(); //set next direction and nx/ny
                this.checkMove(this.blocks); //checks if can move in the next direction
                this.player.update();
                this.move(this.blocks);
    
                for(var i = 0; i < this.blocks.length; i++) {
                    this.blocks[i].run();
                }
                
                this.moveEnemies();
                this.checkEnemiesMove(this.blocks);
                
                for(var i = 0; i < this.enemies.length; i++) {
                    this.enemies[i].update();
                }
                
                this.checkEnemyEnterPortal();
                
                for(var i = 0; i < this.portals.length; i++) {
                    this.portals[i].run();
                }
                
                this.checkEnterPortal(this.portals);
                
                this.checkPlayerEnemyCollision();
            popMatrix();
        }
        
        this.stats();
    };
    
    //displays the home scene
    this.home = function() {
        image(this.images.backImage, 0, 0);
        image(this.images.backHome, 0, 0);
        
        image(this.images.title, 40, 60);
        
        pushStyle();
            textAlign(CENTER, CENTER);
            fill(255, 70);
            textFont(this.fonts.body);
            textSize(20);
            text("A game by Gray Wolf", 300, 175);
        popStyle();
        
        pushMatrix();
            translate(100, 320);
            rotate(sin(frameCount * 2) * 10);
            pushStyle();
                textAlign(CENTER, CENTER);
                fill(255, 70);
                textFont(this.fonts.body);
                textSize(24);
                text("Can you beat\n all15 levels?", 0, 0);
            popStyle();
        popMatrix();
        
        this.buttons.play.draw();
        this.buttons.how.draw();
        this.buttons.scoreboard.draw();
        this.buttons.sound.draw();
        
        this.transition.run();
    };
    
    //displays the how scene
    this.how = function() {
        image(this.images.backImage, 0, 0);
        image(this.images.back, 0, 0);
        pushStyle();
            textAlign(CENTER, TOP);
            textSize(50);
            fill(255);
            text("HOW", 300, 50);
            textSize(16);
            text("A slight twist on the famous Pacman game.\n\nPress P to pause and C to generate a Save code.\n\nUse the Arrow or WASD keys to move around the screen and eat all the food.\n\nWatch out for the ghosts as they love to eat Pacman (you).\n\nOnce you eat all the food you will progress to the next level.\n\nIt might start off easy, but you'll soon see some twists and turns as you progress through the game.\n\nGood luck young Pacman... you're going to need it.", 20, 140, 560, 600);
        popStyle();
        
        this.buttons.home.draw();
        
        this.transition.run();
    };
    
    //displays the scoreboard scene
    this.scoreboard = function() {
        image(this.images.backImage, 0, 0);
        image(this.images.back, 0, 0);
        pushStyle();
            textAlign(CENTER, TOP);
            textSize(50);
            fill(255);
            text("SCOREBOARD", 300, 50);
        popStyle();
        
        //display the leaderboard
        pushStyle();
            textAlign(CENTER);
            fill(240);
            textSize(16);
            
            var names = "", scores = "";
            for(var i = 0; i < this.highscores.length; i++) {
                names+= this.highscores[i].name + ":\n";
                scores+= "" + this.highscores[i].score + "\n";
            }
            
            textAlign(RIGHT);
            textLeading(30);
            text(names, 340, 150);
            text(scores, 365, 150);
        popStyle();
        
        this.buttons.home.draw();
        
        this.transition.run();
    };
    
    //handles replaying of a level
    this.replay = function() {
        image(this.images.backImage, 0, 0);
        image(this.images.back, 0, 0);
        
        this.shakeScreen();
        
        if(this.animationDelay++ >= this.ANIMATION_DELAY) {
            this.scene = "play";
            this.reset();
            this.animationDelay = 0;
            this.animationTimer = 0;
        }
        else {
            this.playScene();
            this.stats();
        }
    };
    
    //displays the game completed scene
    this.complete = function() {
        image(this.images.backImage, 0, 0);
        image(this.images.back, 0, 0);
        
        pushStyle();
            textAlign(CENTER);
            rectMode(CENTER);
            noStroke();
            fill(255, 70);
            rect(300, 300, 380, 540);
            fill(0, 150);
            textSize(35);
            text("GAME COMPLETE", 300, 100);
            textSize(24);
            pushMatrix();
                translate(300, 145);
                rotate(sin(frameCount * 2) * 10);
                text("Congratulations, you completed Pacman!!", -140, 0, 280, 600);
            popMatrix();
            text("Score: " + (this.score + this.score_total) + "\nBest Score: " + this.score_best + "\n\nLet me know if you scored enough to get on the Scoreboard", 160, 240, 280, 600);
        popStyle();
        
        this.buttons.home.draw();
        
        this.transition.run();
        this.transitionBlocks.run();
    };
    
    //displays the game over scene
    this.gameover = function() {
        image(this.images.backImage, 0, 0);
        image(this.images.back, 0, 0);
        
        //display the title and game stats
        pushStyle();
            textAlign(CENTER);
            rectMode(CENTER);
            noStroke();
            fill(255, 70);
            rect(300, 300, 380, 540);
            fill(0, 150);
            textSize(35);
            text("GAME OVER", 300, 100);
            textSize(28);
            text("Score: " + (this.score + this.score_total) + "\nBest Score: " + this.score_best, 300, 170);
            textSize(24);
            text("Press C for a Save Code", 300, 265);
        popStyle();
        
        this.buttons.replay.draw();
        this.buttons.home.draw();
        
        this.transition.run();
        this.transitionBlocks.run();
    };
    
    //manages pause, sound, and save code
    this.checkKeyPressed = function() {
        if(keyPressed) {
            if (keyCode === 80) { //P - Pause
                if(this.scene === "play" || this.scene === "replay") {
                    this.paused = !this.paused;
                    this.screenImage = get();
                }
                keyCode = 0;
            }
            else if(keyCode === 86) { //V - toggle sound
                game.sound = !game.sound;
                keyCode = 0;
            }
            else if(keyCode === 67) { //C - generate save code
                if(this.scene === "play" || this.scene === "replay") {
                    this.paused = !this.paused;
                    this.screenImage = get();
                }
                var code = "var saveCode = [" + this.level + ", " + this.score_total + ", " + this.score_best + "];";
                println("Copy and paste the below save code over the top of the existing one on line 25:\n\n" + code + "\n\nThis will allow you to continue at the last level you were on.\n\nTo reset the game just put the original save code back from line 24.");
                keyCode = 0;
            }
        }
    };
};

//initialize game object
game = new Game({});

draw = function() {
    setKALoopTimeout(10000);
    
    //manages paused, sound and save code
    game.checkKeyPressed();
    
    background(30, 100, 125);
    
    //display the appropriate scene
    switch(game.scene) {
        case "load":
            game.load("home");
            break;
        case "home":
            game.home();
            break;
        case "how":
            game.how();
            break;
        case "scoreboard":
            game.scoreboard();
            break;
        case "play":
            game.play();
            break;
        case "replay":
            game.replay();
            break;
        case "next":
            game.next();
            break;
        case "complete":
            game.complete();
            break;
        case "gameover":
            game.gameover();
            break;
    }
    
    clicked = false;
};

