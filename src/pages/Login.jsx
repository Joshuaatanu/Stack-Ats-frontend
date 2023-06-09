import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    const onSubmit = (e) => {
        e.preventDefault()
    }
  };
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-12 mx-auto">
          {/* <!-- register form  --> */}
          <div className="w-full col-span-5 mx-auto">
            <div className="w-[70%] mx-auto">
              <header className="p-5 w-5/12 flex mr-auto">
                {/* <!-- logo --> */}
                <a href="/">
                  <img
                    src="src/images/logo.svg"
                    alt="logo"
                    className="w-full"
                  />
                </a>
              </header>

              {/* <!-- form div --> */}
              <div className="register mt-20">
                <h1 className="text-2xl font-semibold">Login</h1>
                <p className="text-zinc-600 text-sm mt-2">
                  Login with your valid credentials.
                </p>

                <form action="/student" onSubmit={onSubmit} className="mt-10 pb-10">
                  <div className="mt-3">
                    <label for="">Email</label> <br />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="123@example.com"
                      className="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"
                    />
                  </div>
                  <div className="mt-3">
                    <label for="">Password</label> <br />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={onChange}
                      placeholder="***********"
                      className="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"
                    />
                  </div>
                  {/* <div className="mt-3">
                    <label for="">Confirm Password</label> <br />
                    <input
                      type="password"
                      placeholder="123-345-456"
                      className="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"
                    />
                  </div> */}
                  <div className="mt-8">
                    <button type="submit" className="btn w-11/12 text-white p-5">
                      Login
                    </button>
                  </div>
                </form>
              </div>

              <hr className="opacity-70 mt-5" />

              {/* <!-- footer --> */}
              <footer className="py-16">
                <p>&copy; Copywright 2023. Web Design & Development</p>
              </footer>
            </div>
          </div>

          {/* <!-- splash side-page --> */}
          <div className="bg-sky-400 w-full col-span-7 p-20 absolute sticky top-0 right-0 h-screen">
            <div className="">
              <img
                src="src/images/login-illustration.svg"
                alt="login illustration"
                className="w-7/12 mx-auto"
              />
            </div>

            <div className="grid grid-cols-6 mx-auto">
              <div className="col-start-2 col-span-4 mt-14 text-center text-white p-5">
                <h1 className="font-bold text-2xl">
                  Inspire a soul with a memorable experience
                </h1>
                <p className="mt-3">
                  “Use StackATS for a memorable and smart smartadmission
                  process. Don’t leave your audience guessing and wondering what
                  to do, do it for them.”
                </p>
                <p className="mt-3">
                  {" "}
                  <i>CEO, StackATS - Ito Hitoru</i>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
