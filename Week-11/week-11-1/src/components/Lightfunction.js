import {useSelector,useDispatch} from "react-redux";
import './Lightfunction.css';

const FlipAction=()=>{
    const dispatch=useDispatch();
    const light=useSelector((state)=>state.isLightOn);

    const switchingLight=()=>{
        dispatch({type:!light});
    };
    const lightStatus= light?'dark':'lit';
    return(
        <div className={`room ${lightStatus}`}>
            The Room is lit
            <br/>
            <button onClick={switchingLight}>Flip</button>
        </div>
    );
};

export default FlipAction;
