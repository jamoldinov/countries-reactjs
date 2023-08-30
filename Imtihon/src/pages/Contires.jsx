import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import Input from "../components/Input";

import "./use.css"
function Contires({data}) { 
//   const [type, setType] = useState("");
//   const url = "https://countries-api-v7sn.onrender.com/countries?limit=250";
//   const { data, isPending, error } = useFetch(type ? type : url);
//   <Input setType={setType} />;

  return (
    <div className='mt-16' >
      
      <ul className=" use">
        {data &&
          data.data.map((data) => {
            // console.log(data);
            return (
              <li
                key={data._id}
                className="cursor-pointer w-[260px] mb-5 h-[336px] bg-[#ffffff] dark:bg-[#304860] dark:text-white rounded-lg shadow-md"
              >
                <NavLink to={`/country/${data.name.slug}`}>
                  <img
                    className="w-[270px] h-[160px] rounded-lg object-cover  shadow-2xl"
                    src={data.flags.png}
                    alt=""
                  />
                  <div className=" px-6">
                    <h1 className="text-[18px] font-bold my-4   ">
                      {data.name.common}
                    </h1>
                    <h1>{`Population: ${data.population}`}</h1>
                    <h1>{`Region: ${data.region}`}</h1>
                    <h1>{`Capital: ${data.capital}`}</h1>
                  </div>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Contires;
