import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import ItemsCard from "../../components/card/itemCard";
import Input from "../../components/input/input";
import { documentoriesEdited } from "../../store/documentoriesSlice";
import { ToastContainer, toast } from "react-toastify";

function EditDocumentories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.record;
  const index = location.state.index;

  const [booksData, setBooksData] = useState({ ...data });

  const [
    _id,
    title,
    director,
    description,
    publishedDate,
    borrowedBy,
    borrowDate,
    expectedDateReturn,
    genre,
    borrow,
  ] = Object.keys(data);
  const [disabled, seDisabled] = useState(true);

  const editHandler = () => {
    console.log("dat");
    seDisabled(false);
    dispatch(documentoriesEdited({ booksData, index }));
    navigate("/dash-board/docuementories");
  };

  return (
    <div className="w-75 m-auto">
      <div className="row w-100 p-2">
        <div className="col-12 col-md-4 d-none d-sm-block">
          <ItemsCard data={data}></ItemsCard>
        </div>
        <div className="col-12 col-md-8">
          <div className="row">
            <div className="col-12 col-md-4">
              <Input
                value={booksData.title}
                placeholder={title}
                onChange={(e) => {
                  setBooksData({ ...booksData, title: e.target.value });
                }}
                name={"data"}
                title={title}
                disabled={disabled}
                type="text"
              />
            </div>
            <div className="col-12 col-md-4">
              <Input
                value={booksData.director}
                placeholder={director}
                onChange={(e) => {
                  setBooksData({ ...booksData, director: e.target.value });
                }}
                name={"data"}
                title={director}
                disabled={disabled}
                type="date"
              />
            </div>
            <div className=" col-12 col-md-4">
              <Input
                value={booksData.description}
                placeholder={description}
                onChange={(e) => {
                  setBooksData({ ...booksData, description: e.target.value });
                }}
                name={"data"}
                title={description}
                disabled={disabled}
                type="text"
              />
            </div>
            <div className="col-12 col-md-4">
              <Input
                value={booksData.publishedDate}
                placeholder={publishedDate}
                onChange={(e) => {
                  setBooksData({ ...booksData, publishedDate: e.target.value });
                }}
                name={"data"}
                title={publishedDate}
                disabled={disabled}
                type="text"
              />
            </div>

            <div className="col-12 col-md-4">
              <Input
                value={booksData.borrowedBy}
                placeholder={borrowedBy}
                onChange={(e) => {
                  setBooksData({ ...booksData, borrowedBy: e.target.value });
                }}
                name={"data"}
                title={borrowedBy}
                disabled={disabled}
                type="text"
              />
            </div>
            <div className="col-12 col-md-4">
              <Input
                value={booksData.borrowDate}
                placeholder={"Image Url"}
                onChange={(e) => {
                  setBooksData({ ...booksData, borrowDate: e.target.value });
                }}
                name={"data"}
                title={borrowDate}
                disabled={disabled}
                type="text"
              />
            </div>
            <div className="col-12 col-md-4">
              <Input
                value={booksData.expectedDateReturn}
                placeholder={expectedDateReturn}
                onChange={(e) => {
                  setBooksData({
                    ...booksData,
                    expectedDateReturn: e.target.value,
                  });
                }}
                name={"data"}
                title={expectedDateReturn}
                disabled={disabled}
                type="number"
              />
            </div>
            <div className="col-12 col-md-4">
              <Input
                value={booksData.genre}
                placeholder={genre}
                onChange={(e) => {
                  setBooksData({ ...booksData, genre: e.target.value });
                }}
                name={"data"}
                title={genre}
                disabled={disabled}
                type="text"
              />
            </div>

            <div className="col-12 col-md-2">
              <div className="my-4">
                <label>Borrow</label>
                <Checkbox
                  disabled={disabled}
                  checked={booksData.borrow}
                  onChange={(e) => {
                    setBooksData({ ...booksData, borrow: e.target.checked });
                  }}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-right align-items-center w-100  my-3">
              <div className="w-25 p-1 " style={{ marginLeft: "auto" }}>
                {disabled == true ? (
                  <Button
                    width="w-100"
                    type="button"
                    title="Edit"
                    onClick={() => seDisabled(false)}
                  ></Button>
                ) : (
                  <Button
                    width="w-100"
                    type="button"
                    title="Done"
                    onClick={() => editHandler()}
                  ></Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDocumentories;
