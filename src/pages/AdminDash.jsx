import React from "react";

export default function AdminDash() {
  return (
    <div>
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
              <a href="">
                <div class="mt-12 px-2 py-4 bg-sky-100/30 w-10/12 m-auto rounded-xl ">
                  <img
                    src="src/images/admin-icons/dashboard.svg"
                    class="m-auto"
                    alt="dashboard-icon"
                  />
                </div>
              </a>

              {/* <!-- all applications icon --> */}
              <a href="">
                <div class="mt-8">
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
              <img
                src="src/images/dashboard-icons/log-out.svg"
                class="m-auto"
                alt="dashboard-icon"
              />
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
          <div class="grid grid-cols-11 gap-4 mt-4">
            {/* <!-- col 1 (applications) --> */}
            <div class="col-span-7 bg-white shadow-vague rounded-[30px] p-8">
              {/* <!-- application heading --> */}
              <div class="flex flex-row my-auto">
                {/* <!-- heading --> */}
                <div class="">
                  <h1 class="text-xl font-bold">All Applications</h1>
                  <p class="text-sm text-gray-400 mt-2 w-9/12">
                    All submitted will be visible here and will be marked as
                    pending until Approved or Declined by the Admin.
                  </p>
                </div>
                {/* <!-- end of heading --> */}

                {/* <!-- button --> */}
                <div class="w-3/12 my-auto">
                  <a href="all-applications.html">
                    <button class="bg-admin text-white px-8 py-3 rounded-full">
                      View all
                    </button>
                  </a>
                </div>
              </div>

              {/* <!-- an applicant 1 --> */}
              <div class="flex gap-4 mt-6 p-3 rounded-xl border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-20 rounded-md h-16"></div>

                {/* <!-- name/text container --> */}
                <div class="grid grid-cols-2 w-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-sm font-bold">John Doe</p>
                    <p class="text-xs mt-2 font-medium">
                      Applied Sciences & Mathematics
                    </p>
                  </div>

                  {/* <!-- details con --> */}
                  <div class="name-con justify-self-end mr-4 text-right my-auto">
                    <p class="text-xs text-zinc-300">Today, 13:48</p>
                    <div class="badge mt-2 bg-gray-100 text-gray-500 px-6 py-2.5 font-semibold rounded-full w-full text-1xl">
                      Pending
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- end of applicant --> */}

              {/* <!-- an applicant 2 --> */}
              <div class="flex gap-4 mt-6 p-3 rounded-xl border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-20 rounded-md h-16"></div>

                {/* <!-- name/text container --> */}
                <div class="grid grid-cols-2 w-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-sm font-bold">John Doe</p>
                    <p class="text-xs mt-2 font-medium">
                      Applied Sciences & Mathematics
                    </p>
                  </div>
                  {/*  */}

                  <div class="name-con justify-self-end mr-4 text-right my-auto">
                    <p class="text-xs text-zinc-300">Today, 13:48</p>
                    <div class="badge mt-2 bg-gray-100 text-gray-500 px-6 py-2.5 font-semibold rounded-full w-full text-1xl">
                      Pending
                    </div>
                  </div>
                </div>
              </div>
              {/* 
              <!-- end of applicant --> */}

              {/* <!-- an applicant 3 --> */}
              <div class="flex gap-4 mt-6 p-3 rounded-xl border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-20 rounded-md h-16"></div>

                {/* <!-- name/text container --> */}
                <div class="grid grid-cols-2 w-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-sm font-bold">John Doe</p>
                    <p class="text-xs mt-2 font-medium">
                      Applied Sciences & Mathematics
                    </p>
                  </div>

                  {/* <!-- details con --> */}
                  <div class="name-con justify-self-end mr-4 text-right my-auto">
                    <p class="text-xs text-zinc-300">Today, 13:48</p>
                    <div class="badge mt-2 bg-green-100 text-green-500 px-6 py-2.5 font-semibold rounded-full w-full text-1xl">
                      Approved
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- end of applicant --> */}

              {/* <!-- an applicant 4 --> */}
              <div class="flex gap-4 mt-6 p-3 rounded-xl border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-20 rounded-md h-16"></div>

                {/* <!-- name/text container --> */}
                <div class="grid grid-cols-2 w-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-sm font-bold">John Doe</p>
                    <p class="text-xs mt-2 font-medium">
                      Applied Sciences & Mathematics
                    </p>
                  </div>

                  {/* <!-- details con --> */}
                  <div class="name-con justify-self-end mr-4 text-right my-auto">
                    <p class="text-xs text-zinc-300">Today, 13:48</p>
                    <div class="badge mt-2 bg-red-100 text-red-500 px-6 py-2.5 font-semibold rounded-full w-full text-1xl">
                      Declined
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- end of applicant --> */}

              {/* <!-- an applicant 5 --> */}
              <div class="flex gap-4 mt-6 p-3 rounded-xl border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-20 rounded-md h-16"></div>

                {/* <!-- name/text container --> */}
                <div class="grid grid-cols-2 w-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-sm font-bold">John Doe</p>
                    <p class="text-xs mt-2 font-medium">
                      Applied Sciences & Mathematics
                    </p>
                  </div>

                  {/* <!-- details con --> */}
                  <div class="name-con justify-self-end mr-4 text-right my-auto">
                    <p class="text-xs text-zinc-300">Today, 13:48</p>
                    <div class="badge mt-2 bg-red-100 text-red-500 px-6 py-2.5 font-semibold rounded-full w-full text-1xl">
                      Declined
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- end of applicant --> */}

              {/* <!-- an applicant 6 --> */}
              <div class="flex gap-4 mt-6 p-3 rounded-xl border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-20 rounded-md h-16"></div>

                {/* <!-- name/text container --> */}
                <div class="grid grid-cols-2 w-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-sm font-bold">John Doe</p>
                    <p class="text-xs mt-2 font-medium">
                      Applied Sciences & Mathematics
                    </p>
                  </div>

                  {/* <!-- details con --> */}
                  <div class="name-con justify-self-end mr-4 text-right my-auto">
                    <p class="text-xs text-zinc-300">Today, 13:48</p>
                    <div class="badge mt-2 bg-green-100 text-green-500 px-6 py-2.5 font-semibold rounded-full w-full text-1xl">
                      Approved
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- end of applicant --> */}

              {/* <!-- an applicant 7 --> */}
              <div class="flex gap-4 mt-6 p-3 rounded-xl border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-20 rounded-md h-16"></div>

                {/* <!-- name/text container --> */}
                <div class="grid grid-cols-2 w-full">
                  {/* 
                  <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-sm font-bold">John Doe</p>
                    <p class="text-xs mt-2 font-medium">
                      Applied Sciences & Mathematics
                    </p>
                  </div>

                  {/* <!-- details con --> */}
                  <div class="name-con justify-self-end mr-4 text-right my-auto">
                    <p class="text-xs text-zinc-300">Today, 13:48</p>
                    <div class="badge mt-2 bg-red-100 text-red-500 px-6 py-2.5 font-semibold rounded-full w-full text-1xl">
                      Declined
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- end of applicant --> */}
            </div>

            {/* <!-- col 2 (deleted applications) --> */}
            <div class="col-span-4 bg-white rounded-[30px] shadow-vague p-5">
              {/* <!-- heading --> */}
              <div class="headingg flex justify-between w-full">
                <div class="text">
                  <div class="mt-6">
                    <h1 class="text-md font-semibold text-red-500">
                      Declined Applications
                    </h1>
                    <p class="text-xs text-gray-400 mt-1 w-10/12">
                      All declined applications will be visible here.
                    </p>
                  </div>
                </div>

                {/* <!-- btn --> */}
                <div class="my-auto">
                  <a href="">
                    <button class="bg-gray-100 text-gray-500 text-sm py-2.5 px-5 rounded-full">
                      View All
                    </button>
                  </a>
                </div>
              </div>
              {/* <!-- end of heading --> */}

              {/* <!-- deleted applications --> */}

              {/* <!-- a deleted applicant 1 --> */}
              <div class="flex gap-4 mt-6 p-2 rounded-lg border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-16 rounded-md h-14"></div>

                {/* <!-- name/text container --> */}
                <div class="grid row-span-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-xs font-bold">John Doe</p>
                    <p class="text-[0.55rem] mt-1">
                      Applied Sciences & Mathematics
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- end of applicant --> */}

              {/* <!-- a deleted applicant 2 --> */}
              <div class="flex gap-4 mt-6 p-2 rounded-lg border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-16 rounded-md h-14"></div>

                {/* <!-- name/text container --> */}
                <div class="grid row-span-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-xs font-bold">John Doe</p>
                    <p class="text-[0.55rem] mt-1">
                      Applied Sciences & Mathematics
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- end of applicant --> */}

              {/* <!-- a deleted applicant 3 --> */}
              <div class="flex gap-4 mt-6 p-2 rounded-lg border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-16 rounded-md h-14"></div>

                {/* <!-- name/text container --> */}
                <div class="grid row-span-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-xs font-bold">John Doe</p>
                    <p class="text-[0.55rem] mt-1">
                      Applied Sciences & Mathematics
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- end of applicant --> */}

              {/* <!-- a deleted applicant 4 --> */}
              <div class="flex gap-4 mt-6 p-2 rounded-lg border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-16 rounded-md h-14"></div>

                {/* <!-- name/text container --> */}
                <div class="grid row-span-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-xs font-bold">John Doe</p>
                    <p class="text-[0.55rem] mt-1">
                      Applied Sciences & Mathematics
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- end of applicant --> */}

              {/* <!-- a deleted applicant 5 --> */}
              <div class="flex gap-4 mt-6 p-2 rounded-lg border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-16 rounded-md h-14"></div>

                {/* <!-- name/text container --> */}
                <div class="grid row-span-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-xs font-bold">John Doe</p>
                    <p class="text-[0.55rem] mt-1">
                      Applied Sciences & Mathematics
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- end of applicant --> */}

              {/* <!-- a deleted applicant 6 --> */}
              <div class="flex gap-4 mt-6 p-2 rounded-lg border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-16 rounded-md h-14"></div>

                {/* <!-- name/text container --> */}
                <div class="grid row-span-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-xs font-bold">John Doe</p>
                    <p class="text-[0.55rem] mt-1">
                      Applied Sciences & Mathematics
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- end of applicant --> */}

              {/* <!-- a deleted applicant 7 --> */}
              <div class="flex gap-4 mt-6 p-2 rounded-lg border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-16 rounded-md h-14"></div>

                {/* <!-- name/text container --> */}
                <div class="grid row-span-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-xs font-bold">John Doe</p>
                    <p class="text-[0.55rem] mt-1">
                      Applied Sciences & Mathematics
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- end of applicant --> */}

              {/* <!-- a deleted applicant 8 --> */}
              <div class="flex gap-4 mt-6 p-2 rounded-lg border border-slate-200">
                {/* <!-- picture --> */}
                <div class="picture my-auto bg-zinc-200 w-16 rounded-md h-14"></div>

                {/* <!-- name/text container --> */}
                <div class="grid row-span-full">
                  {/* <!-- name con --> */}
                  <div class="justify-self-start name-con my-auto">
                    <p class="text-xs font-bold">John Doe</p>
                    <p class="text-[0.55rem] mt-1">
                      Applied Sciences & Mathematics
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- end of applicant --> */}
            </div>

            {/*   <!-- end of heading --> */}
          </div>
        </div>
      </div>

      {/* <!-- end of dashboard body --> */}
    </div>
  );
}
