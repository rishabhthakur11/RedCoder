import React, { useState } from "react";

interface Props {}

export const Progress = (props: Props) => {
  const [progress, setProgress] = useState(360);
  const styles = {
    wrapper: "relative w-24 h-24 ",
    circle: "absolute top-0 right-0 w-full h-full rounded-full",
    progress: `absolute top-0 right-0 w-full h-full rounded-full border-4
                transform -rotate-90 ${
                  progress > 50 ? "border-textBlue" : "border-textRed"
                }`,
    label:
      "flex items-center justify-center w-full h-full text-xl font-bold text-textRed",
  };
  return (
    <div className="flex items-center justify-center py-8 px-1 rounded">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-3 p-5 dark:bg-boxBrown bg-white rounded-t">
          <div className="px-4 flex items-center justify-between mb-6">
            <span className="focus:outline-none  text-base font-bold text-textRed">
              Session
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <div className={styles.wrapper}>
              <div className={styles.circle}>
                <div
                  className={styles.progress}
                  style={{ transform: `rotate(${(progress / 100) * 360}deg)` }}
                ></div>
              </div>
              <div className={styles.label}>{progress}</div>
            </div>
            <div className="flex flex-col gap-y-2 text-base font-medium text-textGray">
              <div className="flex">
                <h1>Easy</h1>
              </div>
              <div className="flex">
                <h1>Medium</h1>
              </div>
              <div className="flex">
                <h1>Hard</h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 text-base font-medium text-textGray">
              <div className="flex">
                <h1>10</h1>
              </div>
              <div className="flex">
                <p>10</p>
              </div>
              <div className="flex">
                <p>10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
