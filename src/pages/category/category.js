import React from "react";

import { useSelector } from "react-redux";
import CategoryCard from "../../components/category/categoryCard";
function Category() {
  const storeBooks = useSelector((state) => state.books.books);
  const newsPaper = useSelector((state) => state.newsPaper.newsPaper);
  const documentories = useSelector((state) => state.documentories.documentories);

  return (
    <div className="row">
      <div className="col-6 col-md-4 my-3">
        <CategoryCard
          title={"Book List"}
          count={`Total Books ${storeBooks.length}`}
          btnTitle={"View Book List"}
          path={"/books"}
        />
      </div>
      <div className="col-6 col-md-4 my-3">
        <CategoryCard
          title={"NewsPapers List"}
          count={`Total NewsPapers ${newsPaper.length}`}
          btnTitle={"View Book List"}
          path={"/news-paper"}
        />
      </div>
      <div className="col-12 col-md-4 my-3 ">
        <CategoryCard
          title={"Documentories List"}
          count={`Total NewsPapers ${documentories.length}`}
          btnTitle={"View Book List"}
          path={"/docuementories"}
        />
      </div>
    </div>
  );
}

export default Category;
