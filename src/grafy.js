
const grafy = {
    canvasId: '__grafy__',
    canvas: undefined,
    ctx: undefined,
    width: 0,
    height: 0,
    
    setup: function (canvasId) {
        this.canvasId = canvasId;
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
    },

    size: function (w, h) {
        this.canvas.style.width = w + 'px';
        this.canvas.style.height = h + 'px';
        this.canvas.width = w;
        this.canvas.height = h;
        this.width = w;
        this.height = h;
    },

    background: function (r, g, b, opacity=1.0) {
        this.canvas.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    },

    stroke: function (r, g, b) {
        this.ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
    },

    point: function (x, y) {
        console.log(x, y)
        this.ctx.strokeRect(x, y, 1, 1);
    }
};

export default grafy;