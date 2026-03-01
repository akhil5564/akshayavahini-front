"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const slides = [
  {
    id: 1,
    title: "അമ്മയുടെ <span style='color: #4CAF50'>കൈപ്പുണ്യം</span>, നിങ്ങളുടെ വാതിൽക്കൽ.",
    description: "ശുദ്ധവും മായംചേർക്കാത്തതുമായ വീട്ടുഭക്ഷണം സമീപവാസികളിൽ നിന്ന്",
    image: "/images/web1.png",
    // buttons: [
    //   { label: "Register", href: "/register", type: "primary" },
    //   { label: "Learn More", href: "#about", type: "secondary" }
    // ]
  },
  {
    id: 2,
    title: "വീട്ടിലെ ഭക്ഷണം പോലെ <span style='color: #4CAF50'>സുരക്ഷിതം.</span>",
    description: "ശുചിത്വത്തോടെ തയ്യാറാക്കിയ ചൂടേറിയ ഭക്ഷണം – വിശ്വാസത്തോടെ",
    image: "/images/web2.png",
    // buttons: [
    //   { label: "Read More About Us", href: "#about", type: "primary" }
    // ]
  },
  {
    id: 3,
    title: "വീട്ടമ്മമാരുടെ <span style='color: #4CAF50'>പാചകമികവ്</span>, സ്ഥിരവരുമാനമായി.",
    description: "സമൂഹകേന്ദ്രീകൃതമായൊരു ഭക്ഷണ വിപ്ലവം",
    image: "/images/web3.png",
    // buttons: [
    //   { label: "Register", href: "/register", type: "primary" }
    // ]
  },
  {
    id: 4,
    title: "<span style='color: #4CAF50'>സ്നേഹത്തോടെ</span> പാകം ചെയ്തത്, സന്തോഷത്തോടെ കഴിക്കാം.",
    description: "അമ്മയുടെ കൈകളിൽ നിന്നുള്ള സ്വാദിഷ്ടമായ അനുഭവം",
    image: "/images/web4.png",
    buttons: [
      { label: "Register", href: "/register", type: "primary" }
    ]
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [question, setQuestion] = useState("");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSendEmail = () => {
    if (!question.trim()) return;
    const subject = encodeURIComponent("Question from Akshayavahini Vendor Page");
    const body = encodeURIComponent(question);
    window.location.href = `mailto:Zorokartindia2025@gmail.com?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <main className="home-main">
      <section className="carousel-section">
        <div className="carousel-container">
          <div className="carousel-slides-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
              >
                <div className="carousel-image-area">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: slide.id === 1 ? "center 25%" : "center"
                    }}
                    priority
                  />
                  <div className="carousel-overlay"></div>
                </div>

                <div className="carousel-content-wrapper">
                  <div className="carousel-text-area">
                    <div className="text-content">
                      <h1 dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                      <p>{slide.description}</p>
                      {slide.buttons?.length > 0 && (
                        <div className="carousel-actions">
                          {slide.buttons.map((btn, bIdx) => (
                            <a key={bIdx} href={btn.href}>
                              <button className={`carousel-btn ${btn.type || 'primary'}`}>
                                {btn.label}
                              </button>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <div className="carousel-nav">
              <button onClick={prevSlide} className="nav-arrow" aria-label="Previous Slide">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button onClick={nextSlide} className="nav-arrow" aria-label="Next Slide">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <div className="carousel-dots">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                className={`dot ${dotIdx === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* about redesign */}
      <section id="about" className="about-section">
        <div className="about-container">

          {/* About Us Row */}
          <div className="about-row">
            <div className="about-image-group">
              <Image src="/images/Abt1.png" alt="About Us" fill style={{ objectFit: 'contain', objectPosition: 'left' }} />
            </div>

            <div className="about-text-group">
              <h1>About us</h1>
              <p>
                വീട്ടമ്മമാരുടെ പാചക അഭിരുചികളെയും അവരുടെ പ്രത്യേക രുചിക്കൂട്ടുകളെയും സുരക്ഷിതവും സ്ഥിരവുമായ വരുമാനമാക്കി മാറ്റുന്നതിനായി സമൂഹകേന്ദ്രീകൃതമായ കൂട്ടായ്മയിലൂടെ രൂപകല്പന ചെയ്ത ഒരു ഫുഡ്‌ ഡെലിവറി പ്ലാറ്റ്ഫോം ആണ് അക്ഷയവാഹിനി. ഉപഭോക്താക്കൾക്ക് അവരുടെ സമീപ പ്രദേശങ്ങളിൽ നിന്നുള്ളതും മായംചേർക്കാത്തതും ശുചിത്വമാർന്നതും ചൂടേറിയതുമായ വീട്ടുഭക്ഷണം നൽകുകയാണ് ഞങ്ങളുടെ പ്രധാനലക്ഷ്യം. പാചകറാണിമാരായ പ്രാദേശിക വീട്ടമ്മമാരെയും സമീപത്തുള്ള ഉപഭോക്താക്കളെയും അക്ഷയവാഹിനിയിലൂടെ ബന്ധിപ്പിക്കുന്നതിനാൽ ഞങ്ങൾ വിളമ്പുന്ന ഓരോ ഭക്ഷണത്തോടൊപ്പം ഉപഭോക്താക്കളിൽ പുതുമ നിറഞ്ഞ അനുഭവവും &apos;അമ്മയുടെ കൈകളാൽ.
              </p>
              <Link href="/About" className="about-outline-btn">
                Read more about us &gt;
              </Link>
            </div>
          </div>

          {/* Mission Row */}
          <div className="about-row reverse">
            <div className="about-image-group">
              <Image src="/images/Abt2.png" alt="Mission" fill style={{ objectFit: 'contain' }} />
            </div>

            <div className="about-text-group">
              <h2>മിഷൻ</h2>
              <p>
                സാമ്പത്തിക ബുദ്ധിമുട്ട് അനുഭവിക്കുന്ന വീട്ടമ്മമാർക്ക് ഒരു കൈത്താങ്ങാവുകയും, അവർക്ക് മികച്ച സാമ്പത്തികഭദ്രതയും സുരക്ഷിതത്വവും നൽകുകയെന്നതും ഞങ്ങളുടെ പ്രധാനദൗത്യമാണ്. ശുദ്ധവും ചൂടേറിയതും സ്നേഹനിബിഡവുമായ രുചികരമായ വീട്ടുഭക്ഷണം ഉപഭോക്താക്കൾക്ക് ഉറപ്പുവരുത്തുകയെന്നതും ഞങ്ങളുടെ ദൗത്യമാണ്.
              </p>
              <Link href="/About" className="about-outline-btn">
                Read more about us &gt;
              </Link>
            </div>
          </div>

          <div className="about-table">
            {/* Card 1 */}
            <div className="about-card">
              <div className="about-card-header">
                <h3>ഞങ്ങളുടെ പ്രത്യേകതകൾ</h3>
              </div>
              <div className="about-card-body">
                <strong>ഭക്ഷണസുരക്ഷയും ഗുണനിലവാരവും ഉറപ്പുവരുത്തുന്നു.</strong>
                <p>
                  ഫ്രോസൺ അല്ലെങ്കിൽ പഴകിയ ഭക്ഷണം ഇല്ല (കാരണം വ്യവസായിക അടിസ്ഥാനത്തിൽ അല്ലാതെ വീട്ടമ്മമാരുടെ അടുക്കളയിലാണ് പാചകം)
                </p>
                <p>
                  ശുചിത്വമുള്ള വീട്ടടുക്കളകളിൽ നിന്ന് സുരക്ഷിതവും ഗുണനിലവാരമുള്ളതുമായ കണ്ടെയ്നറുകളിൽ (steel/foodgrade) ഡെലിവറി ചെയ്യുന്നതിനാൽ ഭക്ഷണം ചൂടോടെയും സുരക്ഷിതമായും നിലനിൽക്കുന്നു. ഇത് പരിസ്ഥിതിസൗഹൃദവും സുരക്ഷിതവും സുസ്ഥിരവുമാണ്. കൂടാതെ, പ്ലാസ്റ്റിക് ഉപയോഗവും ഭക്ഷ്യമാലിനീകരണവും ഒഴിവാക്കുന്നു.
                </p>
              </div>
              <Link href="/About" className="about-card-btn">Read more</Link>
            </div>

            {/* Card 2 */}
            <div className="about-card">
              <div className="about-card-header">
                <h3>ഗുണം</h3>
              </div>
              <div className="about-card-body">
                <strong>ഉത്പാദനക്ഷമത കൂട്ടുന്നു.</strong>
                <p>
                  വീട്ടമ്മമാർക്ക് സുസ്ഥിരവരുമാനം, ആരോഗ്യകരമായ ഭക്ഷണശീലം എന്നിവ പ്രോത്സാഹിപ്പിക്കുന്നു.
                </p>
                <p>
                  പ്രാദേശിക ഭക്ഷ്യവ്യവസ്ഥയെ ശക്തിപ്പെടുത്തുന്നു. ഭക്ഷ്യമാലിന്യം കുറയുന്നു. സ്തീകൾ നയിക്കുന്ന മൈക്രോ ബിസിനസ്സുകൾ വളരുന്നതോടൊപ്പം കുടുംബത്തിൽ ചിരി നിലനിർത്തുന്നു.
                </p>
              </div>
              <Link href="/About" className="about-card-btn">Read more</Link>
            </div>

            {/* Card 3 */}
            <div className="about-card">
              <div className="about-card-header">
                <h3>ബിസിനസ്</h3>
              </div>
              <div className="about-card-body">
                <strong>കമ്മീഷൻ അടിസ്ഥാനത്തിൽ ഉള്ള പ്ലാറ്റ്ഫോം.</strong>
                <p>
                  വീട്ടമ്മമാർക്ക് വലിയ നിക്ഷേപം ആവശ്യമില്ല. ദിവസേന/ആഴ്ചതോറുമുള്ള പേയ്മെന്റ് സംവിധാനം.
                </p>
                <p>
                  സുതാര്യമായ വരുമാനത്തെ കാണിക്കുന്ന ഡാഷ്ബോർഡ്. കുറഞ്ഞ ചിലവിൽ പ്രൊമോഷനോടെ കൂടുതൽ വളർച്ച നേടാനുള്ള ആത്മാർത്ഥമായ പിന്തുണ.
                </p>
              </div>
              <Link href="/About" className="about-card-btn">Read more</Link>
            </div>
          </div>

        </div>
      </section>

      {/* how to register */}
      <section id="how-to-register" className="how-register-section">
        <h1 className="how-title">എങ്ങനെ രജിസ്റ്റർ ചെയ്യാം</h1>

        <div className="steps-wrapper">

          {/* STEP 1 */}
          <div className="step-card step-row">
            <div className="step-text-content">
              <h3 className="step-label">Step 1</h3>
              <p className="step-description">
                നിങ്ങളുടെ രജിസ്റ്റർ വെണ്ടർ ആണോ അതോ ഏജന്റ് മുഖേനയാണോ എന്ന് തിരഞ്ഞെടുക്കുക.
              </p>
              <Link href="/register" className="step-link">
                Start &gt;
              </Link>
            </div>
            <div className="step-image-container">
              <Image src="/images/RCT1.png" alt="Step 1" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          {/* STEP 2 */}
          <div className="step-card step-col">
            <div className="step-text-content">
              <h3 className="step-label">Step 2</h3>
              <p className="step-description">
                പെയ്മെന്റ് രീതി തിരഞ്ഞെടുക്കുക
              </p>
              <Link href="#how-to-register" className="step-link">
                Choose &gt;
              </Link>
            </div>
            <div className="step-image-container-vertical">
              <Image src="/images/RCT2.png" alt="Step 2" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          {/* STEP 3 */}
          <div className="step-card step-col">
            <div className="step-text-content">
              <h3 className="step-label">Step 3</h3>
              <p className="step-description">
                നിങ്ങളുടെ ഇൻവോയ്സ് വിശദാംശങ്ങൾ അടങ്ങിയ വാട്സ്ആപ്പ് സന്ദേശം ഞങ്ങളിൽ നിന്ന് പ്രതീക്ഷിക്കുക.
              </p>
              <Link href="#how-to-register" className="step-link">
                Check &gt;
              </Link>
            </div>
            <div className="step-image-container-vertical">
              <Image src="/images/RCT3.png" alt="Step 3" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Payment Completion Section */}
        <div className="payment-completion-wrapper">
          <div className="payment-completion-content">
            <h1 className="payment-title">പേയ്മെൻ്റ് പൂർത്തിയാക്കുക</h1>
            <p className="payment-description">
              ഒരു ചെറിയ ഫീസ് അടച്ചാൽ മതി. അത് പൂർത്തിയായിക്കഴിഞ്ഞാൽ നിങ്ങളുടെ വാട്സ്ആപ്പിലേക്ക് നേരിട്ട് ഒരു ഇൻവോയ്സ് അയയ്ക്കും. കാത്തിരിക്കേണ്ടതില്ല, ആശയക്കുഴപ്പവുമില്ല.
            </p>
            <div className="payment-actions">
              <button className="payment-proceed-btn">Proceed</button>
              <Link href="#how-to-register" className="payment-continue-link">
                Continue &gt;
              </Link>
            </div>
          </div>
          <div className="payment-image-container">
            <Image src="/images/RCT4.png" alt="Payment Completion" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </section>
      <section id="why-us">
        <div className="why-us-section">
          <h1 className="why-us-title">എന്തിനു ഞങ്ങൾ?</h1>
          <div className="why-us-content">
            <div className="why-us-image-group">
              <Image src="/images/Qst1.png" alt="Why Us" fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="why-us-box">
              <ul>
                <li>ഫാക്ടറി ഭക്ഷണമല്ല വീട്ടിലെ ഭക്ഷണം മാത്രം</li>
                <li>സ്ത്രീകളാൽ നയിക്കുന്ന മികച്ച വൃത്തിയുള്ള അടുക്കളകൾ.</li>
                <li>ചൂടുള്ളതും പുതുമയുള്ളതുമായ ഭക്ഷണം.</li>
                <li>സുരക്ഷിതമായ ഡെലിവറി, പുനരുപയോഗിക്കാവുന്നതോ പ്രകൃതിസൗഹൃദമോ ആയ കണ്ടെയ്നറുകൾ.</li>
                <li>വിശ്വാസയോഗ്യമായ പ്രാദേശിക സേവനം.</li>
                <li>അമ്മമാരുടെ സ്നേഹത്തിൽ കുതിർന്ന വിശ്വാസം</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* questions */}
      <section id="questions" className="questions-section">
        <div className="questions-header">
          <h1 className="questions-title">Questions?</h1>
          <p className="questions-subtitle">Everything you need to know about becoming a vendor.</p>
        </div>

        <div className="faq-grid">
          <div className="faq-item">
            <h3>What's the registration fee?</h3>
            <p>There's a small fee to get started. Once you pay, your invoice goes straight to your WhatsApp. No hidden costs, no surprises.</p>
            <div className="faq-divider"></div>
            <h3>How do I get paid?</h3>
            <p>You keep the money from every order. No middleman taking a cut. Direct payment for your work.</p>
          </div>

          <div className="faq-vertical-divider"></div>

          <div className="faq-item">
            <h3>When can I start selling?</h3>
            <p>After registration and payment are complete, you're in. Customers will find you and orders will come. Start cooking.</p>
            <div className="faq-divider"></div>
            <h3>Can I upload a video later?</h3>
            <p>Upload it during registration. Show us what you cook best. That video is how customers get to know you.</p>
          </div>
        </div>

        <div className="still-questions">
          <h2>Still have questions?</h2>
          <p>Reach out to us anytime.</p>
          <div className="question-form">
            <input
              type="text"
              placeholder="Ask your Question here"
              aria-label="Ask your Question here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendEmail()}
            />
            <button
              className="send-btn"
              aria-label="Send"
              onClick={handleSendEmail}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </section>
    </main >
  );
}
