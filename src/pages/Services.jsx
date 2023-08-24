import React from "react";
import Header from "../components/Header";

const Services = () => {
  return (
    <div className="wrap3">
      <Header />
      <div className="container">
        <div>
          <h5>Services</h5>
          <div className="light">
            <h5>Website Design</h5>
            <p>
              This HTML course for web developers provides a solid overview for developers, from novice to expert level HTML.
            </p>
            <p>Pricing: $1,000 - $3,000</p>
          </div>
          <div className="light">
            <h5>Website Maintenance</h5>
            <p>
              An evergreen CSS course and reference to level up your web styling expertise.
            </p>
            <p>Pricing: $250 per month</p>
          </div>
          <div className="light">
            <h5>Website Hosting</h5>
            <p>
              Graphic Design is the process of creating visually appealing content that can convey a message, story, or concept. Students master designing logos, cover pages, thumbnails, and banners by studying a Graphic Design course.  
            </p>
            <p>Pricing: $25 per month</p>
          </div>
        </div>

        <div>
          <div className="dark">
            <h3>Get A Quote</h3>
            <form>
              <div>
                <label>Name</label>
                <input type="text" placeholder="Name" required/>
              </div>
              <div>
                <label>Email</label>
                <br />
                <input type="email" placeholder="Email Address" required />
              </div>
              <div>
                <label>Message</label>
                <br />
                <textarea placeholder="Message" />
              </div>
              <button className="buton" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
