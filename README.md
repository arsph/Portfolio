# 🚀 Arsalan Parham - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring a clean design, multilingual support, Google Analytics, and a secure contact form with advanced spam protection using Math Questions and Time-based validation.

## ✨ Live Website
🌐 **https://arsalanparham.com**

## 🎯 Features

- **🎨 Modern Design**: Clean, professional UI with dark theme
- **📱 Responsive Layout**: Optimized for all devices and screen sizes
- **🌍 Multilingual Support**: English and German language switching
- **📧 Secure Contact Form**: Advanced spam protection with Math Questions + Time-based validation
- **📊 Google Analytics**: Track website performance and user interactions
- **🍪 Cookie Consent**: GDPR-compliant cookie management
- **⚡ Server-Side Rendering**: Fast loading with Next.js App Router
- **🔒 Advanced Security**: Multi-layered spam protection system
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
- **Security**: Math Questions + Time-based validation
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
   git clone https://github.com/arsph/Portfolio.git
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
│   ├── actions.ts         # Server actions with spam protection
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
│   ├── ContactForm.tsx   # Contact form with advanced spam protection
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
- Social media links

### 👨‍💻 About Section
- Personal bio and background
- Professional summary
- Key achievements and skills
- Contact information

### 🛠️ Skills Section
- Technical skills showcase
- Experience levels with progress indicators

### 💼 Portfolio Section
- Project descriptions in English and German
- Live demo links and GitHub repositories


### 📧 Contact Section
- Contact information
- Secure contact form with advanced spam protection
- Email

## 🔒 Advanced Security Features

### 🧮 Math Questions + Time-based Validation
The contact form uses a sophisticated dual-layer spam protection system:

#### **Math Questions:**
- **Random Generation**: Creates simple addition/subtraction problems (1-10)
- **User-Friendly**: Easy for humans, challenging for bots
- **Multilingual**: "Security Question" in English/German
- **Auto-Refresh**: New question after successful submission
- **Validation**: Both client-side and server-side validation

#### **Time-based Validation:**
- **Minimum Time**: 3 seconds required to fill out form
- **Form Start Tracking**: Records when user starts filling form
- **Submission Time**: Validates time spent before submission
- **User-Friendly Messages**: Clear error messages in both languages
- **Server-side Backup**: Additional validation on the server

## 📊 Analytics & Tracking

### Google Analytics 4
- **Page Views**: Automatic tracking
- **Custom Events**: Project clicks, form interactions
- **User Behavior**: Track user engagement and session duration
- **Performance**: Monitor site performance and Core Web Vitals

### Event Tracking
- Project click tracking
- Contact form interactions (start, complete, error)
- Language switching
- Social media clicks
- Spam protection events (math question attempts, time validation)

## 🌐 Multilingual Support

- **Languages**: English (en) and German (de)
- **Implementation**: Custom language switching with React context
- **Components**: All text content is localized
- **SEO**: Proper language meta tags and hreflang attributes
- **Forms**: Error messages and validation in both languages
- **Security**: Spam protection messages in both languages

## 🚀 Deployment (Vercel)

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

## 📞 Contact Information

- **Email**: info@arsalanparham.com
- **Website**: https://arsalanparham.com
- **LinkedIn**: [linkedin.com/in/arsalanph](https://www.linkedin.com/in/arsalanph)
- **GitHub**: [github.com/arsph](https://github.com/arsph)

## 🔧 Troubleshooting

### Common Issues
1. **Email Delivery**: Check Resend dashboard for delivery logs
2. **Form Submission**: Check Vercel function logs for server-side errors
3. **Build Errors**: Ensure all environment variables are set in Vercel
4. **Deployment**: Check Vercel build logs for deployment issues
5. **Spam Protection**: Check server logs for validation data

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and deployed on Vercel**

## 🚀 Quick Start

1. Clone the repository
2. Run `npm install`
3. Set up environment variables
4. Run `npm run dev` for development
5. Deploy to Vercel for production

**Live at: https://arsalanparham.com** 🌐

---

*For business inquiries or collaboration opportunities, please reach out via the contact form or email.*