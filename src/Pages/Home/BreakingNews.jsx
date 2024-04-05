import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex mt-5">
            <button className=" bg-[#D72050] text-white text-xl font-medium py-2 px-6">Latest</button>
            <Marquee pauseOnHover={true} speed={100} className="text-lg font-semibold text-[#403F3F]">
                <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;