import Link from "next/link";
import localesJSON from "./assets/locales.json";

export const Navbar = ({locales, locale, asPath}) => {
    return(
        <header className="py-6">
            {localesJSON.informations
                .filter((p) => p.locale === locale)
                .map((info, i) => {
                    return(
                        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" key={i}>
                            <div className="text-lg font-bold">{info.name} {info.lastname}</div>
                            <div className="hidden md:flex space-x-12 items-center">
                                <a href="#" className="text-cyan-500">{info.nav_home}</a>
                                <a href="#about">{info.nav_about}</a>
                                <a href="#work">{info.nav_my_work}</a>
                                <a href="#experiences">{info.nav_experiences}</a>
                                <a href="#contact">
                                    <button className="px-6 py-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md font-bold">{info.nav_contact_me}</button>
                                </a>
                                <div id={"languages"}>
                                    {locales.map((l, i) => {
                                        return (
                                            <Link key={i} href={asPath} locale={l}>
                                                <a>
                                                {
                                                    (l === "fr" ? <img src={"/img/icons/france-48.png"} alt={"french flag icon"} className={"inline-block"}/> : <img src={"/img/icons/gb-48.png"} alt={"great britain flag icon"} className={"inline-block"}/>)
                                                }
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="md:hidden">
                                <button id={"nav-burger"} className={"fixed right-10"}>
                                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                                            fill="white"/>
                                    </svg>
                                </button>
                                <div className={"hidden fixed left-0 top-0 w-screen h-screen bg-gray-500/80 grid grid-rows-6 grid-cols-2 place-items-center"} id={"nav-menu"}>
                                    <button id={"close-nav-burger"} className={"absolute top-2 right-2"}>
                                        <svg width={"24"} height={"24"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="currentColor" className="w-12 h-12">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                    <a href="#" className="block col-span-2 hover:text-cyan-500 uppercase text-4xl font-bold anchor-nav-mobile">{info.nav_home}</a>
                                    <a href="#about" className={"block col-span-2 hover:text-cyan-500 uppercase text-4xl font-bold anchor-nav-mobile"}>{info.nav_about}</a>
                                    <a href="#work" className={"block col-span-2 hover:text-cyan-500 uppercase text-4xl font-bold anchor-nav-mobile"}>{info.nav_my_work}</a>
                                    <a href="#experiences" className={"block col-span-2 hover:text-cyan-500 uppercase text-4xl font-bold anchor-nav-mobile"}>{info.nav_experiences}</a>
                                    <a href="#contact" className={"block col-span-2 hover:text-cyan-500 uppercase text-4xl font-bold anchor-nav-mobile"}>{info.nav_contact_me}</a>
                                    {locales.map((l, i) => {
                                        return (
                                            <Link key={i} href={asPath} locale={l}>
                                                <a>
                                                    {
                                                        (l === "fr" ? <img src={"/img/icons/france-48.png"} alt={"french flag icon"} className={"inline-block"}/> : <img src={"/img/icons/gb-48.png"} alt={"great britain flag icon"} className={"inline-block"}/>)
                                                    }
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )})}
        </header>
    )
}