# 🚀 Arsalan Parham - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring a clean design, multilingual support, Google Analytics, and a secure contact form with advanced spam protection.

## ✨ Live Website
🌐 **https://arsalanparham.com**

## 🎯 Features

- **🎨 Modern Design**: Clean, professional UI with dark theme
- **📱 Responsive Layout**: Optimized for all devices and screen sizes
- **🌍 Multilingual Support**: English and German language switching
- **📧 Secure Contact Form**: Server-side validation with Resend email service
- **📊 Google Analytics**: Track website performance and user interactions
- **🍪 Cookie Consent**: GDPR-compliant cookie management
- **⚡ Server-Side Rendering**: Fast loading with Next.js App Router
- **🔒 Advanced Security**: Form validation and spam protection
- **📈 SEO Optimized**: Meta tags, sitemap, and robots.txt
- **☁️ Vercel Ready**: Optimized for Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Analytics**: Google Analytics 4
- **Email**: Resend API for contact form
- **Security**: Form validation and spam protection
- **Icons**: Lucide React
- **Deployment**: Vercel (Serverless Functions)
- **Backend**: Next.js Server Actions

## 📦 Installation & Development

### Prerequisites
- Node.js 18.17.0 or higher
- npm or yarn

### Setup
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Google Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://arsalanparham.com
   
   # Email Service (Resend)
   RESEND_API_KEY=re_your_api_key_here
   
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:9002`

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── actions.ts         # Server actions (legacy)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with GA & Cookie Consent
│   ├── page.tsx           # Home page
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ResumeSection.tsx
│   │   └── ContactSection.tsx
│   ├── layout/           # Layout components
│   ├── ContactFormStatic.tsx  # Contact form with spam protection
│   ├── GoogleAnalytics.tsx    # GA4 integration
│   ├── CookieConsent.tsx      # Cookie consent banner
│   └── ...
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── utils.ts         # General utilities
│   └── analytics.ts     # GA4 event tracking
├── types/                # TypeScript type definitions
└── ai/                   # AI integration (Genkit)
```

## 🎨 Portfolio Sections

### 🏠 Hero Section
- Professional introduction with animated text
- Call-to-action buttons
- CV download functionality
- Social media links

### 👨‍💻 About Section
- Personal bio and background
- Professional summary
- Key achievements and skills

### 🛠️ Skills Section
- Technical skills showcase
- Programming languages (JavaScript, TypeScript, Python)
- Frameworks and tools (React, Next.js, Vue.js, Node.js)
- Experience levels with progress indicators

### 💼 Portfolio Section
- **Weather Forecast App**: React, Vite, Tailwind CSS, OpenWeatherMap API
- **Portfolio Website**: Next.js, React, TypeScript, Tailwind CSS
- **Spartan Kronos**: WordPress, Elementor, Multilingual, E-commerce
- Project descriptions in English and German
- Live demo links and GitHub repositories

### 📄 Resume Section
- **WAGEMUT GmbH (2023)**: Frontend Developer - React, TypeScript, Redux
- **Bricoflor GmbH (2019-2022)**: Frontend Developer - HTML, CSS, Vue, PHP, WordPress, Magento
- **Education**: M.Sc. Computer Science - Data Science, B.Sc. Computer Engineering
- Downloadable CV in PDF format

### 📧 Contact Section
- Contact information
- Secure contact form with advanced spam protection
- Email: info@arsalanparham.com

## 🔒 Security Features

### Form Validation
- **Client-side**: Real-time validation with React Hook Form
- **Server-side**: Next.js Server Actions with Zod validation
- **Type Safety**: TypeScript and Zod schemas for robust validation
- **Error Handling**: User-friendly error messages in multiple languages

### Form Protection
- **Validation**: Client-side and server-side validation
- **Spam Protection**: Built-in form validation and rate limiting
- **User-friendly**: Simple form submission process
- **Reliable**: Robust validation with error handling

## 📊 Analytics & Tracking

### Google Analytics 4
- **Page Views**: Automatic tracking
- **Custom Events**: CV downloads, project clicks, form interactions
- **User Behavior**: Track user engagement and session duration
- **Performance**: Monitor site performance and Core Web Vitals

### Event Tracking
- CV download tracking
- Project click tracking
- Contact form interactions (start, complete, error)
- Language switching
- Social media clicks
- Math question completion

## 🌐 Multilingual Support

- **Languages**: English (en) and German (de)
- **Implementation**: Custom language switching with React context
- **Components**: All text content is localized
- **Storage**: Language preference stored in localStorage
- **SEO**: Proper language meta tags and hreflang attributes
- **Forms**: Error messages and validation in both languages

## 🚀 Deployment (Vercel)

### Vercel Configuration
The project is optimized for Vercel deployment with serverless functions:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
```

### Deployment Process

1. **Connect to Vercel**
   - Import your GitHub repository to Vercel
   - Vercel will automatically detect Next.js configuration

2. **Set Environment Variables**
   In your Vercel dashboard, add these environment variables:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   RESEND_API_KEY=re_your_api_key_here
   ```

3. **Deploy**
   - Push to your main branch
   - Vercel will automatically build and deploy

### Vercel Features
- **Serverless Functions**: Contact form handled by Next.js Server Actions
- **Edge Network**: Global CDN for fast loading
- **Automatic HTTPS**: SSL certificates included
- **Preview Deployments**: Automatic previews for pull requests
- **Analytics**: Built-in performance monitoring

## 🛠️ Available Scripts

- `npm run dev` - Start development server (port 9002)
- `npm run build` - Build for production
- `npm run start` - Start production server (port 3000)
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🔧 Configuration Files

### Environment Variables
```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://arsalanparham.com

# Email Service (Resend)
RESEND_API_KEY=re_your_api_key_here

```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailwind CSS responsive utilities
- **Navigation**: Collapsible sidebar for mobile
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized images and lazy loading
- **Cross-browser**: Compatible with all modern browsers

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives
- **Structured Data**: Schema.org markup for portfolio items
- **Performance**: Core Web Vitals optimization
- **Multilingual SEO**: Proper language tags and hreflang

## 🧪 Testing & Debugging

### Contact Form Testing
- **Server Actions**: Contact form uses Next.js Server Actions for server-side processing
- **Validation**: Client-side and server-side validation with Zod schemas
- **Error Handling**: Comprehensive error tracking and user-friendly messages
- **Email Delivery**: Resend API provides reliable email delivery with detailed logs

## 📞 Contact Information

- **Email**: info@arsalanparham.com
- **Website**: https://arsalanparham.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

## 🚀 Performance Features

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Optimized portfolio images
- **Code Splitting**: Automatic code splitting for better performance
- **Lazy Loading**: Images and components loaded on demand
- **Caching**: Proper cache headers for static assets

## 🔧 Troubleshooting

### Common Issues
1. **Email Delivery**: Check Resend dashboard for delivery logs
2. **Form Submission**: Check Vercel function logs for server-side errors
3. **Build Errors**: Ensure all environment variables are set in Vercel
4. **Deployment**: Check Vercel build logs for deployment issues

### Debug Tools
- Vercel function logs
- Resend email delivery dashboard
- Browser developer tools
- Next.js error boundaries

## 📝 License

This project is private and proprietary to Arsalan Parham.

## 🤝 Contributing

This is a personal portfolio project. For any suggestions or issues, please contact the owner.

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and deployed on Vercel**

## 🚀 Quick Start

1. Clone the repository
2. Run `npm install`
3. Set up environment variables
4. Run `npm run dev` for development
5. Deploy to Vercel for production

**Live at: https://arsalanparham.com** 🌐

## 📋 Recent Updates

- ✅ **Vercel Migration**: Migrated from PHP hosting to Vercel deployment
- ✅ **Email Service**: Replaced nodemailer with Resend API
- ✅ **Server Actions**: Updated contact form to use Next.js Server Actions
- ✅ **Configuration**: Optimized for Vercel serverless functions
- ✅ **Dependencies**: Cleaned up PHP-related dependencies
- ✅ **Documentation**: Updated README for Vercel deployment
- ✅ **Performance**: Optimized for Vercel's edge network