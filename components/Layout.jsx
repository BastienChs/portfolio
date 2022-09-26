import Head from "next/head";
import Script from "next/script";

export const Layout = ({children}) => {
    return(
        <div className='bg-body text-white font-poppins pb-12'>
            <Head>
                <title>Bastien Chies</title>
            </Head>
            <Script src="/js/scroller.js"/>
            <Script src="/js/burger-menu.js"/>
        {children}
        </div>
    )
}