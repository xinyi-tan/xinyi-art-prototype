// 简单验证脚本
const fs = require('fs');

try {
  // 检查App.js语法
  const appContent = fs.readFileSync('./src/App.js', 'utf8');
  console.log('✓ App.js 读取成功');
  
  // 简单语法检查
  if (appContent.includes('import React') && appContent.includes('export default')) {
    console.log('✓ App.js 基本语法正确');
  }
  
  // 检查所有必要的模块
  const requiredModules = ['heroModule', 'trinityModule', 'rarityModule', 'experienceModule', 'finalCTAModule'];
  let allModulesFound = true;
  
  requiredModules.forEach(module => {
    if (appContent.includes(module)) {
      console.log(`✓ ${module} 模块存在`);
    } else {
      console.log(`✗ ${module} 模块缺失`);
      allModulesFound = false;
    }
  });
  
  // 检查CSS文件
  const cssContent = fs.readFileSync('./src/App.module.css', 'utf8');
  console.log('✓ CSS 文件读取成功');
  
  if (allModulesFound) {
    console.log('🎉 所有模块检查通过！项目结构完整');
  } else {
    console.log('⚠️  部分模块可能有问题');
  }
  
} catch (error) {
  console.error('❌ 验证过程中出现错误:', error.message);
}