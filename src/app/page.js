import Banner from "@/components/Banner/Banner";
import Choose from "@/components/Choose/Choose";
import InfoSection from "@/components/InfoSection/InfoSection";
import Service from "@/components/Service/Service";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <InfoSection></InfoSection>
      <Team></Team>
      <Choose></Choose>
    </div>
  );
}
