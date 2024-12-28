import { useState } from "react";
import Input from "../ui/Input";
import IconUserId from "../svg/IconUserId";
import IconLock from "../svg/IconLock";
import IconUser from "../svg/IconUser";
import IconEnvelope from "../svg/IconEnvelope";
import Radio from "../ui/Radio";
import ButtonSubmit from "../ui/ButtonSubmit";
import IconHeadPhones from "../svg/IconHeadPhones";
import IconFlag from "../svg/IconFlag";

function App() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  
  return (
    <>
      <div className="page">
        <div className="page__content">
          <div className="page__content-image">
            <img src="Images/Dragon.png" alt="img" />
          </div>
          <div className="page__content-form">
            <div className="page__content-form-container">
            <div className="page__content-form-lang">
                <IconFlag />
              </div>
              <div className="page__content-form-text">
                <span className="page__content-form-title">Create an account<span style={{color:"#E80004"}}>.</span></span>
                <span className="page__content-form-subtitle">Already have an account? <a href="#" style={{color:"#E80004", marginLeft:"5px"}}>Sign in</a></span>
              </div>
            <form>
                <Input 
                  labelText="User ID"
                  icon={<IconUserId />}
                  value={userId}
                  setValue={setUserId}
                />
                <Input 
                  labelText="Password"
                  icon={<IconLock />}
                  value={password}
                  setValue={setPassword}
                  hintText="8 characters minimun"
                  isPassword
                />
                <Input 
                  labelText="Account Name"
                  icon={<IconUser />}
                  value={userName}
                  setValue={setUserName}
                  hintText="Visible nickname for your profile"
                />
                <Input 
                  labelText="Email"
                  icon={<IconEnvelope />}
                  value={email}
                  setValue={setEmail}
                  isEmail
                />
                <Input 
                  labelText="Verification Code"
                  icon={<IconEnvelope />}
                  value={verificationCode}
                  setValue={setVerificationCode}
                />
                <Radio 
                  radioText={<>[Required] I read the <a href="#" color="#C9B1B1">Terms of Service</a> and I agree to the terms.</>}
                />
                <Radio 
                  radioText={<>[Required] I read the <a href="#" color="#C9B1B1">Privacy Policy</a> and I agree to the terms.</>}
                />
                <Radio 
                  radioText={<>[Optional] I would like to receive promotional emails.</>}
                />
                <ButtonSubmit onClick={()=>{}} />
            </form>
            <div className="page__content-form-links">
              <span><IconHeadPhones />Have Promo Code?</span>
              <span style={{marginTop:"5px"}}>Contact Support</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
