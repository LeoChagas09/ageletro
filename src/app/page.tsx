import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import Footer from "@/components/home/footer";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <main>
      <Hero/>

      <Container>
        <Services/>
        <Footer/>
      </Container>
    </main>
  );
}
