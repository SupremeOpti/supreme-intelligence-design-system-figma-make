/**
 * Figma URL Parameter Extractor
 * 
 * This utility helps extract fileKey and nodeId from Figma URLs
 * Usage: node scripts/extract-figma-params.js <figma-url>
 */

export function extractFigmaParams(url) {
  // Pattern: https://figma.com/design/:fileKey/:fileName?node-id=:int1-:int2
  const figmaPattern = /design\/([^\/]+)\/[^?]+\?node-id=(\d+)-(\d+)/;
  
  const match = url.match(figmaPattern);
  
  if (!match) {
    throw new Error('Invalid Figma URL format');
  }
  
  const [, fileKey, nodeInt1, nodeInt2] = match;
  
  return {
    fileKey,
    nodeId: `${nodeInt1}:${nodeInt2}`, // Convert dash to colon
    originalUrl: url
  };
}

function printUsage(params) {
  console.log('\n✅ Successfully extracted Figma parameters:\n');
  console.log('File Key:', params.fileKey);
  console.log('Node ID: ', params.nodeId);
  console.log('\n📋 Usage in MCP tools:');
  console.log(`fileKey: "${params.fileKey}"`);
  console.log(`nodeId: "${params.nodeId}"`);
  console.log('\n🔧 Example MCP call:');
  console.log(`
mcp_Figma_get_design_context({
  fileKey: "${params.fileKey}",
  nodeId: "${params.nodeId}",
  clientLanguages: "typescript,react",
  clientFrameworks: "react,tailwindcss"
})
  `);
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node scripts/extract-figma-params.js <figma-url>');
  console.log('\nExample:');
  console.log('node scripts/extract-figma-params.js "https://figma.com/design/supreme123/Card?node-id=10-25"');
  process.exit(1);
}

const url = args[0];

try {
  const params = extractFigmaParams(url);
  printUsage(params);
} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('\n📖 URL Format:');
  console.log('https://figma.com/design/FILEKEY/FILENAME?node-id=INT1-INT2');
  process.exit(1);
}

