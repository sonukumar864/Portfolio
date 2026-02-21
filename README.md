# 🚀 Full Stack Developer Portfolio

A sleek, responsive portfolio website showcasing projects, skills, and contact information with modern animations and interactive UI elements.

## ✨ Features

- **Responsive Design** - Fully responsive across all device sizes
- **Modern UI/UX** - Clean, professional design with subtle animations
- **Interactive Components** - Dynamic typing effects, animated cards, smooth scrolling
- **Project Showcase** - Featured projects with detailed descriptions
- **Tech Stack Display** - Organized technology skills by category
- **Loading Screen** - Elegant loading animation with progress indicator
- **Contact Section** - Easy email copy and social media links

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Framer Motion** - Smooth animations and transitions
- **GSAP** - Advanced animations for loading screen
- **Lucide React & React Icons** - Icon library
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
PORTFOLIO/
│
├── frontend/
│   ├── node_modules/                    # Project dependencies
│   ├── public/                          # Static assets
│   │   ├── Resume.pdf                   # Resume PDF file
│   │   ├── vite.svg                     # Vite logo
│   │   └── index.html                   # Main HTML file
│   │
│   └── src/
│       ├── assets/                      # Images and media files
│       │   ├── careerquill.png          # Project screenshot
│       │   ├── flowmind.png             # Project screenshot
│       │   ├── proctorly.png            # Project screenshot
│       │   ├── hireme.png               # Project screenshot
│       │   ├── profile.png              # Profile image
│       │   └── passport_size.jpg        # Small profile image
│       │
│       ├── components/                  # React components
│       │   ├── ui/                      # Reusable UI components
│       │   │   ├── ProfileCard.css      # Profile card styles
│       │   │   ├── BackgroundCard.css   # Background card styles
│       │   │   ├── ProfileCard.jsx      # Profile card component
│       │   │   └── TextType.jsx         # Typing animation component
│       │   │
│       │   ├── About.jsx                # About section component
│       │   ├── Contact.jsx              # Contact section component
│       │   ├── Footer.jsx               # Footer component
│       │   ├── Hero.jsx                 # Hero section component
│       │   ├── LoadingScreen.jsx        # Loading screen component
│       │   ├── Navbar.jsx               # Navigation bar component
│       │   ├── Projects.jsx             # Projects section component
│       │   └── Stack.jsx                # Tech stack section component
│       │
│       ├── pages/                       # Page components
│       │   └── Portfolio.jsx            # Main portfolio page
│       │
│       ├── App.css                      # Global application styles
│       ├── App.jsx                      # Main App component
│       ├── index.css                    # Base styles and Tailwind imports
│       └── main.jsx                     # Application entry point
│
├── .gitignore                           # Git ignore file
├── .eslintrc.json                       # ESLint configuration
├── index.html                           # Root HTML file (Vite default)
├── package-lock.json                    # NPM lock file
├── package.json                         # Project dependencies and scripts
├── README.md                            # Project documentation
├── vite.config.js                       # Vite configuration
└── .env                                 # Environment variables (optional)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/adityarajsrv/portfolio.git
cd portfolio/frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production
```bash
npm run build
# or
yarn build
```

## 🎨 Components

- **Navbar** - Responsive navigation with mobile menu
- **Hero** - Animated introduction with typing effect
- **About** - Personal info with resume viewer
- **Stack** - Interactive tech stack display with filtering
- **Projects** - Project cards with expandable tech details
- **Contact** - Email copy functionality and social links
- **Background** - Animated gradient background
- **LoadingScreen** - Custom loading animation

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1280px
- Large Desktop: > 1280px

## 🎯 Key Features

- **Smooth Scrolling** - Navigation with scroll offset for fixed navbar
- **Section Observers** - Active navigation highlighting
- **Mobile-Friendly** - Hamburger menu and optimized layouts
- **Performance** - Optimized images and lazy loading
- **Accessibility** - Semantic HTML and ARIA labels

## 🔧 Customization

1. Update personal information in respective components
2. Replace images in `/src/assets/`
3. Modify colors in Tailwind configuration
4. Update project data in `Projects.jsx` and `Stack.jsx`

## 📄 License

This is a personal project for development and portfolio purposes.

---

## ⭐ Support the Project

If you find this project helpful or interesting, please consider giving it a star on GitHub! Your support helps me continue to improve and maintain the project.

---

## 👨‍💻 Author

**Aditya Raj Srivastava**
- GitHub: [@adityarajsrv](https://github.com/adityarajsrv)
- LinkedIn: [Aditya Raj Srivastava](https://www.linkedin.com/in/adityarajsrv)

---
