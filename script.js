let height = 400;
let width = 400;
let resolution = 16

class bpiece{
    constructor(obj, type,load) {
        this.type = type;
        this.obj = obj;
        this.mload = mload;
        this.cload = cload;
    }
    get_limit(){
        if (this.type == "wood"){
            return  100
        }
        if (this.type == "steel"){
            return  200
        }
    }
}


function upbridge(SCENE){
    for(let x=0;x<16;x++){
        for(let y=0;y<16;y++){
            console.log(x,y)
            if(grid[x][y] == "wood"){
                //alert("test")
                const size = width/resolution;
                SCENE.add.rectangle(x*size, y*size, size, size, 0x854900);
            }
             if(grid[x][y] == "steel"){
                //alert("test")
                const size = width/resolution;
                SCENE.add.rectangle(x*size, y*size, size, size, 0x7D7D7D);
            }
    } 
    }
}
    

/*
Pressure = Force/Area
*/

const config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    backgroundColor: "#ff0000",

    physics: {
        default: "matter",
        matter: {
            gravity: { y: 1 },
            debug: true
        }
    },

    scene: {
        create,
        update
    }
};
function bridgecap(op){
    let count = 0;
    for(let x = 0;x<resolution;x++){
        for(let y = 0;y<resolution;y++){
            
            if (op[x][y] == 1){
                count += 1
            }        
        }
    }
    return count;
}
function updatebridge(grid,c,d,id){
    let op = [];
    let did = 1;
    /*if (grid[a][b] != 0 && grid[a][b].checked == false){
        grid[a][b].checked = true;
        grid[a][b].bridgeid = id
    }*/
   console.log(grid)
    for(let x = 0;x<resolution;x++){
        op.push([]);
    }
    for(let x = 0;x<resolution;x++){
        for(let y = 0;y<resolution;y++){
            if (grid[x][y] != 0){
               console.log(grid[x][y].bridgeid,x,y)
               op[x][y] = grid[x][y].bridgeid
            }
            else{
                op[x][y] = 0;
            }
            /*if(grid[x][y] != 0 && grid[x][y].bridgeid == undefined){
                grid[x][y].checked = true
                console.log(grid[x][y].bridgeid)
                updatebridg
                e(grid,x,y,id+1)
            }*/

            
        }
    }
    for(let a = 0;a<resolution;a++){
        for(let b = 0;b<resolution;b++){
            grid[a][b].bridgeid = did
            if (grid[a][b] != 0 && grid[a][b].bridgeid == 1){
                if (grid[a][b-1] != 0 && grid[a][b-1].checked == false){
                    grid[a][b-1].checked = true;
                    grid[a][b-1].bridgeid = grid[a][b].bridgeid
                    updatebridge(grid,a,b-1,grid[a][b].bridgeid)
                }
                if (grid[a][b+1] != 0 && grid[a][b+1].checked == false){
                    grid[a][b+1].checked = true;
                    grid[a][b+1].bridgeid = grid[a][b].bridgeid
                    updatebridge(grid,a,b+1,grid[a][b].bridgeid)
                }
                if (grid[a-1][b] != 0 && grid[a-1][b].checked == false){
                    grid[a-1][b].checked = true;
                    grid[a-1][b].bridgeid = grid[a][b].bridgeid 
                    updatebridge(grid,a-1,b,grid[a][b].bridgeid)
                }
                if (grid[a+1][b] != 0 && grid[a+1][b].checked == false){
                    grid[a+1][b].checked = true;
                    grid[a+1][b].bridgeid = grid[a][b].bridgeid
                    updatebridge(grid,a+1,b,grid[a][b].bridgeid)
                } 
                
            }
            if (grid[a][b] != 0 && grid[a][b].bridgeid != 1){
                did += 1;
                if (grid[a][b-1] != 0 && grid[a][b-1].checked == false){
                    grid[a][b-1].checked = true;
                    grid[a][b-1].bridgeid = grid[a][b].bridgeid
                    updatebridge(grid,a,b-1,grid[a][b].bridgeid)
                }
                if (grid[a][b+1] != 0 && grid[a][b+1].checked == false){
                    grid[a][b+1].checked = true;
                    grid[a][b+1].bridgeid = grid[a][b].bridgeid
                    updatebridge(grid,a,b+1,grid[a][b].bridgeid)
                }
                if (grid[a-1][b] != 0 && grid[a-1][b].checked == false){
                    grid[a-1][b].checked = true;
                    grid[a-1][b].bridgeid = grid[a][b].bridgeid 
                    updatebridge(grid,a-1,b,grid[a][b].bridgeid)
                }
                if (grid[a+1][b] != 0 && grid[a+1][b].checked == false){
                    grid[a+1][b].checked = true;
                    grid[a+1][b].bridgeid = grid[a][b].bridgeid
                    updatebridge(grid,a+1,b,grid[a][b].bridgeid)
                } 
            }
            /*if (grid[a][b-1] != 0 && grid[a][b-1].checked == false){
                grid[a][b-1].checked = true;
                grid[a][b-1].bridgeid = id
                updatebridge(grid,a,b-1,id)
            }
            if (grid[a][b+1] != 0 && grid[a][b+1].checked == false){
                grid[a][b+1].checked = true;
                grid[a][b+1].bridgeid = id
                updatebridge(grid,a,b+1,id)
            }
            if (grid[a-1][b] != 0 && grid[a-1][b].checked == false){
                grid[a-1][b].checked = true;
                grid[a-1][b].bridgeid = id 
                updatebridge(grid,a-1,b,id)
            }
            if (grid[a+1][b] != 0 && grid[a+1][b].checked == false){
                grid[a+1][b].checked = true;
                grid[a+1][b].bridgeid = id
                updatebridge(grid,a+1,b,id)
            }
        }*/
        }
    }
    did += 1
    //console.log(id)
    /*if (grid[a][b-1] != 0 && grid[a][b-1].checked == false){
        grid[a][b-1].checked = true;
        grid[a][b-1].bridgeid = id
        updatebridge(grid,a,b-1,id)
    }
    if (grid[a][b+1] != 0 && grid[a][b+1].checked == false){
        grid[a][b+1].checked = true;
        grid[a][b+1].bridgeid = id
        updatebridge(grid,a,b+1,id)
    }
    if (grid[a-1][b] != 0 && grid[a-1][b].checked == false){
        grid[a-1][b].checked = true;
        grid[a-1][b].bridgeid = id 
        updatebridge(grid,a-1,b,id)
    }
    if (grid[a+1][b] != 0 && grid[a+1][b].checked == false){
        grid[a+1][b].checked = true;
        grid[a+1][b].bridgeid = id
        updatebridge(grid,a+1,b,id)
    }*/
    //console.log("S")

    //console.log("E")
   alert(op);
   // console.log("A")
   return op;
}
const game = new Phaser.Game(config);
let grid = [];
for(let x = 0;x<resolution;x++){
    grid.push([]);
    for(let y = 0;y<resolution;y++){
        grid[x].push(0);
    }

}
//console.log(grid);
let player;
let cursors;
let mx;
let count;
let my;
let piece = 1;
//Physics
//let weight = 0;
let breakingpoint = 100;
function create() {
    let op = null;
    
    /*this.input.on('pointermove', pointer => {
        let x = pointer.worldX;
        let y = pointer.worldY;
        console.log(Math.round(x/100),Math.round(y/100));
        mx.text = pointer.worldX;
        my.text = pointer.worldY;

    });*/


    this.input.on('pointerdown', pointer => {
        //alert(5);
        const size = width/resolution;

        const gridX = Math.floor(pointer.worldX / size);
        const gridY = Math.floor(pointer.worldY / size);

        const worldX = gridX * size + size / 2;
        const worldY = gridY * size + size / 2;
        if(piece == 1) {
            grid[gridX][gridY] = "wood" 
        }
        if(piece == 2){
            grid[gridX][gridY] = "steel" 
        }
        if(piece == 3){
            grid[gridX][gridY] = "plastic"
        }
        //grid[gridX][gridY] = "wood"
        //this.add.rectangle(worldX, worldY, size, size, 0xff8700);
        //this.matter.add.gameObject(grid[gridX][gridY], { isStatic: true });
        grid[gridX][gridY].checked = false;
        grid[gridX][gridY].loadcapacity = 100;
        //alert(grid[gridX][gridY].groupid);
        //this.add.rectangle(worldX, worldY, size, size, 0xff8700);
        op = updatebridge(grid,gridX,gridY,1);
        //ccount = bridgecap(op);
        //
        //window.alert(5);
        upbridge(this);

    });
    console.log(grid);

    
    cursors = this.input.keyboard.createCursorKeys();

    // Ground
    //const ground = this.add.rectangle(400, 400, resolution00, 40, 0x00aa00);
    //this.matter.add.gameObject(ground, { isStatic: true });
    //ground.body.label = "bridge";

    // Player
    player = this.add.rectangle(400, 100, 50, 50, 0x00ffff);
    this.matter.add.gameObject(player);
    player.body.label = "player";
    player.pound = 100;
    player.setBounce(0.4);
    player.setFriction(0.05);

    player2 = this.add.rectangle(300, 100, 50, 50, 0x00ffff);
    this.matter.add.gameObject(player2);
    player2.body.label = "player";
    player2.pound = 100;
    player2.setBounce(0.4);
    player2.setFriction(0.05);

    // Platform
    const platform = this.add.rectangle(550, 350, 200, 20, 0xff8700);
    platform.type = "yikes"
    this.matter.add.gameObject(platform, { isStatic: true });
}

function update() {
    let weight = 0;
    this.matter.world.on("collisionstart", (event) => {
    //console.log(grid);
    event.pairs.forEach((pair) => {

        //console.log("Collision!");
        if(pair.bodyB.label != "bridge"){
            //alert("w")
            weight += 50;
        }
        //console.log(pair.bodyA.label);
        //console.log(pair.bodyB.label);
        console.log(count*50)
        if (weight >= count*50){
            console.log("success");
        }
        });

    });
    //console.log(weight);



 


    const speed = 5;

    if (cursors.left.isDown) {
        player.setVelocityX(-speed);
    } else if (cursors.right.isDown) {
        player.setVelocityX(speed);
    } else {
        player.setVelocityX(0);
    }

    if (Phaser.Input.Keyboard.JustDown(cursors.up)) {
        player.setVelocityY(-12);
    }
}