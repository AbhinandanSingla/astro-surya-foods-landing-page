const fs = require('fs');
const path = require('path');

const constsFile = path.join(__dirname, 'src', 'consts.ts');
const constsDir = path.join(__dirname, 'src', 'consts');

if (!fs.existsSync(constsDir)) {
  fs.mkdirSync(constsDir);
}

const content = fs.readFileSync(constsFile, 'utf8');
const lines = content.split('\n');

// Manually partition by line numbers based on the grep search
const siteLinesPart1 = lines.slice(0, 13);
const productLines = lines.slice(13, 1002);
const navLines = lines.slice(1002, 1277);
const siteLinesPart2 = lines.slice(1277);

fs.writeFileSync(path.join(constsDir, 'products.ts'), productLines.join('\n'));
fs.writeFileSync(path.join(constsDir, 'navigation.ts'), navLines.join('\n'));

// Site data needs to be combined
fs.writeFileSync(path.join(constsDir, 'site.ts'), [...siteLinesPart1, ...siteLinesPart2].join('\n'));

// Create index.ts
const indexContent = `export * from './site';
export * from './products';
export * from './navigation';
`;
fs.writeFileSync(path.join(constsDir, 'index.ts'), indexContent);

// Remove the old consts.ts
fs.unlinkSync(constsFile);

console.log('Successfully split consts.ts into src/consts/ directory.');
