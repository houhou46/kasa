import "./Home.scss"
import Appart from "../../components/Appart/Appart";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";


function Home() {
    const [logements, setLogements] = useState([])
    //const { id } = useParams()
    useEffect(() => {
        fetch("logements.json")
            .then((res) => res.json())
            .then((res) => setLogements(res))
    }, [])


    return (
        <>
            <Header />
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="Appartment">
                {logements.map(logement => (
                    <Appart key={logement.id} logement={logement} id={logement.id} />
                ))}
            </div>
            <Footer />
        </>
    );

};

export default Home;