import AddTAsk from "@/components/AddTAsk";
import DateTimeFilters from "@/components/DateTimeFilters";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full relative ">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />
      {/* Your Content/Components */}
      <div className="container pt-8 mx-auto relative  z-10x  ">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          {/*Đầu trang */}
          <Header />
          {/*Tạo Nhiệm vụ */}
          <AddTAsk />
          {/*Thống kê và bộ lọc */} 
          <StatsAndFilters />
          {/*Danh sách nhiệm vụ */}
          <TaskList />
          {/*Phân trang và lọc theo này tháng */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFilters />
          </div>
          {/*Cuối trang */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
