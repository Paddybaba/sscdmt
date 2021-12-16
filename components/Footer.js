import React from "react";
import Link from "next/link";
const Footer = () =>{

    return(
        <footer className="row gx-0">
            <div className="footer-links">
                <Link href={"/Contact"}><a>Contact</a></Link>
                <p>Home</p>
            </div>
            <div className="row mx-auto">
                <p className="text-center">Site developed and maintained by paddybaba </p>
            </div>
            
        </footer>
    )
}

export default Footer;