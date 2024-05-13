import React from "react";
import { FaSchool, FaMagnifyingGlass } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
// import deerajimg from "/public/deeraj.png";

const navLinks = [
  { label: "Home", link: "/" },
  { label: "Certificates", link: "/certificates" },
];
export const pagelinks = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];
export default navLinks;

export const journeyData = [
  {
    title: "Higher-Secondary",
    institution: "Mahatma Montisorri Matriculation Hr Sec School",
    location: "Madurai, TamilNadu",
    description: "Computer Science",
    icon: React.createElement(FaSchool),
    date: 2018,
  },
  {
    title: "Bachelor of Engineering",
    institution: "Sir Ramakrishna Institute of Technology",
    location: "Coimbatore, TamilNadu",
    description: "Electrical and Electronics Engineering",
    icon: React.createElement(IoSchool),
    date: 2022,
  },
  {
    title: "Software Tester",
    institution: "Quantanics Tech Serv Pvt Ltd",
    location: "Madurai, TamilNadu",
    description:
      "Plan and create test cases, test scripts and test the product using both manual and selinium automation testing.",
    icon: React.createElement(FaMagnifyingGlass),
    date: "2022-2023",
  },
  {
    title: "Frontend Developer Intern",
    institution: "Venzo Technologies",
    location: "Madurai, TamilNadu",
    description:
"I transform design concepts into user-friendly web interfaces using React JS. I collaborate with the development team, troubleshoot issues, and stay updated on emerging technologies.",    icon: React.createElement(FaMagnifyingGlass),
    date: "Apr 2024- Present",
  },
];
export const projectData = [
  {
    title: "Nike E-Commerce",
    description:
      "plan and create test cases, test scripts and test the product using both manual and selinium automation testing.",
    tag: ["React", "Redux", "Tailwind CSS"],
    imgUrl: "nike.png",
    git: "https://github.com/DeeruBhai/Nike.git",
    live: "https://deeraj-alagarsamy-nike.netlify.app/",
  },
  {
    title: "Crypt Trading",
    description:
      "plan and create test cases, test scripts and test the product using both manual and selinium automation testing.",
    tag: ["React", "React-Three-Fibre", "Tailwind CSS"],
    imgUrl: "crypt.png",
    git: "https://github.com/DeeruBhai/Crypto.git",
    live: "https://deeraj-alagarsamy-crypt.netlify.app/",
  },
];
