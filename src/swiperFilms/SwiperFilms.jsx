import React, { useState } from "react";
import "./styles.css"
import { useFetch } from "@/hooks/useFetch";


export default function Carousel3D() {
    const [activeIndex, setActiveIndex] = useState(2);
    const url = import.meta.env.VITE_IMAGE_URL
    const { data, error, loading } = useFetch("/movie/top_rated")


    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? data?.results.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === data?.results.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container text-white text-3xl font-bold">

            <h2 className="mt-[50px]" >Top Rated</h2>
            <div className="carousel-container ">
                <button className="nav left" onClick={prevSlide}>
                    ‹
                </button>

                <div className="carousel">
                    {data?.results?.map((item, i) => {
                        let className = "";
                        if (i === activeIndex) className = "active";
                        else if (i === (activeIndex - 1 + data?.results.length) % data?.results.length)
                            className = "right";
                        else if (i === (activeIndex + 1) % data?.results.length) className = "left";
                        else className = "hidden";

                        return (
                            <>
                                <div key={item.id} className={`sl ${className}`}>
                                    <div className="slide">
                                        <img src={url + item.backdrop_path} alt={`slide-${i}`} />
                                    </div>
                                    <div className="caption">
                                        <h1 >{item.title}</h1>
                                        <p>{item.release_date}</p>
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
