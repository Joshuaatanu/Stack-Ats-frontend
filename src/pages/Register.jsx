import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-toastify";
import Spinner from "../components/Spinner";

export default function () {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/student");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div class="">
        <div class="grid grid-cols-12 mx-auto">
          {/* <!-- register form  --> */}
          <div class="w-full col-span-5 mx-auto">
            <div class="w-[70%] mx-auto">
              <header class="p-5 w-5/12 flex mr-auto">
                {/* <!-- logo --> */}
                <a href="/">
                  <img src="src/images/logo.svg" alt="logo" class="w-full" />
                </a>
              </header>

              {/* <!-- form div --> */}
              <div class="register mt-20">
                <h1 class="text-2xl font-semibold">Register Account</h1>
                <p class="text-zinc-600 text-sm mt-2">
                  Register to be eligible for application.
                </p>

                <form onSubmit={onSubmit} class="mt-10 pb-10">
                  <div class="mt-3">
                    <label for="">First Name</label> <br />
                    <input
                      type="text"
                      name={firstName}
                      onChange={onChange}
                      placeholder="first name"
                      class="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"
                    />
                  </div>
                  <div class="mt-3">
                    <label for="">Last Name</label> <br />
                    <input
                      type="text"
                      name={lastName}
                      onChange={onChange}
                      placeholder="last name"
                      class="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"
                    />
                  </div>
                  <div class="mt-3">
                    <label for="">Email</label> <br />
                    <input
                      type="email"
                      name={email}
                      onChange={onChange}
                      placeholder="123@example.com"
                      class="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"
                    />
                  </div>

                  {/* <div class="mt-3">
                    <label for="">Phone Number</label> <br />
                    <input
                      type="tel"
                      placeholder="123-345-456"
                      class="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"
                    />
                  </div> */}
                  <div class="mt-3">
                    <label for="">Password</label> <br />
                    <input
                      type="password"
                      name={password}
                      onChange={onChange}
                      placeholder="***********"
                      class="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"
                    />
                  </div>
                  <div class="mt-3">
                    <label for="">Confirm Password</label> <br />
                    <input
                      type="password"
                      name={password2}
                      onChange={onChange}
                      placeholder="***********"
                      class="font-bold w-11/12 p-3.5 mt-2 rounded-full bg-zinc-50 border border-zinc-200"
                    />
                  </div>
                  <div class="mt-8">
                    <button type="submit" class="btn w-11/12 text-white p-5">Register</button>
                  </div>
                </form>
              </div>

              <hr class="opacity-70 mt-5" />

              {/* <!-- footer --> */}
              <footer class="py-16">
                <p>&copy; Copywright 2023. Web Design & Development</p>
              </footer>
            </div>
          </div>

          {/* <!-- splash side-page --> */}
          <div class="bg-sky-400 w-full col-span-7 p-20 absolute sticky top-0 right-0 h-screen">
            <div class="grid grid-cols-6 mx-auto">
              <div class="col-start-2 col-span-5 mt-14 justify-self-end p-5">
                <img src="src/images/logo-white.svg" alt="logo" class="w-60" />
                <figcaption class="mt-10 text-white text-xl">
                  “ StackATS is a user-friendly admissions management system
                  that streamlines the process of managing school applications.”
                </figcaption>
              </div>
            </div>

            <div class="">
              <img
                src="src/images/dashboard preview.png"
                class="max-w-7xl fixed right-[-600px] bottom-[-500px]"
                alt="register illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
