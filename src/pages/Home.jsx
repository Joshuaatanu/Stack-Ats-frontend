import React from "react";
import Nav from "../components/Nav";

export default function Home() {
  return (
      <div>
          <Nav/>
      <div className="relative mt-20 lg:mt-0">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap px-8 md:px-6">
            {/* <!-- text --> */}
            <div className="w-full lg:w-5/12 text-center lg:text-left my-auto">
              <h1 className="text-slate-700 font-bold text-4xl">
                Streamline Your School's Admissions Process with StackATS
              </h1>
              <p className="text-slate-500/70 text-lg mt-5 pb-10 ">
                Manage your school's admissions with ease using StackATS. Our
                platform simplifies the application process, saving you time and
                effort.
              </p>
              <a href="/register" className="mt-5  text-white btn">
                Get Started Today
              </a>
            </div>

            {/* <!-- image --> */}
            <div className="w-full md:w-8/12 lg:w-6/12 lg:ml-20 md:mx-auto">
              <div className="relative z-10 inline-block mt-14 lg:mt-0">
                <img
                  src="/src/images/landing-page/hero-illustration.svg"
                  alt="hero section image"
                  className="max-w-full lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end hero section --> */}
      {/* 

    <!-- about section --> */}

      <section className="relative pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-6 items-center">
            {/* <!-- image --> */}
            <div className="md:w-10/12 lg:w-9/12 md:mx-auto">
              <img src="/src/images/landing-page/about-us.svg" alt="About Us" />
            </div>

            {/* <!-- text --> */}
            <div className="mt-8 md:mt-0 lg:mt-0 w-full">
              <h1 className="text-slate-700 font-bold text-3xl">
                About StackATS - Streamlining Admissions with Modern Technology
              </h1>
              <p className="mt-4 text-slate-500 text-sm lg:text-lg">
                StackATS is a user-friendly admissions management system that
                streamlines the process of managing school applications. Our
                platform is designed to make it easy for schools to customize
                application forms, set up document upload and submission
                requirements, and manage applications in one centralized
                dashboard. With our solution, schools can reduce administrative
                workload, save time, and focus on finding the right students for
                their programs. Our team has years of experience in education
                and a deep understanding of the challenges schools face, which
                is why we've created StackATS to provide a solution that makes
                admissions simple and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 
    <!-- END about section --> */}

      {/* <!-- how it works --> */}

      <section className="relative pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl px-8 md:px-6">
            <h1 className="text-slate-700 font-bold text-3xl">
              How StackATS Works
            </h1>
            <p className="mt-4 text-slate-500">
              StackATS is a user-friendly school admission management system
              that streamlines the application process for both administrators
              and applicants. Here's how it works:
            </p>
          </div>

          {/* <!-- how-it-works grids --> */}
          <div className="grid grid-cols-1 mt-10 ml-6 gap-6 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3">
            {/* <!-- col 1 --> */}
            <div className="px-6 py-8 bg-white rounded-xl shadow-vague">
              <img
                src="/src/images/how-it-works-1.svg"
                alt="stacked icon"
                className="w-7"
              />
              <h3 className="font-bold text-1xl mt-5">
                Create your school's account and set up your admission process.
              </h3>
              <p className="mt-3 text-sm">
                Sign up for StackATS and create your school's account. Customize
                your application forms to collect the information you need from
                applicants. Set up document upload and submission requirements
                for applicants.
              </p>
            </div>

            {/* <!-- col 1 --> */}
            <div className="px-6 py-8 bg-white rounded-xl relative top-10 bottom-0 shadow-vague">
              <img
                src="/src/images/how-it-works-2.svg"
                alt="stacked icon"
                className="w-10"
              />
              <h3 className="font-bold text-1xl mt-5">
                Applicants can easily apply online and upload required documents
              </h3>
              <p className="mt-3 text-sm">
                Applicants can easily apply to your school online using
                StackATS. They can also save their progress and return to
                complete their application at any time. Applicants can upload
                required documents directly to the application portal.
              </p>
            </div>

            {/* <!-- col 1 --> */}
            <div className="px-6 py-8 bg-white rounded-xl shadow-vague">
              <img
                src="/src/images/how-it-works-3.svg"
                alt="stacked icon"
                className="w-7"
              />
              <h3 className="font-bold text-1xl mt-5">
                Review and manage applications in one centralized dashboard
              </h3>
              <p className="mt-3 text-sm">
                You can manage all applications in one centralized dashboard.
                Review and evaluate each application based on your admission
                criteria and requirements. Communicate with applicants through
                StackATS, including sending notifications about application
                status updates and requesting additional information or
                documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- END how it works --> */}

      {/* <!-- cta --> */}

      <section className="relative pt-40">
        <div
          className="mx-auto max-w-7xl bg-gradient-to-r from-sky-400 to-sky-300 rounded-none xl:rounded-2xl lg:p-20 p-5 sm:pb-10 md:pb-0 text-center items-center 
                  md:text-left md:items-start"
        >
          <div className="grid items-center grid-cols-1 md:grid-cols-2 px-8 md:p-10">
            {/* <!-- text --> */}
            <div className="mt-10 md:mt-20 lg:mt-0 mb-20 lg:mb-0 lg:items-center w-full  text-white my-auto">
              <h1 className="font-semibold text-4xl">
                Get Started With StackATS Today
              </h1>
              <p className="text-lg mt-5  pb-10 md:text-sm">
                Ready to streamline your school's admissions process? Sign up
                for StackATS today and experience the benefits of a modern,
                user-friendly admissions management system.
              </p>
              <a
                href="/register"
                className="mt-4 text-sky-400 rounded-full bg-white p-4 font-semibold"
              >
                Get Started Today
              </a>
            </div>

            {/* <!-- image --> */}
            <div className="w-10/12 md:w-8/12 lg:w-8/12 lg:ml-20 mx-auto">
              <div className="relative z-10 inline-block mt-14 lg:mt-0">
                <img
                  src="/src/images/landing-page/cta.svg"
                  alt="call-to-action image"
                  className="max-w-6/12 lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- END cta --> */}

      {/* <!-- footer --> */}

      <footer className="bg-zinc-800 pt-20 lg:p-20 p-10 mt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-6 lg:gap-10 gap-20">
            {/* <!-- col 1 --> */}
            <div className="lg:col-span-2">
              <a href="/">
                <img src="src/images/logo.svg" alt="logo image" className="w-40" />
              </a>
              <p className="text-slate-400 mt-4 lg:text-sm">
                StackATS simplifies school admissions, streamlining applications
                with customizable forms, document uploads, and a centralized
                dashboard. Save time and reduce workload with our user-friendly
                solution.
              </p>
            </div>

            {/* <!-- col 2 --> */}
            <div className="">
              <ul className="text-lg md:text-md">
                <li>
                  <a href="#" className="text-sky-400">
                    Apply Now
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-sky-400 duration-200"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-sky-400 duration-200"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-sky-400 duration-200"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- col 3 --> */}
            <div className="">
              <ul className="text-lg md:text-md">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-sky-400 duration-200"
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-sky-400 duration-200"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-sky-400 duration-200"
                  >
                    Donations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-sky-400 duration-200"
                  >
                    Founders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-sky-400 duration-200"
                  >
                    Our Team
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- col 4 --> */}
            <div className="lg:col-span-2">
              <h1 className="text-white text-2xl">Subscribe To Our Newsletter</h1>

              <div className="border border-slate-600 mt-5 rounded-full w-[90%] md:w-[60%] lg:w-full">
                {/* <!-- input field box --> */}
                <div className="p-1.5 flex justify-between">
                  <input
                    className="font-semibold text-white lg:text-sm outline-none bg-transparent ml-3"
                    type="email"
                    placeholder="123@example.com"
                  />
                  <button
                    type="submit"
                    className="px-6 py-4 lg:p-2.5
                       lg:text-sm xl:mr-0 xl:px-5 xl:py-3 bg-sky-400 text-white rounded-full"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              {/* <!-- icons --> */}
              <div className="mt-5 flex justify-center space-x-16 lg:space-x-10 md:justify-start">
                <a href="#">
                  <img
                    src="src/images/dribbble.svg"
                    alt="dribble icon"
                    className="w-8 lg:min-w-[25px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="src/images/dropbox.svg"
                    alt="dropbox icon"
                    className="w-8 lg:min-w-[25px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="src/images/instagram.svg"
                    alt="dribble icon"
                    className="w-8 lg:min-w-[25px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="src/images/facebook.svg"
                    alt="dribble icon"
                    className="w-8 lg:min-w-[25px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="src/images/figma-1.svg"
                    alt="dribble icon"
                    className="w-8 lg:min-w-[25px]"
                  />
                </a>
              </div>
            </div>
          </div>

          <hr className="my-20 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between">
            <p className="mb-5 md:mb-0 text-slate-500">
              &copy; Copywright Web Design & Development
            </p>

            <div className="space-x-6 md:ml-auto">
              <a href="#" className="text-slate-300 underline">
                Terms and Conditions
              </a>
              <a href="#" className="text-slate-300 underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- footer --> */}
    </div>
  );
}
