
const grafy = {
 
    setup: function (options) {
        this._canvas = document.getElementById(options.id);
        this._ctx = this._canvas.getContext('2d');
        this._canvas.style.width = options.w + 'px';
        this._canvas.style.height = options.h + 'px';
        this._canvas.width = options.w;
        this._canvas.height = options.h;
        this._width = options.w;
        this._height = options.h;
        this._frameRate = options.frameRate >= 0 ? options.frameRate : 5;
        this._draw = options.draw;
        this._frameCount = 0;

        if (this._frameRate > 0) {
            this._intervalId = setInterval(() => this.draw(), this._frameRate);
        }
        else {
            this._draw();
        }
    },

    draw: function () {
        this._frameCount++;
        this._draw();
    },

    stop: function () {
        clearInterval(this._intervalId);
    },
    
    background: function (r, g, b, opacity=1.0) {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._canvas.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    },

    stroke: function (r, g, b) {
        this._ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
    },

    point: function (x, y) {
        this._ctx.strokeRect(x, y, 1, 1);
    },

    rect: function (x, y, w, h, fill=true) {
        if (fill) {
            this._ctx.fillRect(x, y, w, h);
        }
        else {
            this._ctx.strokeRect(x, y, w, h);  
        }
    },

    fillColor: function (r, g, b, opacity=1.0) {
        this._ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    },

    textFont: function (font) {
        this._ctx.font = `${font.size}px ${font.name}`;
    },

    text: function (txt, x, y) {
        this._ctx.fillText(txt, x, y);
    },

    width: function () {
        return this._width;
    },

    height: function () {
        return this._height;
    },

    frameCount: function () {
        return this._frameCount;
    }
};

export default grafy;