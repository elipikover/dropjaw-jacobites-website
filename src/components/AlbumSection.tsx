import albumCover from "@/assets/album-cover.png";

const AlbumSection = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Album artwork with text overlay */}
        <div className="relative inline-block">
          <img
            src={albumCover}
            alt="Rogue Taxidermy - Album Cover"
            className="w-full max-w-md md:max-w-lg shadow-2xl"
          />
        </div>
        
        {/* Text below the album */}
        <div className="mt-8 text-center font-typewriter">
          <h3 className="text-foreground text-3xl md:text-5xl tracking-wide">
            THE DEBUT ALBUM
            <span className="text-coral text-lg md:text-2xl align-super ml-2">EPK</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;
