# Hills Project

A modern web application combining a Next.js frontend for a professional DJ website and a Payload CMS backend for content management.

## Project Structure

This monorepo contains two main applications:

### 1. Hills DJ Website (`/hills-dj`)
A professional DJ website built with:
- Next.js
- TypeScript
- TailwindCSS
- Framer Motion

Features:
- 🎵 Full-screen video background with audio controls
- 🎨 Modern, responsive design
- ✨ Smooth animations
- 📱 Mobile-friendly navigation
- 🎉 Event showcase section
- 🎧 Music portfolio with YouTube integration
- 📞 Contact form

### 2. Payload CMS (`/payload-cms`)
A headless CMS to manage the website content, built with:
- Payload CMS
- Next.js
- TypeScript
- MongoDB

Features:
- 📝 Content management for events, music, and pages
- 🖼️ Media library
- 👥 User management
- 🔑 Authentication
- 🚀 GraphQL API

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Docker and Docker Compose
- MongoDB (if running CMS locally)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/selinwilliams/hills-dj.git
cd hills-dj
```

2. Set up the DJ website:
```bash
cd hills-dj
npm install
npm run dev
```
The DJ website will be available at `http://localhost:3000`

3. Set up Payload CMS:
```bash
cd ../payload-cms
cp .env.example .env  # Configure your environment variables
npm install
npm run dev
```
The CMS will be available at `http://localhost:3001/admin`

### Using Docker Compose

To run both applications using Docker:

```bash
docker-compose up -d
```

This will start:
- The DJ website at `http://localhost:3000`
- Payload CMS at `http://localhost:3001`
- MongoDB database

## Development

- Frontend changes should be made in the `hills-dj` directory
- CMS and backend changes should be made in the `payload-cms` directory
- Global configuration changes can be made in the root `docker-compose.yml`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Selin Williams - [GitHub](https://github.com/selinwilliams) 