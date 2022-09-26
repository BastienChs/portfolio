// import type {NextPage} from 'next';
import {Contact, Experiences, Hero, Layout, Navbar, Works, About} from "../components";
import {Homepage} from "../components/Homepage";
import {PrismaClient} from "@prisma/client";
import {useRouter} from "next/router";

const Home = ({experiences}) => {
  const { locale, locales, asPath } = useRouter();

  return (
    <Layout>
      <Homepage>
          <Navbar locales={locales} locale={locale} asPath={asPath}/>
          <Hero locale={locale}/>
      </Homepage>
      <About locale={locale}/>
      <Works locale={locale}/>
      <Experiences experiences={experiences} locale={locale}/>
      <Contact locale={locale}/>
    </Layout>
  )
}

export async function getStaticProps({locale}) {
    const prisma = new PrismaClient()

    let experiences = await prisma.experiences.findMany({
        where: {
          locale: locale
        },
        select: {
            Id: true,
            CompanyName: true,
            CompanyCountry: true,
            CompanyLocation: true,
            CompanyLogo: true,
            StartDate: true,
            EndDate: true,
            Description: true,
            Experiences_Labels: {
                select: {
                    id: true,
                    Labels: {
                        select: {
                            Label: true
                        }
                    }
                }
            },
            Experience_ContractType:{
                select: {
                    contracttypes: {
                        select: {
                            label: true
                        }
                    }
                }
            }
        }
    })
    return {
        props: {
            experiences,
        },
    }
}

export default Home;