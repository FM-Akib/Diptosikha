import Marquee from "react-fast-marquee";
import './Landing.css'
const Galary = () => {
    return (
        <div className="gallery">
            <h1 className="pt-12  text-2xl font-extrabold text-center">Gallery View</h1>
            <div className="flex p-10">
                <Marquee pauseOnHover>
                <img className="md:h-52 md:w-72 h-40 w-56 cover rounded mr-10" src="https://i.ibb.co/LQdyLkH/IMG-1622.jpg"/>
                <img className="md:h-52 md:w-72 h-40 w-56 cover rounded mr-10" src="https://i.ibb.co/bbTrFVH/IMG-20230414-225835-118.jpg"/>
                <img className="md:h-52 md:w-72 h-40 w-56 cover rounded mr-10" src="https://i.ibb.co/n3QZrZK/IMG-20210105-WA0013.jpg"/>
                <img className="md:h-52 md:w-72 h-40 w-56 cover rounded mr-10" src="https://i.ibb.co/WFMQLhq/IMG-20210221-WA0119.jpg"/>
                <img className="md:h-52 md:w-72 h-40 w-56 cover rounded mr-10" src="https://i.ibb.co/txZhhvh/IMG-20210326-WA0087.jpg"/>
                <img className="md:h-52 md:w-72 h-40 w-56 cover rounded mr-10" src="https://i.ibb.co/vsrWk2t/IMG-20220426-WA0041.jpg"/>
                <img className="md:h-52 md:w-72 h-40 w-56 cover rounded mr-10" src="https://i.ibb.co/N6PvBV5/IMG-20221228-191357.jpg"/>
                </Marquee>
            </div>
        </div>
    );
};

export default Galary;