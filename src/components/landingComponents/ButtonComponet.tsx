import React, { ReactElement } from "react";

interface Props {
  title: string;
  color: string;
  textColor: string;
  icon?: ReactElement;
  onClick?: () => void;
}

function ButtonComponet({
  title,
  color,
  icon,
  textColor,
  onClick,
}: Props): ReactElement {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md border border-transparent px-3 md:px-5 md:py-3 py-2 text-sm md:text-base font-medium hover:scale-105 duration-300`}
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      {icon}
      <div className="text-[14px]">{title}</div>
    </button>
  );
}

export default ButtonComponet;
