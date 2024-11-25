"use client";

import { useState, FormEvent } from "react";
import "./style.scss";

export function Contact() {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      const mailtoUrl = `mailto:wmauroux@icloud.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = mailtoUrl;
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Get in touch</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        {["name", "email", "message"].map((field) => (
          <div className="form__group" key={field}>
            <label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === "message" ? (
              <textarea
                id={field}
                rows={5}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className={errors[field] ? "error" : ""}
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className={errors[field] ? "error" : ""}
              />
            )}
            {errors[field] && (
              <span className="error-message">{errors[field]}</span>
            )}
          </div>
        ))}
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
}
