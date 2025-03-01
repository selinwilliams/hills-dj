'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/dj-about.jpg"
              alt="DJ Hills performing"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">About DJ Hills</h2>
              <div className="w-20 h-1 bg-white mb-6" />
              <p className="text-gray-300 mb-6">
                With over a decade of experience in the music industry, DJ Hills has
                become synonymous with creating unforgettable moments through
                carefully curated soundtracks. Specializing in weddings, corporate
                events, and private parties, we bring technical expertise and
                musical artistry to every performance.
              </p>
              <p className="text-gray-300 mb-6">
                Our mission is simple: to transform your event into an extraordinary
                experience through the power of music. We pride ourselves on reading
                the crowd, seamlessly mixing genres, and keeping the dance floor
                packed all night long.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 text-center"
            >
              <div className="p-4 rounded-lg bg-white/5">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-gray-400">Events</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
