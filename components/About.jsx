export const About = () => {
    return(
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full">
                <h2 id="about" className="secondary-title">About me</h2>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6 mt-6 justify-start"}>
                    <div className={"sm:col-start-3 sm:col-span-6 md:col-start-2 md:col-span-6 lg:col-span-2"}>
                        <img src="/img/bastien_chies.jpg" alt="" className={"rounded-full border-2 border-cyan-500 shadow-cyan-400"}/>
                    </div>
                    <div className={"col-start-3 col-span-6 lg:pl-10"}>
                        <p className="section-paragraph text-justify">Hello, I&apos;m Bastien! I work as a software engineer for five years now, more than just a job, it&apos;s a passion to me.
                            I love solving problems and learning how things work, being challenged whether by time, technology or business complexity.<br/>
                            I like to keep an eye on the IT innovations and topics, for this I like to use tools such as Medium, Twitter or even Google news.<br/>
                            As for my soft skills, I&apos;m empathic, I like helping others when they&apos;re in need, I&apos;m patient and organized, I like to work in team and being able to learn from others and I&apos;m very curious.</p>
                        <p className="section-paragraph">Some of my hobbies below: </p>
                        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6"}>
                            <ul className="list-disc list-inside text-secondary">
                                <li>Listening to music</li>
                                <li>Reading</li>
                                <li>Writing</li>
                                <li>Watching series</li>
                            </ul>
                            <ul className="list-disc sm:list-inside text-secondary">
                                <li>Shopping</li>
                                <li>Playing video-games</li>
                                <li>Take a walk in nature</li>
                                <li>Discovering new technologies</li>
                            </ul>
                        </div>

                        <div id={"social-networks"} className={"pt-5"}>
                            <a href={"https://www.linkedin.com/in/bastien-chies/"} target={"_blank"} rel="noreferrer" className={"inline-block grayscale hover:grayscale-0"}>
                                <img src = "/svg/icons8-linkedin-circled.svg" alt="Linkedin account"/>
                            </a>
                            <a href={"https://github.com/BastienChs"} target={"_blank"} rel="noreferrer" className={"inline-block lg:ml-8 grayscale hover:grayscale-0"}>
                                <img src = "/svg/icons8-github.svg" alt="Github account"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}