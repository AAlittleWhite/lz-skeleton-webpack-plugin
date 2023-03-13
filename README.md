# by-skeleton-webpack-plugin

单页面spa骨架屏 webpack插件

## 引入方式

```
yarn add by-skeleton-webpack-plugin -D

const SkeletonPlugin = require('by-skeleton-webpack-plugin')

在webpack中引入插件

new SkeletonPlugin({
    rootId: 'root', // 项目根节点id 默认值：root
    title: '正在进入中...', // 展示等待提示语 默认值：正在进入中...
    domStr: '' //  自定义展示loading 不传有默认值 （格式: 字符串类型的html 注释：最外层的元素必须是根结点元素）
})
```

## License

[MIT](LICENSE)

## todo
