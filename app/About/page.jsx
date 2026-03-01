"use client";

export default function About() {
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "12px",
  };
  const imageCard = {
    width: "142px",
    height: "142px",
    borderRadius: "50%",
    overflow: "hidden",
    background: "var(--card-bg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle = {
    marginTop: "12px",
    fontSize: "12px",
    lineHeight: "18px",
    color: "var(--foreground)",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
  };

  const cardStyle1 = {
    background: "var(--card-bg)",
    borderRadius: "16px",
    overflow: "hidden",
    height: "456px",
    display: "flex",
    flexDirection: "column",
  };

  const textOnImage = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "12px",
    fontSize: "14px",
    color: "#fff",
    textAlign: "center",
    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
  };

  return (
    <div style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      {/* HERO SECTION */}
      <section className="about-hero-section">
        <img
          src="/images/about.jpg"
          alt="About"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            pointerEvents: "none",
            background:
              "linear-gradient(to top, rgba(var(--background-rgb), 0.9), rgba(var(--background-rgb), 0))",
          }}
        />
      </section>

      {/* CONTENT SECTION */}
      <section className="about-section" style={{ paddingBottom: 0 }}>
        <h1 className="about-main-title" style={{ margin: 0 }}>
          About Us
        </h1>
        <h3 className="about-sub-title">
          അക്ഷയവാഹിനി: അമ്മയുടെ കൈപ്പുണ്യവും കരുതലും നിങ്ങളുടെ പടിക്കൽ.
        </h3>
        <p className="about-para">
          വീട്ടമ്മമാരുടെ പാചക അഭിരുചികളെയും അവരുടെ പ്രത്യേക രുചിക്കൂട്ടുകളെയും
          സുരക്ഷിതവും സ്ഥിരവുമായ വരുമാനമാക്കി മാറ്റുന്നതിനായി സമൂഹകേന്ദ്രീകൃതമായ
          കൂട്ടായ്മയിലൂടെ രൂപകല്പന ചെയ്ത ഒരു ഫുഡ് ഡെലിവറി പ്ലാറ്റ്ഫോമാണ്
          അക്ഷയവാഹിനി. ഉപഭോക്താക്കൾക്ക് അവരുടെ സമീപ പ്രദേശങ്ങളിൽ നിന്നുള്ളതും
          മായംചേർക്കാത്തതും ശുചിത്വമാർന്നതുമായ വീട്ടുഭക്ഷണം നൽകുകയാണ് ഞങ്ങളുടെ
          ലക്ഷ്യം.
        </p>
      </section>

      {/* WHY US SECTION */}
      <section className="about-section">
        <h1 className="about-main-title">Why Us</h1>
        <div className="about-why-us-flex">
          <div style={{ flex: 3, minWidth: "280px" }}>
            <p className="about-para" style={{ marginTop: 0 }}>
              ഫാക്ടറി ഭക്ഷണമല്ല വീട്ടിലെ ഭക്ഷണം മാത്രം.<br /> <br />
              സ്ത്രീകളാൽ നയിക്കുന്ന മികച്ച വൃത്തിയുള്ള അടുക്കളകൾ<br /> <br />
              ചൂടുള്ളതും പുതുമയുള്ളതുമായ ഭക്ഷണം.<br /> <br />
              സുരക്ഷിതമായ ഡെലിവറി,<br /> <br />
              പുനരുപയോഗിക്കാവുന്നതോ പ്രകൃതിസൗഹൃദമോ ആയ കണ്ടെയ്നറുകൾ. <br /> <br />
              വിശ്വാസയോഗ്യമായ  പ്രാദേശിക സേവനം. <br /> <br />
              അമ്മമാരുടെ സ്നേഹത്തിൽ കുതിർന്ന വിശ്വാസം
            </p>
          </div>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <img
              src="/images/about1.png"
              alt="Why Us"
              className="about-why-us-image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "6px",
                marginTop: "-30px",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* OUR MISSION SECTION */}
      <section className="about-section">
        <h1 className="about-main-title">Our Mission</h1>
        <p className="about-para">
          സാമ്പത്തിക ബുദ്ധിമുട്ട് അനുഭവിക്കുന്ന വീട്ടമ്മമാർക്ക് ഒരു കൈത്താങ്ങാവുകയും, അവർക്ക് മികച്ച സാമ്പത്തികഭദ്രതയും സുരക്ഷിതത്വവും നൽകുകയെന്നതും ഞങ്ങളുടെ പ്രധാനദൗത്യമാണ്. ശുദ്ധവും ചൂടേറിയതും സ്നേഹനിബിഡവുമായ രുചികരമായ  വീട്ടുഭക്ഷണം ഉപഭോക്താക്കൾക്ക് ഉറപ്പുവരുത്തുകയെന്നതും ഞങ്ങളുടെ ദൗത്യമാണ്.  <br /> <br />
          പുനരുപയോഗ്യമായതോ പ്രകൃതിക്ക് ഹാനികരമാവാത്തതോ ആയ കണ്ടെയ്‌നറുകൾ  വഴി ഭക്ഷണവിതരണം നടത്തുന്നതിനാൽ  പരിസ്ഥിതി മലിനീകരണം ഉണ്ടാവാതെ സംരക്ഷിക്കേണ്ടതും ഞങ്ങളുടെ ഉത്തരവാദിത്വമാണ്. <br /> <br />
          ലൊക്കേഷൻ അടിസ്ഥാനപ്പെടുത്തിയുള്ള വിതരണ സംവിധാനത്തിലൂടെ പ്രാദേശിക വീട്ടമ്മമാരുടെ ഏകീകരണവും  കൂട്ടായ്മയിലൂടെയുള്ള വിജയവും ഉറപ്പുവരുത്തുക എന്നതും ഞങ്ങൾക്ക് ലഭ്യമായിട്ടുള്ള അവസരമാണ്. <br /> <br />
          ഞങ്ങൾക്കൊപ്പം പ്രവർത്തിക്കുന്നവരും പ്രവർത്തിക്കാൻ ആഗ്രഹിക്കുന്നവരും  പാചകത്തിൽ താല്പര്യം ഉള്ളവരോ പരമ്പരാഗത രീതിയിൽ പാചകം ചെയ്യുന്നവരോ ആയിരിക്കും. <br /> <br />
          അടിസ്ഥാന ശുചിത്വവും ഗുണനിലവാരമാനദണ്ഡങ്ങളും കർശനമായി പാലിച്ചിരിക്കണം. <br /> <br />
          അവർ വീട്ടിൽ നിന്ന് തന്നെ വരുമാനം നേടാൻ ആഗ്രഹിക്കുന്നവരായിരിക്കണം. വ്യവസായിക അടിസ്ഥാനത്തിൽ ഭക്ഷണം പാചകം ചെയ്യുന്നവർ ആയിരിക്കരുത്.
        </p>
      </section>

      {/* OUR SPECIALITY SECTION */}
      <section className="about-section">
        <div className="about-inner-container">
          <h1 className="about-main-title" style={{ marginBottom: "30px" }}>
            Our Speciality
          </h1>
          <div className="about-speciality-grid">
            <div style={{ ...cardStyle, gridColumn: "1 / span 2" }}>
              <div style={imageCard}>
                <img src="/images/about3.png" alt="" style={imgStyle} />
              </div>
              <p style={textStyle}>
                ഭക്ഷ്യസുരക്ഷയും ഗുണനിലവാരവും <br /> ഉറപ്പുവരുത്തുന്ന
              </p>
            </div>
            <div style={{ ...cardStyle, gridColumn: "3 / span 2" }}>
              <div style={imageCard}>
                <img src="/images/about4.png" alt="" style={imgStyle} />
              </div>
              <p style={textStyle}>
                വ്യവസായ <br /> അടിസ്ഥാനത്തിലല്ലാത്തതിനാൽ <br /> പഴകിയ ഭക്ഷണത്തിന് വിട; <br /> എന്നും ഫ്രഷ് വീട്ടുഭക്ഷണം
              </p>
            </div>
            <div style={{ ...cardStyle, gridColumn: "5 / span 2" }}>
              <div style={imageCard}>
                <img src="/images/about5.png" alt="" style={imgStyle} />
              </div>
              <p style={textStyle}>
                പ്ലാസ്റ്റിക് ഒഴിവാക്കാം; സ്റ്റീൽ <br /> പാത്രങ്ങളിൽ ചൂടോടെ സുരക്ഷിതമായ <br /> വീട്ടുഭക്ഷണം കഴിക്കാം.
              </p>
            </div>
            <div style={{ ...cardStyle, gridColumn: "2 / span 2" }}>
              <div style={imageCard}>
                <img src="/images/about2.png" alt="" style={imgStyle} />
              </div>
              <p style={textStyle}>
                ലൊക്കേഷൻ അധിഷ്ഠിത ഡെലിവറി; <br /> കുറഞ്ഞ സമയത്തിനുള്ളിൽ ചൂടുള്ള ഭക്ഷണം <br /> നിങ്ങളുടെ അരികിലെത്തുന്നു.
              </p>
            </div>
            <div style={{ ...cardStyle, gridColumn: "4 / span 2" }}>
              <div style={imageCard}>
                <img src="/images/about7.png" alt="" style={imgStyle} />
              </div>
              <p style={textStyle}>
                ലോക്കൽ കസ്റ്റമേഴ്സിലേക്ക് <br /> വേഗത്തിൽ എത്താം; മികച്ച ബിസിനസ്സ് വളർച്ച <br /> നേടാം
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="about-section">
        <div className="about-inner-container">
          <h1 className="about-main-title" style={{ marginBottom: "5px" }}>
            Advantages
          </h1>
          <div className="about-advantages-grid" style={{ marginTop: "20px" }}>
            <div className="about-adv-column">
              <div
                style={{
                  background: "var(--card-bg)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: "220px",
                  position: "relative",
                }}
              >
                <img src="/images/adv1.png" alt="" style={imgStyle} />
                <div style={textOnImage}>ഉത്പാദനക്ഷമത കൂട്ടുന്നു.</div>
              </div>
              <div
                style={{
                  background: "var(--card-bg)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: "220px",
                  position: "relative",
                }}
              >
                <img src="/images/adv2.png" alt="" style={imgStyle} />
                <div style={textOnImage}>
                  പ്രാദേശിക ഭക്ഷ്യവ്യവസ്ഥയെ <br /> ശക്തിപ്പെടുത്തുന്നു.
                </div>
              </div>
            </div>
            <div style={cardStyle1}>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/images/adv3.png" alt="" style={imgStyle} />
                <div style={textOnImage}>ഉത്പാദനക്ഷമത കൂട്ടുന്നു.</div>
              </div>
            </div>
            <div style={cardStyle1}>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <img src="/images/adv4.png" alt="" style={imgStyle} />
                <div style={textOnImage}>ഭക്ഷ്യമാലിന്യം കുറയുന്നു</div>
              </div>
            </div>
          </div>
          {/* FULL WIDTH CARD */}
          <div
            style={{
              background: "var(--card-bg)",
              borderRadius: "16px",
              overflow: "hidden",
              height: "338px",
              marginTop: "20px",
              position: "relative",
            }}
          >
            <img src="/images/adv5.png" alt="" style={imgStyle} />
            <div style={textOnImage}>
              സ്ത്രീകൾ നയിക്കുന്ന മൈക്രോ ബിസിനസുകൾ വളരുന്നതോടൊപ്പം കുടുംബത്തിൽ ചിരി നിലനിർത്തുന്നു.
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS SECTION */}
      <section className="about-section">
        <div className="about-inner-container">
          <h1 className="about-main-title">Business</h1>
          <div className="about-business-flex">
            <div
              style={{
                background: "var(--card-bg)",
                borderRadius: "16px",
                overflow: "hidden",
                height: "280px",
                flex: "1 1 250px",
                position: "relative",
              }}
            >
              <img src="/images/buisin.png" alt="" style={imgStyle} />
            </div>
            <div style={{ flex: "3 1 300px" }}>
              <p className="about-para" style={{ marginTop: "20px" }}>
                കമ്മീഷൻ അടിസ്ഥാനത്തിൽ ഉള്ള പ്ലാറ്റ്ഫോം. <br /> <br />
                വീട്ടമ്മമാർക് വലിയ നിക്ഷേപം ആവശ്യമില്ല. <br /> <br />
                ദിവസേന/ആഴ്ചതോറുമുള്ള  പേയ്‌മെന്റ് സംവിധാനം. <br /> <br />
                സുതാര്യമായ വരുമാനത്തെ കാണിക്കുന്ന ഡാഷ്ബോർഡ്. <br /> <br />
                കുറഞ്ഞ ചിലവിൽ പ്രൊമോഷനോടെ കൂടുതൽ വളർച്ച നേടാനുള്ള ആത്മാർത്ഥമായ പിന്തുണ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}