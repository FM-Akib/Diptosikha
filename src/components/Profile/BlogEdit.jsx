
const BlogEdit = () => {
    return (        
 <div className="md:px-10">
   <div className="w-full space-y-6 text-gray-600 sm:max-w-md interFont">
                <div className="text-center">
                    
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-3xl font-bold sm:text-3xl">Post a Program</h3>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form  className="space-y-5">
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

                        <div className="flex justify-center items-center">

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