import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const {register, handleSubmit, formState:{errors}} = useForm();

  const navigate = useNavigate();

  function SubmitSignUp(data) {
    data.isAdmin = false;
    axios.post("https://course-selling-website-q42x.onrender.com/user/signup", data)
      .then((res) => {
        alert(res.data.msg);
        window.localStorage.setItem("userId", res.data.userId);
      });
    navigate("/");
  }

  return (
    <div className="flex justify-center h-[522px] bg-cover bg-center bg-login-texture md:h-[542px]">
      <div className="border-gray-400 border-2 px-[28px] py-2 rounded text-center text-2xl font-bold md:px-20 md:py-4 lg:py-10 xl:px-24 xl:py-12">
        <h2 className="my-8 xl:text-3xl">Sign Up</h2>
        <div className="text-left flex flex-col gap-8">
          <input {...register("firstName", {required: '* Field is empty'})} className="rounded-3xl px-4 py-1 text-xl w-52 font-normal outline-none text-gray-500 border-2 border-gray-400 md:w-64" type="text" placeholder="First Name" />
          <div className="absolute top-[280px] px-2 text-xs text-left text-red-500">
            {errors.firstName?.message}
          </div>
          <input {...register("lastName", {required: '* Field is empty'})} className="rounded-3xl px-4 py-1 text-xl w-52 font-normal outline-none text-gray-500 border-2 border-gray-400 md:w-64" type="text" placeholder="Last Name" />
          <div className="absolute top-[352px] px-2 text-xs text-left text-red-500">
            {errors.lastName?.message}
          </div>
          <input {...register("username", {required: '* Field is empty'})} className="rounded-3xl px-4 py-1 text-xl w-52 font-normal outline-none text-gray-500 border-2 border-gray-400 md:w-64" type="email" placeholder="Username" />
          <div className="absolute top-[422px] px-2 text-xs text-left text-red-500">
            {errors.username?.message}
          </div>
          <input {...register("password", {required: '* Field is empty'})} className="rounded-3xl px-4 py-1 text-xl w-52 font-normal outline-none text-gray-500 border-2 border-gray-400 md:w-64" type="password" placeholder="Password" />
          <div className="absolute top-[492px] px-2 text-xs text-left text-red-500">
            {errors.password?.message}
          </div>
          <button
            onClick={handleSubmit(SubmitSignUp)}
            className="bg-[#01c8b5] text-[#0a2e31] w-28 rounded-3xl px-4 py-1 text-lg hover:scale-110 border-[#0a2e31] border-2 relative left-[45px] md:left-[70px]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
