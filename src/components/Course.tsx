import React from "react";
import { CourseData } from "../utilities/CourseData";
import { CourseCard } from "./CourseCard";

interface Props {}

export const Course = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
      {CourseData.map((courseItem) => (
        <CourseCard key={courseItem.id} details={courseItem} />
      ))}
    </div>
  );
};
