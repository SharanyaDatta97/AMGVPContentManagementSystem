import { 
  Cpu, 
  Leaf, 
  Cog, 
  HeartPulse, 
  CreditCard, 
  Store, 
  Truck, 
  Layers 
} from 'lucide-react';

const industries = [
  { 
    name: "Deeptech / Data Centre / Physical AI", 
    icon: Cpu,
    bg: "bg-amg-teal/5",
    border: "border-amg-teal/20",
    text: "text-amg-teal",
    hoverBg: "group-hover:bg-amg-teal",
    hoverText: "group-hover:text-white"
  },
  { 
    name: "Climate / Sustainability", 
    icon: Leaf,
    bg: "bg-amg-turquoise/10",
    border: "border-amg-turquoise/30",
    text: "text-amg-turquoise",
    hoverBg: "group-hover:bg-amg-turquoise",
    hoverText: "group-hover:text-amg-teal"
  },
  { 
    name: "Hardware / Robotics / Semiconductors", 
    icon: Cog,
    bg: "bg-amg-yellow/10",
    border: "border-amg-yellow/30",
    text: "text-amg-yellow",
    hoverBg: "group-hover:bg-amg-yellow",
    hoverText: "group-hover:text-amg-teal"
  },
  { 
    name: "Life Sciences / Medical Device / Digital Health", 
    icon: HeartPulse,
    bg: "bg-amg-turquoise/10",
    border: "border-amg-turquoise/30",
    text: "text-amg-turquoise",
    hoverBg: "group-hover:bg-amg-turquoise",
    hoverText: "group-hover:text-amg-teal"
  },
  { 
    name: "Fintech / Payments / Insurtech", 
    icon: CreditCard,
    bg: "bg-amg-yellow/10",
    border: "border-amg-yellow/30",
    text: "text-amg-yellow",
    hoverBg: "group-hover:bg-amg-yellow",
    hoverText: "group-hover:text-amg-teal"
  },
  { 
    name: "eCommerce / Marketplace", 
    icon: Store,
    bg: "bg-amg-teal/5",
    border: "border-amg-teal/20",
    text: "text-amg-teal",
    hoverBg: "group-hover:bg-amg-teal",
    hoverText: "group-hover:text-white"
  },
  { 
    name: "Supply Chain / Logistics", 
    icon: Truck,
    bg: "bg-amg-yellow/10",
    border: "border-amg-yellow/30",
    text: "text-amg-yellow",
    hoverBg: "group-hover:bg-amg-yellow",
    hoverText: "group-hover:text-amg-teal"
  },
  { 
    name: "Horizontal B2B SaaS", 
    icon: Layers,
    bg: "bg-amg-turquoise/10",
    border: "border-amg-turquoise/30",
    text: "text-amg-turquoise",
    hoverBg: "group-hover:bg-amg-turquoise",
    hoverText: "group-hover:text-amg-teal"
  }
];

export default function IndustriesGrid({ 
  title = "Industries", 
  highlight = "We Serve",
  highlightColor = "text-amg-turquoise",
  subtitle = "We work globally across industries / business models",
  className = "",
  showHeader = true 
}) {
  const marqueeItems = [...industries, ...industries];

  return (
    <div className={`industry-marquee ${className}`}>
      {/* Header */}
      {showHeader && (
        <div className="text-center mb-8">
          <h2 className="font-serif text-[34px] font-semibold text-amg-teal">
            {title} <span className={highlightColor}>{highlight}</span>
          </h2>
          {subtitle && (
            <p className="text-amg-ink/70 mt-2 text-sm">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="industry-marquee-shell">
        <div className="industry-marquee-window">
          <div className="industry-marquee-track">
        {marqueeItems.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <div
              key={i}
              className={`industry-marquee-item industry-marquee-item-${i % industries.length}`}
            >
              <div className="industry-marquee-icon">
                <IconComponent className="w-4 h-4" />
              </div>
              <p className="industry-marquee-name">
                {item.name}
              </p>
            </div>
          );
        })}
          </div>
        </div>
      </div>
    </div>
  );
}
