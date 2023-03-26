import React from "react";

export default function AppDetails() {
  return (
    <div className="bg-[#fafafa] w-[80%] mx-auto">
      {/* <!-- dashboard body --> */}
      <div class="grid grid-cols-12 gap-5">
        {/* <!-- sidebar --> */}
        <div class="col-span-1 bg-admin rounded-[30px] shadow-vague h-[98vh] my-auto">
          <div class="icons flex flex-col mt-10">
            {/* <!-- logo --> */}
            <img
              src="src/images/small-logo.svg"
              alt="small logo"
              class="w-8 m-auto"
            />

            <div class="other-icons mt-2 my-auto">
              {/* <!-- dashboard icon --> */}
              <a href="/admin">
                <div class="mt-12">
                  <img
                    src="src/images/admin-icons/dashboard.svg"
                    class="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>

              {/* <!-- all applications icon --> */}
              <a href="/applications">
                <div class="mt-8 px-2 py-4 bg-sky-100/30 w-10/12 m-auto rounded-xl ">
                  <img
                    src="src/images/admin-icons/all-applications.svg"
                    class="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>

              {/* <!-- rejected applications icon --> */}
              <a href="">
                <div class="mt-8">
                  <img
                    src="src/images/admin-icons/rejected-applications.svg"
                    class="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>

              {/* <!-- approved applications icon --> */}
              <a href="">
                <div class="mt-8">
                  <img
                    src="src/images/admin-icons/approved-applications.svg"
                    class="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>
            </div>

            {/* <!-- logout icon --> */}
            <div class="mt-64 m-auto">
              <a href="/admin-login">
                 <img
                src="src/images/dashboard-icons/log-out.svg"
                class="m-auto"
                alt="dashboard-icon"
              />
              </a>
             
            </div>
          </div>
        </div>

        {/* <!-- end of sidebar --> */}

        <div class="col-span-11 gap-16 p-2 h-screen overflow-y-scroll">
          {/* <!-- main content --> */}
          <main>
            {/* <!-- navbar --> */}
            <div class="grid grid-row-1 row-span-full bg-white p-4 rounded-[30px] shadow-vague">
              <div class="flex justify-between">
                {/* <!-- dashboard text --> */}
                <div class="my-auto">
                  <h1 class="text-2xl font-semibold opacity-60 tracking-tighter">
                    Administrator
                  </h1>
                </div>

                {/* <!-- navbar options/ icons --> */}
                <div class="flex flex-wrap space-x-6">
                  {/* <!-- messages --> */}
                  <button class="border relative border-slate-200 rounded-full p-3">
                    <div class="blue-dot absolute p-1 bg-neutral-900 rounded-full top-0 right-2"></div>
                    <img src="src/images/admin-icons/message.svg" alt="" />
                  </button>
                  {/* <!-- notifications --> */}

                  <button class="border border-slate-200 rounded-full p-3">
                    <img src="src/images/admin-icons/notification.svg" alt="" />
                  </button>

                  {/* <!-- profile --> */}
                  <div class="">
                    <img
                      src="src/images/user.jpg"
                      class="h-12 w-12 object-cover rounded-full"
                      alt="user-image"
                    />
                  </div>
                </div>
                {/* <!-- end of navbar options --> */}
              </div>
            </div>
            {/* <!-- end of navbar --> */}
          </main>

          {/* <!-- application --> */}
          <div class="grid grid-cols-11 h-[83vh] mt-4">
            {/* <!-- col 1 (applications) --> */}
            <div class="col-span-full bg-white shadow-vague rounded-[30px] p-8">
              {/* <!-- link to go back --> */}
              <a href="/applications">
                <div class="text-zinc-500 text-sm my-6">
                  <p>
                    {" "}
                    Back to{" "}
                    <span class="underline font-bold">All Applications</span>
                  </p>
                </div>
              </a>

              {/* <!-- applicant details --> */}
              <div class="flex gap-4 mt-6 p-3">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-24 rounded-md h-20"></div>

                {/* <!-- name con --> */}
                <div class="justify-self-start name-con my-auto">
                  <p class="text-xl font-semibold text-slate-600">John Doe</p>
                  <p class="text-xs mt-2">Applied Sciences & Mathematics</p>
                </div>
              </div>

              <div class="application-details">
                {/* <!-- application details --> */}
                <div class="mt-16 ml-3">
                  <div class="flex justify-between w-3/12 font-medium text-slate-600 text-xs">
                    <p>Date Applied: </p>
                    <p>
                      15<sup>th</sup> March, 2023.{" "}
                    </p>
                  </div>
                </div>

                {/* <!-- application details --> */}
                <div class="mt-6 ml-3">
                  <div class="flex justify-between w-4/12 font-medium text-slate-600 text-xs">
                    <p>Course Name: </p>
                    <p>Applied Sciences & Mathematics</p>
                  </div>
                </div>

                {/* <!-- application details --> */}
                <div class="mt-6 ml-3">
                  <div class="flex justify-between w-3/12 font-medium text-slate-600 text-xs">
                    <p class="my-auto">Status: </p>

                    {/* <!-- status --> */}
                    <div class="bg-gray-100 my-auto text-gray-500 px-6 py-2.5 font-semibold rounded-full text-1xl">
                      Pending
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- decision-making buttons --> */}
              <div class="flex gap-4 mt-16 w-7/12">
                {/* <!-- accept application --> */}
                <div class="">
                  <button class="bg-admin text-white px-16 py-4 rounded-full">
                    Approve Application
                  </button>
                </div>

                {/* <!-- decline application --> */}
                <div class="">
                  <button class="bg-red-500 text-white px-8 py-4 rounded-full">
                    Decline Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- end of dashboard body --> */}
    </div>
  );
}
