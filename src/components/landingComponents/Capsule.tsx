import React from "react";

interface Props {
  bgcolor: string;
}
const Capsule = ({ bgcolor }: Props) => {
  return (
    <div
      className={`w-5 h-5 p-5 rounded-md flex items-center justify-center`}
      style={{ backgroundColor: bgcolor }}
    >
      <div className="h-2 w-2 p-2 bg-gray-700 rounded-full"></div>
    </div>
  );
};

export default Capsule;
