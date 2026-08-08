var trStyle= {border:'2px solid black',color:'black'};
var tddStyle = {border:'2px solid black',color:'black'};
var tdStyle = {border:'2px solid black',color:'red',padding:'30px',color:'#000'};
var countryStyle = {fontWeight:'bold',color:'brown'};
var playleStyle= {color:'blue',fontWeight:'30px'};
export default function Batter(props) {
    // object destructing 
    let { name, country, ranking,rank } = props;

    return (<tr style={trStyle}>
        <td  style={tddStyle}>{rank}</td>
        <td className="player" style={playleStyle}>{name}<span className="team" style={countryStyle}>{country}</span></td>
        <td style={tdStyle}>{ranking}</td>
    </tr>);
}