import React, { useState } from "react";
import "./styles.css"
const images = [
    { img: "https://lumiere-a.akamaihd.net/v1/images/p_20cs_avatarwayofwater_mayupdate_1710_260aa445.jpeg", title: "Avatar", janre: "fantasy" },
    { img: "https://i.pinimg.com/736x/5e/00/0b/5e000b34a320fdd5f43d42ca25e029ae.jpg", title: "Interstaller", janre: "Scines" },
    { img: "https://afishka31.ru/img/actions/5085_b.jpg", title: "Jake vorobey", janre: "Boyevik comedy history" },
    { img: "https://gateway.prd.sky.ch/imageapi/fiction/portraittile?param=%7B%22movId%22%3A89884%2C%22format%22%3A%22webp%22%2C%22size%22%3A%22285x424%22%2C%22quality%22%3A80%7D", title: "Anna", janre: "Boyevik" },
    { img: "https://lh3.googleusercontent.com/proxy/8zF3kISaGHMwVZimNRN1Iv58-Ex08S390YKs-9JBIS1YZV1XAr5cbUjW5pqIr0XXkv1U1bStPVfy7qitsulBHcwdhnje_VIBa07sgLkUtEUkvLGKturNovrfjVIqVeAfQYo_nGh3JKVUCwhjWyk6PHt_qIG-mpFpzafKsXOrnXzGtWwVtsrPp39e092j5VmJkU7vO-gozqcebg", title: "Alisa", janre: "fantasy " }
];

export default function Carousel3D() {
    const [activeIndex, setActiveIndex] = useState(2);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container">
            <div className="carousel-container ">
                <button className="nav left" onClick={prevSlide}>
                    ‹
                </button>

                <div className="carousel">
                    {images.map((img, i) => {
                        let className = "";
                        if (i === activeIndex) className = "active";
                        else if (i === (activeIndex - 1 + images.length) % images.length)
                            className = "right";
                        else if (i === (activeIndex + 1) % images.length) className = "left";
                        else className = "hidden";

                        return (
                            <>
                                <div key={i} className={`sl ${className}`}>
                                    <div className="slide">
                                        <img src={img.img} alt={`slide-${i}`} />
                                    </div>
                                    <div className="caption">
                                        <h1 >{img.title}</h1>
                                        <p>{img.janre}</p>
                                    </div>
                                </div>

                            </>
                        );
                    })}
                </div>

                <button className="nav right" onClick={nextSlide}>
                    ›
                </button>
            </div>

        </div>
    );
}
