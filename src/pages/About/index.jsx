import { Helmet } from "react-helmet";
import CustomButton from "../../components/CustomButton";
import styles from "./style.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <Helmet>
        <title>Mertcan Köse | Mobile, Web and Blockchain Developer</title>
        <meta
          name="description"
          content="Mertcan Köse - Mobile, Web and Blockchain Developer"
        />
      </Helmet>
      <h2 className={styles.heading}>Hi, hello and welcome stranger</h2>
      <p className={styles.description}>
        I'm a software engineer with a passion for creating beautiful,
        functional, and user-friendly mobile and web applications. My goal is to
        help clients turn their ideas into reality by building custom solutions
        tailored to their unique needs and preferences. Whether you need a
        simple app to streamline your workflow, a complex system to manage your
        business operations, or anything in between, I've got you covered. I
        specialize in{" "}
        <span className={styles.highlightText1}>React Native</span> development,
        as well as web development using modern technologies like{" "}
        <span className={styles.highlightText2}>React</span> and{" "}
        <span className={styles.highlightText2}>Vue</span>
        .Also <span className={styles.highlightText2}>Wordpress.</span> But
        that's not all!
        <br />
        I'm also well-versed in the exciting world of{" "}
        <span className={styles.highlightText3}>web3</span>, where I develop
        decentralized applications{" "}
        <span className={styles.highlightText3}>(dApps)</span> that leverage
        blockchain technology to create trustless and transparent systems.
        Whether you're interested in building a decentralized finance{" "}
        <span className={styles.highlightText3}>(DeFi)</span> app, a
        non-fungible token
        <span className={styles.highlightText3}>(NFT)</span> marketplace, or any
        other web3 application,
        <br />I can help you bring your vision to life. So if you're looking for
        a reliable and experienced software developer who can help you create
        amazing mobile and web applications, look no further! Let's work
        together to turn your ideas into reality.
      </p>
      <CustomButton
        href="mailto:contact@mertcankose.com"
        text="Contact Me"
        className="mt-10 inline-flex mx-auto"
      />
    </div>
  );
};

export default About;
