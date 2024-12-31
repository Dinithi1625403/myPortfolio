import myVL from './myVL.mp4';
import myVS from './myVS.mp4';
import './background.css';

export default function Background(){
    return(
        <>
            <video className="myVL" src={myVL} autoPlay loop muted ></video>
            <video className="myVS" src={myVS}  ></video>
        </>
    )
}