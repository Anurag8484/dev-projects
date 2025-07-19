import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Download } from "./components/Download";
import { Faq } from "./components/Faq";

export default function App(){
  return(
    <section>
      <Hero />
      <Features />
      <Download />
      <Faq />
    </section>
  )
}