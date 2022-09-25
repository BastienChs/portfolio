import Avatar from "./Avatar";

export const Hero = () => {
  let bigtitle = ""
  return(
      <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full flex-grow">
        <div className="flex flex-wrap md:flex-nowrap">
          <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
            <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
              <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
              </a>
              <a href="#about" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">About</span>
              </a>
              <a href="#work" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
              </a>
              <a href="#experiences" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Experiences</span>
              </a>
              <a href="#contact" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Contact</span>
              </a>
            </div>
          </nav>

          <div className="flex container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                  <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-6xl">Hello I&apos;m <br/>
                    <u className={"text-cyan-500"}>Bastien</u></h1>
                  <p className="mt-2 text-gray-600 dark:text-white text-2xl">Software engineer</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-xl">Beyond a simple job, computer science has been a passion for years.
                    I am particularly interested in technologies that will radically change tomorrow, such as artificial intelligence.</p>
                  <a href="#work">
                    <button
                        className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300
                         transform rounded-md lg:w-auto bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-600/50 font-bold">View my works
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-2xl" src="/img/character.png"
                     alt="Catalogue-pana.svg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}