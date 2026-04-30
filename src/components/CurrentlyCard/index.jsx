import { useEffect, useState } from "react";
import finrendLogo from "../../assets/images/career/finrend.webp";
import fikaLogo from "../../assets/images/career/fika.png";
import { skills } from "../../constants/skills";
import styles from "./style.module.css";

const workingOn = [
  { logo: finrendLogo, title: "Finrend", role: "Frontend Developer", darkLogo: true },
  { logo: fikaLogo, title: "Fika Mate", role: "Mobile Developer" },
];

const CurrentlyCard = ({ className }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const ankaraTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/Istanbul",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(ankaraTime);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  const activeSkills = skills.filter((s) => s.active);

  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.row}>
        <span className={styles.rowLabel}>Local</span>
        <span className={styles.rowValue}>Ankara · {time} GMT+3</span>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>Working on</span>
        <div className={styles.workingOnList}>
          {workingOn.map((item) => (
            <div key={item.title} className={styles.workingOn}>
              <img
                src={item.logo}
                alt={item.title}
                className={[styles.workLogo, item.darkLogo && styles.workLogoDark].filter(Boolean).join(" ")}
              />
              <div className={styles.workInfo}>
                <span className={styles.workTitle}>{item.title}</span>
                <span className={styles.workRole}>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>Listening to</span>
        <div className={styles.listening}>
          <div className={styles.equalizer} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.trackInfo}>
            <span className={styles.trackTitle}>Maraton</span>
            <span className={styles.trackArtist}>Ati 242</span>
          </div>
        </div>
      </div>

      <a href="#skills" className={[styles.section, styles.sectionLink].join(" ")}>
        <span className={styles.sectionLabel}>Stack</span>
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {[...activeSkills, ...activeSkills].map((s, i) => (
              <span key={i} className={styles.skillPill}>
                {s.text}
              </span>
            ))}
          </div>
        </div>
      </a>

      <a href="mailto:mertcankose142@gmail.com" className={styles.status}>
        <span className={styles.statusDot} />
        <span>Open to work</span>
      </a>
    </div>
  );
};

export default CurrentlyCard;
