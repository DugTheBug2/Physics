const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#222",

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

const game = new Phaser.Game(config);

let player;
let cursors;

//Physics
//let weight = 0;
let breakingpoint = 100;
function create() {

    cursors = this.input.keyboard.createCursorKeys();

    // Ground
    const ground = this.add.rectangle(400, 400, 800, 40, 0x00aa00);
    this.matter.add.gameObject(ground, { isStatic: true });
    ground.body.label = "bridge";

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
    const platform = this.add.rectangle(550, 350, 200, 20, 0xff8800);
    platform.type = "yikes"
    this.matter.add.gameObject(platform, { isStatic: true });
}

function update() {
    let weight = 0;
    this.matter.world.on("collisionstart", (event) => {

    event.pairs.forEach((pair) => {

        console.log("Collision!");
        if(pair.bodyB.label != "bridge"){
            //alert("w")
            weight += 50;
        }
        console.log(pair.bodyA.label);
        console.log(pair.bodyB.label);
        if (weight >= 100){
            alert("success");
        }
        });

    });
    console.log(weight);






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