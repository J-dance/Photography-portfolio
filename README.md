# J-dance Photography Portfolio built with Astro 🧑‍🚀

- <a href="photography-portfolio-one.vercel.app">host 1</a>
- <a href="photography-portfolio-git-main-j-dance.vercel.app">host 2</a>
- <a href="photography-portfolio-j-dance.vercel.app">host 3</a>

Setup using:

```
npm create astro@latest -- --template minimal
```

Project uses the following:

- Astro js
- TypeScript (default)
- TailwindCSS
- React
- AWS S3 client
- GSAP

## 🚀 Project Structure

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
│       └── 404.astro
│       └── [folder].astro
│   └── layouts/
│       └── Page.astro
│   └── components/
│       └── LoaderScreen.astro
│       └── Nav.astro
│   └── styles/
│       └── global.css
│   └── utils/
│       └── s3.ts
└── package.json
```

Any static assets, like images, can be placed in the `public/` directory.

# Note

Currently, images are retrieved during build. This means if new images are added then a new build must run.
In future, could use client-side rendering to fetch images.
