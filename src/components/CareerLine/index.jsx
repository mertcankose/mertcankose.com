import tubitakuzaylogo from "../../assets/images/career/tubitak-uzay.webp";
import freelancerLogo from "../../assets/images/career/mertcan.webp";
import jotformlogo from "../../assets/images/career/jotform.webp";
import openmoneylogo from "../../assets/images/career/openmoney.webp";
import gaislogo from "../../assets/images/career/gais.webp";
import vimlogo from "../../assets/images/career/vim.webp";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import styles from "./style.module.css";
import valenturaLogo from "../../assets/images/career/valentura-logo.webp";
import { useEffect, useMemo, useState } from "react";

const CareerLine = ({ className }) => {
  const [isXlScreen, setIsXlScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXlScreen(window.innerWidth >= 1280); // xl breakpoint is 1280px in Tailwind
    };

    // Initial check
    checkScreenSize();

    // Add listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const baseCareerItems = [
    {
      logo: freelancerLogo,
      title: "mertcankose.com",
      date: "March 2020 - Present",
      role: "Product Engineer",
      description: (
        <>
          As a freelancer
          <span className="font-bold text-green-700">
            {" "}
            I've successfully executed and delivered diverse projects independently, leveraging my expertise across
            different technologies and domains.
          </span>{" "}
        </>
      ),
      isLatest: true,
      link: {
        to: "#works",
        text: "Works",
      },
    },
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
      logo: gaislogo,
      title: "Gais Security",
      date: "Nov 2020 - Jan 2021",
      role: "Frontend Developer",
      description: (
        <>
          I was looking for a place where I could work as a volunteer to avoid being empty handed during the pandemic,
          and I started working at this firm. In as little as 3 months, I learned about
          <span className="font-bold text-green-700"> react and vue</span> technologies and became involved in the
          companies products.
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
          Due to my interest in the <span className="font-bold text-green-700">blockchain</span> field, I worked as a
          software developer at one of the few companies doing this job in Turkey. As a result of the short time I have
          been working, I have developed the mobile application of 2 projects.
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
          During my 1 month internship, we developed an NPS Tool web application with a talented software developer in
          the <span className="font-bold text-green-700">Growth Tools Interns</span> team. I played a big role in the
          dashboard side of the project and at the same time,{" "}
          <span className="font-bold text-green-700">I made a presentation </span>
          about our project to the growth team and managers in the company.
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
          I co-founded a community under the name VIMTECH in the Engineering Faculty of the community, where{" "}
          <span className="font-bold text-green-700">we organized a game course.</span> I have worked in the fields of
          instructor search, course promotion and course continuity.
        </>
      ),
    },
  ];

  // Reorder items based on screen size
  const careerItems = useMemo(() => {
    if (isXlScreen) {
      return baseCareerItems;
    } else {
      // Find indices of Gais and Jotform
      const gaisIndex = baseCareerItems.findIndex((item) => item.title.includes("Gais"));
      const jotformIndex = baseCareerItems.findIndex((item) => item.title.includes("Jotform"));

      // Create a new array with swapped positions
      const reorderedItems = [...baseCareerItems];
      [reorderedItems[gaisIndex], reorderedItems[jotformIndex]] = [
        reorderedItems[jotformIndex],
        reorderedItems[gaisIndex],
      ];

      return reorderedItems;
    }
  }, [isXlScreen]);

  // Group items into rows of 3
  const rows = careerItems.reduce((acc, item, index) => {
    const rowIndex = Math.floor(index / 3);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(item);
    return acc;
  }, []);

  return (
    <div className={[styles.container, className].join(" ")} id="career">
      <h2 className={styles.heading}>Career</h2>

      <div className={styles.timeline}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.timelineRow}>
            {row.map((item, index) => (
              <div key={index} className={styles.timelineContent}>
                {/* Hexagonal Logo */}
                <div className={styles.logoWrapper}>
                  <img src={item.logo} alt={item.title} className={styles.timelineImage} loading="lazy" />
                </div>

                {/* Latest Badge */}
                {item.isLatest && <div className={styles.latestBadge}>Latest</div>}

                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <time className={styles.timelineDate}>{item.date}</time>
                <p className={styles.timelineRole}>{item.role}</p>
                <div className={styles.timelineDescription}>{item.description}</div>

                {item.link && (
                  <a href={item.link.to} className={styles.link}>
                    <ArrowRight width="16" height="16" className="mr-2" />
                    {item.link.text}
                  </a>
                )}

                {/* İlk satır bağlantıları */}
                {rowIndex === 0 && index < row.length - 1 && <div className={styles.connectionLine} />}

                {/* İkinci satır bağlantıları */}
                {rowIndex === 1 && (
                  <>
                    {/* Gais için sağ ve aşağı çizgi */}
                    {index === 0 && (
                      <>
                        <div className={styles.connectionLine} />
                        <div className={styles.verticalConnection} />
                      </>
                    )}
                    {/* OpenMoney için sağ çizgi */}
                    {index === 1 && <div className={styles.connectionLine} />}
                    {/* Jotform için yukarı çizgi */}
                    {index === 2 && <div className={styles.verticalConnectionUp} />}
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerLine;
