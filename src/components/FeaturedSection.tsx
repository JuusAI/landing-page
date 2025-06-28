const FeaturedSection = () => {
  return (
    <section
      id="featured"
      className="panel min-h-[50vh] py-20 px-4 relative futuristic-bg-alt"
    >
      <div className="max-w-7xl mx-auto scroll-fade">
        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center text-center md:text-left my-16">
          <h1 className="text-5xl md:text-3xl lg:text-5xl font-light tracking-tighter mb-8 leading-tight text-gray-900">
            <span className="text-gradient text">Growing</span>
            <br />
            Smarter With<span className="text-gradient"> AI</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 mb-12 mx-auto md:mx-0 md:ml-24 max-w-3xl leading-relaxed">
            We specialized in workflow automation and <br /> personalized AI
            solutions for progressive <br /> organizations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="neuro-button">
            <i className="ph-light ph-rocket-launch mr-2"></i>
            Get In Touch
          </button>
          <button className="transparent-button">
            <i className="ph-light ph-rocket-launch mr-2"></i>
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
