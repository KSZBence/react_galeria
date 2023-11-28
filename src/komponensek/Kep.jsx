
export default function Kep(props) {
    function clickHnadler(params) {
        props.nagykepcsere(props.adat.id)
        return props.adat.id;    
        
    }

    return (
        <div className="kep">
            <img className="kep" src={props.adat.src} alt="" onClick={clickHnadler}></img>
        </div>
    );
}