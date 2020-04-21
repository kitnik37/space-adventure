controller.B.onEvent(ControllerButtonEvent.Released, function () {
    effects.clearParticles(spaceship)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    spaceship.startEffect(effects.fire)
    spaceship.vy += -30
    scene.cameraShake(4, 500)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    effects.clearParticles(spaceship)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    spaceship.startEffect(effects.halo)
    spaceship.vy = 0
})
let spaceship: Sprite = null
effects.starField.startScreenEffect()
let alien_ship = sprites.create(img`
. . . . . . . . . . . . . . . 
. . . c b . . 5 . . 6 6 . . . 
. . . c b 9 3 5 3 9 6 6 . . . 
. . . . c b 3 5 3 3 6 . . . . 
. . . . . c 5 5 5 7 . . . . . 
. . . . c b 5 5 5 7 6 . . . . 
. . . . c b 3 3 3 6 6 . . . . 
. . . . c . 7 3 7 . 6 . . . . 
. . . c b . 5 5 5 . 6 6 . . . 
. . . c b . 7 5 7 . 6 6 . . . 
. . . c b . 3 3 3 . 6 6 . . . 
. . . c b . . 7 . . 6 6 . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
spaceship = sprites.create(img`
. . . . . . . . . f f f . . . . . . . . 
. . . . . . . . . f c f . . . . . . . . 
. . . . . . . . . f c f . . . . . . . . 
. . . . . . . . f f c f f . . . . . . . 
. . . . . . . . f c b 1 f . . . . . . . 
. . . . . f f f f c b 1 f f f f . . . . 
. . . . . f 2 f f c b 1 f f 2 f . . . . 
. . . . . f 2 f f c b 1 f f 2 f . . . . 
. . f f f f c f c b 1 1 1 f 1 f f f f . 
. . f 2 f f c 8 b 1 2 1 1 8 1 f f 2 f . 
. . f 2 f f 8 b 1 2 2 2 1 1 8 f f 2 f . 
. . f c f f b 1 1 2 1 2 1 1 1 f f 1 f . 
. . f c f c b 1 1 1 1 1 1 1 1 1 f 1 f . 
. . f c c b 1 1 2 1 1 1 2 1 1 1 1 1 f . 
. . f c b 1 f 2 2 1 1 1 2 2 f 1 1 1 f . 
. . f c b f f 4 4 f 1 f 4 4 f f 1 1 f . 
. . f c f f f f f f 1 f f f f f f 1 f . 
. . f f f . . . . f f f . . . . f f f . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(spaceship, 100, 0)
spaceship.vy = 5
scene.cameraFollowSprite(spaceship)
alien_ship.follow(spaceship, 480)
