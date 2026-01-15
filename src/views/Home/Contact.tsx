import contactImg from "/assets/contact_image.png";

function Contact() {
  return (
    <section className="Contact_Section">
      <h1 className="mb-8 text-center text-2xl">
        {" "}
        CONTACT <span>Us</span>
      </h1>
      <div className="contact_content flex items-center justify-center gap-8">
        <div className="contact_img">
          <img src={contactImg} alt="" />
        </div>
        <div className="contact_info">
          <h3 className="uppercase mb-6">Our OFFICE</h3>
          <p>
            54709 Willms Station Suite 350,
            <br /> Washington, USA
          </p>
          <p>Tel: 020xxxxxxxxx </p>
          <p>Email: greatstackdev@gmail.com</p>
          <h3 className="uppercase mb-6">Careers at PRESCRIPTO</h3>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
