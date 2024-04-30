import React from "react";

const Country = (props) => {
  const { name, population, flags, area, capital, region } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article className=" bg-slate-900 text-white text-center h-full p-5 rounded-md hover:scale-105 duration-300 transition-all">
      <div>
        <div className=" w-[300px] h-[150px] mx-auto">
          <img className=" w-full h-full" src={flags.png} alt="" />
        </div>
        <h2>Name: {name.common}</h2>
        <h2>Region: {region}</h2>
        <h2>Capital: {capital}</h2>
        <h2>Population: {population}</h2>
        <h2>Area: {area}</h2>
        <button
          onClick={() => handleRemoveCountry(name.common)}
          className=" capitalize text-sm bg-slate-700 hover:bg-red-400 text-white py-1 px-3 rounded font-bold mt-4"
        >
          remove country
        </button>
      </div>
    </article>
  );
};

export default Country;
