import '../../App.css';

const Blog = () => {
    return (
        <div className="Trio-Bangla max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            
            <div className="py-8">
                <h1 className="text-3xl font-bold mb-2">যেহেতু মানব অধিকারের প্রতি অবজ্ঞা</h1>
                <p className="text-blue-500 text-sm">Published on <time>April 5, 2022</time></p>
            </div>
    
           
            <img src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c" alt="Featured image" className="w-full h-auto mb-8 rounded-md"/>
    
           
            <div className="text-justify prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius fringilla augue, vel vestibulum
                    nisl mattis vel. Praesent porttitor pharetra purus eu tincidunt.</p>
                <p>Nullam vitae sapien non est suscipit blandit quis sit amet ipsum. Aliquam euismod accumsan nunc, in
                    convallis felis luctus in. Sed rhoncus metus a elit rutrum aliquam.</p>
                <p>Integer ullamcorper leo nulla, nec commodo metus vehicula eget. Duis vel vestibulum tellus, eget mattis
                    quam. Nullam euismod libero sed nibh tristique, vel eleifend risus sagittis. In hac habitasse platea
                    dictumst. Sed dapibus magna at arcu euismod, a pulvinar turpis tristique. Suspendisse imperdiet velit
                    nec lectus rutrum varius.</p>
            </div>
        </div>
    </div>
    );
};

export default Blog;