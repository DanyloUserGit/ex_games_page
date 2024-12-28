import { ReactNode } from "react";

function Radio({
    radioText
}:{
    radioText:ReactNode
}){
    return(
        <div className="radio">
            <input type="checkbox" />
            <label>{radioText}</label>
        </div>
    )
}

export default Radio;