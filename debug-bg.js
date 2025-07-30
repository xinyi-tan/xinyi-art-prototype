// 调试背景问题的脚本
const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, 'src', 'assets', 'mysterioustreasurechestpixelart.png');

console.log('🔍 检查宝箱图片文件:');
console.log('文件路径:', imagePath);
console.log('文件存在:', fs.existsSync(imagePath));

if (fs.existsSync(imagePath)) {
  const stats = fs.statSync(imagePath);
  console.log('文件大小:', stats.size, 'bytes');
  console.log('最后修改:', stats.mtime);
}

console.log('\n🎨 CSS 透明处理已应用:');
console.log('- background-color: transparent !important');
console.log('- background: none !important');
console.log('- border: none !important');
console.log('- box-shadow: none !important');
console.log('- backface-visibility: hidden');

console.log('\n💡 如果仍有白色背景，可能原因:');
console.log('1. 图片文件本身有白色背景 (非透明PNG)');
console.log('2. 浏览器缓存未更新');
console.log('3. 父元素有背景色');
console.log('4. CSS优先级问题');