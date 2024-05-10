Project Management Development Setup

Step 1: Pull Repository
    
    a. Use GitHub CLI Options from Code

Step 2: Run Docker Setup
    
    a. Open Terminal from VS Code or CMD from the Main Repository that contains the docker-compose.yml
    
    b. Run -> docker-compose up hasura postgres

Step 3: Run Hasura Migrations
    
    a. Open a new Terminal from VS Code or CMD from the Main Repository
    
    b. Run -> docker-compose run hasura-migrations

Step 4: Run ETL
    
    a. Open a new Terminal from VS Code or CMD from the Main Repository
    
    b. Run -> docker-compose run data python import.py

Step 5: Run Web Application
    
    a. Open a new Terminal from VS Code or CMD from the nextjs Folder
    
    b. Run -> yarn dev:watch

Step 6: Open Web Application
    
    a. Open any Browser
    
    b. localhost:3000/


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
