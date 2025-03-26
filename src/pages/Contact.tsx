import React from "react";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">お問い合わせ</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
