import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import imgAccueil from "../../assets/imgAccueil.png"

function Home() {
  return (
    <main>
      <Banner image={imgAccueil} text="Chez vous, partout et ailleurs"/>
      <Cards/>
    </main>
  );
}

export default Home
