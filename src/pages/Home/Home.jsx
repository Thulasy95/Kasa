import Banner from "../../components/Banner";
import imgAccueil from "../../assets/imgAccueil.png"
import Gallery from "../../components/Gallery";

function Home() {
  return (
    <main>
      <Banner image={imgAccueil} text="Chez vous, partout et ailleurs"/>
      <Gallery/>
    </main>
  );
}

export default Home
