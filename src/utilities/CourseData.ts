import  { StaticImageData } from "next/image";
import cover from "../Assets/Course/cover.png"
import cover2 from "../Assets/Course/cover2.png"
import cover3 from "../Assets/Course/cover3.png"
import cover4 from "../Assets/Course/cover4.png"
import cover5 from "../Assets/Course/cover5.png"
import cover6 from "../Assets/Course/cover6.png"
import cover7 from "../Assets/Course/cover7.png"



export const CourseData:{
    id:number,
    title:string,
    subtitle:string,
    image:StaticImageData,
    links:string
}[]=[
    {
        id:1,
        title:"Top Interview Questions",
        subtitle:"Must-do list for Interview Prep",
        image: cover,
        links: "/interview150"
    },
    {
        id:2,
        title:"RedCoder 75",
        subtitle:"Ace Coding Interview with 75 Qs",
        image: cover2,
        links: "/interview150"
    },
    {
        id:3,
        title:"SQL 50",
        subtitle:"Crack SQL Interview in 50 Qs",
        image: cover3,
        links: "/interview150"
    },
    {
        id:4,
        title:"30 Days of JS",
        subtitle:"Learn JS Basics with 30 Qs",
        image: cover5,
        links: "/interview150"
    },
    {
        id:5,
        title:"Amazon Spring '23 High'",
        subtitle:"Practice Amazon 25 Recently Asked Qs",
        image: cover6,
        links: "/interview150"
    },
    {
        id:6,
        title:"Dynamic Programming",
        subtitle:"10 Essential DP Pattern",
        image: cover7,
        links: "/interview150"
    },
]