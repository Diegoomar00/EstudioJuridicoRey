import { Card, CardContent } from '@/components/ui/card';
import { Scale, Briefcase, Award, Users } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Pedro Luis Ricra Llashac',
      role: 'Abogado Civil',
      specialization: 'Derecho Civil, Comercial y Contractual',
      description: 'Abogado civilista con amplia experiencia en derecho civil, comercial y contractual. Especialista en resolución de conflictos civiles y asesoría legal empresarial.',
      image: '/assets/abogados/Pedro Luis Ricra Llashac - civil.png',
      icon: Briefcase,
      isMain: false
    },
    {
      name: '',
      role: 'Secretaria',
      specialization: 'Trámites judiciales, redacción de escritos y soporte a abogados.',
      description: 'Secretaria especializada en gestión administrativa y asistencia legal en estudios jurídicos.',
      image: '/assets/abogados/secretaria.png',
      icon: Users,
      isMain: false
    },
    {
      name: 'Dr. Richard Junior Sullón Zevallos',
      role: 'Abogado Civil Penalista',
      specialization: 'Derecho Civil y Penal',
      description: 'Abogado especializado en derecho civil y penal. Experto en casos penales complejos y defensa legal integral con amplia experiencia en ambas ramas del derecho.',
      image: '/assets/abogados/Richard Junior Sullon Zevallos - Abogado civil penalista.png',
      icon: Award,
      isMain: false
    }
  ];

  return (
    <ScrollAnimatedSection>
      <section id="equipo" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimatedSection animationType="fadeInUp" delay={100}>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Nuestro Equipo Legal
              </h2>
              <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un equipo de abogados especializados con amplia experiencia y 
                compromiso total con la defensa de tus derechos e intereses.
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Lawyer - Dr. Pedro Luis Ricra */}
            {teamMembers
              .filter(member => member.isMain)
              .map((member, index) => (
                <ScrollAnimatedSection 
                  key={index} 
                  animationType="fadeInLeft" 
                  delay={200}
                >
                  <div className="lg:col-span-2">
                    <Card className="shadow-elegant border-0 bg-white hover:shadow-card transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                          {/* Foto del abogado principal */}
                          <div className="flex-shrink-0">
                            <div className="w-48 h-72 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg relative overflow-hidden shadow-card">
                              <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-contain object-center"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                              
                              {/* Overlay con icono */}
                              <div className="absolute bottom-2 right-2">
                                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
                                  <member.icon className="h-4 w-4 text-primary" />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">
                          {member.name}
                        </h3>
                        <p className="text-accent font-semibold mb-1">
                          {member.role}
                        </p>
                          <p className="text-muted-foreground font-medium">
                            {member.specialization}
                          </p>
                        </div>
                        
                        <p className="text-foreground leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimatedSection>
            ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers
            .filter(member => !member.isMain)
            .map((member, index) => (
              <ScrollAnimatedSection 
                key={index}
                animationType="fadeInUp"
                delay={300 + (index * 100)}
              >
                <Card className="shadow-elegant border-0 bg-white hover:shadow-card transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    {/* Foto del miembro del equipo */}
                    <div className="h-72 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-6 relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-contain object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                      
                      {/* Overlay con icono */}
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm group-hover:bg-accent/20 transition-colors duration-300">
                          <member.icon className="h-5 w-5 text-accent" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                        <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 100 100">
                          <use href="/assets/legal-icons.svg#justice-scale"/>
                        </svg>
                      </div>
                    
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {member.name}
                      </h3>
                      <p className="text-accent font-semibold mb-1">
                        {member.role}
                      </p>
                    
                      <p className="text-muted-foreground font-medium mb-4 text-sm">
                        {member.specialization}
                      </p>
                    
                      <p className="text-foreground text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
        </div>


      </div>
    </section>
    </ScrollAnimatedSection>
  );
};

export default Team;