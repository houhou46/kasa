import { Link } from 'react-router-dom';
import './Appart.scss'

function Appart({ logement }) {

    return (
        <Link to={"/rental/" + logement.id}>
            <div className='Appart'>
                <p>{logement.title}</p>
                <img src={logement.cover} alt="logement" />
            </div>
        </Link>
    )
}

export default Appart;