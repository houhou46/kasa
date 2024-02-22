import { Link } from 'react-router-dom';
import './Appart.scss'

function Appart({ logement }) {
    const state = {
        logementId: logement.id

    }

    return (
        <Link to="/rental" state={state}>
            <div className='Appart'>
                <p>{logement.title}</p>
                <img src={logement.cover} alt="logement" />
            </div>
        </Link>
    )
}

export default Appart;