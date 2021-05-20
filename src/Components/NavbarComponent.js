/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from 'react';
import {Link} from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import '../index.css';

// reactstrap components
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Button, Input, FormGroup, Form,
} from "reactstrap";
import Results from "./Results";
import LandingComponent from "./LandingComponent";

export default function AppNavbar(props) {
    const [navbarColor, setNavbarColor] = useState("navbar-transparent");

    // Search Handling
    const [value, setValue] = useState('');

    // saves the value in the search box
    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleKeypress = e => {
        // it triggers by pressing the enter ke
        if (e.key === 'Enter') {
            // handleSubmit(e);
            changeComponent(e);
        }
    };

    let changeComponent = e => {
        if(e.currentTarget.dataset.div_id === "landing") {
            props.changeComponent(<LandingComponent />)
        } else if (e.currentTarget.dataset.div_id === "discover") {
            props.changeComponent(<Results />)
        } else if (e.currentTarget.dataset.div_id === "search") {
            props.changeComponent(<Results searchValue={value} />)
        }
    }

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <Navbar
            className={classnames("fixed-top", navbarColor)}
            color-on-scroll="300"
            expand="lg"
        >
            <Container>
                <div className="navbar-translate" >
                    <NavbarBrand
                        style={{cursor: 'pointer'}}
                        data-placement="bottom"
                        title="Infoflix"
                        key={"landing"}
                        data-div_id={"landing"}
                        onClick={changeComponent}
                    >
                        Infoflix
                    </NavbarBrand>

                </div>
                <Nav navbar>
                    <NavItem>
                        <Button
                            className="btn-round"
                            color="danger"
                            key={"discover"}
                            data-div_id={"discover"}
                            onClick={changeComponent}
                        >
                            <i className="nc-icon nc-spaceship" /> Discover
                        </Button>
                    </NavItem>
                    <NavItem>
                            <Input
                                placeholder="Search"
                                type="text"
                                key={"search"}
                                data-div_id={"search"}
                                value={value}
                                onChange={handleChange}
                                onKeyPress={handleKeypress}
                                style={{margin: "14px 3px"}}
                            />
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
}
