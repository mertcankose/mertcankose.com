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

import emptyPhoto from "../assets/images/empty.png";

import eservisPhoto1 from "../assets/images/eservis/photo1.png";
import eservisPhoto2 from "../assets/images/eservis/photo2.png";
import funlordMobilePhoto1 from "../assets/images/funlord/photo1.png";
import funlordMobilePhoto2 from "../assets/images/funlord/photo2.png";
import funlordAdminPhoto1 from "../assets/images/funlordweb/photo1.png";
import funlordAdminPhoto2 from "../assets/images/funlordweb/photo2.png";
import aybuMobilePhoto1 from "../assets/images/aybumobile/photo1.png";
import aybuMobilePhoto2 from "../assets/images/aybumobile/photo2.png";
import qrScanPhoto1 from "../assets/images/qrscan/photo1.png";
import qrScanPhoto2 from "../assets/images/qrscan/photo2.png";
import omAppPhoto1 from "../assets/images/omapp/photo1.png";
import omAppPhoto2 from "../assets/images/omapp/photo2.png";

export const selectedWorks = [
  {
    image: eservisImage,
    title: "E-Servis",
    description:
      "A platform where parents can monitor their children on the school bus along the way, and school management and service companies can easily control and manage the bus.",
    tags: ["React", "TailwindCSS"],
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
    tags: ["React Native", "SQLite"],
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
    tags: ["React", "TailwindCSS"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/e-servis",
    photo1: eservisPhoto1,
    photo2: eservisPhoto2,
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
    photo1: funlordMobilePhoto1,
    photo2: funlordMobilePhoto2,
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
    photo1: funlordAdminPhoto1,
    photo2: funlordAdminPhoto2,
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
    photo1: aybuMobilePhoto1,
    photo2: aybuMobilePhoto2,
  },

  {
    name: "qr-scan",
    image: qrScanImage,
    title: "QR Scan",
    description:
      "It's an application that we coded specifically for one of my customers that works on their phone. The application allows us to extract the texts from the photos and store them in the format desired by the user and as an excel file on his phone.",
    tags: ["React Native", "SQLite", "Amazon Textract"],
    playStore: "",
    appStore: "",
    webLink: "",
    githubLink: "",
    generalLink: "/work/qr-scan",
    photo1: qrScanPhoto1,
    photo2: qrScanPhoto2,
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
    photo1: omAppPhoto1,
    photo2: omAppPhoto2,
  },
  {
    name: "finrend",
    image: finrendMobileImage,
    title: "Finrend",
    description:
      "Finrend is a financial application taht followed signals from the stock market and gave recommendations to users.",
    tags: ["React Native"],
    playStore: "https://play.google.com/store/apps/details?id=com.finrend",
    appStore:
      "https://apps.apple.com/gw/app/finrend-your-financial-friend/id1633138818",
    webLink: "http://finrend.com/",
    githubLink: "",
    generalLink: "/work/finrend",
    photo1: emptyPhoto,
    photo2: emptyPhoto,
  },
  {
    name: "playland",
    image: playlandImage,
    title: "Playland",
    description:
      "Playland is a project that I am involved in as a freelancer. QR Supported payment system (iyzico) for a company that already has entertainment stores in most provinces of Turkey, is a multi-featured mobile application where parents can follow their children in the game.",
    tags: ["React Native"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.playlandmobile&hl=tr&gl=US",
    appStore: "https://apps.apple.com/tr/app/playland-mobil/id1631854531",
    webLink: "",
    githubLink: "",
    generalLink: "/work/playland",
    photo1: emptyPhoto,
    photo2: emptyPhoto,
  },
  {
    name: "open-vote",
    image: openVoteImage,
    title: "Open Vote",
    description:
      "I have developed a mobile application of a blockchain-based service with react native for the company I work for. I have used web3 libraries such as Wallet Connect.",
    tags: ["React Native", "Web3"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.om.openvote&hl=tr&gl=US",
    appStore: "https://apps.apple.com/gb/app/open-vote/id1601587507",
    webLink: "",
    githubLink: "",
    generalLink: "/work/open-vote",
    photo1: emptyPhoto,
    photo2: emptyPhoto,
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
    photo1: emptyPhoto,
    photo2: emptyPhoto,
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
    photo1: emptyPhoto,
    photo2: emptyPhoto,
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
    photo1: emptyPhoto,
    photo2: emptyPhoto,
  },
  {
    name: "filminn",
    image: filminnImage,
    title: "Filminn",
    description: "Filminn is a landing page of a movie platform.",
    tags: ["HTML", "CSS", "Gulp.js"],
    playStore: "",
    appStore: "",
    webLink: "https://filminn.vercel.app/",
    githubLink: "",
    generalLink: "/work/filminn",
    photo1: emptyPhoto,
    photo2: emptyPhoto,
  },
  {
    name: "direct-academy",
    image: directAcademyImage,
    title: "Direct Academy",
    description: "Dental education presentation website.",
    tags: ["Wordpress"],
    playStore: "",
    appStore: "",
    webLink: "https://directacademy.net/",
    githubLink: "",
    generalLink: "/work/direct-academy",
    photo1: emptyPhoto,
    photo2: emptyPhoto,
  },
  {
    name: "galaksi-organization",
    image: galaksiOrganizationImage,
    title: "Galaksi Organization",
    description:
      "An organization website that presents the organization tools.",
    tags: ["Wordpress"],
    playStore: "",
    appStore: "",
    webLink: "https://galaksiorganizasyon.com/",
    githubLink: "",
    generalLink: "/work/galaksi-organization",
    photo1: emptyPhoto,
    photo2: emptyPhoto,
  },
];
