import React from "react";

import { useSelector } from "react-redux";
import CategoryCard from "../../components/category/categoryCard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  SnippetsOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
function Category() {
  const storeBooks = useSelector((state) => state.books.books);
  const newsPaper = useSelector((state) => state.newsPaper.newsPaper);
  const documentories = useSelector(
    (state) => state.documentories.documentories
  );

  return (
    <div className="row">
      <div className="col-12 col-md-4 my-3">
        <CategoryCard
          title={"Book List"}
          count={`Count ${storeBooks.length}`}
          btnTitle={"View Book List"}
          path={"books"}
          icon={<LibraryBooksIcon />}
        />
      </div>
      <div className="col-12 col-md-4 my-3">
        <CategoryCard
          title={"Newspapers List"}
          count={`Count ${newsPaper.length}`}
          btnTitle={"View Book List"}
          path={"news-paper"}
          icon={
            <SnippetsOutlined style={{ fontSize: "20px" }} className="me-1" />
          }
        />
      </div>
      <div className="col-12 col-md-4 my-3 ">
        <CategoryCard
          title={"Documentories List"}
          count={`Count  ${documentories.length}`}
          btnTitle={"View Book List"}
          path={"docuementories"}
          icon={
            <DatabaseOutlined style={{ fontSize: "20px" }} className="me-1" />
          }
        />
      </div>
    </div>
  );
}

export default Category;
