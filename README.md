# grafyjs

Simple lib for drawing things. Inspired by [p5js](https://p5js.org/) API.


## How to

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"> 
        <title>Grafyjs - Rect</title>
        <script src="dist/grafy.min.js"></script>
    </head>
    <body>
        <canvas id="grafy"></canvas>

        <script type="text/javascript">
            
            function setup() {
            	// ------------------
                // Initialize GrafyJS
                // ------------------
                grafy.setup({ id: 'grafy', w: 720, h: 400, draw: draw, frameRate: 0 });
            }

            function draw() {
                grafy.background(127, 127, 127);

                for (let i = 0; i < grafy.height(); i += 20) {
                    grafy.fillColor(129, 206, 15);
                    grafy.rect(0, i, grafy.width(), 10);
                    grafy.fillColor(255, 255, 255);
                    grafy.rect(i, 0, 10, grafy.height());
                }
            }

            // -------------
            // Start drawing
            // -------------
            setup();

        </script>
    </body>
</html>
```


## Examples

- Matrix digital rain (code from https://github.com/emilyxxie/green_rain)
- Draw of colored rectangles (code from https://p5js.org/examples/structure-width-and-height.html)