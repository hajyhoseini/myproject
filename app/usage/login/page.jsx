// pages/login.js
import React from 'react'

export default function Login() {
  return (
    <div className=" bg-custom-image  bg-cover bg-center h-64  w-full  flex items-center justify-center min-h-screen ">
      <div className="bg-white/60 backdrop-blur-lg rounded-lg p-5   shadow-lg w-96 lg:w-2/4 lg:h-3/5">
        <h2 className="text-2xl font-semibold text-center mb-6 ">ورود به سایت شخصی من 
 </h2>
        
        {/* فرم لاگین */}
        <form action="#" method="POST">
        <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">نام کاربری</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder="نام کاربری خود را وارد کنید"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">رمز عبور</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600">مرا به خاطر بسپار</label>
            </div>
            <a href="#" className="text-blue-500 text-md">فراموشی رمز عبور</a>
            <a href="#" className="text-blue-500 text-md">  ثبت نام</a>

          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  )
}
