# Sting Studio

![Sting Studio Logo](public/Sting-logo.png)

## 📋 Description

Sting Studio is a modern and responsive website for a beauty studio that offers barbershop, tattoo, aesthetics, and piercing services. The project was developed with Next.js 15 and features an elegant interface with smooth animations and contemporary design.

## ✨ Features

- **Responsive Design**: Interface optimized for desktop, tablet, and mobile
- **Smooth Animations**: Implemented with Framer Motion for an engaging visual experience
- **Booking System**: Integrated form for scheduling appointments
- **Smooth Navigation**: Smooth scrolling between sections with anchors
- **Optimized Performance**: Uses Turbopack for fast development
- **SEO Optimized**: Meta tags and semantic structure for better indexing
- **Analytics**: Vercel Analytics integration
- **Cookie Management**: Cookie consent system with C15T

## 🛠️ Technologies Used

### Frontend
- **Next.js 15.2.3** - React framework with App Router
- **React 19** - User interface library
- **TypeScript 5** - Static typing
- **Tailwind CSS 4** - Utility CSS framework
- **Framer Motion** - Animation library

### UI Components
- **Radix UI** - Accessible and customizable components
- **Lucide React** - Modern icons
- **Sonner** - Toast notification system
- **React Day Picker** - Date picker
- **Swiper** - Image carousel

### State and Validation
- **Zustand** - State management
- **Zod** - Schema validation

### Deploy and Analytics
- **Vercel** - Deployment platform
- **Vercel Analytics** - Performance metrics

## 🚀 How to Run

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/Sting-studio.git
cd Sting-studio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure environment variables:
```bash
# Create a .env.local file in the project root
NEXT_PUBLIC_C15T_URL=your_c15t_url
NEXT_PUBLIC_API_URL=your_booking_api_url
```

4. Run the project in development mode:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Starts development server with Turbopack
- `npm run build` - Creates production build
- `npm run start` - Starts production server

## 📁 Project Structure

```
Sting-studio/
├── public/                 # Static files
│   ├── imgs/              # Slider images
│   ├── videos/            # Background videos
│   └── Sting-logo.png    # Studio logo
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Main layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   ├── ui/            # Base components (Button, Input, etc.)
│   │   ├── hero.tsx       # Hero section with video
│   │   ├── aboutSection.tsx
│   │   ├── barberSection.tsx
│   │   ├── tattooSection.tsx
│   │   ├── piercingSection.tsx
│   │   └── footer.tsx
│   ├── hooks/             # Custom hooks
│   ├── data/              # Static data
│   └── lib/               # Utilities
├── package.json
└── next.config.ts
```

## 🎨 Website Sections

1. **Hero** - Background video with booking call-to-action
2. **About Studio** - Information about Sting Studio
3. **Barbershop** - Barbershop services
4. **Tattoos** - Gallery and tattoo information
5. **Piercings** - Piercing services
6. **Footer** - Contact information and links

## 🔧 Configurations

### Next.js
- Configured with Turbopack for faster development
- Support for remote images from Cloudinary
- Rewrites for C15T API

### Tailwind CSS
- Custom configuration with Bricolage Grotesque font
- Custom color system
- CSS animations with tw-animate-css

## 📱 Responsiveness

The website is fully responsive and optimized for:
- **Desktop**: Complete layout with all features
- **Tablet**: Grid and spacing adaptations
- **Mobile**: Mobile navigation with hamburger menu

## 🚀 Deployment

The project is configured for deployment on Vercel:

1. Connect your repository to Vercel
2. Configure environment variables
3. Automatic deployment on each push to main branch

## 📊 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Core Web Vitals**: Optimized web performance metrics
- **Bundle Size**: Optimized and split code

## 📄 License

This project is under the MIT license. See the `LICENSE` file for more details.
---

Developed with ❤️ for Sting Studio 