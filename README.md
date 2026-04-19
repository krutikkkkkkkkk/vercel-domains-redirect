# vercel-domain-forward

Forward any Vercel domain to any URL using a single environment variable.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/krutikkkkkkkkk/vercel-domains-redirect&env=REDIRECT_URL&envDescription=The%20URL%20to%20forward%20your%20domain%20to%20(e.g.%20https%3A%2F%2Fexample.com))

## How it works

`vercel.json` uses Vercel's built-in redirect rules with a `REDIRECT_URL` environment variable as the destination. All traffic to your domain is permanently redirected (301) to whatever URL you set.

## Setup

1. Click **Deploy with Vercel** above, or fork/clone this repo and import it into Vercel manually.
2. During setup (or after, in **Project Settings → Environment Variables**), add:
   ```
   REDIRECT_URL=https://your-destination.com
   ```
3. Deploy the project.
4. Go to **Project Settings → Domains** and add your custom domain.
5. Done — your domain now forwards to the URL you set.

To change the destination, update `REDIRECT_URL` and redeploy.

## Local development

```bash
cp .env.example .env
# edit .env with your desired REDIRECT_URL
npx vercel dev
```

## License

MIT
