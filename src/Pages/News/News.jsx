import newsData from '../../../public/news.json';
import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    
    const {id} = useParams();
    const newsItem = newsData.find(item => item._id === id);
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 p-8">
                <div className="card bg-base-100  mb-8">
      <div className="flex gap-4 mb-7 ">
        <div className="avatar">
          <div className="w-10  rounded-full">
            <img src={newsItem.author.img} />
          </div>
          
        </div>
        <div className=" ">
            <h2 className="text-[#403F3F] font-semibold">{newsItem.author.name}</h2>
            <p className="text-[#706F6F] text-sm font-normal">{newsItem.author.published_date}</p>
          </div>
          <div></div>
      </div>
      <h2 className="card-title text-xl font-bold text-[#403F3F] mb-5 leading-8">
        {newsItem.title}
      </h2>
      <figure>
        <img className="rounded-md" src={newsItem.image_url} alt="news" />
      </figure>
      <div className="mt-8  text-[#403F3F] ">
        
        
          <p>{newsItem.details}</p>
    
      </div>
      <hr className="my-5" />
    </div>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default News;
