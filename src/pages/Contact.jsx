import React, { useState } from "react";
import { supabase } from "../supabase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", text: "" }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit directly to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (error) {
        throw error;
      }

      setStatus({ type: "success", text: "✅ Message sent successfully!" });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus({
        type: "error",
        text: `❌ Failed to send message: ${err.message || "Unknown error"}`,
      });
    }

    setLoading(false);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* Header */}
            <div className="text-center mb-5">
              <h2 className="display-5 fw-light mb-3">Get In Touch</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: "500px" }}>
                Have a project in mind or just want to say hi? Feel free to send a message.
              </p>
            </div>

            <div className="row g-5">

              {/* Left Side */}
              <div className="col-md-4">
                <div className="mb-4">
                  <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: "0.8rem" }}>Email</h6>
                  <p className="text-muted">hello@yourname.com</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: "0.8rem" }}>Phone</h6>
                  <p className="text-muted">+91 9876543210</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: "0.8rem" }}>Location</h6>
                  <p className="text-muted">Mumbai, India</p>
                </div>

                <div>
                  <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: "0.8rem" }}>Social</h6>
                  <div className="d-flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/samadhan-radye-824a21375/"
                      className="text-decoration-none text-dark small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/samadhan.radye/?hl=en"
                      className="text-decoration-none text-dark small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side Form */}
              <div className="col-md-8">
                <form onSubmit={handleSubmit}>
                  <div className="row g-4">

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-end mt-3">
                      {status && (
                        <div
                          className={`alert py-2 ${
                            status.type === "success"
                              ? "alert-success"
                              : "alert-danger"
                          }`}
                          role="alert"
                        >
                          {status.text}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="btn btn-dark px-5 py-2"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>

                  </div>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;