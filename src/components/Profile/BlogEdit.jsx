import axios from "axios";
import toast from "react-hot-toast";
const notify_update_post = () => toast.success('Post successful!');

const BlogEdit = () => {

    const handleEditBlog=(e)=>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const cost = form.cost.value;
        const author = form.author.value;
        const imgtitle = form.imgtitle.value;
        const date = form.date.value;
        // const donationOn = form.querySelector('select').value;
        const description = form.description.value;



        const form3= new FormData(e.target);
        const img = form3.get('image');

        const data = new FormData();
        data.append("image",img);

        
        
        fetch('https://api.imgbb.com/1/upload?key=68df54b3a756703bfa8633e5fbc95347',{
            method: 'POST',
            body: data,
        })
        .then(response =>response.json())
        .then(data =>{
            const img=data.data.url;
            
            const Newprogram ={title,img,cost,author,imgtitle,date,description};


        axios.post(`https://diptosikha-server.vercel.app/programs`,Newprogram)
        .then(data => {
        
        if(data.data.acknowledged){
            notify_update_post();}
            }
        )
        
        } 
        );
    
    }


    return (        
 <div className="md:px-10 md:mt-20">
   <div className="w-full space-y-6 text-gray-600 sm:max-w-md interFont">
                <div className="text-center">
                    
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-3xl font-bold sm:text-3xl">Post a Program</h3>
                    </div>
                </div>
                <div className="bg-yellow-50 shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form onSubmit={handleEditBlog}  className="space-y-5">
                        <div>
                            <label className="font-medium">
                               Title
                            </label>
                            <input
                                name="title"
                                type="text"
                                required
                                placeholder='Enter title here'
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>

                        <div className="flex justify-center items-center gap-4">

                        <div>
                            <label className="font-medium">
                                Cost
                            </label>
                            <input
                                name="cost"
                                type="text"
                                required
                                placeholder='Enter program cost'
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Author
                            </label>
                            <input
                                name="author"
                                type="text"
                                required
                                placeholder='Enter author name'
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>

                        </div>



                        <div>
                            <label className="font-medium">
                                Image Title
                            </label>
                            <input
                                name="imgtitle"
                                type="text"
                                placeholder='Enter image title'
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                        </div>

                        <div>
                            <label className="font-medium">
                                Image 
                            </label>
                            <input
                                name="image"
                                type="file"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                        </div>
                        <div>
                            <label className="font-medium">
                               Program Date
                            </label>
                            <input
                                name="date"
                                type="date"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                        </div>
                        <div>
                            <label className="font-medium">
                               Description
                            </label>
                            <textarea 
                                name="description"
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                        </div>
                        
                        <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"> POST </button>
                    </form >
                   
                </div>
            </div>
    </div>
        
    );
};

export default BlogEdit;