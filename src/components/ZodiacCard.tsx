interface ZodiacCardProps {
  name: string;
  dates: string;
  element: string;
  ruling: string;
  image: string;
  description: string;
  onClick: () => void;
}

export default function ZodiacCard({ name, dates, element, ruling, image, description, onClick }: ZodiacCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-gold-400 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
    >
      <div className="relative w-24 h-24 mx-auto mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full border-2 border-gold-400" />
      </div>
      <h3 className="text-2xl font-bold text-gold-400 text-center mb-2">{name}</h3>
      <p className="text-purple-200 text-sm text-center mb-3">{dates}</p>
      <div className="space-y-2 text-sm">
        <p className="text-gray-300"><span className="text-gold-400">Element:</span> {element}</p>
        <p className="text-gray-300"><span className="text-gold-400">Ruling:</span> {ruling}</p>
        <p className="text-gray-400 text-xs mt-3 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
