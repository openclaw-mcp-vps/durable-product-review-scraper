# Build Task: durable-product-review-scraper

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: durable-product-review-scraper
HEADLINE: Aggregate buy-it-for-life product reviews across platforms
WHAT: Scrapes and aggregates reviews for durable products from multiple sources with longevity scoring
WHY: Buy for Life Products platform shows demand - users need consolidated review data
WHO PAYS: Conscious consumers, product researchers, sustainability-focused shoppers
NICHE: consumer-tools
PRICE: $$12/mo

ARCHITECTURE SPEC:
A Next.js web scraper that aggregates product reviews from multiple platforms (Amazon, Reddit, specialized forums) and calculates longevity scores for durable goods. Uses background jobs to scrape data, stores aggregated reviews in a database, and provides a dashboard for users to search and compare products.

PLANNED FILES:
- app/page.tsx
- app/dashboard/page.tsx
- app/api/scrape/route.ts
- app/api/products/route.ts
- app/api/webhooks/lemonsqueezy/route.ts
- lib/scrapers/amazon.ts
- lib/scrapers/reddit.ts
- lib/longevity-calculator.ts
- lib/database.ts
- components/ProductCard.tsx
- components/LongevityScore.tsx
- components/ReviewAggregator.tsx

DEPENDENCIES: next, tailwindcss, prisma, @prisma/client, puppeteer, cheerio, axios, @lemonsqueezy/lemonsqueezy.js, next-auth, bullmq, ioredis, zod, lucide-react

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/durable-product-review-scraper
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1813-bddf-7f92-85e4-d882e48e4611
--------
user
# Build Task: durable-product-review-scraper

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: durable-product-review-scrape
Please fix the above errors and regenerate.