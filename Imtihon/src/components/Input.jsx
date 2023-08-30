import { Waveform } from "@uiball/loaders";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Input({setType}) {
    function handleInput(search) {
        let url = 'https://countries-api-v7sn.onrender.com/countries?'
        setType(url + search)
    }
    function handInput(region) {
        let url = 'https://countries-api-v7sn.onrender.com/countries?'
        setType(url + region)
    }

  const [url, setUrl] = useState(
    "https://countries-api-v7sn.onrender.com/countries?limit=250"
  );
  const { data, isPending, error } = useFetch(url);
  return (
    <>
      <div className="flex justify-between">
        
        <div className="search">
          {/* <BsSearch /> */}
          <input
          onChange={(e)=> handleInput('search=' + e.target.value)}
            // onChange={(e) => {
            //   setUrl(
            //     `https://countries-api-v7sn.onrender.com/countries?search=${e.target.value}`
            //     );
            // }}
            className='outline-none capitalize p-2 text-white dark:bg-[#6184a4] dark:text-white w-96 rounded-lg'
            type="search"
            placeholder="search for a country"
            />
        </div>
        <select 
         className='outline-none capitalize p-2 dark:bg-[#6184a4] dark:text-white w-32 rounded-lg'
         onChange={(e)=> handInput('region=' + e.target.value)}
        //   onChange={(e) => {
        //     if (e.target.value == "All") {
        //       setUrl(
        //         '"https://countries-api-v7sn.onrender.com/countries?limit=250"'
        //       );
        //     } else {
        //         setUrl(
        //             `https://countries-api-v7sn.onrender.com/countries?region=${e.target.value}`
        //             );
        //         }
        //   }}
          name="continent"
          id=""
          >
          <option value="">All</option>
          <option value="Africa">Afcrica</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {/* <div className="overlay">
          <Waveform size={80} s speed={1.3} color="#a6c88c" className />
        </div> */}
    </>
  );
}
  
  
export default Input;