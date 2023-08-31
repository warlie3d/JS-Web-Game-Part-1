function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}
//make function newImage so you can invoke image multiple times
function newImage(url, left, bottom) {
    let item = document.createElement('img')
    item.src = url
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    return item
}
//function newitem for doubleclick 
function newItem(url,left,bottom) {
    let item = newImage(url,left,bottom)
    
    item.addEventListener('dblclick', () => {
        item.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

//invoking images
let character = newImage('assets/green-character.gif',100,100)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/well.png', 500, 425)

//invoking items
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165,185)
newItem('assets/staff.png', 600, 100)











