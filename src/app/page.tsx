import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ImageText from "@/components/ImageText";
import InfoCards from "@/components/InfoCards";
import Navbar from "@/components/Navbar";
import ProcurementTable from "@/components/ProcurementTable";
import StatisticsCharts from "@/components/StatisticsCharts";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <ProcurementTable />
        <ImageText />
        <StatisticsCharts />
        <InfoCards />
      </main>
      <Footer />
    </>
  );
}
