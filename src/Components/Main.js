import React, {useState} from "react";

import NavbarComponent from ".//NavbarComponent";
import LandingComponent from "./LandingComponent";
import background from "../assets/img/jeremy-yap-J39X2xX_8CQ-unsplash.jpg";
import LoginModal from "./LoginModal";

// core components

function Main() {

    // handles whether login modal is shown or not
    const [loginModal, setLoginModal] = React.useState(false);
    function handleSetLoginModal(newValue) {
        setLoginModal(newValue);
    }

    // controls which main component is displayed
    const [content, setContent] = useState(<LandingComponent/>);
    function handleContentComponent(newValue) {
        setContent(newValue);
    }

    return (
        <div>
            <div className="page-header section-dark" style={{backgroundImage: `url(${background})` }}>
                <div className="filter" style={{zIndex: '0'}}/>
                <NavbarComponent
                    changeComponent={handleContentComponent}
                    setLoginModal={handleSetLoginModal}/>
                {content}
            </div>
            <LoginModal loginModal={loginModal} setLoginModal={handleSetLoginModal}/>
        </div>
    );
}

export default Main;
