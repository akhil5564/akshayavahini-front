"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faEnvelope,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faFacebook,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link href="/">
                            <div className="footer-logo-container">
                                <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
                            </div>
                        </Link>
                        <h2 className="brand-name">AKSHAYA VAAHINI</h2>
                        <p className="footer-tagline">From Our kitchen to Your Heart</p>
                    </div>

                    <div className="footer-columns">
                        <div className="footer-col">
                            <h3>About us</h3>
                            <ul>
                                <li><Link href="/#about">How it works</Link></li>
                                <li><Link href="/#about">Why join us</Link></li>
                                <li><Link href="/#how-to-register">How to register</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Quick links</h3>
                            <ul>
                                <li><Link href="/register">Vendor Registration</Link></li>
                                <li><Link href="/register">Agent Registration</Link></li>
                                <li><Link href="/login">Vendor Login</Link></li>
                                <li><Link href="/login">Agent Login</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Support</h3>
                            <ul>
                                <li><Link href="/#questions">FAQs</Link></li>
                                <li><Link href="/help">Help Center</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                                <li><Link href="/report">Report an Issue</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Legal</h3>
                            <ul>
                                <li><Link href="/terms">Terms & Conditions</Link></li>
                                <li><Link href="/privacy">Privacy policy</Link></li>
                                <li><Link href="/agreement">User Agreement</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-info">
                    <div className="contact-section">
                        <h3>Contact Information</h3>
                        <ul className="contact-list">
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                               <span>MRRA-50A, Manimala Rd, Ponekkara, Edappally, Kochi, Ernakulam, Kerala 682024</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                <span>Zorokartindia2025@gmail.com</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                                <div>
                                <span>+91 9061533444</span>
                            </div>
                            <div>
                                <span>+91 9061733444</span>
                            </div>
                            </li>
                        </ul>
                    </div>

                    <div className="follow-section">
                        <h3>Follow us on</h3>
                        <div className="social-icons">
                            <Link href="https://www.instagram.com/akshayavaahini/" aria-label="Instagram" className="icon-inst">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                            <Link href="https://www.facebook.com/akshayavaahini" aria-label="Facebook" className="icon-fb">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link href="https://www.youtube.com/@akshayavaahini" aria-label="YouTube" className="icon-yt">
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p><span>&copy;</span> {currentYear} Akshayavahini. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
