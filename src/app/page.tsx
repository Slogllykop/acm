import { Hero, InfiniteCarousel } from "@components";

const Home = () => {
    return (
        <>
            <Hero />
            <InfiniteCarousel />
            <div className="min-h-screen bg-black"></div>
        </>
    );
};

export default Home;
