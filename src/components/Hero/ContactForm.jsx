/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";
import { useMask } from "@react-input/mask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const ContactForm = ({ onClose }) => {
  // React Toastify Notification
  const notifySuccess = () =>
    toast.success("Email sent successfully! I'll get back to you soon!", {
      theme: "colored",
    });
  const notifyFail = () =>
    toast.error("Error, the email did not send.", {
      theme: "colored",
    });

  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault(); // This prevents a refresh

    emailjs
      .sendForm("service_09v2ylc", "template_o1yiiwv", form.current, {
        publicKey: "R5BJxiVM7-Jfygtl6",
      })
      .then(
        () => {
          notifySuccess();
          e.target.reset(); // This will clear the form after a successful submit
        },
        () => {
          notifyFail();
        }
      );
  };

  // Input Mask
  const inputRef = useMask({
    mask: "(___)-___-____",
    replacement: { _: /\d/ },
  });

  return (
    <form ref={form} className={styles.formGroup} onSubmit={sendEmail}>
      <ToastContainer />
      <div className={styles.formHeader}>
        <div className={styles.formTitle}>Contact Me!</div>
        <div className={styles.formCloseIcon} onClick={onClose}>
          <i className="bx bx-x"></i>
        </div>
      </div>
      <hr />
      <div className={styles.formText}>
        Fill out this form and I'll get back to you.
      </div>
      <div className={styles.formComponent}>
        <label className={styles.formLabel}>Name:</label>
        <input
          className={styles.formInput}
          type="text"
          name="user_name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Saurabh Kumar"
        />
      </div>
      <div className={styles.formComponent}>
        <label className={styles.formLabel}>Email:</label>
        <input
          className={styles.formInput}
          type="email"
          name="user_email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="example@email.com"
        />
      </div>
      <div className={styles.formComponent}>
        <label className={styles.formLabel}>Phone:</label>
        <input
          ref={inputRef}
          className={styles.formInput}
          type="phone"
          name="user_phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+91-7903421578"
        />
      </div>
      <div className={styles.formComponent}>
        <label className={styles.formLabel}>Message/Project:</label>
        <textarea
          className={styles.formTextArea}
          rows="6"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Explain what the project is or write a message."
        />
      </div>
      <hr />
      <div className={styles.formButtons}>
        <button className={styles.formSubmit} type="submit">
          Submit
        </button>
        <button className={styles.formClose} onClick={onClose} type="submit">
          Close
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
