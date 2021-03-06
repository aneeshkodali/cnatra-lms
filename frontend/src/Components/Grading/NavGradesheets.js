import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

//For Navigation between Gradesheets
function NavGradesheets({
  direction,
  EIB,
  sheet_code,
  length,
  phase,
  stage,
  username,
  onClick,
}) {
  //EIB = Event in block

  return (
    <>
      {direction === "prev" ? (
        <Link
          to={{
            pathname: `/Grades/${phase}/${stage}/${username}/${sheet_code}`,
          }}
          className="nav-sheets-lk"
          onClick={onClick}
        >
          <button disabled={EIB && EIB === 1}>
            <div className="nav-sheets">
              <IoIosArrowDropleft />
              <span>{sheet_code || "Prev"}</span>
            </div>
          </button>
        </Link>
      ) : (
        <Link
          to={{
            pathname: `/Grades/${phase}/${stage}/${username}/${sheet_code}`,
          }}
          className="nav-sheets-lk"
          onClick={onClick}
        >
          <button disabled={EIB === length}>
            <div className="nav-sheets">
              <span>{sheet_code || "Next"}</span>
              <IoIosArrowDropright />
            </div>
          </button>
        </Link>
      )}
    </>
  );
}

export default NavGradesheets;
