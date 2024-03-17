import { useLoaderData } from 'react-router-dom';
import '../../App.css';

const Blog = () => {
       
   const blog = useLoaderData();
// console.log(blog);
  const {title, description, date} = blog;
    return (
        <div className="Trio-Bangla max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            
            <div className="py-8">
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <p className="text-blue-500 text-sm">Published on <time>{date}</time></p>
            </div>
    
           
            <img src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c" alt="Featured image" className="w-full h-auto mb-8 rounded-md"/> 
            <div className="text-justify prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                <p>{description}</p>
            </div>
        </div>
    </div>
    );
};

export default Blog;