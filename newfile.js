const fs = require('fs');
const targetDir = process.argv[2] || '.';
if (!fs.existsSync(targetDir)) {
  console.log("Error: The path '" + targetDir + "' does not exist.");
  process.exit(1);
}

const stats = fs.statSync(targetDir);
if (!stats.isDirectory()) {
  console.log("Error: '" + targetDir + "' is not a directory.");
  process.exit(1);
}

console.log("===============================");
console.log(" Analyzing directory: " + targetDir);
console.log("===============================");

const files = fs.readdirSync(targetDir);
let totalFiles = 0;
let totalLines = 0;

files.forEach(file => {
  const fullPath = targetDir + '/' + file;
  const fileStats = fs.statSync(fullPath);
  if (fileStats.isFile()) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const lines = content.trim === 0 ? 0 : content.split('\n').length;
    let paddedName = file;
    if (paddedName.length < 25) {
      paddedName = paddedName + ' '.repeat(25 - paddedName.length);
    } else {
      paddedName = paddedName.substring(0, 22) + '...';
    }
    console.log(" " + paddedName + " | Lines: " + lines);
    totalLines += lines;
    totalFiles++;
  }
});
console.log("===============================");
console.log(" Summary:");
console.log(" Total Files Processed: " + totalFiles);
console.log(" Grand Total of Lines: " + totalLines);
console.log("===============================");