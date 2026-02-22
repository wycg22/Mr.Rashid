export function formatFileNameToTitle(filePath) {
  //Get just the filename 
  const parts = filePath.split('/');
  let fileName = parts[parts.length - 1];

  // Remove the file extension (.png, .jpg, etc.)
  fileName = fileName.substring(0, fileName.lastIndexOf('.'));

  // Add spaces before capital letters (to split PascalCase or camelCase)
 
  const spacedName = fileName.replace(/([A-Z])/g, ' $1').trim();

  // Ensure the first letter is capitalized
  return spacedName.charAt(0).toUpperCase() + spacedName.slice(1);
}