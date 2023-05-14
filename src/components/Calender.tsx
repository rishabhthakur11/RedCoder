import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";

interface Props {}

export const Calender = (props: Props) => {
  const today = startOfToday();
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: endOfMonth(firstDayOfMonth),
  });

  const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };
  return (
    <div className="flex items-center justify-center py-8 px-1 rounded">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-6 p-5 dark:bg-boxBrown bg-white rounded-t">
          <div className="px-4 flex items-center justify-between">
            <span className="focus:outline-none  text-base font-bold text-textRed">
              {format(firstDayOfMonth, "MMMM yyyy")}
            </span>
            <div className="flex items-center">
              <ChevronLeftIcon onClick={getPrevMonth} />
              <ChevronRightIcon onClick={getNextMonth} />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-6  place-items-center  mt-6">
            {days.map((day, idx) => {
              return (
                <div key={idx} className="text-white text-md">
                  {day}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-7 gap-6 mt-8 place-items-center">
            {daysInMonth.map((day, idx) => {
              return (
                <div key={idx} className={colStartClasses[getDay(day)]}>
                  <p
                    className={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-full  hover:text-white ${
                      isSameMonth(day, today)
                        ? "text-textGray"
                        : "text-textLightGray"
                    } ${!isToday(day) && "hover:bg-textBlue"} ${
                      isToday(day) && "bg-textRed text-white"
                    }`}
                  >
                    {format(day, "d")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
