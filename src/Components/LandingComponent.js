import React from "react";

// reactstrap components
import {Container} from "reactstrap";

import foglow from "../assets/img/fog-low.png"
import clouds from "assets/img/clouds.png"

export default function LandingComponent() {
    return (
        <div>

            <div className="content-center">
                <Container>
                    <div className="title-brand">
                        <h1 className="presentation-title">Infoflix</h1>
                        <div className="fog-low">
                            <img alt="..." src={foglow}/>
                        </div>
                        <div className="fog-low right">
                            <img alt="..." src={foglow}/>
                        </div>
                    </div>
                    <h2 className="presentation-subtitle text-center" style={{zIndex: "3"}}>
                        <b>Your one-stop shop for as many movie summaries as you can handle</b>
                    </h2>
                </Container>
            </div>
            <div
                className="moving-clouds"
                style={{backgroundImage: `url(${clouds})`}}
            />
        </div>
    )
}
