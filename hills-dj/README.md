# DJ Hills - Professional DJ Website

A modern, responsive website for professional DJs built with Next.js and TailwindCSS. Features a stunning video background, music integration, and event management.

## Features

- 🎵 Full-screen video background with audio controls
- 🎨 Modern, responsive design
- ✨ Smooth animations using Framer Motion
- 📱 Mobile-friendly navigation
- 🎉 Event showcase section
- 🎧 Music portfolio with YouTube integration
- 📞 Contact form (coming soon)

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/selinwilliams/hills-dj.git
   ```

2. Install dependencies:
   ```bash
   cd hills-dj
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── layout/       # Layout components
│   │   └── sections/     # Page sections
│   ├── page.tsx          # Main page
│   └── layout.tsx        # Root layout
├── styles/               # Global styles
└── types/               # TypeScript types
```

## Customization

- Replace video URLs in `Hero.tsx`
- Update social media links
- Modify content in each section component
- Customize colors in `tailwind.config.js`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
