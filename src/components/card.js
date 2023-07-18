import React from "react"
import Star from "../images/star.svg"
import Woman from '../images/woman.svg'
import Woman2 from '../images/woman2.svg'
import Bike from '../images/bike.svg'

export default function Card(item) {
    const currItem = item.item;

    let badgeText
    if (currItem.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (currItem.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={currItem.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={ Star } className="card--star" />
                <span>{currItem.stats.rating}</span>
                <span className="gray">({currItem.stats.reviewCount}) • </span>
                <span className="gray">{currItem.location}</span>
            </div>
            <p className="title">{currItem.title}</p>
            <p><span className="bold">From ${currItem.price}</span> / person</p>
        </div>
    )
}