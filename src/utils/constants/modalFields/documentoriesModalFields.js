export const documentoriesDefaultValues ={
    title: "",
    director: "",
    description:"",
    publishedDate:"",
    borrowedBy:"",
    borrowDate:"",
    expectedDateReturn:"",
    genre: "",
    borrow:true
  }

export const documentoriesModalFiedls = [
    { title: "title", type: "text",status:"" },
    { title: "director", type: "text",status:"" },
    { title: "description", type: "text",status:"" },
    { title: "publishedDate", type: "date",status:"" },
    { title: "borrowedBy", type: "text",status:"" },
    { title: "borrowDate", type: "date",status:"" },
    { title: "expectedDateReturn", type: "date" ,status:""},
    { title: "genre", type: "text" ,status:""},
    {
      title: "borrow",
      type: "dropDown",
      data: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
    },
  ];

