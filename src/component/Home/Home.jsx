
import React, { useState } from "react";
import Card from "../card/Card";
import { IoSearch } from "react-icons/io5";
import gulabjamun from "../../assets/gulabjamun.webp";
import jalebi from "../../assets/jalebi.webp";
import gajarhalwa from "../../assets/gajarhalwa.jpg";
import kajukatli from "../../assets/kajukatli.jpg";
import rasmalai from "../../assets/rasmalai.jpg";
import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.webp";
import pasta from "../../assets/pasta.avif";
import shevpuri from "../../assets/shev puri.jpg";
import sandwich from "../../assets/sandwich.webp";
import pavBhaji from "../../assets/pavbhaji.jpg";
import dhokla from "../../assets/dhokla.jpg";
import cholebhature from "../../assets/cholebhature.webp";
import chickenchilli from "../../assets/chicken chilli.jpg";
import chillipaneer from "../../assets/chilli paneer.webp";
import butterNaan from "../../assets/butter naan.jpg";
import butterchicken from "../../assets/butterchicken.avif";
import shahipaneer from "../../assets/shahi paneer.jpg";
import chickenbiriyani from "../../assets/chicken biriyani.jpg";
import vegbiriyani from "../../assets/veg biriyani.jpg";
import nonvegthali from "../../assets/nonvegthali.webp";
import vegthali from "../../assets/vegthali.jpeg";

import "./Home.css";

const Home = ({cart ,setCart}) => {

  let [search, setSearch] = useState("")

  let cardData = [
    {
      id: 1,
      name: "Gulab Jamun",
      img: gulabjamun,
      price: 100
    },

    {
      id: 2,
      name: "Jalebi",
      img: jalebi,
      price: 100
    },

    {
      id: 3,
      name: "Gajar Halwa",
      img: gajarhalwa,
      price: 150
    },

    {
      id: 4,
      name: "Kaju Katli",
      img: kajukatli,
      price: 200
    },

    {
      id: 5,
      name: "Rasmalai",
      img: rasmalai,
      price: 200
    },

    {
      id: 6,
      name: "Burger",
      img: burger,
      price: 150
    },

    {
      id: 7,
      name: "Pizza",
      img: pizza,
      price: 250
    },

    {
      id: 8,
      name: "Pasta",
      img: pasta,
      price: 200
    },

    {
      id: 9,
      name: "Shev Puri",
      img: shevpuri,
      price: 100
    },

    {
      id: 10,
      name: "Sandwich",
      img: sandwich,
      price: 150
    },

    {
      id: 11,
      name: "Pav Bhaji",
      img: pavBhaji,
      price: 250
    },


    {
      id: 12,
      name: "Dhokla",
      img: dhokla,
      price: 100
    },

    {
      id: 13,
      name: "Chole Bhature",
      img: cholebhature,
      price: 200
    },

    {
      id: 14,
      name: "Chicken Chilli",
      img: chickenchilli,
      price: 250
    },

    {
      id: 15,
      name: "Chilli Paneer",
      img: chillipaneer,
      price: 200
    },



    {
      id: 16,
      name: "Butter Naan",
      img: butterNaan,
      price: 150
    },

    {
      id: 17,
      name: "Butter Chicken",
      img: butterchicken,
      price: 250
    },
    {
      id: 18,
      name: "Shahi Paneer",
      img: shahipaneer,
      price: 250
    },

    {
      id: 19,
      name: "Chicken Biriyani",
      img: chickenbiriyani,
      price: 350
    },

    {
      id: 20,
      name: "Veg Biriyani",
      img: vegbiriyani,
      price: 300
    },

    {
      id: 21,
      name: "Non-Veg Thali",
      img: nonvegthali,
      price: 400
    },

    {
      id: 22,
      name: "Veg Thali",
      img: vegthali,
      price: 350
    },
  ]
  let filterData = cardData.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

 return (
        <div>
            <div className="search">
                <div className="searchBar">
                    <IoSearch />
                    <input type="text" placeholder="Search Food Item" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                </div>
            </div>


            <Card cardData={filterData} cart={cart} setCart={setCart}/>
        </div>
    )
}



export default Home