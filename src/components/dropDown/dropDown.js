import React from "react";

function DropDown({
  handleDropdownChange,
  selectedValue,
  data,
  type,
  name,
  defaultValue,
}) {
  if (type == "select") {
    return (
      <>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleDropdownChange}
          value={selectedValue}
        >
          <option value={defaultValue}  >{name}</option>
          <option value={true}>Borrow</option>
          <option value={false}>In library</option>
        </select>
      </>
    );
  }
  if (type == "dropDown") {
    let titleUpperCase =
      data.title.charAt(0).toUpperCase() + data.title.slice(1);
    console.log("drop Down data", data.data);

    return (
      <>
        <label for="select">{titleUpperCase}</label>
        <select
          id="select"
          className="form-select my-1"
          aria-label="Default select example"
          onChange={handleDropdownChange}
          value={selectedValue}
        >
          {" "}
          <option value={""}>Status</option>
          {data.data.map((item, index) => (
            <option key={index} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </>
    );
  }
}

export default DropDown;
