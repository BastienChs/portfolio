// import type {NextPage} from 'next';
import {Contact, Experiences, Hero, Layout, Navbar, Works, About} from "../components";
import {Homepage} from "../components/Homepage";
import {PrismaClient} from "@prisma/client";
import superjson from 'superjson';


const Home = ({experiences}) => {
  return (
    <Layout>
      <Homepage>
          <Navbar/>
          <Hero/>
      </Homepage>
      <About/>
      <Works/>
      <Experiences experiences={experiences}/>
      <Contact/>
    </Layout>
  )
}

export async function getStaticProps() {
    const prisma = new PrismaClient()
    let experiences = await prisma.experiences.findMany({
        select: {
            CompanyName: true,
            CompanyCountry: true,
            CompanyLocation: true,
            CompanyLogo: true,
            StartDate: true,
            EndDate: true,
            Description: true,
            Experiences_Labels: {
                select: {
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