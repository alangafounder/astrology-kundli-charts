interface PlanetCardProps {
  name: string;
  position: string;
  influence: string;
  image: string;
}

export default function PlanetCard({ name, position, influence, image }: PlanetCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20">
      <div className="w-16 h-16 mx-auto mb-3">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>
      <h4 className="text-lg font-bold text-gold-400 text-center mb-2">{name}</h4>
      <p className="text-purple-300 text-xs text-center mb-2">{position}</p>
      <p className="text-gray-400 text-xs text-center leading-relaxed">{influence}</p>
    </div>
  );
}
