import React from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Input from "./Input";
import Contires from "../pages/Contires";
import { Outlet } from "react-router-dom";
import { Waveform } from "@uiball/loaders";
import PageNotFound from "./PageNotFound";

function Mode() {
  const [type, setType] = useState("");
  let url = "https://countries-api-v7sn.onrender.com/countries?limit=250";
  const { data, isPending, error } = useFetch(type ? type : url);
  return (
    <div className=" container max-w-5xl mx-auto">
        {isPending && (
        <div className="overlay">
          <Waveform size={80} s speed={1.3} color="#a6c88c" className />
        </div>
      )}
      {error && <PageNotFound/> }
      <Input setType={setType} />
      <Contires  data={data} />
      
      {/* <Outlet /> */}
    </div>
  );
}

export default Mode;
