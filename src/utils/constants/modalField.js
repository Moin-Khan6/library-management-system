
//*********Books Structure ***********/

export const modalField = [
  { title: "title", type: "text",status:"" },
  { title: "author", type: "text",status:""},
  { title: "publishedDate", type: "date",status:"" },
  { title: "publisher", type: "text",status:"" },
  { title: "language", type: "text",status:"" },
  { title: "isbn", type: "number",status:"" },
  { title: "description", type: "text",status:"" },
  { title: "image", type: "text",status:"" },
  { title: "price", type: "number" ,status:""},
  {
    title: "borrow",
    type: "dropDown",
    data: [
      { title: "Yes", value: true },
      { title: "No", value: false },
    ],
  },
];


//*********News Paper Structure ***********/

export const newsPaperDefaultValues ={
  title: "",
  publishedDate: "",
  publisher: "",
  language: "",
  description: "",
  image: "",
  price: "",
  borrowBy:"",
  borrowDate:"",
  returnDate:"",
  borrow:""
}

export const modalFieldNewsPaper = [
  { title: "title", type: "text",status:"" },
  { title: "publishedDate", type: "date",status:"" },
  { title: "publisher", type: "text",status:"" },
  { title: "language", type: "text",status:"" },
  { title: "description", type: "text",status:"" },
  { title: "image", type: "text",status:"" },
  { title: "price", type: "number" ,status:""},
  { title: "borrowBy", type: "text" ,status:""},
  { title: "borrowDate", type: "date" ,status:""},
  { title: "returnDate", type: "date" ,status:""},
  {
    title: "borrow",
    type: "dropDown",
    data: [
      { title: "Yes", value: true },
      { title: "No", value: false },
    ],
  },
];