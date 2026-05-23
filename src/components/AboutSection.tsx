import { 
  ShieldAlert, 
  Target, 
  Eye, 
  Sparkles, 
  Award, 
  ThumbsUp, 
  Clock, 
  Gem,
  GraduationCap,
  Sparkle
} from 'lucide-react';
import { BENEFITS_WHY_CHOOSE } from '../data';

export default function AboutSection() {
  const coreValues = [
    {
      title: "Integrity",
      description: "We lead with absolute honesty and strict transparency in our transactions and consultations.",
      icon: Gem,
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      title: "Professionalism",
      description: "Every service is delivered by industry experts adhering to premium standard workflows.",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-700"
    },
    {
      title: "Quality",
      description: "All products from Mega 4 Stemcells to accessories undergo rigorous standard testing.",
      icon: Award,
      color: "bg-amber-50 text-amber-700"
    },
    {
      title: "Innovation",
      description: "Continuous formulation upgrades and progressive strategic counseling for dynamic markets.",
      icon: Sparkles,
      color: "bg-purple-50 text-purple-700"
    },
    {
      title: "Customer Satisfaction",
      description: "Highly responsive post-sale care and continuous assistance loops for all clients.",
      icon: ThumbsUp,
      color: "bg-pink-50 text-pink-700"
    },
    {
      title: "Reliability",
      description: "A secure supply-chain and dependable deadlines you can base business metrics on.",
      icon: Clock,
      color: "bg-teal-50 text-teal-700"
    }
  ];

  return (
    <div className="bg-white py-16 lg:py-24" id="about-us-page">
      {/* Intro Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <span className="font-display font-bold text-xs text-brand-gold uppercase tracking-widest block mb-3">
          Our Heritage & Drive
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-brand-dark mb-6">
          About Dr.Heez Global Ventures
        </h1>
        <div className="h-1.5 w-24 bg-brand-green mx-auto rounded-full mb-8" />
        <p className="font-sans text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Dr.Heez Global Ventures is a multi-service business brand dedicated to delivering premium products and professional services across several key industries. Our company integrates natural wellness solutions, direct technology supplies, financial advisory, agro-allied supply patterns, construction steering, and general commerce under one single, trusted umbrella.
        </p>
      </div>

      {/* Corporate Mission & Vision Split Section */}
      <div className="bg-brand-light py-20 border-y border-gray-100 mb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="bg-white border border-gray-200/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-brand-green text-brand-gold rounded-xl mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="font-display font-bold text-2xl text-brand-dark mb-4">
                Our Mission Statement
              </h2>
              <p className="font-sans text-base text-gray-600 leading-relaxed">
                To provide reliable, certified products and professional services that support healthy living, scalable business operations, and ecological development locally and internationally. We pledge absolute alignment with client expectations.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Strategic Goals 2026</span>
              <span className="h-2 w-2 rounded-full bg-brand-gold animate-ping" />
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-gray-200/60 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-brand-green text-brand-gold rounded-xl mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="font-display font-bold text-2xl text-brand-dark mb-4">
                Our Vision Statement
              </h2>
              <p className="font-sans text-base text-gray-600 leading-relaxed">
                To become a premier diversified global business enterprise recognized for uncompromising integrity, outstanding technological acceleration, food security pathways, and optimal healthcare supplements.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Global Reach Framework</span>
              <span className="h-2 w-2 rounded-full bg-brand-gold animate-ping" />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs text-brand-gold uppercase tracking-widest block">
            Guiding Philosophy
          </span>
          <h2 className="font-display font-bold text-3xl text-brand-dark">
            Our Core Values
          </h2>
          <p className="font-sans text-xs text-gray-500 max-w-xl mx-auto">
            These operational foundations govern how our doctors, engineers, and financial advisers coordinate client services daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-brand-green/10 transition-all group flex flex-col gap-4"
                id={`core-value-${val.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center ${val.color} group-hover:scale-105 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-green transition-colors mb-2">
                    {val.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-brand-green text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-display font-bold text-xs text-brand-gold uppercase tracking-widest block">
              Performance Integrity
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">
              Why Choose Dr.Heez?
            </h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full" />
            <p className="text-brand-light/80 text-sm max-w-xl mx-auto">
              We leverage an optimized supply system to provide outstanding value across all sectors.
            </p>
          </div>

          {/* Grid list in PRD */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS_WHY_CHOOSE.map((benefit, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-brand-gold/20 transition-all flex gap-4"
                id={`why-choose-${i}`}
              >
                <div className="text-brand-gold font-bold text-lg leading-none pt-1">
                  0{i + 1}.
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-lg text-brand-gold">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
