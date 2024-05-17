import stock_dolphin from "./assets/project_stock_dolphin.png";
import restaurant_website from "./assets/restaurant_website.png";
import office_chatapp from "./assets/office_chatapp.png";
import acode from "./assets/project_acode.png";

export const projects_data = [
    {
        name: "Stock Dolphin",
        description: "Innovative Inventory System designed to revolutionize the way offices manage and stock their supplies.",
        image: stock_dolphin,
        url: "https://github.com/aang3la/Stock_Dolphin",
        technologies: ["HTML", "CSS", "React", "NodeJS", "ExpressJS", "MongoDB"]
    },{
        name: "Restaurant Website",
        description: "Website for a traditional restaurant, catering to both mobile and desktop versions to showcase the main information about the restaurant and its menu, including prices.",
        image: restaurant_website,
        url: "https://github.com/aang3la/restaurant-menu",
        technologies: ["HTML", "CSS", "React"]
    },
    {
        name: "Office Chat App",
        description: "Server-side social media application where people can write posts and share some information.",
        image: office_chatapp,
        url: "https://github.com/aang3la/Office-ChatApp",
        technologies: ["EJS", "CSS", "NodeJS", "ExpressJS", "MongoDB"]
    },
    {
        name: "ACode",
        description: "Website example for an IT company, created as a project for the academy.",
        image: acode,
        url: "https://github.com/aang3la/ACode-ITcompany",
        technologies: ["HTML", "CSS"]
    }   
];