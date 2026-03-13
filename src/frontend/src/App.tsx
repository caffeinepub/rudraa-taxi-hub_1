import { Car, Clock, Instagram, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    role="img"
    aria-label="WhatsApp"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const features = [
  {
    icon: Clock,
    title: "24/7 Service Available",
    desc: "Round-the-clock taxi service, every day of the year. We never sleep so you can travel whenever you need.",
  },
  {
    icon: MapPin,
    title: "All Over India",
    desc: "From the mountains of Himachal to the beaches of Kerala — we cover every corner of incredible India.",
  },
  {
    icon: Phone,
    title: "Anytime Response",
    desc: "Instant booking confirmation. Our team responds within minutes, no matter the hour.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-gold">
            <Car className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-wider text-white">
            RUDRAA <span className="text-gold">TAXI HUB</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a
            href="#features"
            className="text-white/80 hover:text-gold transition-colors"
            data-ocid="nav.link"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-gold transition-colors"
            data-ocid="nav.link"
          >
            Contact
          </a>
          <a
            href="tel:9714169097"
            className="flex items-center gap-2 bg-gold text-black px-5 py-2 rounded-full font-bold hover:bg-gold-light transition-colors shadow-gold"
            data-ocid="nav.primary_button"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        data-ocid="hero.section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/taxi-bg.dim_1920x1080.jpg')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        {/* Gold light flare */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold px-5 py-2 rounded-full text-sm font-bold mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full pulse-green" />
            Available 24/7 Across India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 gold-glow"
          >
            Your Trusted
            <br />
            <span className="text-gold">Travel Partner</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/85 font-medium mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Safe, Reliable &amp; Comfortable Rides Across India
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="tel:9714169097"
              data-ocid="hero.primary_button"
              className="flex items-center gap-3 bg-gold text-black px-8 py-4 rounded-full text-lg font-black hover:bg-gold-light transition-all shadow-gold-lg hover:shadow-gold hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919714169097"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.secondary_button"
              className="flex items-center gap-3 bg-whatsapp text-white px-8 py-4 rounded-full text-lg font-black hover:bg-green-400 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {[
              { val: "10K+", label: "Happy Rides" },
              { val: "28", label: "States Covered" },
              { val: "24/7", label: "Always On" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gold">
                  {s.val}
                </div>
                <div className="text-sm md:text-base text-white/70 font-medium mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        data-ocid="features.section"
        className="py-24 px-6 md:px-12 relative"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #111008 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Excellence in Every Ride
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group p-8 rounded-2xl border border-gold/20 bg-white/5 backdrop-blur-sm hover:border-gold/50 hover:bg-white/10 transition-all"
                data-ocid={`features.item.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/25 transition-colors">
                  <f.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {f.title}
                </h3>
                <p className="text-white/65 text-base leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 md:px-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #111008 0%, #0d0b02 50%, #080700 100%)",
        }}
      >
        {/* decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
              Reach Out
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Get In Touch
            </h2>
            <p className="text-white/60 text-lg mt-4">
              Our team is always ready to assist you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Deep Popat */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-ocid="contact.card.1"
              className="p-8 rounded-2xl border border-gold/25 bg-white/5 backdrop-blur-sm hover:border-gold/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-black font-black text-xl shadow-gold">
                  DP
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Deep Popat</h3>
                  <p className="text-gold text-sm font-semibold">
                    Co-Founder & Manager
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80 text-lg font-semibold mb-6">
                <Phone className="w-5 h-5 text-gold" />
                <span>97141 69097</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="tel:9714169097"
                  data-ocid="contact.primary_button"
                  className="flex-1 flex items-center justify-center gap-2 bg-gold text-black py-3 rounded-xl font-bold text-base hover:bg-gold-light transition-all hover:scale-105 active:scale-95 shadow-gold"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href="https://wa.me/919714169097"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.secondary_button"
                  className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-white py-3 rounded-xl font-bold text-base hover:bg-green-400 transition-all hover:scale-105 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Komal Popat */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-ocid="contact.card.2"
              className="p-8 rounded-2xl border border-gold/25 bg-white/5 backdrop-blur-sm hover:border-gold/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-black font-black text-xl shadow-gold">
                  KP
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Komal Popat</h3>
                  <p className="text-gold text-sm font-semibold">
                    Co-Founder & Manager
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80 text-lg font-semibold mb-6">
                <Phone className="w-5 h-5 text-gold" />
                <span>99137 68846</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="tel:9913768846"
                  data-ocid="contact.primary_button"
                  className="flex-1 flex items-center justify-center gap-2 bg-gold text-black py-3 rounded-xl font-bold text-base hover:bg-gold-light transition-all hover:scale-105 active:scale-95 shadow-gold"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href="https://wa.me/919913768846"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.secondary_button"
                  className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-white py-3 rounded-xl font-bold text-base hover:bg-green-400 transition-all hover:scale-105 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center bg-black/60">
        <div className="max-w-4xl mx-auto">
          {/* Instagram */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/rudraa_taxi_hub"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.link"
            className="inline-flex items-center gap-3 mb-8 group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
              }}
            >
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white/50 text-xs uppercase tracking-widest font-bold">
                Follow Us
              </p>
              <p className="text-white text-lg font-bold group-hover:text-gold transition-colors">
                @rudraa_taxi_hub
              </p>
            </div>
          </motion.a>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-24 bg-white/10" />
            <Car className="w-5 h-5 text-gold" />
            <div className="h-px flex-1 max-w-24 bg-white/10" />
          </div>

          <p className="text-white font-black text-lg tracking-wider mb-2">
            RUDRAA <span className="text-gold">TAXI HUB</span>
          </p>
          <p className="text-white/40 text-sm mb-4">
            Your Trusted Travel Partner Across India
          </p>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Rudraa Taxi Hub. All rights reserved.
          </p>
          <p className="text-white/20 text-xs mt-2">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/40 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
