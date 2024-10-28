import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">login</h3>
            <div className=" mt-3 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-3 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="rounded-md border"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* button */}
            <div className="flex justify-between mt-6">
              <button className="hover:bg-pink-900 duration-150 bg-pink-700 rounded-md px-3 py-1">
                Login
              </button>
              <p>
                not registered?
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
