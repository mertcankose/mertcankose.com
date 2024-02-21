import tubitakuzaylogo from "../../assets/images/career/tubitak-uzay.png";
import freelancerLogo from "../../assets/images/career/mertcan.png";
import jotformlogo from "../../assets/images/career/jotform.png";
import openmoneylogo from "../../assets/images/career/openmoney.png";
import gaislogo from "../../assets/images/career/gais.png";
import vimlogo from "../../assets/images/career/vim.png";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import styles from "./style.module.css";
import valenturaLogo from "../../assets/images/career/valentura-logo.jpeg";
import eservisLogo from "../../assets/images/career/eservis-logo.jpeg";

const CareerLine = ({ className }) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <h2 className={styles.heading}>Career</h2>

      <ol className="relative border-l border-gray-200">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={valenturaLogo} alt="valentura" className="w-12 h-12" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
            Valentura Technology & Investment{" "}
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Apr 2022 - Present</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Web, Mobile, Blockchain Engineer</p>
          <p className="mb-4 text-base font-normal text-gray-500">
            During the time I worked in this company, I had the opportunity to develop projects in many areas. I learned fast and
            contributed significantly to the <span className="font-bold text-green-500">profitability</span> of the company.
          </p>
          <Link
            to="/work"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
          >
            <ArrowRight width="16" height="16" className="mr-1" /> Works
          </Link>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={freelancerLogo} alt="freelancer" className="w-12 h-12" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Freelancer </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">March 2020 - Present</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Web, Mobile and Blockchain Developer</p>
          <p className="mb-4 text-base font-normal text-gray-500">
            As a freelancer for a while, we have taken and implemented various works with a team that I have both recruited from
            outside and formed with my close software developer friends. You can find my portfolio of work on my website.
          </p>
          <Link
            to="/work"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
          >
            <ArrowRight width="16" height="16" className="mr-1" /> Works
          </Link>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={eservisLogo} alt="e-servis" className="w-12 h-12" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Vyrsos Technology </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">May 2023 - Dec 2023</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Frontend Developer</p>
          <p className="mb-4 text-base font-normal text-gray-500">
            I did the web development of a platform where parents can monitor their children in the school bus along the way, and
            school management and service companies can easily control and manage the service.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={tubitakuzaylogo} alt="tubitak-uzay" className="w-12 h-12" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Tübitak Uzay </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">July 2023 - Aug 2023</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Learning Network and SAP</p>
          <p className="mb-4 text-base font-normal text-gray-500">
            I worked on network, system and SAP software at Tubitak Space. It was an internship where I understood the importance
            of in-house security and software security.
          </p>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={jotformlogo} alt="jotform" className="w-16 h-16" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Jotform</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">June 2022 - July 2022</time>
          <p className="text-blue-800 font-semibold text-base mb-3">UI Developer</p>
          <p className="text-base font-normal text-gray-500">
            During my 1 month internship, we developed an NPS Tool web application with a talented software developer in the
            Growth Tools Interns team. I played a big role in the dashboard side of the project and at the same time, I made a
            presentation about our project to the growth team and managers in the company. Since the projects in the company are
            in monorepo, I had an idea about all the projects and learned how to develop a quality project within a large project
            and team.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={openmoneylogo} alt="openmoney" className="w-16 h-16" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Open Money</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Jan 2022 - April 2022</time>
          <p className="text-blue-800 font-semibold text-base mb-3">React Native Developer</p>
          <p className="text-base font-normal text-gray-500">
            Due to my interest in the blockchain field, I worked as a software developer at one of the few companies doing this
            job in Turkey. As a result of the short time I have been working, I have developed the mobile application of 2
            projects.
          </p>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={gaislogo} alt="gais" className="w-16 h-16" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Gais Security</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">Nov 2020 - Jan 2021</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Frontend Developer</p>
          <p className="text-base font-normal text-gray-500">
            I was looking for a place where I could work as a volunteer to avoid being empty handed during the pandemic, and I
            started working at this firm. In as little as 3 months, I learned about react and vue technologies and became involved
            in the companies products, and for the first time, the parts of the product that I developed were published in the
            production environment.
          </p>
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={vimlogo} alt="vim" className="w-16 h-16" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Vizyondan Misyona Girişimcilik Topluluğu</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">March 2019 - Sep 2020</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Crew Member (Technical)</p>
          <p className="text-base font-normal text-gray-500">
            I co-founded a community under the name VIMTECH in the Engineering Faculty of the community, where we organized a game
            course. I have worked in the fields of instructor search, course promotion and course continuity. The course continued
            for 4 weeks. I have done technical team leadership, catalogue design in various organizations of the community. Also,
            I developed the community website using wordpress.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default CareerLine;
