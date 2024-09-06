// The children prop is the text inside the modal
import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";

// eslint-disable-next-line react/prop-types
const Modal = ({ open, children, setIsOpen }) => {
  // We need a reference to know where the navbar is
  let modalRef = useRef();

  // This useEffect is used to have the modal close automatically if the user clicks outside of it
  useEffect(() => {
    // We need a reference to our handler
    let handler = (event) => {
      // If the event target is not in the menuRef, we can set setIsOpen to false.
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    // Let's have our effect clean up the event listener
    // This function will run when the component renders and this effect updates
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // If the modal is not open, do not render anything
  if (!open) return null;

  // ReactDom.createPortal will take the element you want to create and take a place you want to add that element.
  // createPortal allows for event delegation, and keeping parent-child relations while render doesn't.
  return ReactDom.createPortal(
    // We'll add an overlay that goes over the rest of our content
    <>
      <div className={styles.modalOverlay} />
      <div ref={modalRef} className={styles.modalContainer}>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
