const Hero = () => {
  return (
    <div className="Hero container">
      <div className="Hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="Hero-button">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
        </div>

        <div className="brand-icons">
          <img src="/images/flipkart.png" alt="flipkart-logo" />
          <img src="/images/amazon.png" alt="amazon-logo" />
        </div>
      </div>

      <div className="Hero-image">
        <img src="/images/shoe_image.png" alt="hero-logo" />
      </div>
    </div>
  );
};

export default Hero;
