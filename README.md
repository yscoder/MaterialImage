# MaterialImage
Working!

```bash
$ npm i material-image -S
```

## 使用方法

### ES6 Module:
``` javascript
import MaterialImage from 'material-image';

const myDom = document.querySelector('.my-dom');
new MaterialImage({
  el: myDom,
});
```

### Script:
``` html
<!-- Use cdn -->
<script src="//unpkg.com/material-image/dist/materialImage.min.js"></script>
<script>
    var body = document.querySelector('body');
    new MaterialImage({
      el: body
    });
</script>
```

### Configs:
| 参数           | 类型          | 默认值   | 描述               |
| ------------- |:-------------:|:-------:| :------------------:|
| el            | Element       | body    | 插入canvas的DOM节点 |
| debug         | Boolean       | false   | 调试模式开关        |
| output        | String        | background | 三种输出模式，可选值：`background`、`image`、`canvas` |
| imageType     | String       | jpeg   | 输出为图片时（`background`、`image`）的图片类型   |
| quality       | Number       | 1      | 输出为图片时（`background`、`image`）的图片质量，取值 `0~1` 之间 |

### Methods:
| 名称           | 描述           |
| ------------- |:--------------:|
| protract      | 重新绘制canvas  |
| adjust        | 调整canvas尺寸  |
| destroy       | 移除canvas节点  |
| toDataUrl     | 生成 base64Url，参数 `(imageType, quality)` |

## 生成策略

随机一定数量的颜色，再随机画出不同尺寸、位置的图形（矩形和圆）。

## 开发计划

预定几种生成策略，比如同心圆、连续一定角度排列的矩形等。
添加元素移动效果。

**Wait me!**
