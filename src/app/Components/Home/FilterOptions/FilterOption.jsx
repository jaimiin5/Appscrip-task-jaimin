import React, { useState } from "react";
import * as S from "./FilterOption.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FilterOption = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (title) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const idealFor = ["Men", "Women", "Baby & Kids"];
  const occasions = ["Casual", "Formal", "Sport"];
  const work = ["Office", "Freelance"];
  const fabric = ["Cotton", "Polyester"];
  const segment = ["Kids", "Adults"];
  const pattern = ["Solid", "Printed"];

  const dropdowns = [
    { title: "IDEAL FOR", items: idealFor },
    { title: "OCCASION", items: occasions },
    { title: "WORK", items: work },
    { title: "FABRIC", items: fabric },
    { title: "SEGMENT", items: segment },
    { title: "PATTERN", items: pattern },
  ];

  return (
    <div className={S.filterSection}>
      <div className={S.customizable}>
        <input type="checkbox" name="custom" />&nbsp;
        <label htmlFor="customizable">CUSTOMIZABLE</label>
      </div>
      {dropdowns.map(({ title, items }) => (
        <div key={title} className={S.dropdown}>
          <h4 onClick={() => toggleDropdown(title)} className={S.dropdownTitle}>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {title}
              {openDropdowns[title] ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </h4>
          <div
            className={`${S.dropdownContent} ${
              openDropdowns[title] ? S.open : ""
            }`}
          >
            {items.map((item) => (
              <div key={item} className={S.checks}>
                <label>
                  <input type="checkbox" name={title} />
                  &nbsp;
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterOption;
