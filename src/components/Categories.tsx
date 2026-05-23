import { 
  Plus, 
  Flame, 
  Smartphone, 
  LineChart, 
  HardHat, 
  Sprout, 
  Building, 
  ShoppingBag, 
  Heart,
  ChevronRight
} from 'lucide-react';

interface CategoriesProps {
  onSelectStoreCategory: (cat: 'wellness' | 'phones' | 'agro') => void;
  onSelectService: (serviceId: string) => void;
}

export default function Categories({ onSelectStoreCategory, onSelectService }: CategoriesProps) {
  const sectors = [
    {
      id: "healthcare",
      title: "Health Care Products",
      description: "Natural wellness, cellular supplements and herbal support designed to promote healthy living and vitality.",
      icon: Heart,
      action: () => onSelectStoreCategory('wellness'),
      btnText: "Shop Wellness",
      colorClass: "text-red-600 bg-red-50 hover:bg-red-100",
      type: "store"
    },
    {
      id: "oil-gas",
      title: "Oil & Gas Support",
      description: "Reliable industrial sourcing, petroleum marketing, logistical allocations, and fuel contract frameworks.",
      icon: Flame,
      action: () => onSelectService('oil-gas'),
      btnText: "Learn More",
      colorClass: "text-amber-600 bg-amber-50 hover:bg-amber-100",
      type: "service"
    },
    {
      id: "phones",
      title: "Phones & Accessories",
      description: "Affordable premium smartphones, smart accessories, heavy chargers, high-capacity power banks, and earbuds.",
      icon: Smartphone,
      action: () => onSelectStoreCategory('phones'),
      btnText: "Shop Gadgets",
      colorClass: "text-blue-600 bg-blue-50 hover:bg-blue-100",
      type: "store"
    },
    {
      id: "finance",
      title: "Financial Engineering",
      description: "Strategic planning, corporate restructuring, growth modeling, and advisory support for scale-up ventures.",
      icon: LineChart,
      action: () => onSelectService('financial-engineering'),
      btnText: "Consulting",
      colorClass: "text-emerald-600 bg-emerald-50 hover:bg-emerald-100",
      type: "service"
    },
    {
      id: "construction",
      title: "Construction Support",
      description: "Expert building support, civil engineering materials advisory, site logistics, and regulatory consultancy.",
      icon: HardHat,
      action: () => onSelectService('construction'),
      btnText: "View Details",
      colorClass: "text-orange-600 bg-orange-50 hover:bg-orange-100",
      type: "service"
    },
    {
      id: "agro",
      title: "Agro & Allied Products",
      description: "Sustainable agricultural food supply chains, certified seeds routing, farm-to-consumer delivery infrastructure.",
      icon: Sprout,
      action: () => onSelectStoreCategory('agro'),
      btnText: "Buy Produce",
      colorClass: "text-green-600 bg-green-50 hover:bg-green-100",
      type: "store"
    },
    {
      id: "consultancy",
      title: "Corporate Consultancy",
      description: "Professional coaching, project steering, startup feasibility evaluations, and managerial frameworks.",
      icon: Building,
      action: () => onSelectService('consultancy'),
      btnText: "Explore Services",
      colorClass: "text-purple-600 bg-purple-50 hover:bg-purple-100",
      type: "service"
    },
    {
      id: "general-commerce",
      title: "General Commerce",
      description: "Comprehensive product procurement, international custom shipping directories, and wholesale channels.",
      icon: ShoppingBag,
      action: () => onSelectService('general-commerce'),
      btnText: "Order Systems",
      colorClass: "text-teal-600 bg-teal-50 hover:bg-teal-100",
      type: "service"
    }
  ];

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-100" id="categories-section">
      <div className="max-w-7xl mx-auto">
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs text-brand-gold uppercase tracking-widest block">
            Integrated Enterprises
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark">
            Our Key Business Categories
          </h2>
          <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
          <p className="font-sans text-base text-gray-500 leading-relaxed">
            Dr.Heez Global Ventures drives value across a broad and rich constellation of industries, offering specialized, highly professional products and service networks.
          </p>
        </div>

        {/* Categories Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => {
            const IconComponent = sector.icon;
            return (
              <div 
                key={sector.id} 
                onClick={sector.action}
                className="group border border-gray-100/80 rounded-2xl p-6 hover:shadow-lg hover:border-brand-green/20 hover:bg-gradient-to-br hover:from-white hover:to-brand-green/[0.01] transition-all cursor-pointer flex flex-col justify-between"
                id={`sector-card-${sector.id}`}
              >
                <div>
                  {/* Category icon container */}
                  <div className={`p-3 rounded-xl w-12 h-12 flex items-center justify-center transition-all ${sector.colorClass}`}>
                    <IconComponent className="h-6 w-6 stroke-[2]" />
                  </div>

                  {/* Sector Title */}
                  <h3 className="font-display font-bold text-lg text-brand-dark mt-5 mb-2 group-hover:text-brand-green transition-colors">
                    {sector.title}
                  </h3>

                  {/* Description text */}
                  <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">
                    {sector.description}
                  </p>
                </div>

                {/* Sub-card actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100/65">
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-gray-400">
                    {sector.type === 'store' ? 'E-Commerce Unit' : 'B2B Service Unit'}
                  </span>
                  <button className="inline-flex items-center gap-1 text-xs font-bold text-brand-green group-hover:text-brand-gold transition-colors">
                    <span>{sector.btnText}</span>
                    <ChevronRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
