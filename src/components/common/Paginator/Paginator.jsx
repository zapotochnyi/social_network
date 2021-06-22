import React from "react";
import s from "../Paginator/Paginator.module.css";

const Paginator = ({pages, onPageChanged, currentPage}) => {
  return (
    <div className={s.pagination_wrap}>
      {pages.slice(0, 20).map((p) => {
        return (
          <span
            onClick={(e) => {
              onPageChanged(p);
            }}
            className={currentPage === p && s.selected_page}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
