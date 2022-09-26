export const Contact = () => {
    return (
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full">
                <h2 id="contact" className="secondary-title">Contact me</h2>
                <p className="section-paragraph">Feel free to to contact me any time, through any method below.</p>

                <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
                    <div className="space-y-12">
                        <div>
                            <label className="text-white block mb-6 text-xl font-bold">Name</label>
                            <input className="w-full border border-input-border bg-input px-4 py-4"/>
                        </div>
                        <div>
                            <label className="text-white block mb-6 text-xl font-bold">Email</label>
                            <input type="email" className="w-full border border-input-border bg-input px-4 py-4"/>
                        </div>
                        <div>
                            <label className="text-white block mb-6 text-xl font-bold">Message</label>
                            <textarea type="email"
                                      className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
                        </div>
                        <button className="px-6 py-2 bg-cyan-500 text-white font-bold">Send it!</button>
                    </div>

                    <div className="mt-12">
                        <p className="text-secondary"><img src={"/img/svg/icons/france-48.png"} alt={"french flag icon"} className={"inline-block"}/>+33 6 21 67 14 38</p>
                        <p className="text-secondary"><img src={"/img/svg/icons/canada-48.png"} alt={"canadian flag icon"} className={"inline-block"}/>+1 XXX XXX XXXX</p>
                        <a href="mailto:bastien.chies@gmail.com"
                           className="text-secondary underline mt-3 block">bastien.chies@gmail.com</a>
                        <div className="flex mt-20 space-x-6">
                            <a href={"https://www.linkedin.com/in/bastien-chies/"} target={"_blank"} rel="noreferrer" className={"inline-block grayscale hover:grayscale-0"}>
                                <img src = "/svg/icons8-linkedin-circled.svg" alt="Linkedin account" className="w-12 h-12" width="42" height="42"/>
                            </a>
                            <a href={"https://github.com/BastienChs"} target={"_blank"} rel="noreferrer" className={"inline-block lg:ml-8 grayscale hover:grayscale-0"}>
                                <img src = "/svg/icons8-github.svg" alt="Github account" className="12 h-12" width="42" height="42"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}