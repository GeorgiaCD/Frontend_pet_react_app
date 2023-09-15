import AnimatedPage from "../AnimatedPage"

export default function About() {
    return (
      <AnimatedPage>
      <div className="about">
        <img id="banner-img" src='/banner.png'/>
        <div className="about-main">
          <img id="about-image" src='/TechTailsTeam.png'/>
          <div className="about-text">
            <h1>About Us</h1>
            <h4>Everything start with a RESTful API</h4>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
          </div>
          </div>
      </div>
      </AnimatedPage>
    )
  }