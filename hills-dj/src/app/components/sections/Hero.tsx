'use client';

import { motion } from 'framer-motion';
import VideoBackground from '../layout/VideoBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-white">
      {/* Background video */}
      <VideoBackground videoUrl="https://storage.sbtl.dev/spookyspot/AQPOrOAv3MPIcJIJQc-S8PHTXiz1IO66uOfQVo3s7WbILpdIWN6hPQKAeHZ-L973SvCpTF9VDTNWGMwuZ1QTBlso4p8yYU861dAo-k4.mp4" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
            DJ HILLS
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Creating unforgettable moments through music
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Book Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Events
            </motion.button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-20 flex gap-6"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: '#1DA1F2' }}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V8.192C10 6.307 10.721 5 13.066 5c1.071 0 1.934.083 1.934.083V8z"/>
            </svg>
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: '#1DA1F2' }}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544A8.127 8.127 0 0 1 5.5 16.898a5.778 5.778 0 0 0 4.252-1.189 2.879 2.879 0 0 1-2.684-1.995 2.88 2.88 0 0 0 1.298-.049c-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359a2.877 2.877 0 0 1-.889-3.835 8.153 8.153 0 0 0 5.92 3.001 2.876 2.876 0 0 1 4.895-2.62 5.73 5.73 0 0 0 1.824-.697 2.884 2.884 0 0 1-1.263 1.589 5.73 5.73 0 0 0 1.649-.453 5.765 5.765 0 0 1-1.433 1.489z"/>
            </svg>
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: '#171515' }}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.374 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.626-5.374-12-12-12z"/>
            </svg>
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, color: '#0088cc' }}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.568 7.341c-.116.543-.412.674-.836.419l-2.308-1.7-1.112 1.072c-.124.124-.227.227-.468.227l.167-2.379 4.332-3.916c.189-.168-.041-.262-.291-.094L7.651 12.74l-2.3-.715c-.501-.156-.51-.501.104-.741l8.964-3.459c.417-.156.785.096.475.396z"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
