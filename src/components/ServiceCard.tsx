import React from 'react';
import { ArrowRight, BrainCircuit, Code2, BarChart3, Cloud } from 'lucide-react';
import type { ServiceItem } from '../config/site';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
}) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#B58B48]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#B58B48]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#B58B48]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#B58B48]" />;
      default:
        return <BrainCircuit className="w-5 h-5 text-[#B58B48]" />;
    }
  };

  return (
    <div
      onClick={() => onSelectService(service.name)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectService(service.name);
        }
      }}
      className="group bg-white rounded-2xl border border-[#E7E4DD] p-7 flex flex-col justify-between h-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B58B48]/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B58B48]"
      aria-label={`Select service: ${service.name}`}
    >
      <div>
        {/* Pale Champagne Icon Circle */}
        <div className="w-12 h-12 rounded-full bg-[#F4E8D3] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
          {getIcon(service.iconName)}
        </div>

        {/* Navy Title */}
        <h3 className="font-heading font-bold text-lg text-[#142438] mb-3 group-hover:text-[#B58B48] transition-colors">
          {service.name}
        </h3>

        {/* Slate Description */}
        <p className="text-[#64748B] text-sm leading-relaxed mb-6">
          {service.shortDesc}
        </p>
      </div>

      {/* Bottom Arrow Indicator */}
      <div className="pt-2 flex items-center text-[#B58B48] font-medium text-xs gap-1 group-hover:gap-2 transition-all">
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};
