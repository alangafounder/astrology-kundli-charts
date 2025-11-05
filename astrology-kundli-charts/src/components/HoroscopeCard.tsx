interface HoroscopeCardProps {
  sign: string;
  date: string;
  prediction: string;
  lucky: string;
  color: string;
}

export default function HoroscopeCard({ sign, date, prediction, lucky, color }: HoroscopeCardProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-lg p-5 border border-purple-400/20 hover:border-purple-400/50 transition-all">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-gold-400">{sign}</h3>
        <span className="text-xs text-purple-300">{date}</span>
      </div>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{prediction}</p>
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div>
          <span className="text-purple-400">Lucky Number:</span>
          <p className="text-white font-semibold">{lucky}</p>
        </div>
        <div>
          <span className="text-purple-400">Lucky Color:</span>
          <p className="text-white font-semibold">{color}</p>
        </div>
      </div>
    </div>
  );
}
