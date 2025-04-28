# Hosting the Community Data Collection Tool on GitHub

This tutorial will guide you through the process of creating a GitHub repository and uploading your Community Data Collection Tool files to it.

## Prerequisites

1. A GitHub account (create one at [github.com](https://github.com/) if you don't have one)
2. Git installed on your computer (download from [git-scm.com](https://git-scm.com/downloads))
3. The Community Data Collection Tool files on your computer

## Step 1: Create a New GitHub Repository

1. Log in to your GitHub account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Fill in the repository details:
   - Repository name: `community-data-collection-tool` (or any name you prefer)
   - Description: "A Google Apps Script tool for collecting community member data"
   - Visibility: Choose either "Public" or "Private" depending on your needs
   - Initialize with: Check "Add a README file"
   - Add .gitignore: Choose "None" (we'll create our own)
   - License: Choose an appropriate license (MIT is a common choice for open-source projects)
4. Click "Create repository"

## Step 2: Clone the Repository to Your Computer

1. On your new repository page, click the green "Code" button
2. Copy the HTTPS URL (e.g., `https://github.com/yourusername/community-data-collection-tool.git`)
3. Open a terminal or command prompt on your computer
4. Navigate to a directory where you want to store the repository:
   ```
   cd path/to/desired/directory
   ```
5. Clone the repository:
   ```
   git clone https://github.com/yourusername/community-data-collection-tool.git
   ```
6. Navigate into the cloned repository:
   ```
   cd community-data-collection-tool
   ```

## Step 3: Add Your Files to the Repository

1. Copy all your Community Data Collection Tool files to the cloned repository folder:
   - `README.md`
   - `TUTORIAL.md`
   - `TEST_DATA.md`
   - `Code.gs`
   - `Index.html`
   - `JavaScript.html`
   - `Stylesheet.html`

2. Create a `.gitignore` file in the repository folder with the following content:
   ```
   # OS generated files
   .DS_Store
   Thumbs.db
   
   # Editor files
   .vscode/
   .idea/
   *.swp
   *.swo
   
   # Temporary files
   *~
   *.bak
   ```

## Step 4: Commit and Push Your Files

1. Add all files to the staging area:
   ```
   git add .
   ```

2. Commit the changes with a descriptive message:
   ```
   git commit -m "Initial commit of Community Data Collection Tool"
   ```

3. Push the changes to GitHub:
   ```
   git push origin main
   ```
   (Note: If your default branch is called "master" instead of "main", use `git push origin master`)

## Step 5: Verify Your Repository

1. Go to your GitHub repository in your web browser
2. You should see all your files listed in the repository
3. Click on the files to view their contents and make sure everything was uploaded correctly

## Step 6: Create a Release (Optional)

1. Click on "Releases" on the right side of your repository
2. Click "Create a new release"
3. Fill in the release details:
   - Tag version: "v1.0.0"
   - Release title: "Initial Release"
   - Description: Provide a summary of the tool and any important information
4. Click "Publish release"

## Step 7: Share Your Repository

You can now share your repository with others by sending them the repository URL:
```
https://github.com/yourusername/community-data-collection-tool
```

## Using the Repository with Google Apps Script

Remember that to use the tool, users will still need to:

1. Create a Google Sheet
2. Set up Google Apps Script
3. Copy the code from your GitHub repository into their Apps Script project
4. Deploy the web app

The GitHub repository serves as a code repository and documentation, but the actual deployment still happens through Google Apps Script.

## Updating the Repository

When you make changes to the tool:

1. Update the files in your local repository
2. Add the changed files to staging:
   ```
   git add .
   ```
3. Commit the changes:
   ```
   git commit -m "Description of changes"
   ```
4. Push to GitHub:
   ```
   git push origin main
   ```

## Advanced GitHub Features

Consider exploring these GitHub features for your project:

1. **Issues**: Track bugs, enhancements, and other tasks
2. **Pull Requests**: Accept contributions from others
3. **GitHub Pages**: Create a simple website for your tool
4. **Actions**: Automate testing and deployment
5. **Projects**: Manage project tasks and milestones

## Conclusion

Your Community Data Collection Tool is now hosted on GitHub, making it easier to share, maintain, and collaborate on. Users can clone or download the repository to get the code, and you can track changes and improvements over time.

For more information on using GitHub, refer to the [GitHub Docs](https://docs.github.com/).
