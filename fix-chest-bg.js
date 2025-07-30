// 检查并修复宝箱图片背景问题的脚本
const fs = require('fs');
const path = require('path');

const chestPath = path.join(__dirname, 'src', 'assets', 'mysterioustreasurechestpixelart.png');

console.log('🔍 宝箱图片分析:');
console.log('路径:', chestPath);
console.log('存在:', fs.existsSync(chestPath));

if (fs.existsSync(chestPath)) {
    const stats = fs.statSync(chestPath);
    console.log('大小:', Math.round(stats.size/1024) + 'KB');
    console.log('修改时间:', stats.mtime.toLocaleString());
}

// 创建CSS强制透明处理
const cssFix = `
/* 强制宝箱透明处理 */
.treasureBox {
    background: transparent !important;
    background-color: transparent !important;
}

.treasureBox img {
    background: transparent !important;
    background-color: transparent !important;
    mix-blend-mode: multiply !important;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5)) !important;
}

/* 极端情况：使用伪元素覆盖背景 */
.treasureBox::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent !important;
    pointer-events: none;
    z-index: -1;
}
`;

fs.writeFileSync('chest-fix.css', cssFix);
console.log('\n✅ 已创建 chest-fix.css 包含强制透明样式');

// 建议用户打开测试文件
console.log('\n📋 测试步骤:');
console.log('1. 打开 test-chest.html 查看宝箱透明情况');
console.log('2. 如果看到白色背景，图片本身有问题');
console.log('3. 如果透明正常，可能是React渲染问题');
console.log('4. 将chest-fix.css导入BlindBox.module.css');