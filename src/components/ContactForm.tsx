import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ReCAPTCHA from "react-google-recaptcha";

type FormData = {
  name: string;
  nameKana: string;
  email: string;
  message: string;
};

const GAS_URL = "https://script.google.com/macros/s/AKfycbyPpk9FRuPDyEB0mw7DnV0G2zKXjlDYRsXgpqAoYXidP0b16-kkzcCtVX4U8VNYgSgd/exec";


const ContactForm: React.FC = () => {
    const {executeRecaptcha} = useGoogleReCaptcha();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    nameKana: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: typeof errors = {};

    if (!formData.name) newErrors.name = "お名前は必須です";
    if (!formData.nameKana) {
      newErrors.nameKana = "お名前（カタカナ）は必須です";
    } else if (!/^[ァ-ンヴー\s]+$/.test(formData.nameKana)) {
      newErrors.nameKana = "全角カタカナで入力してください";
    }

    if (!formData.email) {
      newErrors.email = "メールアドレスは必須です";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
    }

    if (!formData.message) newErrors.message = "ご相談内容は必須です";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
  
    if (!executeRecaptcha) {
      alert("reCAPTCHAが初期化されていません");
      return;
    }
  
    const token = await executeRecaptcha("contact_form");
  
    // token付きで送信
    const res = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, token }),
    });
  
    const data = await res.json();
    if (data.status === "success") {
      navigate("/thanks");
    } else {
      alert("送信に失敗しました");
    }
  };


  if (submitted) {
    return (
      <div className="p-6 text-center text-green-600 font-semibold">
        お問い合わせありがとうございました！
      </div>
    );
  }

  return (
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4 bg-white shadow rounded">
      <div>
        <label className="block font-semibold mb-1">お名前 <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">お名前（カタカナ） <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="nameKana"
          value={formData.nameKana}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.nameKana && <p className="text-red-500 text-sm mt-1">{errors.nameKana}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">メールアドレス <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">ご相談内容 <span className="text-red-500">*</span></label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full border rounded px-3 py-2"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <div className="text-right">
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          送信
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
