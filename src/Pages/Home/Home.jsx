import "./Home.scss"
import Appart from "../../components/Appart/Appart";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function Home() {

    return (
        <>
            <Header />
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="Appartment">
                <Appart title="Titre 1" />
                <Appart title="Titre 2" />
                <Appart title="Titre 3" />
                <Appart title="Titre 4" />
                <Appart title="Titre 5" />
                <Appart title="Titre 6" />
            </div>
            <Footer />
        </>
    );

};

export default Home;