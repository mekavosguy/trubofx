import React from "react";
import "./Contact.css";
const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fda8bb7d-3725-45cf-b70d-92bf1ea6edc1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Reach Out to{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Us
          </span>
        </h2>
      </div>
      <div className="contact">
        <div className="contact-col">
          <h1>Start Your Forex Trading Journey Today!</h1>
          <p>
            Don't miss this unique opportunity to learn Forex trading with no
            financial risk. Enroll now and unlock the mysteries of the Forex
            market with our funded accounts and expert guidance. Click the
            button below to sign up and start your journey to becoming a
            successful Forex trader!{" "}
          </p>
        </div>
        <div className="contact-col">
          <h1>Fill the form to get Course PRICE</h1>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name "
              required
            />
            <label>Whatsapp Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Whatsapp Number "
              required
            />
            <button type="submit">
              <p>Take the First Step Today for Free 🚀</p>
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
