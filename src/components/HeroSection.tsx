import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '65vh' }}>
      <img
        src={heroImage}
        alt="The Dropjaw Jacobites - Hooded figure with hand raised"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </section>
  );
};

export default HeroSection;
