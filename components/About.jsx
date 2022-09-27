import localesJSON from "./assets/locales.json";
import Link from "next/link";
import Image from "next/image";

export const About = ({locale}) => {
    return(
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            {localesJSON.informations
                .filter((p) => p.locale === locale)
                .map((info, i) => {
                    return(
                        <section className="w-full" key={i}>
                            <h2 id="about" className="secondary-title">{info.nav_about}</h2>
                            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6 mt-6 justify-start"}>
                                <div className={"col-start-1 col-span-6 md:col-start-2 md:col-span-6 lg:col-span-2"}>
                                    <img src="/img/bastien_chies.jpg" alt="Profile picture of Bastien Chies" className={"rounded-full border-2 border-cyan-500 shadow-cyan-400"}/>
                                </div>
                                <div className={"col-start-1 col-span-6 lg:pl-10"}>
                                    <p className="section-paragraph text-justify">{info.about_bio}</p>
                                    <p className="section-paragraph">{info.about_skill_below}</p>
                                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6"}>
                                        <ul className="list-disc list-inside text-secondary">
                                            {info.about_skill_list_p1.map((hobby, i) => {
                                                return <li key={i}>{hobby}</li>
                                                }
                                            )}
                                        </ul>
                                        <ul className="list-disc md:list-outside lg:list-outside list-inside text-secondary">
                                            {info.about_skill_list_p2.map((hobby, i) => {
                                                    return <li key={i}>{hobby}</li>
                                                }
                                            )}
                                        </ul>
                                    </div>

                                    <div id={"social-networks"} className={"pt-5"}>
                                        <Link href={"https://www.linkedin.com/in/bastien-chies/"}>
                                            <a target={"_blank"} rel="noreferrer" className={"inline-block grayscale hover:grayscale-0"}>
                                                <Image height={48} width={48} src="/img/svg/icons8-linkedin-circled.svg" alt="Linkedin account"/>
                                            </a>
                                        </Link>
                                        <Link href={"https://github.com/BastienChs"}>
                                            <a target={"_blank"} rel="noreferrer" className={"inline-block lg:ml-8 grayscale hover:grayscale-0"}>
                                                <Image height={48} width={48} src="/img/svg/icons8-github.svg" alt="Github account"/>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
        </div>
    )
}