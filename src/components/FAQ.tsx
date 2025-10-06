import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimatedSection from './ScrollAnimatedSection';

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuánto cuesta la consulta inicial?",
      answer: "La primera consulta es completamente gratuita. Durante esta reunión evaluamos tu caso, te explicamos tus opciones legales y te proporcionamos un presupuesto transparente sin compromisos."
    },
    {
      question: "¿Ofrecen atención virtual?",
      answer: "Sí, ofrecemos consultas virtuales por videollamada para tu comodidad. También contamos con atención presencial en nuestras oficinas de Lima y Arequipa, según tu preferencia."
    },
    {
      question: "¿Cómo funcionan sus honorarios?",
      answer: "Manejamos diferentes modalidades: honorarios fijos para trámites específicos, porcentaje del éxito en casos de cobranza, y tarifas por horas para consultoría. Todo se establece claramente desde el inicio."
    },
    {
      question: "¿En qué ciudades tienen presencia?",
      answer: "Tenemos oficinas principales en Lima y Arequipa, pero brindamos cobertura legal en todo el territorio nacional. Podemos representarte en cualquier jurisdicción del Perú."
    },
    {
      question: "¿Cuánto tiempo toma resolver un caso?",
      answer: "Los tiempos varían según la complejidad del caso. Te proporcionamos un cronograma estimado después de la evaluación inicial y te mantenemos informado sobre los avances constantemente."
    },
    {
      question: "¿Qué documentos necesito para la consulta?",
      answer: "Para la primera consulta, trae cualquier documento relacionado con tu caso: contratos, notificaciones, sentencias, correspondencia, etc. Si no los tienes, no te preocupes, podemos orientarte igual."
    },
    {
      question: "¿Atienden casos de emergencia?",
      answer: "Sí, contamos con atención de emergencia 24/7 para casos urgentes como detenciones, medidas cautelares, o situaciones que requieren acción inmediata."
    },
    {
      question: "¿Garantizan el éxito del caso?",
      answer: "Si bien no podemos garantizar resultados específicos por la naturaleza del derecho, sí garantizamos nuestra máxima dedicación, transparencia total y el uso de las mejores estrategias legales disponibles."
    }
  ];

  return (
    <ScrollAnimatedSection>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimatedSection animationType="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Preguntas Frecuentes
              </h2>
              <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Resolvemos las dudas más comunes sobre nuestros servicios legales. 
                Si tienes otras preguntas, no dudes en contactarnos.
              </p>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animationType="fadeInUp" delay={200}>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 shadow-card bg-white animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent transition-colors duration-300 py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollAnimatedSection>

        {/* Contact CTA */}
        <ScrollAnimatedSection animationType="scaleIn" delay={400}>
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center space-y-4 bg-secondary/50 rounded-2xl px-8 py-8 border border-border">
              <h3 className="text-xl font-semibold text-primary">
                ¿No encontraste la respuesta que buscabas?
              </h3>
              <p className="text-muted-foreground">
                Contáctanos directamente y resolveremos todas tus dudas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a 
                  href="tel:+51999888777" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  📞 Llamar: +51 996 150 556
                </a>
                <a 
                  href="mailto:info@estudiojuridico.com" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
                >
                  ✉️ Email: info@estudiojuridico.com
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </section>
    </ScrollAnimatedSection>
  );
};

export default FAQ;