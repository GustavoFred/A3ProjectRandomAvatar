import { getColorIterator } from "./utils/colors/color.js"
import sample from "./examples/widget00.js"
import blob from "./utils/blob/blob.js"
import shape from "./utils/shape/shape.js"
import rects from "./utils/grids/grid01.js"

function widget(key, draw) {
    
    let nextColor = getColorIterator(key)

    const size = 700
    const cubeSize = 400

    draw.rect().size(1000,1000).fill(nextColor()).opacity(0.2)

    for(let i = 0; i < 4; i++) {
        let b = blob(key.next256())
        b.fill(nextColor()).opacity(0.5)

        let height =  (i % 2 == 0)? -100 : 500 
        let width = (i<2)? -100 : 500 

        b.move(width,height).size(size)

        b.addTo(draw)
    }

    let s = shape(37)
    let scolor = nextColor()
    s.fill(scolor).opacity(0.8)
    s.move(500-(cubeSize/2), 500-(cubeSize/2)).size(cubeSize)
    s.addTo(draw)        
    
    let s2 = shape(key.next256())
    let s2color = nextColor()

    while (scolor === s2color)
        s2color = nextColor()

    s2.fill(s2color).opacity(1)
    s2.move(520-(cubeSize/2), 520-(cubeSize/2)).size(cubeSize-40, cubeSize-40)
    s2.addTo(draw) 
    
}

export default widget
