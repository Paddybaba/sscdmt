import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="row gx-0">
      <div className="footer-links">
        <Link href={"/contact"}>
          <a>Contact</a>
        </Link>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        {/* </div>
      <div className="row mx-auto "> */}
        <p className="text-center mb-0">
          Site developed and maintained by paddybaba{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
