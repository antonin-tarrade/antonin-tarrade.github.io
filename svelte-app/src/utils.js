// utils.js

export async function fetchFileContent(filePath) {
    try {
      const response = await fetch(filePath);
      return await response.text();
    } catch (error) {
      console.error(`Error fetching file content for ${filePath}:`, error);
      return null;
    }
  }
  