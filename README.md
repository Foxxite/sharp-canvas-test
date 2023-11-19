This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to showcase the error when [Sharp](https://www.npmjs.com/package/sharp) and [Canvas](https://www.npmjs.com/package/canvas) are used in the same project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Either Sharp or Canvas will error. 
I'm not sure if this is an issue with either one of the packages, NextJS or Webpack.

This has been tested on Windows and Ubuntu with Node 20.9.0 LTS.
