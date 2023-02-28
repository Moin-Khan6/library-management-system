import uuid from 'react-uuid';

export  const books = [
    {   _id:uuid(),
        title: "Harry Potter And The Chamber",
        author: "J. K Rownling",
        publishedDate: "1960-07-11",
        genre: "Novel",
        publisher: "J. B. Lippincott & Co.",
        language: "English",
        isbn: 9780446310789,
        description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on the author's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old.",
        image: "https://img.freepik.com/free-psd/vertical-poster-wildlife-environment-protection_23-2148969597.jpg?w=826&t=st=1677427430~exp=1677428030~hmac=d1baaafae280d67b2fce24d1dd21c5d25b386a1e756cbc3c2d77ac4a61e24bfd",
        price: 15,
        borrow:false
      },
    {   _id:uuid(),
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedDate: "1960-07-11",
        genre: "Legal Drama",
        publisher: "J. B. Lippincott & Co.",
        language: "English",
        isbn: 9780446310789,
        description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on the author's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old.",
        image: "https://img.freepik.com/free-vector/modern-annual-report-business-flyer-template-design_1017-25864.jpg?t=st=1677427397~exp=1677427997~hmac=e92f837ef14a3accc36148b71b9bcf10d986a469145b2c99cfaaa6e2786858e5",
        price: 9.99,
        borrow:true
      },
    {   _id:uuid(),
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedDate: "1960-07-11",
        genre: "Southern Gothic",
        publisher: "J. B. Lippincott & Co.",
        language: "English",
        isbn: 9780446310789,
        description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on the author's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old.",
        image: "https://img.freepik.com/free-vector/modern-business-brochure-template_1361-1201.jpg?t=st=1677427397~exp=1677427997~hmac=3e5a5378f470ffb3f2b7d4193f905057341ee0461fc71a189d839829ea0d13d0",
        price: 9.99,
        borrow:true
      },

]