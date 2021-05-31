// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100006060605050505050505050505050505060606040404040404040404040404050606030304040403030303030303040505040304040204030303040404040405050403030404040404030303040404050501040303030404040404030404040505040404040303040401040304040405050403040404030304040404040204050504030401040404030304030404040505040304040303030303040304040405050403040303040404040403040404050504030403030303030303030404040505040304040404040403030404040405050403030404040104040404030404050504040303030404040403030303040505050505050505050505050505050505`, img`
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . 2 
. . 2 2 . . . 2 2 2 2 2 2 2 . 2 
2 . 2 . . . . 2 2 2 . . . . . 2 
2 . 2 2 . . . . . 2 2 2 . . . 2 
2 . . 2 2 2 . . . . . 2 . . . 2 
2 . . . . 2 2 . . . . 2 . . . 2 
2 . 2 . . . 2 2 . . . 2 . . . 2 
2 . 2 . . . . . 2 2 . 2 . . . 2 
2 . 2 . . 2 2 2 2 2 . 2 . . . 2 
2 . 2 . 2 2 . . . . . 2 . . . 2 
2 . 2 . 2 2 2 2 2 2 2 2 . . . 2 
2 . 2 . . . . . . 2 2 . . . . 2 
2 . 2 2 . . . . . . . . 2 2 . 2 
2 . . 2 2 2 . . . . 2 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.swamp.swampTile13], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Enemy":
            case "tile1":return tile1;
            case "Heart":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
