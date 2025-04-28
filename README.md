# Community Data Collection Tool

A Google Apps Script web application that allows community managers to collect and organize member data from spreadsheets into a master Google Sheet.

## Overview

This tool solves the problem of collecting and consolidating member data from multiple sources. It provides a user-friendly interface where users can:

1. Enter community information
2. Paste spreadsheet data containing Discord names, Discord IDs, Twitter names, wallet addresses, phases (GTD/FCFS), and spot types (Community/Team)
3. Submit their own Discord credentials for validation

The application then processes this data and appends it to a master Google Sheet for centralized management.

## Features

- **Bulk Data Entry**: Paste multiple rows of data from spreadsheets
- **Data Validation**: Basic validation to ensure required fields are present
- **Flexible Format Support**: Handles various input formats
- **User Authentication**: Requires submitter's Discord credentials
- **Google Sheets Integration**: Directly appends to your master sheet
- **Responsive Design**: Works on desktop and mobile devices

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Advanced Customization](#advanced-customization)
- [Security Considerations](#security-considerations)

## Prerequisites

- Google account with access to Google Drive and Google Sheets
- Basic understanding of Google Sheets
- A master Google Sheet for data collection

## Installation

### Step 1: Create the Master Sheet

1. Create a new Google Sheet or use an existing one
2. Set up the following columns:
   - Community Name
   - Discord Name
   - Discord ID
   - Twitter Name
   - Wallet Address
   - Phase (GTD/FCFS)
   - Spot Type (Community)
   - Submission Date
   - Submitter Discord Name
   - Submitter Discord ID
   - Source Sheet Link

### Step 2: Set Up Google Apps Script

1. Open your master Google Sheet
2. Click on **Extensions** > **Apps Script**
3. Delete any code in the editor
4. Copy and paste the code from the [Code.gs](#code-files) file
5. Click on the **+** button next to **Files** to create new HTML files
6. Create `Index.html` and paste the corresponding code
7. Create `JavaScript.html` and paste the corresponding code
8. Create `Stylesheet.html` and paste the corresponding code
9. Click **Save** (disk icon)

### Step 3: Deploy the Web App

1. Click on **Deploy** > **New deployment**
2. Select **Web app** as the deployment type
3. Fill in the following:
   - Description: "Community Data Collection Tool"
   - Execute as: "Me"
   - Who has access: "Anyone" (or restrict as needed)
4. Click **Deploy**
5. Copy the web app URL provided

## Configuration

The application requires minimal configuration. Open the `Code.gs` file and modify the following:

```javascript
// Configuration variables
const SHEET_NAME = 'Sheet1'; // Change to your sheet name
const REQUIRED_COLUMNS = ['Discord Name', 'Discord ID']; // Minimum required data
```

## Usage

### For Administrators

1. Share the web app URL with your community managers
2. Monitor the master sheet for new submissions
3. Periodically back up the master sheet

### For Community Managers

1. Open the web app URL
2. Enter your community name
3. Select the spot type (GTD, FCFS)
4. Paste spreadsheet data into the text area
5. Specify whether spots are for community or team
6. Enter your Discord name and ID for validation
7. Click Submit

## Testing

### Internal Checks

The application includes several internal checks to ensure data integrity:

1. **Input Validation**:
   - Verifies that community name is provided
   - Checks that spot type is selected
   - Ensures data is pasted in the text area
   - Validates submitter Discord information is present

2. **Data Processing**:
   - Parses pasted data to extract relevant information
   - Handles various delimiter formats (tabs, commas, etc.)
   - Identifies column headers if present

3. **Error Handling**:
   - Provides clear error messages for invalid inputs
   - Prevents submission of malformed data
   - Logs errors for troubleshooting

### Manual Testing Procedure

1. **Basic Functionality Test**:
   - Enter valid data in all fields
   - Submit the form
   - Verify data appears in the master sheet

2. **Input Format Test**:
   - Test with tab-delimited data
   - Test with comma-separated data
   - Test with data containing headers
   - Test with data missing some fields

3. **Validation Test**:
   - Submit without community name
   - Submit without selecting spot type
   - Submit without pasting data
   - Submit without Discord credentials

4. **Edge Case Test**:
   - Test with very large data sets
   - Test with special characters
   - Test with duplicate entries

## Troubleshooting

### Common Issues

1. **Data Not Appearing in Sheet**:
   - Check that the sheet name matches the `SHEET_NAME` in the code
   - Verify you have edit permissions on the sheet
   - Check the Apps Script execution logs for errors

2. **Format Issues**:
   - Ensure data is properly formatted in the source spreadsheet
   - Try removing headers before pasting
   - Check for hidden characters or special formatting

3. **Permission Errors**:
   - Make sure the web app is deployed with appropriate permissions
   - Verify that the executing account has access to the sheet

### Viewing Logs

1. In the Apps Script editor, click on **View** > **Logs**
2. Run the application and check for error messages
3. Use these logs to identify and fix issues

## Advanced Customization

### Adding New Fields

To add new data fields:

1. Update the master sheet with new columns
2. Modify the `processData()` function in `Code.gs`
3. Update the UI in `Index.html`
4. Add validation in `JavaScript.html` if needed

### Changing Validation Rules

Modify the validation logic in `JavaScript.html`:

```javascript
function validateForm() {
  // Customize validation rules here
}
```

### Styling Changes

Update the CSS in `Stylesheet.html` to match your branding or preferences.

## Security Considerations

- The app collects Discord IDs and wallet addresses, which should be handled securely
- Consider restricting access to the web app to specific users
- Regularly audit the master sheet for unauthorized access
- Do not store sensitive authentication tokens in the code

## Code Files

### Code.gs

```javascript
// Main server-side code for the Community Data Collection Tool
```

### Index.html

```html
<!-- Main UI template -->
```

### JavaScript.html

```html
<!-- Client-side JavaScript -->
```

### Stylesheet.html

```html
<!-- CSS styles -->
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Google Apps Script
- Inspired by community management needs
