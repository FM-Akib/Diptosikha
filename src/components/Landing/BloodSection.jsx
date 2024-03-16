import { Link } from "react-router-dom";

const BloodSection = () => {
    return (
        <section className="py-12 md:py-24">
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
        <div className="shadow rounded-xl">
            <div className="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-blue-600 rounded-xl">
                <aside className="p-8 space-y-4 md:p-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">
                        Need blood donor?
                    </h2>

                    <p className="font-medium text-blue-100 md:text-2xl">
                    Go to our Bloodbank and contact donor to donate blood.
                    </p>

                    <div>
                        <Link to="/bloodbank" className="bg-white text-blue-600 px-4 py-2 mt-3 rounded-xl">
                            BloodBank
                        </Link>
                    </div>
                </aside>

                <aside className="relative hidden md:block">
                    <img className="absolute inset-0 object-cover object-left-top w-full h-full mt-16 -mr-16 rounded-tl-lg" src="https://i.ibb.co/1ZhVDx9/Blood-Bank.png" alt="Discover our beautiful panel"/>
                </aside>
            </div>
        </div>
    </div>
</section>
    );
};

export default BloodSection;