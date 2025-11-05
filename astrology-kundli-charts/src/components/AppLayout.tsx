import { useState } from 'react';
import ZodiacCard from './ZodiacCard';
import HoroscopeCard from './HoroscopeCard';
import PlanetCard from './PlanetCard';
import KundliForm from './KundliForm';
import CompatibilityChecker from './CompatibilityChecker';
import ZodiacModal from './ZodiacModal';
import { zodiacSigns } from '@/data/zodiacData';
import { dailyHoroscopes } from '@/data/horoscopeData';
import { planets } from '@/data/planetData';

export default function AppLayout() {
  const [selectedSign, setSelectedSign] = useState<typeof zodiacSigns[0] | null>(null);
  const [showKundli, setShowKundli] = useState(false);
  const [kundliData, setKundliData] = useState<any>(null);

  const handleKundliSubmit = (data: any) => {
    setKundliData(data);
    setShowKundli(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a1a2e] to-[#16213e]">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://d64gsuwffb70l.cloudfront.net/690ad242e03b684a78ce42e6_1762316910241_1f140d79.webp" alt="Cosmic" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-400 mb-6 animate-pulse">Cosmic Kundli</h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">Unlock the secrets of the universe through ancient Vedic wisdom</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => document.getElementById('kundli-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-gold-400 to-yellow-500 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-gold-400/50 transition-all">Generate Kundli</button>
            <button onClick={() => document.getElementById('zodiac')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-400 hover:text-purple-900 transition-all">Explore Zodiac</button>
          </div>
        </div>
      </div>

      {/* Zodiac Signs Section */}
      <section id="zodiac" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gold-400 mb-4">Zodiac Signs</h2>
          <p className="text-center text-purple-300 mb-12 text-lg">Discover the cosmic energies that shape your destiny</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {zodiacSigns.map((sign) => (
              <ZodiacCard key={sign.name} {...sign} onClick={() => setSelectedSign(sign)} />
            ))}
          </div>
        </div>
      </section>

      {/* Daily Horoscopes */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gold-400 mb-4">Daily Horoscopes</h2>
          <p className="text-center text-purple-300 mb-12 text-lg">Your cosmic guidance for today</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyHoroscopes.map((horoscope) => (
              <HoroscopeCard key={horoscope.sign} {...horoscope} />
            ))}
          </div>
        </div>
      </section>

      {/* Kundli Form */}
      <section id="kundli-form" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <KundliForm onSubmit={handleKundliSubmit} />
        </div>
      </section>

      {/* Planetary Positions */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gold-400 mb-4">Planetary Transits</h2>
          <p className="text-center text-purple-300 mb-12 text-lg">Current cosmic influences</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {planets.map((planet) => (
              <PlanetCard key={planet.name} {...planet} />
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Checker */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <CompatibilityChecker />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-purple-900/30 to-black py-12 px-4 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div><h3 className="text-gold-400 font-bold text-xl mb-4">Cosmic Kundli</h3><p className="text-gray-400 text-sm">Ancient wisdom for modern souls</p></div>
          <div><h4 className="text-purple-300 font-semibold mb-3">Services</h4><ul className="space-y-2 text-gray-400 text-sm"><li className="hover:text-gold-400 cursor-pointer">Birth Chart</li><li className="hover:text-gold-400 cursor-pointer">Horoscope</li><li className="hover:text-gold-400 cursor-pointer">Compatibility</li></ul></div>
          <div><h4 className="text-purple-300 font-semibold mb-3">Learn</h4><ul className="space-y-2 text-gray-400 text-sm"><li className="hover:text-gold-400 cursor-pointer">Vedic Astrology</li><li className="hover:text-gold-400 cursor-pointer">Planets</li><li className="hover:text-gold-400 cursor-pointer">Houses</li></ul></div>
          <div><h4 className="text-purple-300 font-semibold mb-3">Connect</h4><ul className="space-y-2 text-gray-400 text-sm"><li className="hover:text-gold-400 cursor-pointer">About Us</li><li className="hover:text-gold-400 cursor-pointer">Contact</li><li className="hover:text-gold-400 cursor-pointer">Privacy</li></ul></div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-purple-500/20">© 2025 Cosmic Kundli. All rights reserved.</div>
      </footer>

      {selectedSign && <ZodiacModal sign={selectedSign} onClose={() => setSelectedSign(null)} />}
    </div>
  );
}
