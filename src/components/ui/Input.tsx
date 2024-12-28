import { ReactNode, useEffect, useState } from "react";

function Input({
    labelText,
    icon,
    value,
    setValue,
    hintText,
    isPassword,
    isEmail
}:{
    labelText:string;
    icon:ReactNode;
    value:string;
    setValue:(s:string)=>void;
    hintText?:string;
    isPassword?:boolean;
    isEmail?:boolean;
}){
    const [seconds, setSeconds] = useState<number>();
    useEffect(()=>{
        if(seconds){
            const myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    clearInterval(myInterval)
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        }
    });
    return(
        <div className="input__wrapper">
            <div className="input">
                <input className={!isEmail ? "" : "input__email"} type={!isPassword ? "text" : "password"} value={value} onChange={(e)=>setValue(e.target.value)}/>
                {isEmail && 
                    <div className="input__emailButton"
                        onClick={()=>setSeconds(60)}
                    >
                        Resend {seconds ? `(${seconds}s)` : ""}
                    </div>
                }
                <label className="input__label">{labelText}</label>
                <div className="input__icon">{icon}</div>
            </div>
            {hintText &&
                <ul className="input__error">
                    <li>{hintText}</li>
                </ul>
            }
        </div>
    );
}

export default Input;