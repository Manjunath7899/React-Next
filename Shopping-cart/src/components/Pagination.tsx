import React, { useEffect, useState } from "react";

interface PaginationProps {
  productData: any[];
  itemPerpage: number;
  page: number;
  setPage: (num: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  productData,
  itemPerpage,
  page,
  setPage,
}) => {
  const pagesPerGroup = 5;
  const totalPages = Math.ceil(productData.length / itemPerpage);

  const [currentGroupPage, setCureentGroupPerPage] = useState<number[]>([]);
  const [groupIndex, setGroupIndex] = useState<number>(0);

  useEffect(() => {
    const allPages = [...Array(totalPages)].map((_, index) => index + 1);
    const startIndex = groupIndex * pagesPerGroup;
    const endIndex = startIndex + pagesPerGroup;
    const currentGroup = allPages.slice(startIndex, endIndex);
    setCureentGroupPerPage(currentGroup);
  }, [groupIndex, totalPages]);

  const handlePrevious = () => {
    const prevGroupIndex = groupIndex - 1;
    if (prevGroupIndex >= 0) {
      setGroupIndex(prevGroupIndex);
      setPage(prevGroupIndex * pagesPerGroup + 1);
    }
  };

  const handleNext = () => {
    const nextGroupIndex = groupIndex + 1;
    if (nextGroupIndex * pagesPerGroup < totalPages) {
      setGroupIndex(nextGroupIndex);
      setPage(nextGroupIndex * pagesPerGroup + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-5 mb-8">
      <div className="flex gap-2">
        <div
          className={`border border-indigo-600 rounded px-4 py-2 cursor-pointer ${
            groupIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer text-indigo-600"
          }`}
        >
          <button
            disabled={groupIndex === 0}
            onClick={handlePrevious}
            className={`${
              groupIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer text-indigo-600"
            }`}
          >
            Prev
          </button>
        </div>
        <div className="flex justify-center gap-2 items-center">
          {currentGroupPage.map((pageNum, index) => {
            return (
              <div
                key={index}
                onClick={() => setPage(pageNum)}
                className="border border-indigo-600 px-4 py-2 cursor-pointer rounded"
              >
                <span className="text-indigo-600">{pageNum}</span>
              </div>
            );
          })}
        </div>
        <div
          className={`border border-indigo-600 px-4 py-2 text-indigo-600 rounded ${
            (groupIndex + 1) * pagesPerGroup >= totalPages
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <button
            disabled={(groupIndex + 1) * pagesPerGroup >= totalPages}
            onClick={handleNext}
            className={`${
              (groupIndex + 1) * pagesPerGroup >= totalPages
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
