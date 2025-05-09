import { about, services } from "./constants/info";
import AppWrapper from "./ui/appwrapper";
import Contact from "./ui/contact";
import Footer from "./ui/footer";
import Hero from "./ui/hero";
import Section from "./ui/section";
import section1 from "@/app/assets/images/section1.jpg";
import section2 from "@/app/assets/images/section2.jpg";

const About = () => {
  return (
    <div className="flex flex-col gap-3">
      <p>{about.paragraph1}</p>
      <p>{about.paragraph2}</p>
      <p>{about.paragraph3}</p>
      <p>{about.paragraph4}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col gap-3">
      <p>{services.paragraph1}</p>
      <p>{services.paragraph2}</p>
      <p>{services.paragraph3}</p>
      <p>{services.paragraph4}</p>
      <p>{services.paragraph5}</p>
      <p>{services.paragraph6}</p>
      <p>{services.paragraph7}</p>
      <p>{services.paragraph8}</p>
    </div>
  );
};

export default function Home() {
  return (
    <AppWrapper>
      <Hero />
      <Section
        id="about"
        title={about.title}
        img={section1}
        paragraphs={<About />}
        orientation="right"
      />
      <Section
        id="services"
        title={services.title}
        img={section2}
        paragraphs={<Services />}
        orientation="left"
      />
      <Contact />
      <Footer />
    </AppWrapper>
  );
}
