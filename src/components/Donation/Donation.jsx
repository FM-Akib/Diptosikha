import Footer from '../Footer/Footer';
import '../../App.css'

const Donation = () => {
    const HandleDonationForm=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const mobile = form.mobile.value;
        const email = form.email.value;
        const amount = form.amount.value;
        const date = form.date.value;
        const donationOn = form.querySelector('select').value;
        const trxID = form.trxID.value;
       
        console.log(name,mobile,email, amount, date,donationOn, trxID);

    }
    return (
        <>
        <div className="flex items-center justify-center p-12">
    
    <div className="interfont mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={HandleDonationForm}>
            <div className="mb-5">
                <label  className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label  className="mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input type="number" name="mobile" id="phone" placeholder="Enter your phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label  className="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label  className="mb-3 block text-base font-medium text-[#07074D]">
                    Donation Amount
                </label>
                <input type="text" name="amount" id="amount" placeholder="Enter donation amount"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label  className="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                {/* <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label  className="mb-3 block text-base font-medium text-[#07074D]">
                            Time
                        </label>
                        <input type="time" name="time" id="time"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div> */}
            </div>

            <div className="mb-5 pt-3">
                <label className=" block text-base font-semibold text-[#07074D] sm:text-xl">
                    Donation Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                   
                <div className="px-3 relative w-full mx-auto my-10 sm:w-1/2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <select className="w-full py-4 px-6 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                        <option>Bkash - 01701741656</option>
                        <option>Nagad - 01701741656</option>
                        <option>Rocket - 017017416566</option>
                        <option>Hand on cash</option>
                    </select>
                    </div>


                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="trxID" id="trxID" placeholder="TrxdID"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button
                    className="hover:bg-[#5f975d] w-full rounded-md bg-[#4d844b] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Donate
                </button>
            </div>
        </form>
    </div>
</div>
<Footer/>
</>
    );
};

export default Donation;