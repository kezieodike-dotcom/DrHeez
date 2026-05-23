import { 
  Building, 
  LineChart, 
  HardHat, 
  Flame, 
  Sprout, 
  ShoppingBag, 
  Award, 
  Ship, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  Heart
} from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesSectionProps {
  onServiceSelectContact: (serviceTitle: string) => void;
  selectedServiceId?: string; // option to auto-focus or scroll
}

export default function ServicesSection({ onServiceSelectContact, selectedServiceId }: ServicesSectionProps) {
  
  // Icon selector map using permitted lucide imports
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building':
        return <Building className="h-6 w-6 stroke-[2]" />;
      case 'LineChart':
        return <LineChart className="h-6 w-6 stroke-[2]" />;
      case 'HardHat':
        return <HardHat className="h-6 w-6 stroke-[2]" />;
      case 'Flame':
        return <Flame className="h-6 w-6 stroke-[2]" />;
      case 'Sprout':
        return <Sprout className="h-6 w-6 stroke-[2]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="h-6 w-6 stroke-[2]" />;
      default:
        return <Award className="h-6 w-6 stroke-[2]" />;
    }
  };

  const standOutPoints = [
    {
      title: "Experienced Team",
      description: "Our board comprises active practitioners across medical science, strategic planning, civil construction, and logistics.",
      icon: Users,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Reliable Service Delivery",
      description: "Rigorous milestone checking systems keep service timelines predictable and consistent.",
      icon: Clock,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Customer-Focused Approach",
      description: "We craft custom solutions around client project size instead of using generic formulas.",
      icon: Heart,
      color: "text-red-600 bg-red-50"
    },
    {
      title: "Professional Support",
      description: "Dedicated account managers provide instant feedback loops throughout development cycles.",
      icon: ShieldCheck,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "Affordable Solutions",
      description: "Cost-minimization systems deliver industrial solutions at competitive, accessible pricing rates.",
      icon: Award,
      color: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24" id="services-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Underlines & Header section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-display font-bold text-xs text-brand-gold uppercase tracking-widest block">
            Industrial Portfolio
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-brand-dark">
            Our Professional Services
          </h1>
          <div className="h-1.5 w-24 bg-brand-green mx-auto rounded-full" />
          <p className="font-sans text-base text-gray-500 leading-relaxed">
            Dr.Heez Global Ventures provides robust B2B support, infrastructure consultancy, oil sourcing, and financial designs to drive commercial performance.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className={`border border-gray-100/90 rounded-2xl p-7 bg-white hover:shadow-xl transition-all group flex flex-col justify-between ${
                selectedServiceId === service.id ? 'ring-2 ring-brand-green shadow-xl shadow-brand-green/5' : ''
              }`}
              id={`service-block-${service.id}`}
            >
              <div>
                {/* Header Icon overlay banner */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-brand-green text-brand-gold rounded-xl group-hover:bg-brand-gold group-hover:text-brand-green transition-colors shadow">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-gray-400">
                    Dr.Heez Active Unit
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-brand-dark mb-3 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits Bullet Points */}
                <div className="space-y-2.5 mb-8">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Core Benefits:
                  </p>
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-600 leading-tight">
                      <CheckCircle2 className="h-4.5 w-4.5 text-brand-green flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action booking button */}
              <button
                onClick={() => onServiceSelectContact(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 border border-brand-green/15 text-brand-green hover:bg-brand-green hover:text-white font-bold py-3 px-4 rounded-xl transition-all cursor-pointer text-xs"
              >
                <span>Request {service.title}</span>
                <ArrowRight className="h-4 w-4 text-brand-gold" />
              </button>
            </div>
          ))}
        </div>

        {/* Why Our Services Stand Out Section */}
        <div className="bg-brand-light border border-gray-200/50 rounded-3xl p-8 lg:p-12 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Call-out panel - Left */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-display font-medium text-xs text-brand-green uppercase tracking-widest block">
                Enterprise Standards
              </span>
              <h2 className="font-display font-bold text-3xl text-brand-dark leading-tight">
                Why Our Services Stand Out
              </h2>
              <div className="h-1 w-16 bg-brand-gold rounded-full" />
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                By integrating multidisciplinary divisions, Dr.Heez delivers coordinated frameworks representing excellence under a secure, single-brand audit pathway.
              </p>
            </div>

            {/* Standout criteria grid - Right */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {standOutPoints.map((pt, index) => {
                const PtIcon = pt.icon;
                return (
                  <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg ${pt.color} flex-shrink-0`}>
                      <PtIcon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-sm text-brand-dark">
                        {pt.title}
                      </h4>
                      <p className="font-sans text-xs text-gray-500 leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
