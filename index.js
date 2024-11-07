//node tree shenanagins
const nodeTree = new NodeTree();
let numOfNodes = 0;
class NodeTree {
    constructor(name,Uwidth,Uheight,unitStep,sprite,depth,parName,parID,isOrigin = false){
        numOfNodes ++;
        this._name = name;
        this._Uwidth = Uwidth
        this._Uheight = Uheight;
        this._unitStep = unitStep;
        this._sprite = sprite;
        this._depth = depth;
        this._children = [];
        this._prnt = {prntN:parName,prntID:parID};
        this.isLeaf = true;

        if(!isOrigin){
            //not origin
            this._isChild = true;
            this._id = `n${numOfNodes.toString()}`;
        } else {
            //origin
            this._isChild = false;
            this._id = "ROOT";
        }
    }
    get Name(){
        return this._name;
    }
    get Uwidth(){
        return this._Uwidth;
    }
    get Uheight(){
        return this._Uheight;
    }
    get UnitStep(){
        return this._unitStep;
    }
    get C(){
        return this._children;
    }
    get leaf(){
        return this.isLeaf;
    }
    addChild(child){
        this._children.push(this);
        this._children.push(child);
        isLeaf = false;
    }
}

//game object stuff and shenanagins
class gameObject {
    constructor(name,isStatic,pos,vel,acc,statCoef,mass,otherthing){
        this.name = name;
        this.static=isStatic;
        thos.pos=pos;
        this.vel=vel;
        thos.acc=acc;
        this.statCoef=statCoef;
        this.mass=mass;
        this.otherthing=otherthing;
    }
}


let obj1 = new gameObject("obj1",false,{"x":100,"y":100},{"x":3,"y":0,"d":90},{"mag":0,"d":0},0,0,)
let scene;
/*
obj1 = {
    "name":"player",
    "static":false,
    "pos": {
        "x":5,
        "y":10
    },
    "vel": {
        "par":12, //parrallel
        "per":4, //perpendicular
        "d":90 //direction
    },
    "acc": {
        "mag":2, //magnitude
        "d":90 //durection
    },
    "statCoef":.5,
    "mass":"10",
    "so name for somthing that wont really move to store the static coefficient bc i dont know what else to call so yea":false
}
*/



scene = {
    "g":9.8,
    "yep other things here": true,
    "itintalObjects":[obj1],
}


const fps=2
//attempt 1 at procesing
let updateQueue = [obj1];

const pocessInterval = setInterval(()=>{
/*
    Step1: preform action trigers
    Step2: process movement
    |?-> Just iterate over movement queue, movement will be executed in order as in the queue
    Step3: update movment as needed
    |?-> change vel, acc, so on
    Step4: check for collitions
    |-> Set up action trigers for next frame
    Step5: 
    Step6 :Draw the screen
    |-> for future, only change changed things unless that is already what happens
*/
//STEP 2:
    for(pos in updateQueue){
        //change x pos
        let xDist = updateQueue[pos].vel.x;
        updateQueue[pos].pos.x+=xDist;

        //change y pos
        let yDist = updateQueue[pos].vel.y;
        updateQueue[pos].pos.y+=yDist;

        document.getElementById(updateQueue[pos].name).left = updateQueue[pos].pos.x;
        document.getElementById(updateQueue[pos].name).top = updateQueue[pos].pos.y
    }




},1000/fps);
