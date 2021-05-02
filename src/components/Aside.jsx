import React from "react";
import { loadCategories } from "../features/categoriesSlice";

const Aside = () => {
  const categories = loadCategories();
  return <div>{categories}</div>;
};

export default Aside;
