import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Events from './components/sections/Events';
import Music from './components/sections/Music';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Music />
      <Events />
    </main>
  );
}
