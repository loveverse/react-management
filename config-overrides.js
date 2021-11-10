const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',    // 包名
        libraryDirectory: 'es', // es6模块的暴露方式
        style: true,    
    }),
    // less-loader需要安装@5版本，不然报错
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1890ff' },
    }),
);