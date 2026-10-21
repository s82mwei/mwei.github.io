
## 1. Understand the three parts

- **GitHub** stores your website files in a repository: a project folder with a history of your changes.
- **GitHub Pages** publishes those files as a website.
- **Your browser** displays `index.html`, with `styles.css` controlling its appearance and `script.js` adding small interactions.

A **commit** is a saved revision of the files. Once Pages is configured, committing changes to the publishing branch updates the website automatically. You can do all of this through GitHub's website; command-line Git is optional.

## 2. Preview and personalize locally

Unzip the download. Double-click `index.html` to preview it in a browser. To edit it, right-click the file and open it in a plain-text editor such as Notepad. Save, then refresh the browser. Do not use Word, and make sure the file remains named `index.html`, not `index.html.txt`.

| File | What you change |
| --- | --- |
| `index.html` | Name, affiliation, biography, research, papers, courses, talks, links |
| `styles.css` | Colors, font sizes, spacing, portrait shape |
| `script.js` | Usually nothing; theme choice, current year, CV printing |
| `cv.html` | The optional HTML CV |
| `assets/portrait.svg` | The supplied placeholder; replace with your own photo |
| `assets/favicon.svg` | Small browser-tab icon; optional to replace |
| `files/` | A place for your CV, papers, lecture notes, and syllabus PDFs |
| `.nojekyll` | Tells GitHub Pages to serve the static files without Jekyll processing |

Start with these edits:

1. Replace `Your Name`, `YN`, and `your.name@example.com` throughout `index.html` and `cv.html`. Update the `<title>`, description, image alt text, and homepage label as well.
2. Replace every bracketed placeholder. Remove entries and sections you do not need. If you remove a section, also remove any navigation link pointing to it.
3. Replace the biography and research interests with your own. The papers are example entries, not real publications.
4. Add your portrait. For example, save it as `assets/portrait.jpg`, then change the image to:

   ```html
   <img class="portrait" src="assets/portrait.jpg"
        alt="Portrait of Your Name" width="160" height="160">
   ```

5. Remove the optional second-script name if you do not want it: delete the `<span class="native-name">...</span>` inside the main heading.
6. Replace the CV, add your real paper links, and remove the template preview notices once you finish.

The HTML contains `<!-- EDIT: ... -->` comments to help you find editable sections. Comments are visible in the source, not on the rendered page. A link has two pieces: `<a href="destination">visible text</a>`. Update both when appropriate.

### Add a paper

Inside `<ul class="publication-list">`, copy an existing complete `<li class="paper">...</li>` block. Place the newest paper first. A complete example to fill in is:

```html
<li class="paper">
  <article>
    <h4>YOUR PAPER TITLE</h4>
    <p class="authors">Your Name and Coauthor Name</p>
    <p class="publication-meta">Preprint · YEAR</p>
    <p class="paper-links">
      <a href="https://arxiv.org/abs/YOUR_ID">arXiv</a>
      <a href="files/my-paper.pdf">PDF</a>
    </p>
    <details>
      <summary>Abstract</summary>
      <div class="abstract"><p>Your abstract goes here.</p></div>
    </details>
  </article>
</li>
```

Use real destinations before publishing. Delete the PDF link if you do not upload that PDF. A journal link can use a DOI URL in the form `https://doi.org/YOUR_DOI`. The supplied sample entries do not include clickable fake paper URLs; optional link examples are commented out.

`<details>` provides the expandable abstract, including keyboard support, without JavaScript. Ordinary symbols such as ℝ, ℂ, π, and ∞ work as text. For simple expressions, use `<sup>` and `<sub>`, for example `H<sup>2</sup>(X, ℤ)`. This template does not include a LaTeX rendering library.

### Add your CV

Choose one approach:

- **Existing PDF:** put your CV at `files/cv.pdf`, then change all homepage links from `href="cv.html"` to `href="files/cv.pdf"`. Remove the unused `cv.html` if you like.
- **HTML CV:** edit `cv.html`. Its Print / save as PDF button opens your browser's print dialog, where you can choose Save as PDF. Keep its publications synchronized with the homepage manually.

### Add profile links and teaching material

There are commented examples for Google Scholar, ORCID, and GitHub below the profile. Replace the example URLs with your actual profile URLs, then remove the surrounding `<!--` and `-->` to make them visible.

For a syllabus, upload `files/syllabus.pdf` and add `<a href="files/syllabus.pdf">Syllabus (PDF)</a>`. For a university course page, use its full `https://...` URL. Add talk slides and lecture notes in the same way.

### Change the appearance

The color variables are at the top of `styles.css`. Change `--accent` for the light theme's link color and `--accent-hover` for its hover color. Dark theme colors are defined separately. Keep links easy to distinguish from body text.

The portrait is circular because `.portrait` has `border-radius: 50%`. Use `12px` for a rounded rectangle. The page uses system fonts, so visitors do not need to download a font. The main content and abstracts remain usable without JavaScript.

## 3. Publish with GitHub Pages

These instructions use a public repository and GitHub's free Pages option. You do not need a domain name or a paid hosting service. The official [Pages quickstart](https://docs.github.com/en/pages/quickstart) explains the account-level website naming convention.

1. Sign in to [GitHub](https://github.com/), or create an account.
2. Create a **new repository** named **`YOUR_USERNAME.github.io`**, replacing `YOUR_USERNAME` with your GitHub username in lowercase. Example: username `janedoe` → repository `janedoe.github.io` → website `https://janedoe.github.io/`.
3. Choose **Public**, enable **Add README**, and create the repository. If that repository already exists, open it and review its existing files before replacing anything.
4. In the repository, select **Add file → Upload files**. Upload the **contents** of the extracted `academic-homepage` folder, preserving the `assets/` and `files/` folders. Do not upload the ZIP itself or an extra enclosing folder. `index.html` must appear directly in the repository's top-level file list.
5. Click **Commit changes**, saving to `main`. If your default branch has another name, use that branch throughout these instructions.
6. Make sure `.nojekyll` appears in the repository root. If it was omitted during upload, use **Add file → Create new file**, name it `.nojekyll`, and commit it. Its contents are not used; a blank file or one line such as `Static website` is fine.
7. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, select **main**, select **/(root)**, and click **Save**. GitHub documents these settings in [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
8. Wait for the deployment. GitHub says publication can take up to 10 minutes. Return to **Settings → Pages** and use **Visit site**. You can also view deployment progress in the repository's **Actions** tab. See [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

The final repository should look like this:

```text
YOUR_USERNAME.github.io/
├── index.html
├── styles.css
├── script.js
├── cv.html
├── .nojekyll
├── README.md
├── assets/
│   ├── portrait.svg     (or your own portrait.jpg)
│   └── favicon.svg
└── files/
    ├── README.md
    └── cv.pdf           (only if you add your own)
```

This is a **personal user site**. If you instead use a repository named `academic-site`, its default project-site URL is `https://YOUR_USERNAME.github.io/academic-site/`. The template uses relative file paths, which work for both forms.

## 4. Update the website later

For small changes, open `index.html` on GitHub, choose the pencil/edit action, make your edits, and commit them to `main`. For larger changes, edit your local copy and upload the changed files. Pages republishes after a commit to the chosen source branch.

You can learn Git later if you want local version control; it is not required for this workflow. Keep a copy of the template and your original portrait/PDFs on your computer.

## 5. Fix common problems

| Symptom | What to check |
| --- | --- |
| A 404 at the homepage | Exact repository name, Pages enabled, `main` + `/(root)`, and top-level `index.html`; allow deployment time |
| You see the README instead of the website | `index.html` may be inside an extra folder or missing from the publishing branch |
| The page appears without styling | Confirm `styles.css` is alongside `index.html`; filenames are case-sensitive on the host |
| A portrait or PDF is missing | Confirm the file is uploaded and the `src` or `href` exactly matches its folder, spelling, extension, and capitalization |
| Changes do not appear | Check the Pages deployment in Actions, confirm the edited branch, and refresh the browser after deployment |
| Dark mode resets between local files | Some browsers restrict storage on local file URLs; it can still change for the open page |

Keep uploadable filenames simple, such as `cv.pdf`, `portrait.jpg`, and `paper-title.pdf`. Use relative links like `files/cv.pdf`, not local Windows paths such as `C:\Users\...`.

Before sharing, read the page once on a phone, open each real publication/CV link, and remove any remaining template placeholders. Only put material on the site that you intend to make public.

## Reference links


- [GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

GitHub instructions checked on October 18, 2026. No GitHub account or hosted website has been created by this template.
