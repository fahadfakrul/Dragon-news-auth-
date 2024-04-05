import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#403F3F]">All Categories</h2>
            {
                categories.map(category => <Link 
                    
                    className="block ml-4 text-xl px-10 font-medium text-[#9F9F9F] hover:bg-[#E7E7E7] hover:text-[#403F3F] hover:py-4 " 
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;