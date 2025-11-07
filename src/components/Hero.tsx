import { motion } from "framer-motion";
import heroImage from "@/assets/hero-limo.jpg";

const fadeUp = (delay = 0.2) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury limousine"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp(0.2)} className="max-w-3xl">
            <motion.h1
              {...fadeUp(0.4)}
              className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6"
            >
              Experience Luxury on Every Mile
            </motion.h1>

            <motion.p
              {...fadeUp(0.6)}
              className="font-sans text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl"
            >
              Premier Limousine Services For Every Occasion — Corporate or
              Personal. Travel With Elegance, Arrive In Style.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
