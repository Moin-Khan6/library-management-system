import { Button } from "antd";
import React from "react";
import {  Route, Router, Routes } from "react-router-dom";
import DefaultLayout from "../components/layouts/defaultLayout";
import Form from "../sections/form/form";
import Books from "./books/books";
import Category from "./category/category";




function Dashboard() {

  return (
    <DefaultLayout >
        <Routes>
            <Route path="/" element={<Category/>}  />
            <Route path="/books" element={<Books/>}  />
            <Route path="/view-books" element={<Form />}  />
        </Routes>
    </DefaultLayout>
  );
}

export default Dashboard;
