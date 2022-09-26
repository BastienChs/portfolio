export const Navbar = () => {
    let name = 'Bastien Chies'
    return(
        <header className="py-6">
            <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <div className="text-lg font-bold">{name}</div>
                <div className="hidden md:flex space-x-12 items-center">
                    <a href="#" className="text-cyan-500">Home</a>
                    <a href="#about">About me</a>
                    <a href="#work">My work</a>
                    <a href="#experiences">Experiences</a>
                    <a href="#contact">
                        <button className="px-6 py-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md font-bold">Contact me</button>
                    </a>
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
                        <button id={"close-nav-burger"} className={"absolute top-5 right-20"}>
                            <svg width={"24"} height={"24"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                        <a href="#" className="block col-span-2 hover:text-cyan-500 uppercase text-4xl font-bold anchor-nav-mobile">Home</a>
                        <a href="#about" className={"block col-span-2 hover:text-cyan-500 uppercase text-4xl font-bold anchor-nav-mobile"}>About me</a>
                        <a href="#work" className={"block col-span-2 hover:text-cyan-500 uppercase text-4xl font-bold anchor-nav-mobile"}>My work</a>
                        <a href="#experiences" className={"block col-span-2 hover:text-cyan-500 uppercase text-4xl font-bold anchor-nav-mobile"}>Experiences</a>
                        <a href="#contact" className={"block col-span-2 hover:text-cyan-500 uppercase text-4xl font-bold anchor-nav-mobile"}>Contact me</a>
                        <a href={"#"} className={"hover:text-cyan-500 uppercase text-xl font-bold"}>FR</a> <a href={"#"} className={"hover:text-cyan-500 uppercase text-xl font-bold"}>EN</a>
                    </div>
                </div>
            </div>
        </header>
    )
}