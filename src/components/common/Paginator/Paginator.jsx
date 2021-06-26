import React, { useState } from "react";
import s from "../Paginator/Paginator.module.css";
import prevArrow from "../../../assets/images/prev.png";
import nextArrow from "../../../assets/images/next.png"

const Paginator = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 20,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pagination_wrap}>
      {portionNumber > 1 && (
        <img
          src={prevArrow}
          alt="previous"
          className={s.prev_btn}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        />
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
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

      {portionCount > portionNumber && (
        <img
          src={nextArrow}
          alt="next"
          className={s.next_btn}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        />
      )}
    </div>
  );
};

export default Paginator;
