'use client';

import { motion } from 'framer-motion';

// This will be replaced with CMS data later
const sampleEvents = [
  {
    id: 1,
    title: "Summer Beach Party",
    date: "2024-06-15",
    time: "18:00",
    location: "Sunset Beach Club",
    description: "Join us for an unforgettable evening of music and dancing by the ocean.",
    image: "/images/event-1.jpg",
    ticketLink: "#",
  },
  {
    id: 2,
    title: "Club Night Special",
    date: "2024-06-22",
    time: "22:00",
    location: "Skyline Lounge",
    description: "Experience the best of electronic dance music at the city's premier venue.",
    image: "/images/event-2.jpg",
    ticketLink: "#",
  },
  {
    id: 3,
    title: "Wedding Reception",
    date: "2024-07-01",
    time: "19:00",
    location: "Grand Plaza Hotel",
    description: "Private event - Creating magical moments for the special day.",
    image: "/images/event-3.jpg",
    ticketLink: "#",
  },
];

const Events = () => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join me at these upcoming events and experience the magic of music.
            From intimate venues to grand celebrations, each event is crafted to create unforgettable memories.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">{formatDate(event.date)}</div>
                  <div className="text-sm opacity-75">{event.time}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{event.location}</p>
                <p className="text-gray-300 mb-6">{event.description}</p>
                <div className="flex justify-between items-center">
                  <motion.a
                    href={event.ticketLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Get Tickets
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors"
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
