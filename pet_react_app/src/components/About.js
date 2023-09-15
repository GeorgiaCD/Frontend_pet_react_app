import AnimatedPage from "../AnimatedPage"

export default function About() {
    return (
    
      <div className="about">
        <img id="banner-img" src='/banner.png'/>
        <div className="about-main">
          <img id="about-image" src='/TechTailsTeam.png'/>
          <div className="about-text">
            <h1>About Us</h1>
            <h4>Everything start with a RESTful API</h4>
              <p>We would like to extend our heartfelt gratitude to the team behind 'Tech Tails' (Rebecca, Zaiyad, Charlotte, James, Sarah) for their invaluable contribution to our project. Their exceptional work on the backend infrastructure has been the cornerstone of our app's success. Their dedication and expertise have made it possible for us to deliver a seamless user experience. We deeply appreciate their collaboration and look forward to future partnerships.</p>
              <p>Special shoutout to James and Charlotte! Thanks for all your help in our planning stage</p>
          </div>
          </div>
      </div>
  
    )
  }