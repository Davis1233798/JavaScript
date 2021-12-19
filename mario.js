kaboom({
    global: true,
    fullscrean: true,
    scale:1,
    debug:true,
    clearColor:[0,0,0,1],
})

loadRoot('https://i.imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('evil-shroom','KP03fR9.png')
loadSprite('brick', 'pogC9x5.png')
loadSprite('block', 'bdrLpi6.png ')
loadSprite('mario', 'Wb1qfhK.png')
loadSprite('mushroom', '0wMd92p.png')
loadSprite('surprise','gesQ1KP.png')
loadSprite('unboxed', 'bdrLpi6.png')
loadSprite('pipe-top-left','ReTPiWY.png')
loadSprite('pipe-top-right','hj2GK4n.png')
loadSprite('pipe-bottom-left','c1cYSbt.png')
loadSprite('pipe-bottom-right','nq079eI.png')

scene("game",()=>{
    layers(['bg','obj','ui'],'obj')

    const map = [
    '                                  ',
    '                                  ',
    '                                  ',
    '                                  ',
    '                                  ',
    '                                  ',
    '                                  ',
    '                                  ',
    '      % =*=%                      ',     
    '                      -+          ',
    '                ^  ^  ()          ',
    '========================     =====',
    '                                  ',
    '                                  ',
    '                                  ',    
    ]

    const levelCfg = {
            width: 20,
            height: 20,
            '=':[sprite('brick'), solid()],
            '$':[sprite('coin')],
            '%':[sprite('surprise'), solid(), 'coin-surprise'],
            '&':[sprite('surprise'), solid(), 'mushroom-surprise'],
            '}':[sprite('unboxed'), solid()],
            '(':[sprite('pipe-bottom-left'), solid(), scale(0.5)],
            ')':[sprite('pipe-bottom-right'), solid(), scale(0.5)],
            '-':[sprite('pipe-top-left'), solid(), scale(0.5)],
            '+':[sprite('pipe-top-right'), solid(), scale(0.5)],
            '^':[sprite('evil-shroom'), solid(), scale(0.5)],
    }

    function big(){
        let timer = 0
        let isBig = false
        return(
            update(){
            if(isBig)
            }
        )
    }
    

    const gameLevel = addLevel(map,levelCfg)
    var score = 'test'
    const scorelabel = add([
        text(score),
        pos(30,60),
        layer('ui'),
        {
            value: score,
        }
    ])

    add([text('level'+'test',pos(4,6))])

    const player = add([
        sprite('mario'),solid(),
        pos(30,0),
        body(),
        origin('bot'),
    ])

})

start("game")