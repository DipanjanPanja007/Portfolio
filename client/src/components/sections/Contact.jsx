import { useEffect, useState } from "react";

function Contact() {
  const [activeTab, setActiveTab] = useState("message");
  const [form, setForm] = useState({
    email: "",
    message: "",
    subject: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!status) return;
  
    const timer = setTimeout(() => {
      setStatus("");
    }, 3000); // disappears after 3s
  
    return () => clearTimeout(timer);
  }, [status]);

  const yourEmail = "work.dipanjanpanja@gmail.com";
  const yourPhone = "+91 8420730780";

  const handleSubmit = async () => {
    if (!form.email || !form.message) {
      setStatus("Email and message required");
      return;
    }

    try {
      setStatus("Sending...");

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/mail`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully");
        setForm({ email: "", message: "", subject: "" });
      } else {
        setStatus("Failed to send");
      }
    } catch {
      setStatus("Error sending message");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setStatus("Copied!");
    setTimeout(() => setStatus(""), 1500);
  };

  const tabs = [
    {
      id: "message",
      label: "Message",
      icon: (
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4 4h16v12H5.2L4 17.2V4Zm2 2v8.8l.8-.8H18V6H6Z"
          />
        </svg>
      ),
    },
    {
      id: "email",
      label: "Email",
      icon: (
        <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4 4h16v16H4V4Zm2 2v.5l6 4 6-4V6H6Zm12 2.3-6 4-6-4V18h12V8.3Z"
          />
        </svg>
      ),
    },
    {
      id: "phone",
      label: "Phone",
      icon: (
        <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.3 22 2 13.7 2 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1l-2.2 2.2Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-10">
      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/35 p-6">
        <h2 className="text-3xl font-bold text-white text-center">
          Contact me
        </h2>

        {/* 🔥 Tabs with icon + text */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
              
              ${
                activeTab === tab.id
                  ? "bg-blue-500/10 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.6)] text-white"
                  : "bg-slate-900 border-slate-700 text-slate-300 hover:border-blue-400/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.4)]"
              }
              `}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8 rounded-xl border border-slate-700 bg-slate-950/50 p-6">

          {activeTab === "message" && (
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email..."
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-md border border-slate-700 bg-black px-3 py-2 text-white focus:border-blue-400 outline-none"
              />

              <textarea
                placeholder="Drop your message..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-md border border-slate-700 bg-black px-3 py-2 text-white focus:border-blue-400 outline-none"
                rows={4}
              />

              <button
                onClick={handleSubmit}
                className="ml-auto block rounded-lg bg-white px-5 py-2 text-black font-medium hover:bg-gray-200 transition"
              >
                Send message
              </button>
            </div>
          )}

          {activeTab === "email" && (
            <div className="flex items-center gap-2 border border-slate-700 bg-black rounded-md px-4 py-3">
              <span className="text-white break-all flex-1">
                {yourEmail}
              </span>
              <button
                onClick={() => copyToClipboard(yourEmail)}
                className="text-blue-400 hover:text-white shrink-0"
              >
                Copy
              </button>
            </div>
          )}

          {activeTab === "phone" && (
            <div className="flex items-center justify-between border border-slate-700 bg-black rounded-md px-4 py-3">
              <span className="text-white">{yourPhone}</span>
              <button
                onClick={() => copyToClipboard(yourPhone)}
                className="text-blue-400 hover:text-white"
              >
                Copy
              </button>
            </div>
          )}
        </div>

        {status && (
          <p className="mt-4 text-center text-sm text-blue-300">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;