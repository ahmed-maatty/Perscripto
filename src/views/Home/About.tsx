import aboutImage from "/assets/about_image.png";

function About() {
  return (
    <section className="About">
      <h1 className="text-3xl text-center">
        About <span>Us</span>
      </h1>
      <div className="about-contact flex gap-6">
        <div className="aboutImg flex-1">
          <img src={aboutImage} alt="" />
        </div>
        <div className="abou-main flex-3">
          <p className="text-l mb-8">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="mb-8">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <h6 className="mb-8">Our Vision</h6>
          <p className="mb-8">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="whyUs">
        <p className="mb-8 uppercase">
          Why <span> Choose Us </span>{" "}
        </p>
        <div className="table flex">
          <div>
            <h5 className="mb-5">Efficiency:</h5>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="middle">
            <h5 className="mb-5">Convenience:</h5>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div>
            <h5 className="mb-5">Personalization:</h5>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
