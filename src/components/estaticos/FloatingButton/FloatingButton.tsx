import React  from "react";
import './FloatingButton.css'
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";

const FloatingButton: React.FC = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat")
  };

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
)

var button;
if (token !== ''){
  button =
  <div >

    
  <div>
  <button onClick={handleClick} className="floating-button">
<ChatIcon fontSize="large"/>
</button>
  </div>

</div>
}

  return (
    <>
    {button}
    </>

  );
};

export default FloatingButton;
