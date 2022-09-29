import Rain from "../../Assets/rainy.jpg"
import Sunny from "../../Assets/sunny.jpg"
import Foggy from "../../Assets/foggy.jpg"
import Cloud from "../../Assets/cloud.jpg"
import Snowy from "../../Assets/karli.jpg"
import Gök from "../../Assets/rainbow-weather.jpg"
import Storm from "../../Assets/storm.png"

function CheckPicture({durum}){
    switch (durum){
        case "Rain": 
        return<img className="back-img" src={Rain} alt="yagmurlu" ></img>
        case "Drizzle": 
        return<img className="back-img" src={Rain} alt="yagmurlu" ></img>
        case "Clear": 
        return<img className="back-img" src={Sunny} alt="gunesli" ></img>
        case "Mist": 
        return<img className="back-img" src={Foggy} alt="sisli" ></img>
        case "Snow": 
        return<img className="back-img" src={Snowy} alt="karli" ></img>
        case "Storm": 
        return<img className="back-img" src={Storm} alt="firtinali" ></img>
        case "Clouds": 
        return<img className="back-img" src={Cloud} alt="bulutlu" ></img>
        default: 
        return<img className="back-img" src={Gök} alt="gok" ></img>
    }
}

export default CheckPicture