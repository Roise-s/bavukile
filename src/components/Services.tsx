import { useState } from "react";

const Services = () => {
  const navigation = [
    {
      name: "Bookkeeping & Accounting Services",
      title: "Manage your books with confidence",
      description:
        "Maintaining the organizations records in accordance with the Policies and Procedures, Preparation of the Annual Financial Statements.",
      image: "/man-drawing-dark.png",
    },
    {
      name: "Business Administration",
      title: "Simplify your business operations",
      description:
        "Designing of Internal Control Systems to enable the organizations to conduct its business easily, effective and profitable. Designing of good Corporate Governance operations. Designing of Internal Control Systems to enable the organizations to limit the chance of risk",
      image:
        "/people-connecting-dark.png",
    },
    {
      name: "Business Registrations",
      title: "Get your business legally registered",
      description:
        "Close Corporations | Private Companies | Trademarks Logos and designs | Copyrights. Relevant and applicable licences. VAT, PAYE, UIF , IT, SITE, etc. Any other relevant authorities",
      image:
        "/woman-working-servers-dark.png",
    },
    {
      name: "Preparation of Business Plans",
      title: "Strategic business planning that works",
      description:
        "Drawing of business plans. Drawing of business profiles.",
      image:
        "/group-brainstorming-dark.png",
    },
    {
      name: "Taxation",
      title: "Stay compliant with tax laws",
      description:
        "Completion of the ITR returns. Completion of the VAT returns. Completion of any other SARS returns. Attending to any SARS queries on behalf of the clients.",
      image:
        "/credit-card-payment-receipt-dark.png",
    },
    {
      name: "Company Secretarial Services",
      title: "Keep your business compliant with professional secretarial support",
      description:
        "Completion, maintenance and record keeping of the organizations Statutory records, Completion and filling of statutory returns. Assisting with any other secretarial services.",
      image:
        "/woman-laptop-chatting-dark.png",
    },
    {
      name: "Payroll Services",
      title: "Reliable payroll services that keep your business running smoothly",
      description:
        "Maintenance of the payroll per clients agreement. Producing and printing of payslips. Producing required reports including PAYE, UI,F SDL, ETC. Filing of the reports with relevant authorities. Completion and filing of required returns. Completion, maintenance and record keeping of the organizations payroll records.",
      image:
        "/smartphone-charts-dark.png",
    },
    {
      name: "Management Consulting",
      title: "Empowering your business with strategic insight and direction",
      description:
        "Providing advise on working capital. Providing advice on cashflows. Drawing and implementation of internal control",
      image:
        "/woman-tutoring-classroom-dark.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = navigation[activeIndex];

  return (
    <div id="Services" className="h-screen px-2 pt-4 mb-40 md:px-4">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-2xl font-bold">Services</h3>
        <p className="text-gray-600 mt-2">
          We provide innovative solutions with skilled capabilities and
          integrated science designed not limited to:
        </p>
      </div>

      <div className="mt-6">
        <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
          {navigation.map((item, idx) => (
            <li
              key={idx}
              className={`py-2 ml-3 border-b-2 cursor-pointer ${
                idx === activeIndex
                  ? "border-indigo-600 text-indigo-600"
                  : "border-white text-gray-500"
              }`}
            >
              <button
                onClick={() => setActiveIndex(idx)}
                className="py-2.5 rounded-lg duration-150 text-sm hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Dynamic section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden"
            src={activeService.image}
            alt={activeService.name}
          />
          <img
            className="w-full hidden dark:block"
            src={activeService.image}
            alt={activeService.name}
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {activeService.title}
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              {activeService.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 
                  1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                  11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                  1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
