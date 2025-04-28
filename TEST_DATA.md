# Test Data for Community Data Collection Tool

This file contains sample test data and test cases to verify that your Community Data Collection Tool is working correctly. Use these examples during your testing phase to ensure all functionality works as expected.

## Sample Test Data

### Tab-Delimited Data (Standard Format)

```
DiscordUser1#1234	123456789012345678	@twitter1	0x123456789abcdef
DiscordUser2#5678	234567890123456789	@twitter2	0x234567890abcdef
DiscordUser3#9012	345678901234567890	@twitter3	0x345678901abcdef
```

### Tab-Delimited Data with Headers

```
Discord Name	Discord ID	Twitter Name	Wallet Address
DiscordUser1#1234	123456789012345678	@twitter1	0x123456789abcdef
DiscordUser2#5678	234567890123456789	@twitter2	0x234567890abcdef
DiscordUser3#9012	345678901234567890	@twitter3	0x345678901abcdef
```

### Comma-Separated Data

```
DiscordUser1#1234,123456789012345678,@twitter1,0x123456789abcdef
DiscordUser2#5678,234567890123456789,@twitter2,0x234567890abcdef
DiscordUser3#9012,345678901234567890,@twitter3,0x345678901abcdef
```

### Comma-Separated Data with Headers

```
Discord Name,Discord ID,Twitter Name,Wallet Address
DiscordUser1#1234,123456789012345678,@twitter1,0x123456789abcdef
DiscordUser2#5678,234567890123456789,@twitter2,0x234567890abcdef
DiscordUser3#9012,345678901234567890,@twitter3,0x345678901abcdef
```

### Partial Data (Missing Some Fields)

```
DiscordUser1#1234	123456789012345678		
DiscordUser2#5678	234567890123456789	@twitter2	
DiscordUser3#9012	345678901234567890		0x345678901abcdef
```

### Data with Empty Rows

```
DiscordUser1#1234	123456789012345678	@twitter1	0x123456789abcdef

DiscordUser2#5678	234567890123456789	@twitter2	0x234567890abcdef

DiscordUser3#9012	345678901234567890	@twitter3	0x345678901abcdef
```

### Data with Special Characters

```
Discord🔥User#1234	123456789012345678	@twitter_1	0x123456789abcdef
Discord User's#5678	234567890123456789	@twitter-2	0x234567890abcdef
Discord "User"#9012	345678901234567890	@twitter.3	0x345678901abcdef
```

### Large Dataset (For Performance Testing)

```
DiscordUser1#1234	123456789012345678	@twitter1	0x123456789abcdef
DiscordUser2#5678	234567890123456789	@twitter2	0x234567890abcdef
DiscordUser3#9012	345678901234567890	@twitter3	0x345678901abcdef
DiscordUser4#3456	456789012345678901	@twitter4	0x456789012abcdef
DiscordUser5#7890	567890123456789012	@twitter5	0x567890123abcdef
DiscordUser6#1234	678901234567890123	@twitter6	0x678901234abcdef
DiscordUser7#5678	789012345678901234	@twitter7	0x789012345abcdef
DiscordUser8#9012	890123456789012345	@twitter8	0x890123456abcdef
DiscordUser9#3456	901234567890123456	@twitter9	0x901234567abcdef
DiscordUser10#7890	012345678901234567	@twitter10	0x012345678abcdef
DiscordUser11#1234	123456789012345678	@twitter11	0x123456789abcdef
DiscordUser12#5678	234567890123456789	@twitter12	0x234567890abcdef
DiscordUser13#9012	345678901234567890	@twitter13	0x345678901abcdef
DiscordUser14#3456	456789012345678901	@twitter14	0x456789012abcdef
DiscordUser15#7890	567890123456789012	@twitter15	0x567890123abcdef
```

## Test Cases

### 1. Basic Functionality Test

**Input:**
- Community Name: "Test Community"
- Spot Type: "GTD"
- Spot Category: "Community"
- Pasted Data: Use the "Tab-Delimited Data" sample
- Your Discord Name: "Tester"
- Your Discord ID: "123456789012345678"

**Expected Result:**
- Form submits successfully
- Success message appears
- Data is added to the spreadsheet with correct community name, spot type, and category

### 2. Data Format Tests

Test each of the following data formats:
- Tab-delimited data
- Tab-delimited data with headers
- Comma-separated data
- Comma-separated data with headers
- Partial data
- Data with empty rows
- Data with special characters

**Expected Result for Each:**
- Data is correctly parsed
- Preview shows the data correctly
- After submission, data appears correctly in the spreadsheet

### 3. Validation Tests

**Test 3.1: Missing Community Name**
- Leave Community Name blank
- Fill all other fields

**Expected Result:**
- Form shows error
- Submission is prevented

**Test 3.2: Missing Spot Type**
- Leave Spot Type unselected
- Fill all other fields

**Expected Result:**
- Form shows error
- Submission is prevented

**Test 3.3: Missing Pasted Data**
- Leave Pasted Data blank
- Fill all other fields

**Expected Result:**
- Form shows error
- Submission is prevented

**Test 3.4: Missing Submitter Discord Info**
- Leave Submitter Discord Name or ID blank
- Fill all other fields

**Expected Result:**
- Form shows error
- Submission is prevented

**Test 3.5: Invalid Discord ID**
- Enter non-numeric Discord ID (e.g., "abc123")
- Fill all other fields

**Expected Result:**
- Form shows error
- Submission is prevented

### 4. UI Tests

**Test 4.1: Preview Functionality**
- Paste data into the text area
- Check if preview updates

**Expected Result:**
- Preview table shows the first few rows of data
- Headers are detected if present

**Test 4.2: Clear Form Button**
- Fill out the form
- Click "Clear Form"

**Expected Result:**
- All fields are cleared
- Preview is hidden
- Error messages (if any) are cleared

**Test 4.3: Responsive Design**
- Open the form on a mobile device or use browser developer tools to simulate mobile
- Test form interaction

**Expected Result:**
- Form is usable on smaller screens
- All elements are properly sized and positioned

### 5. Error Handling Tests

**Test 5.1: Malformed Data**
- Paste data that doesn't follow the expected format

**Expected Result:**
- Error message is displayed
- Submission is prevented or data is handled gracefully

**Test 5.2: Server-Side Error**
- Use debug mode to test error handling
- If possible, intentionally cause a server-side error (e.g., by temporarily changing the sheet name)

**Expected Result:**
- Error message is displayed to the user
- User can try again after fixing the issue

## How to Use These Tests

1. Deploy your Community Data Collection Tool
2. Go through each test case systematically
3. Check if the actual results match the expected results
4. Document any issues or unexpected behavior
5. Fix issues and retest

These tests will help ensure that your tool works correctly in various scenarios and handles different types of input data and edge cases.
