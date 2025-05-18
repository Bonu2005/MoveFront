import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const url = import.meta.env.VITE_IMAGE_URL;

const SwiperSingleMovie = ({ images }) => {
    if (!images?.backdrops?.length) return null;

    return (
        <Swiper
            className="container object-cover border   "
            modules={[Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            effect="fade"
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            speed={500}
            fadeEffect={{ crossFade: true }}
        >
            {images.backdrops.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={url + image.file_path}
                        alt=""
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperSingleMovie;
