import { TopicType } from "./listTopic"

type UniversityType ={
    logo:string,
    name:string,
}

export type CourseType = {
    title:string,
    description?:string,
    image:string,
    type:string
    university:UniversityType
    topic?:TopicType
}

export const CourseList :CourseType[] = [
    {
        title:"ACS50`s Introduction to Artifical Intelligence with Python",
        description:"ACS50`s Introduction to Artifical Intelligence with Python",
        image:"./src/assets/CS50-harvard.webp",
        type:"Course",
        university:{
            logo:"./src/assets/HARVARD-Logo.png",
            name:"Harvard University"
        }
    }
    ,
    {
        title:"AI Bootcamp",
        description:"AI Bootcamp",
        image:"./src/assets/AI-Bootcamp.webp",
        type:"Boot Camp",
        university:{
            logo:"./src/assets/COLUMBIA-Logo.png",
            name:"Harvard University"
        }
    }
]