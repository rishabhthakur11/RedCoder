import  { StaticImageData } from "next/image";
import cover from "../Assets/Course/cover.png"
import cover2 from "../Assets/Course/cover2.png"
import cover3 from "../Assets/Course/cover3.png"
import cover4 from "../Assets/Course/cover4.png"

export const CourseData:{
    id:number,
    title:string,
    subtitle:string,
    image:StaticImageData
}[]=[
    {
        id:1,
        title:"Top Interview Questions 150",
        subtitle:"Must-do list for Interview Prep",
        image: cover
    },
    {
        id:2,
        title:"Top Interview Questions 150",
        subtitle:"Must-do list for Interview Prep",
        image: cover2
    },
    {
        id:3,
        title:"Top Interview Questions 150",
        subtitle:"Must-do list for Interview Prep",
        image: cover3
    },
    {
        id:4,
        title:"Top Interview Questions 150",
        subtitle:"Must-do list for Interview Prep",
        image: cover2
    },
    {
        id:5,
        title:"Top Interview Questions 150",
        subtitle:"Must-do list for Interview Prep",
        image: cover2
    },
    {
        id:6,
        title:"Top Interview Questions 150",
        subtitle:"Must-do list for Interview Prep",
        image: cover4
    },
]