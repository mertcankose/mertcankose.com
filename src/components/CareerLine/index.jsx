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
import eservisLogo from "../../assets/images/career/eservis-logo.webp";

const CareerLine = ({ className }) => {
  return (
    <div className={[styles.container, className].join(" ")} id="career">
      <h2 className={styles.heading}>Career</h2>

      <ol className="relative border-l border-gray-200">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={freelancerLogo} alt="freelancer" className="w-12 h-12" loading="lazy" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
            mertcankose.com
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-600">March 2020 - Present</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Product Engineer</p>
          <p className="mb-4 text-base font-normal text-gray-500">
            As a freelancer,{" "}
            <span className="font-bold text-green-700">
              I've successfully executed and delivered diverse projects independently, leveraging my expertise across
              different technologies and domains.
            </span>{" "}
            My comprehensive portfolio of work, showcasing these successful implementations, can be found on my website.
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
            <img src={valenturaLogo} alt="valentura" className="w-12 h-12" loading="lazy" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
            Valentura Technology & Investment{" "}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-600">May 2022 - July 2024</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Software Engineer</p>
          <p className="mb-4 text-base font-normal text-gray-500">
            During the time I worked in this company, I had the opportunity to develop projects across{" "}
            <span className="font-bold text-green-700">web</span>,{" "}
            <span className="font-bold text-green-700">mobile</span>, and{" "}
            <span className="font-bold text-green-700">blockchain</span> domains. I learned fast and contributed
            significantly to the <span className="font-bold text-orange-500">profitability</span> of the company.
          </p>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={tubitakuzaylogo} alt="tubitak-uzay" className="w-12 h-12" loading="lazy" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Tübitak Uzay </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-600">July 2023 - Aug 2023</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Internship - Network and SAP</p>
          <p className="mb-4 text-base font-normal text-gray-500">
            I worked on <span className="font-bold text-green-700">network</span>,{" "}
            <span className="font-bold text-green-700">system</span> and{" "}
            <span className="font-bold text-green-700">SAP</span> software at Tubitak Space. It was an internship where
            I understood the importance of in-house security and software security.
          </p>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={jotformlogo} alt="jotform" className="w-16 h-16" loading="lazy" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Jotform</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-600">June 2022 - July 2022</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Internship - UI Developer</p>
          <p className="text-base font-normal text-gray-500">
            During my 1 month internship, we developed an NPS Tool web application with a talented software developer in
            the <span className="font-bold text-green-700">Growth Tools Interns</span> team. I played a big role in the
            dashboard side of the project and at the same time,{" "}
            <span className="font-bold text-green-700">I made a presentation </span>
            about our project to the growth team and managers in the company. Since the projects in the company are in
            monorepo, I had an idea about all the projects and learned how to develop a quality project within a large
            project and team.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={openmoneylogo} alt="openmoney" className="w-16 h-16" loading="lazy" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Open Money</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-600">Jan 2022 - April 2022</time>
          <p className="text-blue-800 font-semibold text-base mb-3">React Native Developer</p>
          <p className="text-base font-normal text-gray-500">
            Due to my interest in the <span className="font-bold text-green-700">blockchain</span> field, I worked as a
            software developer at one of the few companies doing this job in Turkey. As a result of the short time I
            have been working, I have developed the mobile application of 2 projects.
          </p>
        </li>

        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={gaislogo} alt="gais" className="w-16 h-16" loading="lazy" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Gais Security</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-600">Nov 2020 - Jan 2021</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Frontend Developer</p>
          <p className="text-base font-normal text-gray-500">
            I was looking for a place where I could work as a volunteer to avoid being empty handed during the pandemic,
            and I started working at this firm. In as little as 3 months, I learned about
            <span className="font-bold text-green-700"> react and vue</span> technologies and became involved in the
            companies products, and for the first time, the parts of the product that I developed were published in the
            production environment.
          </p>
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <img src={vimlogo} alt="vim" className="w-16 h-16" loading="lazy" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Vizyondan Misyona Girişimcilik Topluluğu</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-600">March 2019 - Sep 2020</time>
          <p className="text-blue-800 font-semibold text-base mb-3">Crew Member (Technical)</p>
          <p className="text-base font-normal text-gray-500">
            I co-founded a community under the name VIMTECH in the Engineering Faculty of the community, where{" "}
            <span className="font-bold text-green-700">we organized a game course.</span> I have worked in the fields of
            instructor search, course promotion and course continuity. The course continued for 4 weeks. I have done
            technical team leadership, catalogue design in various organizations of the community. Also, I developed the
            community website using wordpress.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default CareerLine;
