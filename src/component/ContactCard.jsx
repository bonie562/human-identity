import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

function ContactCard({ email }) {
  const [visitorEmail, setVisitorEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [position, setPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const modalRef = useRef(null);
  const headerRef = useRef(null);

  // Set initial position when modal is shown
  React.useEffect(() => {
    if (showForm && position === null) {
      // Calculate responsive X position based on modal width
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth < 1024;
      
      let modalWidth;
      let padding;
      
      if (isMobile) {
        modalWidth = window.innerWidth * 0.9; // 90vw for mobile
        padding = (window.innerWidth - modalWidth) / 3; // Center with equal padding
      } else if (isTablet) {
        modalWidth = window.innerWidth * 0.85; // 85vw for tablet
        padding = (window.innerWidth - modalWidth) / 2;
      } else {
        modalWidth = 448; // lg:max-w-md (28rem)
        padding = (window.innerWidth - modalWidth) / 2;
      }
      
      const centerX = Math.max(5, padding);
      
      // Responsive Y position based on screen height
      const topY = Math.max(10, window.innerHeight * 0.05);
      
      setPosition({ x: centerX, y: topY });
    }
  }, [showForm, position]);

  const handleMouseDown = (e) => {
    // Allow dragging from anywhere on the modal
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset, position]);

  const handleSend = () => {
    if (!visitorEmail || !subject || !message) {
      alert("Please fill all fields before sending.");
      return;
    }

    setLoading(true);

    const templateParams = {
      to_email: email,
      name: "Portfolio Visitor",
      visitor_email: visitorEmail,
      subject,
      message,
    };

    emailjs
      .send(
        "service_q3urcqq", // 🔁 your EmailJS service ID
        "template_biohk7d", // 🔁 your EmailJS template ID
        templateParams,
        "jLfbXMLWy6Li85iTe" // 🔁 your EmailJS public key
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setTimeout(() => {
          setShowForm(false);
          setSubject("");
          setMessage("");
          setVisitorEmail("");
          setSent(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex flex-col gap-4 bg-grey p-4 min-w-64 w-full sm:w-6/12 h-fit rounded-2xl relative">
      <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
        Would you like to work with me?
      </div>

      <button
        onClick={() => {
          setShowForm(true);
          setPosition(null); // Reset position when opening
        }}
        className="px-4 py-2 w-fit font-semibold bg-white hover:bg-[#d9d9d9] transition duration-200 text-base sm:text-lg rounded-2xl"
      >
        Contact me
      </button>

      {showForm && position && (
        <div className="fixed inset-0 bg-black/30 z-40">
          <div
            ref={modalRef}
            className="fixed bg-white p-4 sm:p-6 rounded-2xl w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-full lg:max-w-lg shadow-lg cursor-grab active:cursor-grabbing"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
          >
            <div
              ref={headerRef}
              className="flex items-center justify-between mb-4"
            >
              <h3 className="text-xl font-semibold">Send a Message</h3>
              <button
                className="text-gray-600 hover:text-black text-xl"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>
            </div>

            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              type="email"
              value={visitorEmail}
              onChange={(e) => setVisitorEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded-md"
              placeholder="e.g. you@example.com"
            />

            <label className="block mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 mb-4 border rounded-md"
              placeholder="e.g. Let's collaborate"
            />

            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
              placeholder="Your message..."
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className={`bg-grey px-4 py-2 rounded-md hover:bg-[#d9d9d9] transition ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {sent ? "Sent!" : loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactCard;
