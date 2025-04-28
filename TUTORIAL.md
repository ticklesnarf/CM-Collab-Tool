# Step-by-Step Tutorial: Setting Up the Community Data Collection Tool

This tutorial will guide you through the process of setting up and deploying the Community Data Collection Tool using Google Apps Script. By the end, you'll have a fully functional web application that allows community managers to submit spreadsheet data to a master Google Sheet.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Creating the Master Google Sheet](#creating-the-master-google-sheet)
3. [Setting Up Google Apps Script](#setting-up-google-apps-script)
4. [Deploying the Web Application](#deploying-the-web-application)
5. [Testing the Application](#testing-the-application)
6. [Sharing with Users](#sharing-with-users)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, make sure you have:

- A Google account with access to Google Drive and Google Sheets
- Basic familiarity with Google Sheets
- The files from this repository:
  - `Code.gs`
  - `Index.html`
  - `JavaScript.html`
  - `Stylesheet.html`

## Creating the Master Google Sheet

1. **Create a new Google Sheet**:
   - Go to [Google Drive](https://drive.google.com)
   - Click **+ New** > **Google Sheets**
   - Name your sheet (e.g., "Community Data Master Sheet")

2. **Set up the columns**:
   - Add the following column headers in row 1:
     - A: Community Name
     - B: Discord Name
     - C: Discord ID
     - D: Twitter Name
     - E: Wallet Address
     - F: Phase (GTD/FCFS)
     - G: Spot Type (Community)
     - H: Submission Date
     - I: Submitter Discord Name
     - J: Submitter Discord ID
     - K: Source Sheet Link

3. **Format the sheet** (optional):
   - Select row 1 and make it bold
   - Freeze the header row: **View** > **Freeze** > **1 row**
   - Add filters: Select row 1, then **Data** > **Create a filter**

4. **Save your sheet**:
   - Google Sheets auto-saves, but make sure to note the URL of your sheet

## Setting Up Google Apps Script

1. **Open the Apps Script editor**:
   - In your Google Sheet, click **Extensions** > **Apps Script**
   - This will open the Apps Script editor in a new tab

2. **Create the script files**:
   - Delete any code in the default `Code.gs` file
   - Copy and paste the contents of your `Code.gs` file
   - Click the **+** button next to **Files** to create new HTML files:
     - Create `Index.html` and paste its contents
     - Create `JavaScript.html` and paste its contents
     - Create `Stylesheet.html` and paste its contents

3. **Configure the sheet name**:
   - In `Code.gs`, find the line: `const SHEET_NAME = 'Sheet1';`
   - Change `'Sheet1'` to match the name of your sheet (usually "Sheet1" by default)

4. **Save the project**:
   - Click the disk icon or press **Ctrl+S** (or **Cmd+S** on Mac)
   - Give your project a name (e.g., "Community Data Collection Tool")

## Deploying the Web Application

1. **Deploy as a web app**:
   - Click **Deploy** > **New deployment**
   - For deployment type, select **Web app**
   - Fill in the following:
     - Description: "Community Data Collection Tool"
     - Execute as: "Me" (your Google account)
     - Who has access: Choose an appropriate option:
       - "Only myself" (for testing)
       - "Anyone" (for public access)
       - "Anyone with Google account" (for semi-restricted access)

2. **Authorize the app**:
   - Click **Deploy**
   - You'll be prompted to authorize the app
   - Click **Authorize access**
   - Sign in with your Google account if prompted
   - Click **Allow** to grant the necessary permissions

3. **Get the web app URL**:
   - After successful deployment, you'll see a URL
   - Copy this URL - this is the address where your web app is accessible

## Testing the Application

1. **Open the web app**:
   - Paste the URL from the previous step into your browser
   - The Community Data Collection Tool should load

2. **Test with sample data**:
   - Fill in the form with test data:
     - Community Name: "Test Community"
     - Paste some sample data in the format:
       ```
       DiscordUser1#1234    123456789012345678    @twitter1    0x123456789abcdef    GTD    Community
       DiscordUser2#5678    234567890123456789    @twitter2    0x234567890abcdef    FCFS    Team
       ```
     - Your Discord Name: "Your Name"
     - Your Discord ID: "Your ID"

3. **Submit the form**:
   - Click the **Submit Data** button
   - You should see a success message

4. **Check the spreadsheet**:
   - Go back to your Google Sheet
   - Verify that the data has been added correctly

5. **Test error handling**:
   - Try submitting the form with missing required fields
   - Try pasting malformed data
   - Verify that appropriate error messages are displayed

6. **Debug mode** (for developers):
   - Add `?debug=true` to the end of your web app URL
   - This will add a "Test Data Processing" button
   - Use this to test data processing without submitting to the sheet

## Sharing with Users

1. **Determine access level**:
   - If you deployed with "Anyone" access, the URL can be shared directly
   - If you used restricted access, users will need Google accounts

2. **Create instructions for users**:
   - Explain how to access the tool
   - Provide guidelines for data formatting
   - Explain the required fields

3. **Share the URL**:
   - Send the web app URL to your community managers
   - Consider creating a short link using a service like bit.ly

4. **Update deployment as needed**:
   - If you need to make changes to the code, update the deployment:
     - Make your changes
     - Click **Deploy** > **Manage deployments**
     - Select your deployment
     - Click the pencil icon to edit
     - Click **Deploy** to update

## Troubleshooting

### Common Issues and Solutions

1. **"Authorization required" message**:
   - Click the "Review permissions" button
   - Sign in with your Google account
   - Grant the necessary permissions

2. **Data not appearing in spreadsheet**:
   - Check that the sheet name in `Code.gs` matches your actual sheet name
   - Verify that you have edit permissions on the sheet
   - Check the Apps Script execution logs for errors

3. **Error when submitting form**:
   - Open the browser console (F12 or right-click > Inspect > Console)
   - Look for error messages
   - Check the Apps Script execution logs

4. **Viewing execution logs**:
   - In the Apps Script editor, click **View** > **Logs**
   - Run the application and check for error messages

5. **Quota limits**:
   - Google Apps Script has usage quotas
   - If you hit limits, consider optimizing your code or spreading submissions over time

### Getting Help

If you encounter issues not covered here:

1. Check the [Google Apps Script documentation](https://developers.google.com/apps-script)
2. Search for solutions on [Stack Overflow](https://stackoverflow.com/questions/tagged/google-apps-script)
3. Consult the [Google Workspace Developer Community](https://developers.google.com/workspace/community)

## Internal Checks for Testing

Use this checklist to verify that your application is working correctly:

### Functionality Tests

- [ ] Form loads correctly with all fields
- [ ] Required field validation works
- [ ] Data preview generates correctly
- [ ] Form submission works
- [ ] Data appears correctly in the spreadsheet
- [ ] Success message displays after submission
- [ ] "Submit More Data" button works
- [ ] Clear form button works

### Data Processing Tests

- [ ] Tab-delimited data is processed correctly
- [ ] Comma-separated data is processed correctly
- [ ] Data with headers is processed correctly
- [ ] Data without headers is processed correctly
- [ ] Empty rows are skipped
- [ ] Rows with insufficient data are skipped
- [ ] Special characters are handled correctly
- [ ] Large datasets are processed without errors

### Error Handling Tests

- [ ] Missing community name shows error
- [ ] Missing spot type column header shows error
- [ ] Missing spot category column header shows error
- [ ] Missing pasted data shows error
- [ ] Missing submitter info shows error
- [ ] Invalid Discord ID format shows error
- [ ] Malformed pasted data shows error
- [ ] Server-side errors are displayed to the user

### UI Tests

- [ ] Responsive design works on mobile devices
- [ ] Form styling is consistent
- [ ] Loading spinner appears during submission
- [ ] Error messages are clearly visible
- [ ] Success message is clearly visible

## Conclusion

You now have a fully functional Community Data Collection Tool that allows community managers to easily submit spreadsheet data to a master Google Sheet. The tool handles data validation, processing, and submission, making it easy to collect and organize community member information.

For further customization, refer to the code comments and the Google Apps Script documentation.
