const fs = require('fs');
const path = require('path');

const srcAssetsDir = path.join(__dirname, 'src', 'assets');
const publicAssetsDir = path.join(__dirname, 'public', 'assets');

// 确保public/assets目录存在
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

// 要复制的文件列表
const files = [
  'mysterioustreasurechestpixelart.png',
  'Zhulongpixelart.png',
  'sushipixelart.png',
  'MoonRabbitpixelart.png'
];

files.forEach(file => {
  const srcPath = path.join(srcAssetsDir, file);
  const destPath = path.join(publicAssetsDir, file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`已复制: ${file}`);
  } else {
    console.log(`文件不存在: ${file}`);
  }
});

console.log('资源文件复制完成！');