import React, { useEffect, useState } from "react";
import Filter from "../Components/FilterMenu";
import MenuItem from "../Components/MenuItem";
import { useGlobalContext } from "../context";

function Home() {
  const { filteredItems } = useGlobalContext()

  return (
    <section className="main__section>">
      <Filter />

      <div className="item__menu">
        {filteredItems.map((item) => {
          return (
            <MenuItem
              key={item.key}
              image={item.image}
              name={item.name}
              price={item.price}
            ></MenuItem>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
