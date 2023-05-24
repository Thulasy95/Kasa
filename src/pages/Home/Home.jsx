import Banner from "../../components/Banner";
import imgHome from "../../assets/imgHome.png";
import Gallery from "../../components/Gallery";

function Home() {
  return (
    <main>
      <Banner image={imgHome} text="Chez vous, partout et ailleurs"/>
      <Gallery/>
    </main>
  );
}

export default Home
