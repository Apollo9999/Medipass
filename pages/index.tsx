import Body from "../components/body/body";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <div className=" bg-website_bg bg-cover bg-center h-screen">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
