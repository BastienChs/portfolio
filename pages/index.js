import {Contact, Experiences, Hero, Layout, Navbar, Works, About} from "../components";
import {Homepage} from "../components/Homepage";

export default function Home() {
  return (
    <Layout>
      <Homepage>
          <Navbar/>
          <Hero/>
      </Homepage>
      <About/>
      <Works/>
      <Experiences/>
      <Contact/>
    </Layout>
  )
}
