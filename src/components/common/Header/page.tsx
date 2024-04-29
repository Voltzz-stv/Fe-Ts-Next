"use client";

import Card from "../Card/page";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight, FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";
import { ReactNode } from "react";

export default function Header({ title }: { title: string }) {
  const { data, fmsNav } = useSelector((store: FStore) => store.filters);

  const { start_date, end_date } = useSelector(
    (store: DStore) => store.dates.date
  );

  const buttonRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState<ReactNode | undefined>(undefined);

  // const pplLen = data?.filterdata.ppl_filter.length;
  const plLen = data?.filterdata.pl_filter.length;
  const vinLen = data?.filterdata.vin_filter.length;

  const hClick = () => alert("Please select a PL or Insert a VIN to proceed!");

  useEffect(() => {
    // const check = pplLen === 1 || vinLen !== 0;
    const check = plLen === 1 || vinLen !== 0;

    if (check && fmsNav) {
      const jsx: ReactNode = (
        <Link href={"/fms"}>
          <FaAngleRight size="2em" color="#007fff" />
        </Link>
      );
      setNav(jsx);
    } else {
      const ojsx = (
        <button onClick={hClick}>
          <FaAngleRight color="#A8A8A8" size="2em" />
        </button>
      );
      setNav(ojsx);
    }
  }, [plLen, vinLen, fmsNav]);

  return (
    <Card>
      <header className="p-2 grid items-center grid-cols-[100px_20px_1fr_120px_40px] lg:grid-cols-[150px_200px_20px_1fr_220px_50px_150px] md:grid-cols-[140px_120px_20px_1fr_140px_50px_140px] grid-rows-1 lg:mx-5 md:mx-4 justify-items-center">
        <div className="items-center lg:col-start-1 md:col-start-1 justify-self-start">
          {/* <img
            // src="./artifacts/tml-logo.png"
            src={tata}
            alt="TML Logo"
            className="hidden md:block md:h-8"
          /> */}
          <Image
            src={"/artifacts/tml-logo.png"}
            alt="TML logo"
            width={20}
            height={20}
          />
        </div>

        <div
          className={` ${con} italic lg:text-[0.6rem] md:text-[0.6rem] text-[0.5rem] lg:col-start-2 md:col-start-2 col-start-1 `}
        >
          <span>Data Availability Range</span>
          <span className="font-semibold">
            {title === "Fleet Insight" && "Since Inception"}
            {title !== "Fleet Insight" && `${start_date} to ${end_date}`}
          </span>
        </div>

        {title === "FMS" && (
          <div>
            <Link href={"/"}>
              <FaAngleLeft color="#007fff" size="2em" />
            </Link>
          </div>
        )}

        {title === "Fleet Insight" && (
          <div>
            <Link href={"/fms"}>
              <FaAngleLeft color="#007fff" size="2em" />
            </Link>
          </div>
        )}

        <div className="col-start-3 lg:col-start-4 md:col-start-4 justify-self-center">
          <h1 className="text-lg font-bold text-blue-900 md:text-lg lg:text-3xl md:font-extrabold">
            {title}
          </h1>
        </div>

        {title === "Fuel Economy" && (
          <div className="self-center lg:justify-self-start md:justify-self-start justify-self-center">
            {nav}
          </div>
        )}

        {title === "Fleet Insight" && (
          <div className="lg:justify-self-start md:justify-self-start justify-self-center">
            <Link href={"/"}>
              <FaHome size="1.5em" color="#007fff" />
            </Link>
          </div>
        )}

        {title === "FMS" && <div></div>}

        {/* //!-------------- Modal-----------------/   */}
        <div>
          {title !== "FMS" && (
            <button
              onClick={() => setIsOpen(true)}
              className="opacity-0 cursor-none"
            >
              {/* <img src={gloss} alt="gloss" /> */}
              <Image
                src={"/artifacts/gloss1.jpg"}
                alt="gloss"
                width={5}
                height={5}
              />
            </button>
          )}
          {/* {isOpen && (
            <Modal buttonRef={buttonRef} modOpen={isOpen} modClose={setIsOpen}>
              {title === "Fuel Economy" && <Glossary1 />}
              {title === "Fleet Insight" && <Glossary2 />}
              {title === "Fleet Insight" && <Glossary3 />}
              {title === "Fleet Insight" && <Glossary4 />}
            </Modal>
          )} */}
        </div>

        <div className="justify-self-end">
          {/* <div className="col-start-6 justify-self-end"> */}
          {/* <img
            // src="./artifacts/sp-logo.png"
            src={sparq}
            alt="SparQPluq"
            className="hidden md:block md:h-12 lg:h-14"
          /> */}
          <Image
            src={"/artifacts/sp-logo.png"}
            alt="SparQPluq"
            width={10}
            height={10}
          />
        </div>
      </header>
    </Card>
  );
}
//* ---------------XXXX---------------------/
const con = "flex flex-col items-center justify-center";

//* ---------------TYPES---------------------/
interface FStore {
  filters: {
    data: {
      filterdata: {
        date_filter: {
          start_date: string;
          end_date: string;
        };
        month_filter: string[];
        region_filter: string[];
        state_filter: string[];
        productline_filter: string[];
        lob_filter: string[];
        ppl_filter: string[];
        pl_filter: string[];
        vin_filter: string[];
        mc_filter: string[];
      };
    };
    submitted: number;
    fmsNav: number;
  };
}

interface DStore {
  dates: {
    date: {
      start_date: string;
      end_date: string;
    };
  };
}
