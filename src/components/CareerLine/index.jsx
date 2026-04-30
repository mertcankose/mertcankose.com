import { useEffect, useRef, useState } from "react";
import tubitakuzaylogo from "../../assets/images/career/tubitak-uzay.webp";
import freelancerLogo from "../../assets/images/career/mertcan.webp";
import jotformlogo from "../../assets/images/career/jotform.webp";
import openmoneylogo from "../../assets/images/career/openmoney.webp";
import gaislogo from "../../assets/images/career/gais.webp";
import vimlogo from "../../assets/images/career/vim.webp";
import supsisLogo from "../../assets/images/career/supsis.avif";
import finrendLogo from "../../assets/images/career/finrend.webp";
import clickerGamesLogo from "../../assets/images/career/clicker-games.jpg";
import fikaLogo from "../../assets/images/career/fika.png";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import styles from "./style.module.css";
import valenturaLogo from "../../assets/images/career/valentura-logo.webp";

const CARD_STEP = 334; // 310px card + 24px gap

const CareerLine = ({ className }) => {
  const sliderRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollPrev(el.scrollLeft > 4);
      setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir) => {
    sliderRef.current?.scrollBy({ left: dir * CARD_STEP, behavior: "smooth" });
  };

  const careerItems = [
    {
      logo: supsisLogo,
      title: "Supsis AI",
      date: "2026 - Present",
      role: "Full Stack Developer",
      description: (
        <>
          I work as a full stack developer building and maintaining the{" "}
          <span className="font-bold text-green-700">panel</span>,{" "}
          <span className="font-bold text-green-700">landing page</span> and{" "}
          <span className="font-bold text-green-700">CRM</span> — handling everything from UI to backend changes.
        </>
      ),
      isLatest: true,
    },
    {
      logo: finrendLogo,
      title: "Finrend",
      date: "2025 - Present",
      role: "Frontend Developer",
      description: (
        <>
          I work purely on the <span className="font-bold text-green-700">frontend</span>, developing and maintaining
          the company's <span className="font-bold text-green-700">web application</span>.
        </>
      ),
      isLatest: true,
      darkLogo: true,
    },
    {
      logo: fikaLogo,
      title: "Fika Mate",
      date: "2026 - Present",
      role: "Mobile Developer",
      description: (
        <>
          I build the <span className="font-bold text-green-700">mobile app</span> with{" "}
          <span className="font-bold text-green-700">React Native</span> — shipping new features and maintaining the
          existing product end to end.
        </>
      ),
      isLatest: true,
    },
    {
      logo: clickerGamesLogo,
      title: "Clicker Games",
      date: "2025 - 2025",
      role: "Blockchain & Game Developer",
      description: (
        <>
          I work on <span className="font-bold text-green-700">Telegram TON smart contracts</span> and game-side
          adjustments — bridging on-chain logic with the in-game experience.
        </>
      ),
    },
    // {
    //   logo: freelancerLogo,
    //   title: "mertcankose.com",
    //   date: "March 2020 - Present",
    //   role: "Product Engineer",
    //   description: (
    //     <>
    //       As a freelancer
    //       <span className="font-bold text-green-700">
    //         {" "}
    //         I've successfully executed and delivered diverse projects independently, leveraging my expertise across
    //         different technologies and domains.
    //       </span>{" "}
    //     </>
    //   ),
    //   link: {
    //     to: "#works",
    //     text: "Works",
    //   },
    // },
    {
      logo: valenturaLogo,
      title: "Valentura Technology & Investment",
      date: "May 2022 - July 2024",
      role: "Software Engineer",
      description: (
        <>
          During the time I worked in this company, I had the opportunity to develop projects across{" "}
          <span className="font-bold text-green-700">web</span>,{" "}
          <span className="font-bold text-green-700">mobile</span>, and{" "}
          <span className="font-bold text-green-700">blockchain</span> domains. I learned fast and contributed
          significantly to the <span className="font-bold text-orange-500">profitability</span> of the company.
        </>
      ),
    },
    {
      logo: tubitakuzaylogo,
      title: "Tübitak Uzay",
      date: "July 2023 - Aug 2023",
      role: "Internship - Network and SAP",
      description: (
        <>
          I worked on <span className="font-bold text-green-700">network</span>,{" "}
          <span className="font-bold text-green-700">system</span> and{" "}
          <span className="font-bold text-green-700">SAP</span> software at Tubitak Space. It was an internship where I
          understood the importance of in-house security and software security.
        </>
      ),
    },
    {
      logo: jotformlogo,
      title: "Jotform",
      date: "June 2022 - July 2022",
      role: "Internship - UI Developer",
      description: (
        <>
          During my 1 month internship in the{" "}
          <span className="font-bold text-green-700">Growth Tools Interns</span> team, we built an NPS Tool web app — I
          led the dashboard side and{" "}
          <span className="font-bold text-green-700">presented our project</span> to the growth team and managers.
        </>
      ),
    },
    {
      logo: openmoneylogo,
      title: "Open Money",
      date: "Jan 2022 - April 2022",
      role: "React Native Developer",
      description: (
        <>
          Driven by my interest in <span className="font-bold text-green-700">blockchain</span>, I joined one of the few
          companies in Turkey working on it and shipped the mobile applications of 2 projects in a short time.
        </>
      ),
    },
    {
      logo: gaislogo,
      title: "Gais Security",
      date: "Nov 2020 - Jan 2021",
      role: "Frontend Developer",
      description: (
        <>
          Looking for a place to volunteer during the pandemic, I joined this firm and within 3 months learned
          <span className="font-bold text-green-700"> react and vue</span>, contributing directly to the company's
          products.
        </>
      ),
    },
    {
      logo: vimlogo,
      title: "Vizyondan Misyona Girişimcilik Topluluğu",
      date: "March 2019 - Sep 2020",
      role: "Crew Member (Technical)",
      description: (
        <>
          I co-founded VIMTECH in the Engineering Faculty, where{" "}
          <span className="font-bold text-green-700">we organized a game course</span> — handling instructor search,
          promotion and continuity.
        </>
      ),
    },
  ];

  return (
    <div className={[styles.container, className].join(" ")} id="career">
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>Career</h2>
        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Previous"
            className={styles.navButton}
            onClick={() => scrollBy(-1)}
            disabled={!canScrollPrev}
          >
            <ArrowRight width="18" height="18" className={styles.iconFlip} />
          </button>
          <button
            type="button"
            aria-label="Next"
            className={styles.navButton}
            onClick={() => scrollBy(1)}
            disabled={!canScrollNext}
          >
            <ArrowRight width="18" height="18" />
          </button>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <div ref={sliderRef} className={styles.slider}>
          {careerItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.logoWrapper}>
                <img
                  src={item.logo}
                  alt={item.title}
                  className={[styles.cardImage, item.darkLogo && styles.cardImageDark].filter(Boolean).join(" ")}
                  loading="lazy"
                />
              </div>

              {item.isLatest && <div className={styles.latestBadge}>Latest</div>}

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <time className={styles.cardDate}>{item.date}</time>
              <p className={styles.cardRole}>{item.role}</p>
              <div className={styles.cardDescription}>{item.description}</div>

              {item.link && (
                <a href={item.link.to} className={styles.link}>
                  <ArrowRight width="16" height="16" className="mr-2" />
                  {item.link.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerLine;
