const { override, fixBabelImports, addLessLoader } = require('customize-cra');
// 按需引入antd的css
// module.exports = override(
//     fixBabelImports('import', {
//         libraryName: 'antd',
//         libraryDirectory: 'es',  //antd中用了es的模块化规范
//         style: 'css'
//     }),
// );

// 更换antd的颜色主题 (解析less的)
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',  //antd中用了es的模块化规范
        // style: 'css'
        style: true
    }), 
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': 'orange' },    
    }),
);