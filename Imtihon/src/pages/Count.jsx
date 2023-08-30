import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
import { Waveform } from "@uiball/loaders";
import PageNotFound from "../components/PageNotFound";
const Count = () => {
  const { slug } = useParams();
  console.log(slug);
  const url = "https://countries-api-v7sn.onrender.com/countries/slug/" + slug;
  const { data, isPending,error } = useFetch(url);
  console.log(data);
  return (
    <div className="mt-24 mb-16    w-[90%] mx-auto">
         {isPending && (
        <div className="overlay">
          <Waveform size={80} s speed={1.3} color="#a6c88c" className />
        </div>
      )}
      {error && <PageNotFound/> }
      <NavLink className=" p-4 rounded-md border   " to={"/"}>
        Home Page
      </NavLink>

      {data && (
        <div className="flex gap-8 mt-8">
          <div>
            <img
              className="rounded-lg w-[500px] h-[350px] object-cover shadow-lg"
              src={data.flags.png}
              alt=""
            />
          </div>

          <div className="flex flex-col  items-center gap-8">
            <div>
              <h1 className="block text-[32px] font-[600] ">
                {data.name.common}
              </h1>
              <p className="mb-4">{`Native name: ${data.name.nativeName}`}</p>
              <p className="mb-4">{`Population: ${data.population}`}</p>
              <p className="mb-4">{`Region: ${data.region}`}</p>
              <p className="mb-4">{`Sub Region: ${data.subregion}`}</p>
              <p className="mb-4">{`Capital: ${data.capital}`}</p>
              <p className="mb-4">{`Currencies: ${data.currencies}`}</p>
                <p>{`Languages: ${data.languages}`}</p>
            </div>

            <div className="country-right-bottom">
            <p>Border Countries: </p>{" "}
            {data.borders.map((border) => (
                
              <a href={"/country?" + border.slug}> {border.common},  </a>
              
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Count;
