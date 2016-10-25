# hdp-tips

## Install

```html
<script src="jquery.min.js"></script>
<script src="hdp-tips.min.js"></script>
```

Or

```sh
npm install hdp-tips
```
```js
var tips = require('hdp-tips');
```
## Brower Support

IE6+


## Demo
[https://hdpfe.github.io/hdp-tips/](https://hdpfe.github.io/hdp-tips/)

## Usage
```js
tips.info('提示',5000);

tips.success('修改成功');

tips.fail("操作失败");

tips.loading('正在加载');

tips.hide();
```