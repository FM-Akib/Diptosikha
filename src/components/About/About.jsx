// import React from 'react';
// import about from '../../assets/about.png'
import './about.css';
import Footer from '../Footer/Footer';


const About = () => {
    return (
        <>
       
       <section className="interFont w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
    <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-b-2 dark:border-yellow-600">About us</div>

    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
      <div className="lg:w-[50%] xs:w-full">
        <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://i.ibb.co/C6N7yBt/Untitled-design-1-1.png" />
      </div>
      <div className="lg:w-[50%] sm:w-full xs:w-full bg-yellow-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">What we want to do?</h2>
        <p className="text-md mt-4 p-2 text-justify">We want to make a difference through our efforts. We want to help a hungry person satisfy their hunger. We want to bring an evicted person back into society. We want to serve the youth in our community. We want to bring a ray of light into the dark world of a drug addict. We want to help a student in school who cannot afford the fees. We want to save a life that needed blood for survival. We want to see someone wear a new dress on Eid through our efforts. We want to make a positive impact on anyone in any way possible. We hope our small efforts are appreciated by you.<br/><br/>
                     We believe there are people in society who genuinely want positive changes for everyone. Some people want to do good through our efforts. We want to work with them to give something new to society. In sha Allah, we will serve humanity. Your presence with us is our wish. We are all students here, and today, if we do not take responsibility for our society, humanity and civilization will diminish. We must take the responsibility to inspire students in the remote areas, to bring out more latent talents through debates and competitions among them.!</p>
      </div>
    </div>
    
    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
      
      <div className="md:hidden sm:block xs:block xs:w-full">
        <img className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://i.ibb.co/PgLbWZ9/Untitled-design-2-1.png" />
      </div>
      
      <div className="shadow-lg lg:w-[50%] xs:w-full bg-green-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">About our origin and team</h2>

        <p className="text-md mt-4 p-2 text-justify"> This endeavor is by the 17th batch of J.B. High School (Zorargonj, Mirsarai, Chittagong). Let us join hands and work together! Hopefully, everyone in the group has understood the purpose of our initiative by now. If you like our initiative, you can invite your friends. Remember, those you invite can also join our initiative! No one should post anything inappropriate in the group. It is good not to post anything related to political parties. <br/><br/>Let us not argue about religion. Avoid using offensive language or making comments in an indecent manner. As social beings, humans have been living together since the beginning of creation. Just like other members of the animal kingdom, humans also get affected by diseases and fears. The biggest fear among all is the fear within society. When we decide to do something, we should first consider what society will say, how society will react. So, without thinking about what society will say, let us involve ourselves in social responsibilities. Therefore, let us accept socially responsible actions and move society forward with positive contributions.</p>
      </div>
      
      <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
        <img className="lg:rounded-t-lg xs:rounded-sm" src="https://i.ibb.co/PgLbWZ9/Untitled-design-2-1.png" />
      </div>
    </div>
  </section>


   {/* <div id="about" className="relative bg-white overflow-hidden ">
    <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
           
            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h2 className="about-us-text my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        About Us
                    </h2>

                    <p className="about-us-des">
                    
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 pb-2 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src={about} alt=""/>
    </div>
</div> */}


<Footer/>
        </>
    );
};

export default About;