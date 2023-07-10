import React from "react"
import HeroImg from "../images/hero.svg"

export default function Hero() {
    return (
        <section className="hero">
            <img src={ HeroImg } className="hero--photo" />
            <div className="heroStyling" >
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}