import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import styles from "../../styles/style";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-12 text-center text-3xl font-extrabold text-gray-900">
          Đăng nhập
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Địa chỉ Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Nhập địa chỉ email của bạn"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadown-sm placeholder-gray-400 focus:outline-none 
                    focus:ring-blue-500, focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mật khẩu
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    placeholder="Nhập mật khẩu của bạn"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadown-sm placeholder-gray-400 focus:outline-none 
                    focus:ring-blue-500, focus:border-blue-500 sm:text-sm"
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute top-2 right-2  cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute top-2 right-2  cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>
              <div className={`${styles.noramlFlex} justify-between`}>
                <div className={`${styles.noramlFlex}`}>
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-400 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900 cursor-pointer hover:text-blue-500"
                  >
                    Lưu đăng nhập
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href=".forgot-password"
                    className="font-medium text-blue-600 hover:text-red-600"
                  >
                    Quên mật khẩu
                  </a>
                </div>
              </div>
              <div className="w-44 m-auto">
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex items-center justify-center py-2 px-4 border border-transparent
                font-medium rounded-md text-white bg-gray-600 hover:bg-blue-500 transition-all text-lg"
                >
                  Đăng nhập
                </button>
              </div>
              <div className={`${styles.noramlFlex} w-full`}>
                <h4>Bạn chưa có tài khoản ? </h4>
                <Link
                  to="/sign-up"
                  className="text-red-500 pl-2 hover:text-blue-500"
                >
                  Đăng ký
                </Link>
              </div>
              <div
                className={`${styles.noramlFlex} w-full flex justify-center`}
              >
                <span
                  className={`${styles.noramlFlex} w-full flex justify-center`}
                >
                  <BsFacebook className="text-gray-500 w-6 h-6 mr-4 cursor-pointer hover:text-blue-500" />
                  <BsGoogle className="text-gray-500 w-6 h-6 cursor-pointer hover:text-red-500" />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
