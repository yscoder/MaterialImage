# MaterialImage
Working!

## 使用方法

### ES6 Module:
``` javascript
import MaterialImage from 'material-image'; // 尚未发布至npm

const myDom = document.querySelector('.my-dom');
new MaterialImage({
  el: myDom,
});
```

### Script:
``` html
<script src="materialImage.min.js"></script>
<script>
    var body = document.querySelector('body');
    new MaterialImage();
</script>
```

### Configs:
| 参数           | 类型          | 默认值   | 描述               |
| ------------- |:-------------:|:-------:| :------------------:|
| el            | Element       | body    | 插入canvas的DOM节点 |
| debug         | Boolean       | false   | 调试模式开关        |

### Methods:
| 名称           | 描述           |
| ------------- |:--------------:|
| protract      | 重新绘制canvas  |
| adjust        | 调整canvas尺寸  |
| destroy       | 移除canvas节点  |

## 生成策略

随机一定数量的颜色，再随机画出不同尺寸、位置的图形（矩形和圆）。

## 开发计划

预定几种生成策略，比如同心圆、连续一定角度排列的矩形等。
添加元素移动效果。

**Wait me!**
