import housesImage from "@/assets/nkd-farm-houses.png";



const IntroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase text-[hsl(var(--brand-accent))] animate-slide-up">
          The Naked Farm Model
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight animate-slide-up stagger-1">
          <span className="text-[hsl(var(--brand-accent))]">Naked</span> Farm pioneers agritech franchising for{" "}
          <em className="italic font-light">city food system revival</em>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-2">
          Powering a new generation of farmers with technology and services for sustainable food — produced where it's eaten.
        </p>
      </div>

      {/* Panoramic image */}
      <div className="max-w-6xl mx-auto mt-12 md:mt-16 animate-slide-up stagger-3">
        <div className="rounded-[2rem] overflow-hidden border border-border bg-card/40">
          <img
            src={housesImage}
            alt="Row of brick townhouses with nkd.farm delivery boxes at each doorstep"
            loading="lazy"
            width={1200}
            height={320}
            className="w-full h-[180px] md:h-[280px] lg:h-[320px] object-cover object-bottom"
          />
        </div>
      </div>
    </section>);

};

export default IntroSection;
