import React, {useState} from "react";

import NavbarComponent from ".//NavbarComponent";
import LandingComponent from "./LandingComponent";
import background from "../assets/img/jeremy-yap-J39X2xX_8CQ-unsplash.jpg";
import Results from "./Results";

function Main() {

    // controls which content component is displayed
    const [selection, setSelection] = useState("0");
    function HandleSelection(newValue) {
        setSelection(newValue)
    }

    // useEffect(() => {}, [content]);

    // let content = <LandingComponent />;
    // function handleContentComponent(newValue) {
    //     content = newValue;
    //     console.log("inside handleContentComponent");
    // }

    function ContentView() {

        if (selection === "0") {
            return <LandingComponent />;
        } else {
            return <Results selection={selection} />;
        }
    }

    return (
            <div className="page-header section-dark" style={{backgroundImage: `url(${background})` }}>
                <div className="filter" style={{zIndex: '0'}}/>
                <NavbarComponent handleSelection={HandleSelection} />
                <ContentView />
            </div>
    );
}

export default Main;
