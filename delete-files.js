const fs = require('fs');
const path = require('path');

const filesToDelete = [
  'D:/xinyi-art/src/App_Luxury.js',
  'D:/xinyi-art/src/App_fixed.js',
  'D:/xinyi-art/src/App_popmart.js',
  'D:/xinyi-art/src/App_popmart.css',
  'D:/xinyi-art/src/responsive-additions.css'
];

const deletedFiles = [];
const failedFiles = [];

filesToDelete.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      deletedFiles.push(file);
      console.log(`✓ Deleted: ${file}`);
    } else {
      failedFiles.push(`${file} (not found)`);
      console.log(`✗ Not found: ${file}`);
    }
  } catch (err) {
    failedFiles.push(`${file} (${err.message})`);
    console.log(`✗ Error deleting ${file}: ${err.message}`);
  }
});

console.log('\nDeletion Summary:');
console.log(`Successfully deleted: ${deletedFiles.length} files`);
console.log(`Failed or not found: ${failedFiles.length} files`);

if (deletedFiles.length > 0) {
  console.log('\nDeleted files:');
  deletedFiles.forEach(file => console.log(`  ${file}`));
}

if (failedFiles.length > 0) {
  console.log('\nFailed/Not found files:');
  failedFiles.forEach(file => console.log(`  ${file}`));
}