import { useState } from 'react';

export default function CompatibilityChecker() {
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [result, setResult] = useState<{ score: number; message: string } | null>(null);

  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

  const checkCompatibility = () => {
    if (sign1 && sign2) {
      const score = Math.floor(Math.random() * 40) + 60;
      const messages = [
        'Strong cosmic connection! Your energies align beautifully.',
        'Great potential for harmony and understanding.',
        'Complementary energies create balance in your relationship.',
        'Passionate connection with room for growth.'
      ];
      setResult({ score, message: messages[Math.floor(Math.random() * messages.length)] });
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
      <h2 className="text-3xl font-bold text-gold-400 mb-6 text-center">Compatibility Checker</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <select value={sign1} onChange={(e) => setSign1(e.target.value)} className="px-4 py-3 bg-purple-900/30 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-gold-400">
          <option value="">Select First Sign</option>
          {signs.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={sign2} onChange={(e) => setSign2(e.target.value)} className="px-4 py-3 bg-purple-900/30 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-gold-400">
          <option value="">Select Second Sign</option>
          {signs.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <button onClick={checkCompatibility} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all mb-6">Check Compatibility</button>
      {result && (
        <div className="bg-purple-900/30 rounded-lg p-6 border border-gold-400/30">
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-gold-400">{result.score}%</div>
            <p className="text-purple-300 text-sm mt-2">Compatibility Score</p>
          </div>
          <p className="text-gray-300 text-center">{result.message}</p>
        </div>
      )}
    </div>
  );
}
