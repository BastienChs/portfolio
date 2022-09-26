import localesJSON from "./assets/locales.json";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

export const Contact = ({locale}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')

        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setBody('')
            }
        })
    }

    return (
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            {localesJSON.informations
                .filter((p) => p.locale === locale)
                .map((info, i) => {
                    return (
                        <section className="w-full" key={i}>
                            <h2 id="contact" className="secondary-title">{info.nav_contact_me}</h2>
                            <p className="section-paragraph">{info.contact_description}</p>

                            <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
                                <form>
                                    <div className="space-y-12">
                                        <div>
                                            <label className="text-white block mb-6 text-xl font-bold">{info.contact_form_name}</label>
                                            <input className="w-full border border-input-border bg-input px-4 py-4" name={"name"} onChange={(e)=>{setName(e.target.value)}}/>
                                        </div>
                                        <div>
                                            <label className="text-white block mb-6 text-xl font-bold">Email</label>
                                            <input type="email"
                                                   className="w-full border border-input-border bg-input px-4 py-4" name={"email"} onChange={(e)=>{setEmail(e.target.value)}}/>
                                        </div>
                                        <div>
                                            <label className="text-white block mb-6 text-xl font-bold">Message</label>
                                            <textarea type="email"
                                                      className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none" name={"message"} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                                        </div>
                                        <input type={"submit"} className="px-6 py-2 bg-cyan-500 text-white font-bold cursor-pointer" value={info.contact_form_button} onClick={(e)=>{handleSubmit(e)}}/>
                                    </div>
                                </form>
                                <div className="mt-12">
                                    <p className="text-secondary"><img src={"/img/icons/france-48.png"}
                                                                       alt={"french flag icon"}
                                                                       className={"inline-block"}/>+33 6 21 67 14 38</p>
                                    <p className="text-secondary"><img src={"/img/icons/canada-48.png"}
                                                                       alt={"canadian flag icon"}
                                                                       className={"inline-block"}/>+1 XXX XXX XXXX</p>
                                    <a href="mailto:bastien.chies@gmail.com"
                                       className="text-secondary underline mt-3 block">bastien.chies@gmail.com</a>
                                    <div className="flex mt-20 space-x-6">
                                        <Link href={"https://www.linkedin.com/in/bastien-chies/"}>
                                            <a target={"_blank"}
                                               rel="noreferrer" className={"inline-block grayscale hover:grayscale-0"}>
                                                <Image src="/img/svg/icons8-linkedin-circled.svg" alt="Linkedin account"
                                                     className="w-12 h-12" width="48" height="48"/>
                                            </a>
                                        </Link>
                                        <Link href={"https://github.com/BastienChs"}>
                                            <a target={"_blank"} rel="noreferrer"
                                               className={"inline-block lg:ml-8 grayscale hover:grayscale-0"}>
                                                <Image src="/img/svg/icons8-github.svg" alt="Github account" className="12 h-12"
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