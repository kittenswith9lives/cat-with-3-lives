namespace SpriteKind {
    export const Creature = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`Enemy`, function (sprite, location) {
    game.over(true, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Heart`, function (sprite, location) {
    game.over(false, effects.melt)
})
let Cat = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(Cat)
scene.setBackgroundColor(13)
scene.cameraFollowSprite(Cat)
tiles.placeOnRandomTile(Cat, sprites.swamp.swampTile13)
