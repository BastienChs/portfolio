import Avatar from "./Avatar";
import localesJSON from './assets/locales.json'
import character from '../public/img/character.png'
import Image from "next/image";
export const Hero = ({locale}) => {

  return(
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full flex-grow">
        {localesJSON.informations
            .filter((p) => p.locale === locale)
            .map((info, i) => {
            return(
            <div className="flex flex-wrap md:flex-nowrap" key={i}>
              <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
                <div className="absolute left-45 transform -translate-x-1/2 space-y-6 mt-36">
                  <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                    <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">{info.nav_home}</span>
                  </a>
                  <a href="#about" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                    <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">{info.nav_about}</span>
                  </a>
                  <a href="#work" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                    <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">{info.nav_my_work}</span>
                  </a>
                  <a href="#experiences" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                    <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">{info.nav_experiences}</span>
                  </a>
                  <a href="#contact" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                    <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">{info.nav_contact_me}</span>
                  </a>
                </div>
              </nav>

              <div className="flex container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                  <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                      <h1 className="text-2xl font-semibold uppercase text-white lg:text-6xl">{info.intro_h1}<br/>
                        <u className={"text-cyan-500"}>{info.name}</u></h1>
                      <p className="mt-2 text-white text-2xl">{info.job_title}</p>
                      <p className="mt-2 text-gray-400 text-xl">{info.resume_hero_section}</p>
                      <a href="#work">
                        <button
                            className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300
                             rounded-md lg:w-auto bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-600/50 font-bold">{info.work_button}
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <Image src={character} layout="intrinsic" objectFit={"cover"} placeholder={"blur"}
                         alt="A character typing on computer"/>
                  </div>
                </div>
              </div>
            </div>
            )
            })}
      </div>
  )
}