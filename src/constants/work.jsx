import funlordMobileImage from "../assets/images/funlord/funlord.png";
import funlordWebImage from "../assets/images/funlordweb/funlord-web.png";
import aybumobileImage from "../assets/images/aybumobile/aybumobile.png";
import finrendMobileImage from "../assets/images/finrend/finrend.png";
import qrScanImage from "../assets/images/qrscan/qrscan.png";
import omAppImage from "../assets/images/omapp/omapp.png";
import playlandImage from "../assets/images/playland/playland.png";
import openVoteImage from "../assets/images/openvote/openvote.png";
import eservisImage from "../assets/images/eservis/eservis.png";
import usecoImage from "../assets/images/useco/useco.png";
import plndverseImage from "../assets/images/plndverse/plndverse.png";
import ecourseImage from "../assets/images/ecourse/ecourse.png";
import filminnImage from "../assets/images/filminn/filminn.png";
import directAcademyImage from "../assets/images/directacademy/directAcademy.png";
import galaksiOrganizationImage from "../assets/images/galaksiorganizasyon/galaksiOrganization.png";

export const selectedWorks = [
  {
    image: eservisImage,
    title: "E-Servis",
    description:
      "A platform where parents can monitor their children on the school bus along the way, and school management and service companies can easily control and manage the bus.",
    tags: ["React"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/e-servis",
  },
  {
    image: funlordMobileImage,
    title: "Funlord Mobil",
    description:
      "Qr payment solution to play with toys in certain entertainment centers. It hosts the campaigns of entertainment brands. It includes Iyzico payment system.",
    tags: ["React Native"],
    playStore: "https://play.google.com/store/apps/details?id=com.funlord",
    appStore: "https://apps.apple.com/tr/app/funlord-mobil/id6446031864?l=tr",
    webLink: "",
    githubLink: "",
    generalLink: "/work/funlord-mobile",
  },
  {
    image: funlordWebImage,
    title: "Funlord Admin Panel",
    description:
      "Admin panel of Funlord Mobile application. It was developed in addition to the application for super admin and staff. They can manage the campaigns, toys, and users.",
    tags: ["React", "TailwindCSS"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/funlord-admin",
  },
  {
    image: aybumobileImage,
    title: "Aybu Mobile",
    description:
      "The application that contains the food menu, socialization section and announcements for our university.",
    tags: ["React Native"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.aybumobile&gl=TR",
    appStore:
      "https://apps.apple.com/tr/app/ayb%C3%BC-mobile/id1658659307?l=tr",
    webLink: "https://aybumobile.com",
    githubLink: "https://github.com/thesammet/aybumobile",
    generalLink: "/work/aybu-mobile",
  },
  {
    image: qrScanImage,
    title: "QR Scan",
    description:
      "An application that allows a user to extract text from a photo and save it in an excel file on his phone.",
    tags: ["React Native", "Amazon Textract"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/qr-scan",
  },
  {
    image: omAppImage,
    title: "OmApp",
    description:
      "A crypto app. It is a super app where crypto wallets and users can track their assets and receive notifications.",
    tags: ["React Native", "Web3"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/omapp",
  },
];

export const allWorks = [
  {
    name: "e-servis",
    image: eservisImage,
    title: "E-Servis",
    description:
      "A platform where parents can monitor their children on the school bus along the way, and school management and service companies can easily control and manage the bus.",
    tags: ["React"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/e-servis",
  },
  {
    name: "funlord-mobile",
    image: funlordMobileImage,
    title: "Funlord Mobil",
    description:
      "Funlord offers a qr payment solution to play with toys in certain entertainment centers and is a mobile application that hosts the campaigns of entertainment brands. I made the whole app with React Native.",
    tags: ["React Native"],
    playStore: "https://play.google.com/store/apps/details?id=com.funlord",
    appStore: "https://apps.apple.com/tr/app/funlord-mobil/id6446031864?l=tr",
    webLink: "",
    githubLink: "",
    generalLink: "/work/funlord-mobile",
  },
  {
    name: "funlord-admin",
    image: funlordWebImage,
    title: "Funlord Admin Panel",
    description:
      "Admin panel of Funlord mobile application. It's a React project that I wrote with a few developers that the staff or application owners in entertainment centers can use as super admins.",
    tags: ["React", "TailwindCSS"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/funlord-admin",
  },
  {
    name: "aybu-mobile",
    image: aybumobileImage,
    title: "Aybu Mobile",
    description:
      "The mobile application we developed for our university. The application consists of a weekly menu, monthly food trends, access to school announcements and Aybü Social, the most exciting part of the application. Thus, it makes it easier for students to acquire knowledge and socialize.",
    tags: ["React Native"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.aybumobile&gl=TR",
    appStore:
      "https://apps.apple.com/tr/app/ayb%C3%BC-mobile/id1658659307?l=tr",
    webLink: "https://aybumobile.com",
    githubLink: "https://github.com/thesammet/aybumobile",
    generalLink: "/work/aybu-mobile",
  },

  {
    name: "qr-scan",
    image: qrScanImage,
    title: "QR Scan",
    description:
      "It's an application that we coded specifically for one of my customers that works on their phone. The application allows us to extract the texts from the photos and store them in the format desired by the user and as an excel file on his phone.",
    tags: ["React Native", "Amazon Textract"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/qr-scan",
  },
  {
    name: "omapp",
    image: omAppImage,
    title: "OmApp",
    description:
      "I have developed the front side of a crypto wallet with react native for the company I work for. I used web3 libraries to create wallets and transfer assets. I have significantly shortened the wallet creation time using hdwallet. We got the project out very quickly with a quick grasp of a new technology like Web3.",
    tags: ["React Native", "Web3"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/omapp",
  },
  {
    name: "finrend",
    image: finrendMobileImage,
    title: "Finrend",
    description: "",
    tags: ["React Native"],
    playStore: "https://play.google.com/store/apps/details?id=com.finrend",
    appStore:
      "https://apps.apple.com/gw/app/finrend-your-financial-friend/id1633138818",
    webLink: "http://finrend.com/",
    githubLink: "",
    generalLink: "/work/finrend",
  },
  {
    name: "playland",
    image: playlandImage,
    title: "Playland",
    description:
      "Playland is a project that I am involved in as a freelancer. QR Supported payment system (iyzico) for a company that already has entertainment stores in most provinces of Turkey, is a multi-featured mobile application where parents can follow their children in the game.",
    tags: ["React Native"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/playland",
  },
  {
    name: "open-vote",
    image: openVoteImage,
    title: "Open Vote",
    description:
      "I have developed a mobile application of a blockchain-based service with react native for the company I work for. I have used web3 libraries such as Wallet Connect.",
    tags: ["React Native"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/open-vote",
  },
  {
    name: "useco",
    image: usecoImage,
    title: "Useco",
    description: "A landing page of an event mobile application.",
    tags: ["React", "TailwindCSS"],
    playStore: "",
    appStore: "",
    webLink: "https://useco.net/",
    githubLink: "",
    generalLink: "/work/useco",
  },
  {
    name: "plndverse",
    image: plndverseImage,
    title: "Playland Verse",
    description: "A landing page of an playland verse brand.",
    tags: ["React", "TailwindCSS"],
    playStore: "",
    appStore: "",
    webLink: "https://www.plndverse.com/",
    githubLink: "",
    generalLink: "/work/plndverse",
  },
  {
    name: "e-course",
    image: ecourseImage,
    title: "E-Course",
    description: "E-Course is a example dashboard of a e-learning platform.",
    tags: ["Vue", "Firebase"],
    playStore: "",
    appStore: "",
    webLink: "https://e-course-dashboard.vercel.app/",
    githubLink: "",
    generalLink: "/work/e-course",
  },
  {
    name: "filminn",
    image: filminnImage,
    title: "Filminn",
    description: "E-Course is a example dashboard of a e-learning platform.",
    tags: ["Vue", "Firebase"],
    playStore: "",
    appStore: "",
    webLink: "https://filminn.vercel.app/",
    githubLink: "",
    generalLink: "/work/filminn",
  },
  {
    name: "direct-academy",
    image: directAcademyImage,
    title: "Direct Academy",
    description: "Dental education presentation website.",
    tags: ["Wordpress"],
    playStore: "",
    appStore: "",
    webLink: "https:/directacademy.net/",
    githubLink: "",
    generalLink: "/work/direct-academy",
  },
  {
    name: "galaksi-organization",
    image: galaksiOrganizationImage,
    title: "Galaksi Organization",
    description: "Organization website that presents the organization tools.",
    tags: ["Wordpress"],
    playStore: "",
    appStore: "",
    webLink: "https://galaksiorganizasyon.com/",
    githubLink: "",
    generalLink: "/work/galaksi-organization",
  },
];
