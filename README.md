# Tirtha Chetry - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring AI projects, software engineering articles, open-source contributions, and professional achievements.

## Tech Stack

- **Framework**: Next.js 16.2.6 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono via next/font/google
- **Language**: TypeScript

## Features

- **Hero Section**: Animated introduction with tech stack showcase
- **Articles**: Technical blog posts with RSS feed support
- **Projects Showcase**: Filterable project gallery with GitHub integration
- **AI Lab**: AI experiments and research highlights
- **Open Source**: GitHub contributions and repository showcase
- **Achievements**: Awards, certifications, and milestones
- **Speaking**: Conference talks and community events
- **Certifications**: Professional certifications display
- **Contact**: Contact form and social media links
- **Responsive Design**: Mobile-first, fully responsive layout
- **Dark Mode**: Built-in dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tirthachetry-zoho/portfolio-tirtha.git
cd portfolio-tirtha
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── articles/          # Articles pages
│   ├── achievements/      # Achievements page
│   ├── certifications/    # Certifications page
│   ├── speaking/          # Speaking events page
│   ├── tech-stack/        # Tech stack page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── navigation.tsx     # Navigation bar
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx       # Projects showcase
│   ├── open-source.tsx    # Open source section
│   ├── contact.tsx        # Contact section
│   └── footer.tsx         # Footer
└── lib/                   # Utility functions
    └── utils.ts          # Helper functions
```

## Customization

### Updating Content

- **Personal Info**: Update `src/app/layout.tsx` for metadata and `src/components/hero.tsx` for hero content
- **Projects**: Edit `src/components/projects.tsx` to update project listings
- **Articles**: Modify `src/app/articles/page.tsx` and `[slug]/page.tsx` for article content
- **Social Links**: Update social media URLs in `src/components/navigation.tsx` and `src/components/footer.tsx`

### Styling

The project uses Tailwind CSS v4 with custom color variables defined in `src/app/globals.css`. Modify the CSS variables to customize the color scheme.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## License

This project is open source and available under the MIT License.

## Contact

- **Website**: https://tirthachetry.dpdns.org
- **GitHub**: https://github.com/tirthachetry-zoho
- **LinkedIn**: https://linkedin.com/in/tirthachetry
- **Twitter**: https://twitter.com/tirthachetry

---

Built with ❤️ using Next.js and Tailwind CSS
