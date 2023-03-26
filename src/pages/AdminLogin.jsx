import React from 'react'

export default function AdminLogin() {
  return (
     <div class="">
        <div class="grid grid-cols-12 mx-auto">


            {/* <!-- register form  --> */}
            <div class="w-full col-span-5 mx-auto">

                <div class="w-[70%] mx-auto">
                    <header class="p-5 w-5/12 flex mr-auto">
                        {/* <!-- logo --> */}
                        <a href="index.html">
                            <img src="src/images/logo.svg" alt="logo" class="w-full"/>
                        </a>
                    </header>


                    {/* <!-- form div --> */}
                    <div class="register mt-20">
                        <h1 class="text-2xl font-semibold">Admin Login</h1>
                        <p class="text-zinc-600 text-sm mt-2">
                            Login with your valid credentials.
                        </p>

                        <form action="" class="mt-10 pb-10">
                            <div class="mt-3">
                                <label for="">Email</label> <br/>
                                <input type="email" placeholder="123@example.com"
                                    class="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"/>
                            </div>
                            <div class="mt-3">
                                <label for="">Password</label> <br/>
                                <input type="password" placeholder="***********"
                                    class="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"/>
                            </div>
                            <div class="mt-8">
                                <button class="btn-admin w-11/12 text-white p-5">Login</button>
                            </div>
                        </form>

                    </div>

                    <hr class="opacity-70 mt-5"/>

                    {/* <!-- footer --> */}
                    <footer class="py-16">
                        <p>&copy; Copywright 2023. Web Design & Development</p>
                    </footer>

                </div>

            </div>

{/* 
            <!-- splash side-page --> */}
            <div class="bg-[#272727] w-full col-span-7 p-20 absolute sticky top-0 right-0 h-screen">

                <div class="">
                    <img src="src/images/login-illustration.svg" alt="login illustration" class="w-7/12 mx-auto"/>
                </div>

                <div class="grid grid-cols-6 mx-auto">

                    <div class="col-start-2 col-span-4 mt-14 text-center text-white p-5">
                        <h1 class="font-bold text-2xl">Inspire a soul with a memorable experience</h1>
                        <p class="mt-3">
                            “Use StackATS for a memorable and smart smartadmission process.
                            Don’t leave your audience guessing and
                            wondering what to do, do it for them.”
                        </p>
                        <p class="mt-3"> <i>CEO, StackATS - Ito Hitoru</i> </p>
                    </div>

                </div>

            </div>

        </div>
    </div>


  )
}
