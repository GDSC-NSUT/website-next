import "./home.css";
import FrontSection from "./FrontSection";
import WWDSection from "./WWDSection";
import EFPSection from "./EFPSection";
import ContactsSection from "./ContactsSection";
import HomeEventsSection from "./HomeEventsSection";

export default function Home() {



  return (
    <>
      <FrontSection content="At GDSC NSUT, we aim to learn, teach and grow. Together. The place where creative minds come together to build something amazing." />
      <WWDSection />
      <EFPSection />
      <HomeEventsSection />
      <ContactsSection />
    </>
  );
}