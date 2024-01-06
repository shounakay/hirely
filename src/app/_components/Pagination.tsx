import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const Pagination = ({
  pageNum,
  totalSize,
  pageSize,
  setPageNum,
  handlePageChange,
}: any) => {
  const totalPages = Math.ceil(totalSize / pageSize);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setPageNum(i)}
          className={`${
            pageNum === i
              ? "bg-tarawera-400 font-medium text-neutral-800 "
              : "bg-neutral-400 text-black"
          } mx-1 rounded-full border px-3 py-1`}
        >
          {i}
        </button>,
      );
    }

    return pageNumbers;
  };
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        disabled={pageNum === 1}
        className=" cursor-pointer"
        onClick={() => handlePageChange(true)}
      >
        <FaArrowLeft />
      </button>
      {renderPageNumbers()}
      <button
        disabled={pageNum === totalPages}
        className="cursor-pointer"
        onClick={() => handlePageChange(false)}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
