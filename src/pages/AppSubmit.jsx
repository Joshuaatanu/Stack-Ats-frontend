import React from "react";

export default function AppSubmit() {
  return (
    <div className="bg-[#fafafa] w-[80%] mx-auto">
      <div className="grid grid-cols-12 gap-5">
        {/* <!-- sidebar --> */}
        <div className="col-span-1 bg-sky-400 rounded-[30px] shadow-vague h-[98vh] my-auto">
          <div className="icons flex flex-col mt-10">
            {/* <!-- logo --> */}
            <a href="/">
              <img
                src="src/images/small-logo.svg"
                alt="small logo"
                className="w-8 m-auto"
              />
            </a>

            <div className="other-icons mt-2 my-auto">
              {/* <!-- dashboard icon --> */}
              <a href="/student">
                <div className="mt-12 px-2 py-4 bg-sky-100/30 w-10/12 m-auto rounded-xl ">
                  <img
                    src="src/images/dashboard-icons/dashboard-tab-active.svg"
                    className="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>

              {/* <!-- archive icon --> */}
              <a href="">
                <div className="mt-8">
                  <img
                    src="src/images/dashboard-icons/archive-book.svg"
                    className="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>

              {/* <!-- chats icon --> */}
              <a href="">
                <div className="mt-8">
                  <img
                    src="src/images/dashboard-icons/chats.svg"
                    className="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>

              {/* <!-- schedule(menu) icon --> */}
              <a href="">
                <div className="mt-8">
                  <img
                    src="src/images/dashboard-icons/menu-board.svg"
                    className="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>

              {/* <!-- chart icon --> */}
              <a href="">
                <div className="mt-8">
                  <img
                    src="src/images/dashboard-icons/chart-2.svg"
                    className="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>

              {/* <!-- settings icon --> */}
              <a href="">
                <div className="mt-8">
                  <img
                    src="src/images/dashboard-icons/setting.svg"
                    className="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>

              {/* <!-- business icon --> */}
              <a href="">
                <div className="mt-8">
                  <img
                    src="src/images/dashboard-icons/book-1.svg"
                    className="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>
            </div>

            {/* <!-- logout icon --> */}
            <div className="mt-16 m-auto">
              <a href="/login">
                <img
                  src="src/images/dashboard-icons/log-out.svg"
                  className="m-auto"
                  alt="dashboard-icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-11 gap-16 p-2 h-screen overflow-y-scroll">
          {/* <!-- main content --> */}
          <main>
            {/* <!-- navbar --> */}
            <div className="grid grid-row-1 row-span-full bg-white p-4 rounded-[30px] shadow-vague">
              <div className="flex justify-between">
                {/* <!-- dashboard text --> */}
                <div className="my-auto">
                  <h1 className="text-2xl font-semibold opacity-60 tracking-tighter">
                    Dashboard
                  </h1>
                </div>

                {/* <!-- navbar options/ icons --> */}
                <div className="flex flex-wrap space-x-6">
                  {/* <!-- messages --> */}
                  <button className="border relative border-slate-200 rounded-full p-3">
                    <div className="blue-dot absolute p-1 bg-sky-400 rounded-full top-0 right-2"></div>
                    <img src="src/dashboard-icons/message.svg" alt="" />
                  </button>
                  {/* <!-- notifications --> */}

                  <button className="border border-slate-200 rounded-full p-3">
                    <img src="src/dashboard-icons/notification.svg" alt="" />
                  </button>

                  {/* <!-- profile --> */}
                  <div className="">
                    <img
                      src="src/images/user.jpg"
                      className="h-12 w-12 object-cover rounded-full"
                      alt="user-image"
                    />
                  </div>
                </div>
                {/* <!-- end of navbar options --> */}
              </div>
            </div>

            {/* <!-- status --> */}
            <div className="grid grid-row-1 mt-3 row-span-full bg-white px-5 py-8 rounded-[30px] shadow-vague">
              <div className="grid grid-row-2 row-span-full gap-1">
                {/* <!-- row 1 --> */}
                <div className="flex justify-between">
                  <h1 className="text-xl font-bold">Status</h1>

                  {/* <!-- last checked --> */}
                  <div className="last-checked text-xs text-gray-400 my-auto">
                    <span>Last checked : </span>
                    <b>
                      13<sup>th</sup> March, 2023
                    </b>
                  </div>
                </div>

                {/* <!-- row 2 --> */}
                <div className="flex justify-between mt-2">
                  <p className="w-6/12 text-sm text-gray-400 mt-2 my-auto">
                    Your application is undergoing the screening and assessment
                    process. Please be patient with us, as your results will be
                    available soon.
                  </p>

                  {/* <!-- grey badge here --> */}
                  <div className="status badge my-auto text-center">
                    <div className="badge bg-gray-100 text-gray-500 px-14 py-3 font-semibold rounded-full w-full text-1xl">
                      Pending
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- application --> */}
            <div className="grid grid-row-1 mt-3 row-span-full bg-white p-5 rounded-[30px] shadow-vague">
              <h2 className="font-bold text-xl">My Application</h2>
              <p className="w-6/12 text-sm text-green-400 mt-2 my-auto">
                Your application was successfully submitted.
              </p>

              <hr className="opacity-60 my-5" />

              <div className="grid grid-cols-6">
                {/* <!-- col 1 --> */}
                <div className="col-start-1 col-span-4">
                  {/* <!-- student form --> */}

                  <div className="grid grid-cols-4">
                    <div className="col-start-1 col-span-2">
                      <h1 className="font-bold px-5 text-1xl my-5">
                        Student's Form
                      </h1>

                      <form action="" className="px-5">
                        {/* <!-- full name --> */}
                        <div className="full-name grid grid-cols-2">
                          <div className="">
                            <label className="text-xs" for="">
                              First Name
                            </label>{" "}
                            <br />
                            <small className="font-bold text-gray-500 text-xs">
                              John
                            </small>
                          </div>

                          <div className="">
                            <label className="text-xs" for="">
                              Last Name
                            </label>{" "}
                            <br />
                            <small className="font-bold text-gray-500 text-xs">
                              Doe
                            </small>
                          </div>
                        </div>

                        {/* <!-- email --> */}
                        <div className="mt-3">
                          <label className="text-xs" for="">
                            Email
                          </label>{" "}
                          <br />
                          <small className="font-bold text-gray-500 text-xs">
                            johndoe@example.com
                          </small>
                        </div>

                        {/* <!-- password --> */}
                        <div className="mt-3">
                          <label className="text-xs" for="">
                            Password
                          </label>{" "}
                          <br />
                          <small className="font-bold text-gray-500 text-xs">
                            ********
                          </small>
                        </div>

                        {/* <!-- phone number --> */}
                        <div className="mt-3">
                          <label className="text-xs" for="">
                            Phone Number
                          </label>
                          <br />
                          <small className="font-bold text-gray-500 text-xs">
                            555-5555-555
                          </small>
                        </div>

                        {/* <!-- address --> */}
                        <div className="mt-3">
                          <label className="text-xs" for="">
                            Address
                          </label>{" "}
                          <br />
                          <small className="font-bold text-gray-500 text-xs">
                            ABC Crescent, Tailwindcss Street, Somewhere on Earth
                          </small>
                        </div>

                        {/* <!-- course --> */}
                        <div className="mt-3">
                          <label className="text-xs" for="">
                            Course
                          </label>{" "}
                          <br />
                          <small className="font-bold text-gray-500 text-xs">
                            UI/UX Design
                          </small>
                        </div>
                      </form>
                    </div>

                    {/* <!-- guardin's form --> */}

                    <div className="col-start-3 col-span-2 px-3">
                      <h1 className="font-bold text-1xl my-5">
                        Guardian's Form
                      </h1>

                      <form action="">
                        {/* <!-- full name --> */}
                        <div className="full-name grid grid-cols-2">
                          <div className="">
                            <label className="text-xs" for="">
                              First Name
                            </label>{" "}
                            <br />
                            <small className="font-bold text-gray-500 text-xs">
                              Josephine
                            </small>
                          </div>
                          <div className="">
                            <label className="text-xs" for="">
                              Last Name
                            </label>{" "}
                            <br />
                            <small className="font-bold text-gray-500 text-xs">
                              Doe
                            </small>
                          </div>
                        </div>

                        {/* <!-- email --> */}
                        <div className="mt-3">
                          <label className="text-xs" for="">
                            Email
                          </label>{" "}
                          <br />
                          <small className="font-bold text-gray-500 text-xs">
                            josephine@mailie.com
                          </small>
                        </div>

                        {/* <!-- phone number --> */}
                        <div className="mt-3">
                          <label className="text-xs" for="">
                            Phone Number
                          </label>
                          <br />
                          <small className="font-bold text-gray-500 text-xs">
                            333-3333-333
                          </small>
                        </div>

                        {/* <!-- address --> */}
                        <div className="mt-3">
                          <label className="text-xs" for="">
                            Address
                          </label>{" "}
                          <br />
                          <small className="font-bold text-gray-500 text-xs">
                            ABC Crescent, Tailwindcss Street, Somewhere on Earth
                          </small>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* <!-- col 2 --> */}
                <div className="m-auto col-start-5 col-span-2">
                  {/* <!-- illustration here --> */}
                  <img
                    src="src/images/dashboard-illustration.svg"
                    alt="dashboard illustration"
                    className="w-full"
                  />
                  <p className="text-sm italic text-gray-500 text-center mt-5">
                    Your application is being reviewed
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
