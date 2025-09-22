# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 18+ installed

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `yashraj-portfolio` (or any name you prefer)
5. Make sure it's **Public** (required for free GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

Run these commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/yashraj-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment will start automatically

## Step 4: Configure GitHub Pages Settings

1. In the same "Pages" settings:
2. Under "Source", make sure "GitHub Actions" is selected
3. The workflow will automatically deploy your site

## Step 5: Access Your Live Site

Once the deployment is complete (usually takes 2-5 minutes), your site will be available at:

```
https://YOUR_USERNAME.github.io/yashraj-portfolio/
```

## Step 6: Custom Domain (Optional)

If you want to use a custom domain:

1. In GitHub Pages settings, add your custom domain
2. Update the `basePath` and `assetPrefix` in `next.config.ts` to remove the repository name
3. Add a `CNAME` file to the `public` folder with your domain

## Troubleshooting

### Build Fails
- Check the Actions tab in your GitHub repository
- Look for error messages in the workflow logs
- Ensure all dependencies are properly listed in `package.json`

### Site Not Loading
- Wait a few minutes for DNS propagation
- Check if the repository is public
- Verify GitHub Pages is enabled in repository settings

### Styling Issues
- The site is configured for the `/yashraj-portfolio` path
- If you change the repository name, update `next.config.ts`

## Updating Your Site

To update your site:

1. Make changes to your code
2. Commit and push to the main branch:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and deploy

## File Structure

```
yashraj-portfolio/
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── app/                          # Next.js pages
├── components/                   # React components
├── content/                      # JSON content files
├── public/                       # Static assets
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies
```

## Support

If you encounter any issues:
1. Check the GitHub Actions logs
2. Verify your repository is public
3. Ensure GitHub Pages is enabled
4. Check the Next.js documentation for static export issues

Your portfolio is now ready to be deployed! 🚀
