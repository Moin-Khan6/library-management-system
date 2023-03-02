import { Button } from "antd";
import React from "react";
import {  Route, Router, Routes } from "react-router-dom";
import DefaultLayout from "../components/layouts/defaultLayout";
import Books from "./books/books";
import Category from "./category/category";
import EditBook from "./editBook/editBook";
import NewsPaper from "./newsPaper/newsPaper";
import EditNewsPaper from './editNewsPaper/editNewsPaper'
import Documentories from "./documentaries/documentaries";
import EditDocumentories from "./editDocumentories/editDocumentories";

function Dashboard() {
  return (
    <DefaultLayout >
        <Routes>
            <Route path="/" element={<Category/>}  />
            <Route path="/books" element={<Books/>}  />
            <Route path="/books/view-books" element={<EditBook />}  />
            <Route path="/news-paper" element={<NewsPaper />}  />
            <Route path="/news-paper/view-news-paper" element={<EditNewsPaper />}  />
            <Route path="/docuementories" element={<Documentories />}  />
            <Route path="/docuementories/view-docuementories" element={<EditDocumentories />}  />
        </Routes>
    </DefaultLayout>
  );
}

export default Dashboard;
