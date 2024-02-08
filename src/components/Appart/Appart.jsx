
import './Appart.scss'

fetch("logements.json")
.then((res)=>res.json())
.then((res)=>console.log(res))

function Appart(props) {
    
    return (
        <div className='Appart'>
            <p>{props.title}</p>
        </div>
    )
}

export default Appart;