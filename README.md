# Signature Generator

![Preview](https://iili.io/3Hi4Sj9.png)

A modern web application that allows users to create, customize, and export beautiful handwritten signatures. Built with React 19, TypeScript, and Vite, this application offers a seamless user experience for generating professional-looking digital signatures.

## ✨ Features

- 🖋️ Create personalized signatures with multiple handwriting styles
- 🎨 Rich customization options:
  - Multiple font choices for different handwriting styles
  - Full color customization with color picker
  - Adjustable signature size and thickness
  - Text styling options (bold, italic)
- 📥 Export options:
  - Download as PNG with transparent background
  - Copy directly to clipboard for easy use
  - High-resolution output for professional use
- 🌓 Light and dark mode support
- 📱 Fully responsive design works on desktop, tablet, and mobile
- ⚡ Optimized performance for smooth interaction
- ♿ Accessibility features built-in

## 🚀 Live Demo

[Check out the live demo](https://signature-generator-mu.vercel.app/) (placeholder link - update with your actual demo URL)

## 🛠️ Tech Stack

- [React 19](https://react.dev/) - Latest version with improved rendering and hooks
- [TypeScript](https://www.typescriptlang.org/) - For type safety and better developer experience
- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Headless UI components for accessibility
- [HTML2Canvas](https://html2canvas.hertzen.com/) - For signature export functionality
- [Canvas Confetti](https://github.com/catdad/canvas-confetti) - For celebration animations
- [React Router](https://reactrouter.com/) - For application routing
- [Zustand](https://github.com/pmndrs/zustand) - Lightweight state management

## 📋 Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher) or yarn (v1.22.0 or higher)

## 🚀 Getting Started

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/devchristian1337/signature-generator.git
   cd signature-generator
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:8080` by default.

### Building for Production

Create a production build:

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
signature-generator/
├── src/                  # Source files
│   ├── components/       # UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and shared logic
│   ├── pages/            # Page components
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── ...configuration files
```

## 📝 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run build:dev` - Create development build
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build

## 🔧 Configuration

The application can be configured by modifying the following files:

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 🌐 Browser Compatibility

The application is tested and works on:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgements

- [Vercel](https://vercel.com) for hosting
- All the open source libraries that made this project possible
