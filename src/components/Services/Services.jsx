import "./Services.css";

export const Services = () => {
  return (
    <section id="Services">
      <div className="services-left-part">
        <h4 className="small-headings">SERVICES</h4>
        <hr />
      </div>

      <div className="services-container">
        <div>
          <h2>Full-Stack Development</h2>

          <p>
            If you're looking for a new, innovative website that stands out, I'm
            here to help! I specialize in creating responsive and intuitive
            interfaces using React, ensuring smooth navigation and a visually
            appealing experience for users. With Node.js on back-end, I bring
            scalable and efficient backend solutions & high-quality results that
            drive user engagement and success.
          </p>

          <div className="services-stack">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>ReactJS</p>
            <p>NodeJS</p>
            <p>MongoDB</p>
            <p>Svelte</p>
            <p>Github</p>
            <p>Postman</p>
          </div>
        </div>
        <div>
          <h2>Digital Marketing</h2>
          <p>
            If you're seeking digital marketing expertise, look no further! I
            excel at managing budget allocation, refining audience targeting ,
            crafting compelling ad copy, and optimizing campaigns for maximum
            impact. With a keen eye for detail, I formulate and execute paid
            advertising strategies that drive results and constantly monitoring
            campaign performance.
          </p>

          <div className="services-stack">
            <p>Ads management</p>
            <p>Copywriting</p>
            <p>Market Research</p>
            <p>Strategy</p>
            <p>Audience Targeting</p>
            <p>SEO</p>
            <p>Optimisations</p>
          </div>
        </div>
        <div>
          <h2>Design</h2>
          <p>
            I have expertise in crafting visually captivating designs for social
            media and ads using Canva, ensuring your digital presence stands out
            in today's competitive landscape. Currently learning Figma for
            creation of interactive website designs.
          </p>

          <div className="services-stack">
            <p>Canva</p>
            <p>Social Media Content</p>
            <p>Figma *(learning)*</p>
            <p>Wordpress</p>
          </div>
        </div>
        <div>
          <h2>Tools & Data</h2>
          <p>
            I excel in working with numbers and have experience in
            leveraging Excel for data management and analysis. Integrating tools like Clickup and Slack into processes for enhanced organization and productivity, and Visual Studio Code for streamlined development.
          </p>

          <div className="services-stack">
            <p>Excel</p>
            <p>Clickup</p>
            <p>Asana</p>
            <p>Slack</p>
            <p>Visual Studio Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};
