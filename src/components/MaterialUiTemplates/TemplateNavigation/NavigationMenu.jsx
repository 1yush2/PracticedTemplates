import React from "react";
import { Routes, Route } from "react-router-dom";
import { routesData } from "./NavigationData";
export default function NavigationMenu() {
  return (
    <Routes>
      {routesData.map((data) => {
        return (
          <Route
            key={data.link}
            path={data.link}
            element={data.component}
          ></Route>
        );
      })}
    </Routes>
  );
}
