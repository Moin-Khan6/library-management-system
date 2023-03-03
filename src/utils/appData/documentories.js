import uuid from "react-uuid";

export const documentories = [
  {
    _id: uuid(),
    title: "The Social Dilemma",
    director: "Jeff Orlowski",
    description:
      "Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
    publishedDate:"2010-05-11",
    borrowedBy:"Ahmed",
    borrowDate:"2023-01-12",
    expectedDateReturn:"2024-01-02",
    genre: "Documentary",
    borrow:true
  },
  {
    _id: uuid(),
    title: "The Benefits",
    director: "Harry john",
    description:
      "Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
    publishedDate:"2022-05-11",
    borrowedBy:"Ahmed",
    borrowDate:"2023-01-12",
    expectedDateReturn:"2024-12-01",
    genre: "Documentary",
    borrow:false
  }
];
