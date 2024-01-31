import React from 'react';
import about from '../../assets/about.png'
import './about.css';
import Footer from '../Footer/Footer';


const About = () => {
    return (
        <>
        <div>
   <div id="about" className="relative bg-white overflow-hidden ">
    <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
           
            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h2 className="about-us-text my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        About Us
                    </h2>

                    <p className="about-us-des">
                    We want to make a difference through our efforts. We want to help a hungry person satisfy their hunger. We want to bring an evicted person back into society. We want to serve the youth in our community. We want to bring a ray of light into the dark world of a drug addict. We want to help a student in school who cannot afford the fees. We want to save a life that needed blood for survival. We want to see someone wear a new dress on Eid through our efforts. We want to make a positive impact on anyone in any way possible. We hope our small efforts are appreciated by you.<br/><br/>
                     We believe there are people in society who genuinely want positive changes for everyone. Some people want to do good through our efforts. We want to work with them to give something new to society. Insha'Allah, we will serve humanity. Your presence with us is our wish. We are all students here, and today, if we do not take responsibility for our society, humanity and civilization will diminish. We must take the responsibility to inspire students in the remote areas, to bring out more latent talents through debates and competitions among them. This endeavor is by the 17th batch of J.B. Higher Secondary School. Let's join hands and work together! Hopefully, everyone in the group has understood the purpose of our initiative by now. If you like our initiative, you can invite your friends. Remember, those you invite can also join our initiative! No one should post anything inappropriate in the group. It's good not to post anything related to political parties. <br/><br/>Let's not argue about religion. Avoid using offensive language or making comments in an indecent manner. As social beings, humans have been living together since the beginning of creation. Just like other members of the animal kingdom, humans also get affected by diseases and fears. The biggest fear among all is the fear within society. When we decide to do something, we should first consider what society will say, how society will react. So, without thinking about what society will say, let's involve ourselves in social responsibilities. Therefore, let's accept socially responsible actions and move society forward with positive contributions.
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 pb-2 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src={about} alt=""/>
    </div>
</div>

</div>
<Footer/>
        </>
    );
};

export default About;