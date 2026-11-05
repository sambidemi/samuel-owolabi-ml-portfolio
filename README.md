# Samuel Abidemi Owolabi — Machine Learning Engineer Portfolio

A responsive React + Vite portfolio designed for deployment on GitHub Pages.

## 1. Run locally

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## 2. Personalise before publishing

Search the project for `ADD`, `YOUR_`, `confirm exact`, and `placeholder`. Update:

- Email address and LinkedIn profile URL in `src/main.jsx`.
- Certificate completion dates and credential URLs in the `certificates` array.
- Education dates if needed.
- Project descriptions and repository URLs to match the final contents of each repository.
- Internship location and responsibilities to match your records.
- Add screenshots, live demo links, and project-specific outcomes when available.

The Online Retail Market Basket Analysis card is marked as in progress. Replace its GitHub URL with the repository URL once published, or remove the card if you do not want to display unfinished work.

## 3. Publish with GitHub Pages

1. Create a new public GitHub repository named `samuel-owolabi-ml-portfolio`.
2. Upload the contents of this folder to the repository root (do not upload the outer ZIP file).
3. Check `vite.config.js`. The `base` value is currently `/samuel-owolabi-ml-portfolio/`. If you choose a different repository name, change it to `/<your-repository-name>/`.
4. Push the files to the `main` branch.
5. In GitHub, open **Settings → Pages** and set the build/deployment source to **GitHub Actions**.
6. Open the **Actions** tab and wait for the deployment workflow to finish.
7. Your site will be available at `https://YOUR-GITHUB-USERNAME.github.io/samuel-owolabi-ml-portfolio/`.

If you use a repository named `YOUR-GITHUB-USERNAME.github.io`, change the Vite `base` value to `/`.

## 4. Update later

Edit the files, commit, and push to `main`. GitHub Actions will rebuild and redeploy the site automatically.

## Notes

- This is a static portfolio. It does not require a backend, paid hosting, or a paid domain.
- GitHub Pages is free for public repositories.
- Do not publish private information such as personal phone numbers or home addresses.
- Verify all project details and links before sharing the portfolio with employers.
