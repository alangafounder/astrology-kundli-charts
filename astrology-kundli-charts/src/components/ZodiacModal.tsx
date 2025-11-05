interface ZodiacModalProps {
  sign: { name: string; dates: string; element: string; ruling: string; image: string; description: string } | null;
  onClose: () => void;
}

export default function ZodiacModal({ sign, onClose }: ZodiacModalProps) {
  if (!sign) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 rounded-2xl p-8 max-w-2xl w-full border border-gold-400/50 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-4xl font-bold text-gold-400">{sign.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <img src={sign.image} alt={sign.name} className="w-full h-64 object-cover rounded-xl border-2 border-gold-400" />
          <div className="space-y-4">
            <div><span className="text-purple-300">Dates:</span> <span className="text-white font-semibold">{sign.dates}</span></div>
            <div><span className="text-purple-300">Element:</span> <span className="text-white font-semibold">{sign.element}</span></div>
            <div><span className="text-purple-300">Ruling Planet:</span> <span className="text-white font-semibold">{sign.ruling}</span></div>
            <p className="text-gray-300 leading-relaxed">{sign.description}</p>
            <p className="text-gray-400 text-sm">Click outside to close</p>
          </div>
        </div>
      </div>
    </div>
  );
}
