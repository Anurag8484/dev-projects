import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Download } from "./components/Download";

export default function App(){
  return(
    <section>
      <Hero />
      <Features />
      <Download />
    </section>
  )
}