import "./Home/home.css";
import FrontSection from "./Home/FrontSection";
import WWDSection from "./Home/WWDSection";
import EFPSection from "./Home/EFPSection";
import ContactsSection from "./Home/ContactsSection";
import HomeEventsSection from "./Home/HomeEventsSection";

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