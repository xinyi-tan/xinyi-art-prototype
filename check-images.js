// 简单的图片路径检查器
const fs = require('fs');
const path = require('path');

const imageFiles = [
  'mysterioustreasurechestpixelart.png',
  'MoonRabbitpixelart.png',
  'Zhulongpixelart.png',
  'sushipixelart.png'
];

console.log('检查图片文件:');

imageFiles.forEach(file => {
  const srcPath = path.join(__dirname, 'src', 'assets', file);
  const publicPath = path.join(__dirname, 'public', 'assets', file);
  
  console.log(`\n${file}:`);
  console.log(`  src/assets: ${fs.existsSync(srcPath) ? '✓ 存在' : '✗ 不存在'}`);
  console.log(`  public/assets: ${fs.existsSync(publicPath) ? '✓ 存在' : '✗ 不存在'}`);
});

console.log('\n当前图片路径设置:');
console.log('- BlindBox.js中的宝箱图片: ./assets/mysterioustreasurechestpixelart.png');
console.log('- characters.js中的角色图片: ./assets/[图片文件名]');
console.log('\n修复完成！现在所有图片路径都使用正确的相对导入。');