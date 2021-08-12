const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var rain = []
var d
var maxDrops = 100
var a
var m
var one, two, three, four
var lightning

function preload() {
    m = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png")
    one = loadImage("1.png")
    two = loadImage("2.png")
    three = loadImage("3.png")
    four = loadImage("4.png")
}

function setup() {
    createCanvas(300, 600)
    engine = Engine.create()
    world = engine.world
    s = new Umbrella(150, 500, 100, 250)
    a = createSprite(150, 475, 100, 200)
    a.scale = 0.35
    a.addAnimation("a", m)
    for (var i = 0; i < maxDrops; i++) {
        rain.push(new Raindrop(random(0, 400), random(-300, 300), 5))

    }
}

function draw() {

    background(0)
    Engine.update(engine)

    for (var i = 0; i < rain.length; i++) {
        rain[i].update()
        rain[i].display()
    }
    lightning = Math.round(random(0.5, 4.4))
    if (frameCount % 25 === 0) {
        if (lightning === 1) {
            imageMode(CENTER)
            image(one, 150, 100, 300, 200)
        }
        if (lightning === 2) {
            imageMode(CENTER)
            image(two, 150, 100, 300, 200)
        }
        if (lightning === 3) {
            imageMode(CENTER)
            image(three, 150, 100, 300, 200)
        }
        if (lightning === 4) {
            imageMode(CENTER)
            image(four, 150, 100, 300, 200)
        }
    }
    drawSprites()

}
// push()
// translate(this.body.position.x, this.body.position.y)
// imageMode(CENTER)

// animation(this.animation, 0, 0, this.width, this.height)
// pop()