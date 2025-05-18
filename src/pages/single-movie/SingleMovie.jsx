import MovieView from "@/component/movie-view/MovieView";
import OnSkeleton from "@/component/oneSkeleton/OnSkeleton";
import { useFetch } from "@/hooks/useFetch";
import SwiperSingleMovie from "@/swiperSingleMovie/SwiperSingleMovie";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = import.meta.env.VITE_IMAGE_URL;

const SingleMovie = () => {
    const { id } = useParams();
    const { data, loading } = useFetch(`/movie/${id}`);
    const { data: similar } = useFetch(`/movie/${id}/similar`);
    const { data: images, loading: imagesLoading } = useFetch(`/movie/${id}/images`);
    const [showFullOverview, setShowFullOverview] = useState(false);

    useLayoutEffect(() => {
        scrollTo(0, 0);
    }, [id]);

    const isLoading = loading || imagesLoading || !data || !images;

    if (isLoading) {
        return <OnSkeleton />;
    }

    return (
        <div>
            <SwiperSingleMovie images={images} />

            <div className=' mx-auto my-6 '>
                <table className="container table-auto border-1 border-collapse w-full text-left mt-[16px] border-spacing-0 rounded-3xl overflow-hidden">
                    <thead className=" ">
                        <tr className="text-center  bg-gray-950 ">
                            <th className=" p-2 w-[200px] text-gray-400">Title</th>
                            <th className=" p-2 w-[300px]  text-gray-400">Overview</th>
                            <th className=" p-2 w-[100px]  text-gray-400">Vote Average</th>
                            <th className=" p-2 w-[150px]  text-gray-400">Budget</th>
                            <th className=" p-2 w-[400px]  text-gray-400">Production Companies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center  bg-gray-400">
                            <td className=" p-2  text-gray-800 font-bold">{data.title}</td>
                            <td
                                className={`p-2 text-gray-800 font-bold max-w-[300px] ${showFullOverview ? "" : "overflow-hidden whitespace-nowrap text-ellipsis"
                                    } cursor-pointer`}
                                onClick={() => setShowFullOverview((prev) => !prev)}
                            >
                                {data.overview}
                            </td>
                            <td className=" p-2  text-gray-800 font-bold">{data.vote_average}</td>
                            <td className=" p-2  text-gray-800 font-bold">{data.budget?.toLocaleString()} USD</td>
                            <td className=" p-2  text-gray-800 font-bold ">
                                <div className="flex flex-col gap-2 ">
                                    {data.production_companies?.map((item) => (
                                        <div key={item.id} className="flex items-center gap-2 justify-between">
                                            <span>{item.name}</span>
                                            {item.logo_path && (
                                                <img
                                                    src={url + item.logo_path}
                                                    alt={item.name}
                                                    className="h-6 max-w-[150px] object-contain "
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 className='container mx-auto text-2xl font-bold'>Similar</h3>
                <MovieView data={similar?.results} />
            </div>
        </div>
    );
};

export default SingleMovie;
