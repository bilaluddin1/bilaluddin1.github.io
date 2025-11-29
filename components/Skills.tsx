import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS_DATA } from '../constants';
import { Activity } from 'lucide-react';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const highlightTerms = ['AppSec', 'Cloud Security', 'DevSecOps'];
    const skillName = payload[0].payload.subject;
    const isHighlighted = highlightTerms.includes(skillName);
    
    return (
      <div className="bg-gray-900 border-2 border-cyber-neon rounded-lg px-4 py-3 shadow-xl shadow-cyber-neon/30">
        <p className={`font-bold text-lg mb-1 ${isHighlighted ? 'text-cyber-neon' : 'text-white'}`}>
          {skillName}
        </p>
        <p className="text-cyber-neon font-mono">
          Proficiency: <span className="font-bold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-mono font-bold text-cyber-neon flex items-center gap-3 mb-12">
        <Activity className="w-8 h-8" />
        <span>Skills & Expertise</span>
      </h2>

      <div className="h-[500px] w-full max-w-3xl bg-gray-900/30 rounded-xl border border-gray-800 backdrop-blur-sm p-4 relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
            <PolarGrid stroke="#4B5563" strokeWidth={1.5} />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#D1D5DB', fontSize: 12, fontWeight: 500 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Proficiency"
              dataKey="A"
              stroke="#00f3ff"
              strokeWidth={3}
              fill="#00f3ff"
              fillOpacity={0.4}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};