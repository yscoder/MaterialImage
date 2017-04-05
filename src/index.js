/*!
 * yusen
 * https://github.com/yscoder/MaterialImage
 * MIT LICENSE
 */

const colorPlate = [
  '#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C', '#FF8A80', '#FF5252', '#FF1744', '#D50000', '#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F', '#FF80AB', '#FF4081', '#F50057', '#C51162', '#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C', '#EA80FC', '#E040FB', '#D500F9', '#AA00FF', '#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#B388FF', '#7C4DFF', '#651FFF', '#6200EA', '#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#8C9EFF', '#536DFE', '#3D5AFE', '#304FFE', '#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF', '#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#80D8FF', '#40C4FF', '#00B0FF', '#0091EA', '#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#A7FFEB', '#64FFDA', '#1DE9B6', '#00BFA5', '#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064', '#84FFFF', '#18FFFF', '#00E5FF', '#00B8D4', '#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20', '#B9F6CA', '#69F0AE', '#00E676', '#00C853', '#F1F8E9', '#DCEDC8', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#7CB342', '#689F38', '#558B2F', '#33691E', '#CCFF90', '#B2FF59', '#76FF03', '#64DD17', '#F9FBE7', '#F0F4C3', '#E6EE9C', '#DCE775', '#D4E157', '#CDDC39', '#C0CA33', '#AFB42B', '#9E9D24', '#827717', '#F4FF81', '#EEFF41', '#C6FF00', '#AEEA00', '#FFFDE7', '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17', '#FFFF8D', '#FFFF00', '#FFEA00', '#FFD600', '#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00', '#FFE57F', '#FFD740', '#FFC400', '#FFAB00', '#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100', '#FFD180', '#FFAB40', '#FF9100', '#FF6D00', '#FBE9E7', '#FFCCBC', '#FFAB91', '#FF8A65', '#FF7043', '#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C', '#FF9E80', '#FF6E40', '#FF3D00', '#DD2C00', '#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E', '#757575', '#616161', '#424242', '#212121', '#ECEFF1', '#CFD8DC', '#B0BEC5', '#90A4AE', '#78909C', '#607D8B', '#546E7A', '#455A64', '#37474F', '#263238', '#EFEBE9', '#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#795548', '#6D4C41', '#5D4037', '#4E342E', '#3E2723',
];

const random = (min, max) => Math.floor((Math.random() * ((max - min) + 1)) + min);

const getRandomColor = () => colorPlate[random(0, colorPlate.length - 1)];

const getColors = count => {
  const colors = [];
  for (let i = 0; i <= count;) {
    const color = getRandomColor();
    if (colors.indexOf(color) === -1) {
      colors.push(color);
      i += 1;
    }
  }
  return colors;
};

const createCanvas = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

const getShape = () => ['rect', 'arc'][random(0, 1)];

class Drawer {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
  }

  shadow({ blur, x = 1, y = 1, color = 'rgba(0, 0, 0, .3)' }) {
    this.ctx.shadowBlur = blur;
    this.ctx.shadowOffsetX = x;
    this.ctx.shadowOffsetY = y;
    this.ctx.shadowColor = color;
  }

  rect({ width, height }) {
    const r = (random(10, 360) * Math.PI) / 180;
    const w = random(100, Math.max(width, height)) * (random(-10, 10) || 1);
    const h = random(100, Math.min(width, height)) * (random(-10, 10) || 1);
    this.ctx.rotate(r);
    this.ctx.rect(0, 0, w, h);
    this.ctx.rotate(-r);
  }

  arc({ width, height }) {
    const r = random(100, Math.min(width, height) / 2);
    this.ctx.arc(0, 0, r, 0, 2 * Math.PI);
  }

  draw(sharp, option) {
    const { width, height, color } = option;

    this.ctx.beginPath();
    this.shadow({
      blur: 20,
    });

    const x = random(0, width);
    const y = random(0, height);
    this.ctx.translate(x, y);
    this[sharp](option);
    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.translate(-x, -y);
  }

  fill(color, width, height) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, width, height);
  }
}

export default class MaterialImage {
  constructor(config = {}) {
    const {
        el = document.querySelector('body'),
        debug = false,
        output = 'background',
        imageType,
        quality } = config;

    const width = el.clientWidth;
    const height = el.clientHeight;

    this.debug = debug;
    this.canvas = createCanvas(width, height);
    this.element = el;
    this.width = width;
    this.height = height;
    this.outputType = output;
    this.protract();
    this.render({
      imageType,
      quality
    });
  }

  protract() {
    const count = random(0, 10) + 6;
    const colors = getColors(count);
    const drawer = new Drawer(this.canvas);
    const width = this.width;
    const height = this.height;

    drawer.fill(colors[0], width, height);
    if (!this.debug) {
      for (let i = 1; i <= count; i += 1) {
        drawer.draw(getShape(), {
          color: colors[i += 1],
          width,
          height,
        });
      }
    } else {
      let i = 1;
      setTimeout(() => {
        drawer.draw(getShape(), {
          color: colors[i += 1],
          width,
          height,
        });
        if (i <= count) setTimeout(this.protract, 1000);
      }, 1000);
    }
  }

  adjust() {
    const canvas = this.canvas;
    const element = this.element;

    canvas.width = element.clientWidth;
    canvas.height = element.clientHeight;

    this.protract();
  }

  toDataUrl(imageType = 'jpeg', quality = 1) {
    return this.canvas.toDataURL(`image/${imageType}`, quality);
  }

  render({ imageType, quality }) {
    const dataUrl = this.toDataUrl(imageType, quality);
    switch(this.outputType) {
      case 'canvas':
        this.element.appendChild(this.canvas);
        break;
      case 'background':
        this.element.style.cssText += `
            background-image: url("${dataUrl}");
            background-repeat: no-repeat;
            background-size: cover;`;
        break;
      case 'image':
        const img = document.createElement('img');
        img.className = 'material-image-hook';
        img.style.cssText = 'width: 100%; height: 100%';
        img.src = dataUrl;
        this.element.appendChild(img);
        break;
    }
  }

  destroy() {
    switch(this.outputType) {
      case 'canvas':
        this.element.removeChild(this.canvas);
        break;
      case 'background':
        const cssText = this.element.style.cssText;
        this.element.style.cssText = cssText.replace(/background[^;]+;/g, '');
        break;
      case 'image':
        this.element.querySelector('.material-image-hook').remove();
        break;
    }
  }
}

module.exports = MaterialImage;
