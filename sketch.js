import p5 from 'p5';

setTimeout(() => {
    const sketch = (p) => {
        p.setup = () => {

            const sketchDiv = document.getElementById("sketch")
            const canvas = p.createCanvas(sketchDiv.clientWidth, sketchDiv.clientHeight);
            canvas.parent("sketch")
        }

        p.draw = () => {
            p.background(29, 29, 29);
            p.fill(220);
            p.textSize(100)
            p.fill(29, 29, 29)
            p.stroke(220);
            p.strokeWeight(1);


            let spacing = 40;
            for (let i = spacing / 2; i < p.width; i += spacing) {
                for (let j = spacing / 2; j < p.height; j += spacing) {
                    let d = p.dist(p.mouseX, p.mouseY, i, j);
                    p.ellipse(i, j, d * 0.2);
                }
            }

        }
    }

    new p5(sketch);
}, 2000);