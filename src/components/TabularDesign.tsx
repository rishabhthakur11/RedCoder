import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function TabularDesign() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      status: "Not Done",
      title: "Find the Diifference of two Array",
      acceptency: "50%",
      difficulty: "Easy",
    },
    {
      id: 2,
      status: "Not Done",
      title: "Two Sum",
      acceptency: "100%",
      difficulty: "Easy",
    },
    {
      id: 3,
      status: "Not Done",
      title: "Add Two Numbers",
      acceptency: "90%",
      difficulty: "Easy",
    },
    {
      id: 4,
      status: "Not Done",
      title: "Median of Two Sorted Array",
      acceptency: "20%",
      difficulty: "Easy",
    },
    {
      id: 5,
      status: "Not Done",
      title: "ZigZag Conversation",
      acceptency: "80%",
      difficulty: "Easy",
    },
    {
      id: 6,
      status: "Not Done",
      title: "Palindromic Number",
      acceptency: "80%",
      difficulty: "Easy",
    },
    {
      id: 7,
      status: "Done",
      title: "3Sum",
      acceptency: "50%",
      difficulty: "Medium",
    },
    {
      id: 8,
      status: "Not Done",
      title: "Merge K sorted List",
      acceptency: "40%",
      difficulty: "Hard",
    },
    {
      id: 9,
      status: "Not Done",
      title: "Find the Diifference of two Array",
      acceptency: "50%",
      difficulty: "Easy",
    },
    {
      id: 10,
      status: "Not Done",
      title: "Find the Diifference of two Array",
      acceptency: "50%",
      difficulty: "Easy",
    },
    {
      id: 11,
      status: "Not Done",
      title: "Find the Diifference of two Array",
      acceptency: "50%",
      difficulty: "Easy",
    },
    {
      id: 12,
      status: "Not Done",
      title: "Find the Diifference of two Array",
      acceptency: "50%",
      difficulty: "Easy",
    },
    {
      id: 13,
      status: "Not Done",
      title: "Find the Diifference of two Array",
      acceptency: "50%",
      difficulty: "Easy",
    },
    {
      id: 14,
      status: "Not Done",
      title: "Find the Diifference of two Array",
      acceptency: "50%",
      difficulty: "Easy",
    },
    {
      id: 15,
      status: "Not Done",
      title: "Find the Diifference of two Array",
      acceptency: "50%",
      difficulty: "Easy",
    },
  ]);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-lightBrown mt-8">
        <thead className="">
          <tr>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-textGray tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-base font-medium text-textGray tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-textGray tracking-wider"
            >
              Acceptence
            </th>
            <th
              scope="col"
              className="px-2 py-3 text-left text-base font-medium text-textGray tracking-wider"
            >
              Difficulty
            </th>
          </tr>
        </thead>
        <tbody className="bg-boxBrown divide-y divide-lightBrown">
          {currentPageData.map((item) => (
            <tr key={item.id}>
              <td className="px-2 py-4 whitespace-nowrap text-base font-medium text-textGray">
                {item.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-textGray">
                {item.title}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-base font-medium text-textGray">
                {item.acceptency}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-base font-medium text-textGray">
                {item.difficulty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default TabularDesign;
