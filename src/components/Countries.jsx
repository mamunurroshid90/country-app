import React from "react";

import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Countries = (props) => {
  const countries = props.countries;

  return (
    <div className=" grid grid-cols-3 gap-4 p-4 mx-auto w-[1240px]">
      {countries.map((country) => {
        const newCountry = { country, id: uuidv4() };
        return (
          <Country
            {...newCountry}
            key={newCountry.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </div>
  );
};

export default Countries;
