import { Button } from "antd";
import React from "react";
import {  Route, Router, Routes } from "react-router-dom";
import DefaultLayout from "../components/layouts/defaultLayout";
import Books from "./books/books";
import Category from "./category/category";
import EditBook from "./editBook/editBook";
import NewsPaper from "./newsPaper/newsPaper";
import EditNewsPaper from './editNewsPaper/editNewsPaper'

function Dashboard() {
  return (
    <DefaultLayout >
        <Routes>
            <Route path="/" element={<Category/>}  />
            <Route path="/books" element={<Books/>}  />
            <Route path="/view-books" element={<EditBook />}  />
            <Route path="/news-paper" element={<NewsPaper />}  />
            <Route path="/view-news-paper" element={<EditNewsPaper />}  />
        </Routes>
    </DefaultLayout>
  );
}

export default Dashboard;
