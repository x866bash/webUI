# Website UI Themed Web Application

![Website UI Preview](https://img.shields.io/badge/Status-Ready%20for%20Production-brightgreen)
![Build Status](https://img.shields.io/badge/Build-Passing-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

Situs web bertema B ajah yang menampilkan animasi api tingkat UI, transformasi karakter, dan efek morfisme kaca. Dibangun dengan teknologi web modern untuk kinerja dan dampak visual yang optimal.

## 🎯 Features

- **🔥 Animasi Api UI**: Efek api masuk/keluar layar penuh
- **⚡ Transformasi Karakter**: Karakter dengan siklus transformasi 10 detik
- **💎 Desain Glassmorphism**: Wadah kaca transparan modern
- **📱 Desain Responsif**: Dioptimalkan untuk semua perangkat (desktop, tablet, seluler)
- **🚀 Performa Cepat**: Ukuran bundel yang dioptimalkan (94,85 kB terkompresi)
- **🎨 UI Modern**: Dibuat dengan Shadcn/UI dan Tailwind CSS

## 🛠️  Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI components
- **Build Tool**: Vite
- **Animations**: Custom CSS animations + React transitions
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)

## 📦 Quick Start

### Prasyarat

- Node.js 18+ 
- pnpm (recommended) or npm

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/x866bash/webUI
cd webUI

# Install dependencies
pnpm install
# or
npm install
```

### 2. Development

```bash
# Start development server
pnpm run dev
# or
npm run dev

# Open http://localhost:5173 di browser
```

### 3. Production Build

```bash
# Build for production
pnpm run build
# or
npm run build

# Pratinjau produksi build
pnpm run preview
# or
npm run preview
```

## 🐳 Docker Setup

### Option 1: Using Docker Compose (Recommended)

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  website-ui:
    build: .
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Create `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# Production stage
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Run with Docker Compose:

```bash
# Build and start
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

### Option 2: Direct Docker Commands

```bash
# Build image
docker build -t website-ui .

# Run container
docker run -d -p 3000:80 --name website-ui-app website-ui

# View logs
docker logs website-ui-app

# Stop container
docker stop website-ui-app
```

## 🚀 Deployment Options

### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or use the deploy button
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/website-ui)

### 2. Netlify

```bash
# Build the project
pnpm run build

# Drag and drop the 'dist' folder to Netlify
# Or connect your Git repository
```

### 3. GitHub Pages

```bash
# Install gh-pages
pnpm add -D gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
pnpm run build && pnpm run deploy
```

### 4. AWS S3 + CloudFront

```bash
# Install AWS CLI and configure credentials
aws configure

# Build project
pnpm run build

# Sync to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 📁 Project Structure

```
webUI/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Shadcn/UI components
│   │   ├── BorutoCharacter.tsx
│   │   ├── FireAnimation.tsx
│   │   └── GlassContainer.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Main homepage
│   │   └── NotFound.tsx   # 404 page
│   ├── styles/            # CSS files
│   │   └── animations.css # Custom animations
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── docker-compose.yml     # Docker Compose config
├── Dockerfile             # Docker build instructions
├── nginx.conf             # Nginx configuration
├── vercel.json            # Vercel deployment config
├── tailwind.config.ts     # Tailwind CSS config
├── vite.config.ts         # Vite build config
└── package.json           # Dependencies and scripts
```

## 🎮 Usage Guide

### Fire Animation Controls
- **Automatic**: Animasi api dipicu saat halaman dimuat
- **Manual**: Click "INFO WEBSITE" to trigger fire entrance
- **Exit**: Click "KEMBALI" to trigger fire exit animation

### Character Transformations
- **Character**: Automatically cycles through transformation every 10 seconds
- **Karma Mode**: Special visual effects during transformation phase
- **Responsive**: Adapts to different screen sizes

### Interactive Elements
- **Glass Containers**: Hover effects with enhanced glassmorphism
- **Buttons**: Smooth transitions and fire-themed styling
- **Mobile Touch**: Optimized for touch interactions on mobile devices

## 🔧 Konfigurasi

### Environment Variables

Create `.env.local` for custom configuration:

```env
# App Configuration
VITE_APP_TITLE="Website UI"
VITE_APP_DESCRIPTION="Naruto/Boruto Themed Web Application"

# Animation Settings
VITE_FIRE_DURATION=3000
VITE_TRANSFORMATION_INTERVAL=10000

# Performance Settings
VITE_ENABLE_ANIMATIONS=true
VITE_OPTIMIZE_IMAGES=true
```

### Customization

#### Colors (tailwind.config.ts)
```typescript
// Add custom colors
colors: {
  naruto: {
    orange: '#FF6B35',
    blue: '#004E89',
    yellow: '#FFD23F'
  }
}
```

#### Animations (src/styles/animations.css)
```css
/* Custom animation duration */
.fire-animation {
  animation-duration: 2s; /* Change from 3s to 2s */
}
```

## 📊 Performance Metrics

- **Bundle Size**: 295.69 kB (94.85 kB gzipped)
- **CSS Size**: 61.85 kB (11.10 kB gzipped)
- **Build Time**: ~3.26s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

2. **Development Server Won't Start**
   ```bash
   # Check port availability
   lsof -ti:5173
   # Kill process if needed
   kill -9 <PID>
   ```

3. **Docker Build Issues**
   ```bash
   # Clear Docker cache
   docker system prune -a
   # Rebuild without cache
   docker build --no-cache -t website-ui .
   ```

### Debug Mode

```bash
# Enable verbose logging
DEBUG=* pnpm run dev

# Check bundle analysis
pnpm add -D rollup-plugin-visualizer
# Add to vite.config.ts and run build
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/x866bash/webUI?tab=MIT-1-ov-file) file for details.

## 🙏 Acknowledgments

- **Naruto/Boruto** - Character inspiration and themes
- **Shadcn/UI** - Beautiful UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/x866bash/webUI/issues)
- **Discussions**: [GitHub Discussions](https://github.com/x866bash/webUI/discussions)
- **Email**: x866bash.github@zohomail.com

---

**Made with ❤️  Create by [x866bash]**

*Ready to deploy and share your themed website with the world!*
