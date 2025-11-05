import { useState } from 'react';

interface KundliFormProps {
  onSubmit: (data: { name: string; date: string; time: string; location: string }) => void;
}

export default function KundliForm({ onSubmit }: KundliFormProps) {
  const [formData, setFormData] = useState({ name: '', date: '', time: '', location: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.date && formData.time && formData.location) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-md rounded-2xl p-8 border border-gold-400/30 shadow-2xl">
      <h2 className="text-3xl font-bold text-gold-400 mb-6 text-center">Generate Your Kundli</h2>
      <div className="space-y-4">
        <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-purple-900/30 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-gold-400" required />
        <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-3 bg-purple-900/30 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-gold-400" required />
        <input type="time" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full px-4 py-3 bg-purple-900/30 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-gold-400" required />
        <input type="text" placeholder="Birth Location" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-3 bg-purple-900/30 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-gold-400" required />
        <button type="submit" className="w-full bg-gradient-to-r from-gold-400 to-yellow-500 text-purple-900 font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-gold-400/50 transition-all">Generate Chart</button>
      </div>
    </form>
  );
}
