'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

const Music = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const tabs = [
    { id: 'featured', label: 'Featured Mixes' },
    { id: 'recent', label: 'Recent Sets' },
    { id: 'popular', label: 'Most Popular' },
  ];

  // Sample playlists - replace with actual YouTube playlist IDs
  const playlists = {
    featured: [
      {
        id: 1,
        title: "Summer Vibes Mix 2024",
        description: "A perfect blend of house and tropical beats",
        youtubeId: "YOUR_YOUTUBE_ID_1",
        duration: "1:22:45",
        genre: "House / Tropical",
      },
      {
        id: 2,
        title: "Electronic Dance Anthems",
        description: "High-energy mix of the latest EDM hits",
        youtubeId: "YOUR_YOUTUBE_ID_2",
        duration: "1:45:30",
        genre: "EDM",
      },
    ],
    recent: [
      {
        id: 3,
        title: "Club Night Live Set",
        description: "Recorded live at Skyline Lounge",
        youtubeId: "YOUR_YOUTUBE_ID_3",
        duration: "2:15:00",
        genre: "Tech House",
      },
    ],
    popular: [
      {
        id: 4,
        title: "Best of 2023 Mix",
        description: "Top tracks and remixes from last year",
        youtubeId: "YOUR_YOUTUBE_ID_4",
        duration: "1:58:20",
        genre: "Mixed",
      },
    ],
  };

  return (
    <section id="music" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Latest Mixes</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest mixes and live sets. From energetic club nights to
            chilled beach sessions, there's something for every mood.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-white/10 p-1 bg-white/5">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Playlists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {playlists[activeTab as keyof typeof playlists].map((mix, index) => (
            <motion.div
              key={mix.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 rounded-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <YouTube
                  videoId={mix.youtubeId}
                  className="w-full"
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      controls: 1,
                      modestbranding: 1,
                    },
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{mix.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{mix.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{mix.genre}</span>
                  <span>{mix.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spotify/SoundCloud Integration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Follow Me On</h3>
          <div className="flex justify-center gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1DB954] text-white px-8 py-3 rounded-full inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF5500] text-white px-8 py-3 rounded-full inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.093-.09-.09-.093m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c0 .119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.105.255-.255l.15-2.473-.15-5.307c0-.148-.12-.254-.271-.254l.016-.015zm1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952"/></svg>
              SoundCloud
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Music;
