import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
      <img src="404_NotFound.png" className="w-96 mb-6 max-w-full" />
      <p className="text-xl font-semibold py-5">
        Bạn đang đi lạc rồi, vui lòng quay lại
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 font-medium text-white  bg-primary transition shadow-md rounded-2xl hover:bg-primary-dark"
      >
        {" "}
        Quay về trang chủ
      </a>
    </div>
  );
};

export default NotFound;
