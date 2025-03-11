import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-auto">
      <p className="text-lg font-semibold">RoyalCrown</p>

      {/* ✅ Stacked & Centered for Mobile */}
      <div className="flex flex-col items-center justify-center space-y-2 mt-2">
        <p className="text-base flex items-center">📞 +1 (323) 590-2647</p>
        <p className="text-base flex items-center">📧 royalcrownroofingservices@gmail.com</p>
      </div>

      <p className="mt-4 text-sm">© 2024 RoyalCrown. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
