import localesJSON from "./assets/locales.json";
import Link from "next/link";
import Image from "next/image";

export const Contact = ({locale}) => {
    return (
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            {localesJSON.informations
                .filter((p) => p.locale === locale)
                .map((info, i) => {
                    return (
                        <section className="w-full" key={i}>
                            <h2 id="contact" className="secondary-title">{info.nav_contact_me}</h2>
                            <p className="section-paragraph">{info.contact_description}</p>

                            <div className="w-full grid">
                                <div className={"mt-5"}>
                                    <p className="text-secondary"><img src={"/img/icons/locales/fr.png"}
                                                                       alt={"french flag icon"} placeholder={"blur"}
                                                                       className={"inline-block"}/><a href="tel:+33621671438">+33 6 21 67 14 38</a></p>
                                    <p className="text-secondary"><img src={"/img/icons/canada-48.png"}
                                                                       alt={"canadian flag icon"} placeholder={"blur"}
                                                                       className={"inline-block"}/><a href="tel:+14383046039">+1 (438) 304-6039</a></p>
                                    <p className="text-secondary mt-5">bastien.chies@gmail.com</p>
                                    <div className="flex mt-5 space-x-6">
                                        <Link href={"https://www.linkedin.com/in/bastien-chies/"}>
                                            <a target={"_blank"}
                                               rel="noreferrer" className={"inline-block grayscale hover:grayscale-0"}>
                                                <Image src="/img/svg/icons8-linkedin-circled.svg" alt="Linkedin account"
                                                     className="w-12 h-12" width="48" height="48"/>
                                            </a>
                                        </Link>
                                        <Link href={"mailto:bastien.chies@gmail.com"}>
                                            <a target={"_blank"} rel="noreferrer"
                                               className={"inline-block lg:ml-8 grayscale hover:grayscale-0"}>
                                                <Image src="/img/icons/envelop-circle-64.png" alt="Link to send mail" className="12 h-12"
                                                       width="48" height="48"/>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
                )}
        </div>
    )
}