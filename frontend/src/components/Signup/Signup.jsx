import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const handleSubmit = () => {
    console.log("fff");
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-12 text-center text-3xl font-extrabold text-gray-900">
          Đăng ký tài khoản
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
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Họ và tên
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Nhập họ và tên của bạn"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Xác nhận Mật khẩu
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visibleConfirm ? "text" : "password"}
                    name="confirmPassword"
                    autoComplete="current-password"
                    placeholder="Vui lòng xác nhận lại mật khẩu"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadown-sm placeholder-gray-400 focus:outline-none 
                      focus:ring-blue-500, focus:border-blue-500 sm:text-sm"
                  />
                  {visibleConfirm ? (
                    <AiOutlineEye
                      className="absolute top-2 right-2  cursor-pointer"
                      size={25}
                      onClick={() => setVisibleConfirm(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute top-2 right-2  cursor-pointer"
                      size={25}
                      onClick={() => setVisibleConfirm(true)}
                    />
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-2 flex items-center">
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                    {avatar ? (
                      <img
                        src={URL.createObjectURL(avatar)}
                        alt="avatar"
                        className="h-full w-full object-cover rounded-full "
                      />
                    ) : (
                      <RxAvatar
                        className="w-8 h-8 cursor-pointer"
                        title="Chọn ảnh đại diện"
                      />
                    )}
                  </span>
                  <label
                    htmlFor="file-input"
                    className=" ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm 
                    font-medium text-gray-700 bg-white hover:bg-gray-500 hover:text-white transition-all"
                  >
                    <span>Chọn hình ảnh</span>
                    <input
                      type="file"
                      accept=".jpg,.png,.jpeg"
                      name="avatar"
                      id="file-input"
                      onChange={handleFileInputChange}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
              <div className="w-44 m-auto">
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex items-center justify-center py-2 px-4 border border-transparent
                  font-medium rounded-md text-white bg-gray-600 hover:bg-blue-500 transition-all text-lg"
                  onClick={handleSubmit}
                >
                  Đăng ký
                </button>
              </div>
              <div className={`${styles.noramlFlex} w-full`}>
                <h4>Bạn đã có tài khoản ? </h4>
                <Link
                  to="/login"
                  className="text-red-500 pl-2 hover:text-blue-500"
                >
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
