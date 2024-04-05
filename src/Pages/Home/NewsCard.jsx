import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id, author } = news;
  return (
    <div className="card bg-base-100  mb-8">
      <div className="flex gap-4 mb-7 ">
        <div className="avatar">
          <div className="w-10  rounded-full">
            <img src={author.img} />
          </div>
          
        </div>
        <div className=" ">
            <h2 className="text-[#403F3F] font-semibold">{author.name}</h2>
            <p className="text-[#706F6F] text-sm font-normal">{author.published_date}</p>
          </div>
          <div></div>
      </div>
      <h2 className="card-title text-xl font-bold text-[#403F3F] mb-5 leading-8">
        {title}
      </h2>
      <figure>
        <img className="rounded-md" src={image_url} alt="news" />
      </figure>
      <div className="mt-8  text-[#403F3F] ">
        {details.length > 200 ? (
          <p className="leading-6">
            {details.slice(0, 200)}{" "}
            <Link
              to={`/news/${_id}`}
              className=" font-bold  bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] inline-block text-transparent bg-clip-text"
            >
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default NewsCard;
