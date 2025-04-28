/**
 * Community Data Collection Tool
 * 
 * This Google Apps Script creates a web application that allows community managers
 * to collect and organize member data from spreadsheets into a master Google Sheet.
 * 
 * @author Created with Cascade
 * @version 1.0
 */

// Configuration variables
const SHEET_NAME = 'Sheet1'; // Change to your sheet name
const REQUIRED_COLUMNS = ['Discord Name', 'Discord ID']; // Minimum required data

/**
 * Creates the web app UI
 * @return {HtmlOutput} The HTML page to be displayed
 */
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Community Data Collection Tool')
    .setFaviconUrl('https://www.google.com/images/favicon.ico')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Includes HTML files in the main UI
 * @param {string} filename - The name of the file to include
 * @return {string} The content of the file
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Processes the submitted form data and appends it to the spreadsheet
 * @param {Object} formData - The data submitted from the form
 * @return {Object} Status and message about the operation
 */
function processForm(formData) {
  try {
    // Validate form data
    if (!formData.communityName) {
      return { success: false, message: 'Community name is required.' };
    }
    
    if (!formData.pastedData || formData.pastedData.trim() === '') {
      return { success: false, message: 'Please paste spreadsheet data.' };
    }
    
    if (!formData.submitterDiscordName || !formData.submitterDiscordId) {
      return { success: false, message: 'Submitter Discord information is required for validation.' };
    }
    
    // Process the pasted data
    const processedData = processData(formData);
    
    // Append to spreadsheet
    appendToSheet(processedData);
    
    return { 
      success: true, 
      message: 'Data successfully submitted!',
      rowCount: processedData.length
    };
  } catch (error) {
    console.error('Error processing form:', error);
    return { 
      success: false, 
      message: 'An error occurred: ' + error.message 
    };
  }
}

/**
 * Processes the pasted spreadsheet data
 * @param {Object} formData - The data submitted from the form
 * @return {Array} Array of processed data rows ready for the spreadsheet
 */
function processData(formData) {
  // Split the pasted data into rows
  const rows = formData.pastedData.trim().split(/\r?\n/);
  const processedRows = [];
  
  // Determine the delimiter (tab, comma, etc.)
  const firstRow = rows[0];
  let delimiter = '\t'; // Default to tab
  
  if (firstRow.includes(',') && !firstRow.includes('\t')) {
    delimiter = ',';
  }
  
  // Check if the first row contains headers
  const hasHeaders = checkForHeaders(firstRow, delimiter);
  const startRow = hasHeaders ? 1 : 0;
  
  // Process each row
  for (let i = startRow; i < rows.length; i++) {
    const row = rows[i].trim();
    if (row === '') continue; // Skip empty rows
    
    const columns = row.split(delimiter);
    
    // Extract data (assuming standard format)
    const discordName = columns[0] || '';
    const discordId = columns[1] || '';
    const twitterName = columns.length > 2 ? columns[2] : '';
    const walletAddress = columns.length > 3 ? columns[3] : '';
    const phase = columns.length > 4 ? columns[4] : ''; // GTD or FCFS
    const spotType = columns.length > 5 ? columns[5] : ''; // Community or Team
    
    // Skip rows that don't have the minimum required data
    if (!discordName && !discordId) continue;
    
    // Create the data row for the spreadsheet
    processedRows.push([
      formData.communityName,
      discordName,
      discordId,
      twitterName,
      walletAddress,
      phase, // Phase (GTD/FCFS) from pasted data
      spotType, // Spot Type (Community/Team) from pasted data
      new Date(), // Submission date
      formData.submitterDiscordName,
      formData.submitterDiscordId,
      formData.sheetLink || '' // Source Google Sheet link (optional)
    ]);
  }
  
  return processedRows;
}

/**
 * Checks if the first row contains headers
 * @param {string} firstRow - The first row of data
 * @param {string} delimiter - The delimiter used in the data
 * @return {boolean} Whether the first row appears to contain headers
 */
function checkForHeaders(firstRow, delimiter) {
  const columns = firstRow.split(delimiter);
  
  // Check if any column contains typical header names
  const headerKeywords = ['discord', 'name', 'id', 'twitter', 'wallet', 'address'];
  
  for (const column of columns) {
    const lowerColumn = column.toLowerCase();
    for (const keyword of headerKeywords) {
      if (lowerColumn.includes(keyword)) {
        return true;
      }
    }
  }
  
  return false;
}

/**
 * Appends the processed data to the spreadsheet
 * @param {Array} rows - Array of data rows to append
 */
function appendToSheet(rows) {
  if (rows.length === 0) {
    throw new Error('No valid data rows to append.');
  }
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    throw new Error(`Sheet "${SHEET_NAME}" not found. Please check the sheet name in the configuration.`);
  }
  
  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}

/**
 * Gets the available spot types for the dropdown
 * @return {Array} Array of spot type options
 */
function getSpotTypes() {
  return ['GTD', 'FCFS'];
}

/**
 * Gets the available spot categories for the dropdown
 * @return {Array} Array of spot category options
 */
function getSpotCategories() {
  return ['Community', 'Team'];
}

/**
 * Test function to validate the data processing
 * @param {string} testData - Sample data to test
 * @return {Object} Test results
 */
function testDataProcessing(testData) {
  const formData = {
    communityName: 'Test Community',
    pastedData: testData,
    sheetLink: 'https://docs.google.com/spreadsheets/d/test',
    submitterDiscordName: 'Tester',
    submitterDiscordId: '123456789'
  };
  
  const processedData = processData(formData);
  
  return {
    inputRows: testData.split(/\r?\n/).length,
    processedRows: processedData.length,
    sampleRow: processedData.length > 0 ? processedData[0] : null
  };
}
