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
import MovieDetailsModal from "./MovieDetailsModal";
import Profile from "./Profile";
import FindMoviesDropdown from "./FindMoviesDropdown";
import MovieDetailsDropdown from "./FindMoviesDropdown";

export default function AppNavbar(props) {

    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    // MENU SELECTION
    const handleContentView = (selection) => {
        console.log("selections is " + selection);
        props.handleSelection(selection);
    }

    // // SEARCH BOX
    // const [value, setValue] = useState('');
    // const handleChange = e => {
    //     setValue(e.target.value);
    // };
    // const handleKeypress = e => {
    //     // it triggers by pressing the enter ke
    //     if (e.key === 'Enter') {
    //         // handleSubmit(e);
    //         changeComponent(e);
    //     }
    // };
    //
    // else if (e.currentTarget.dataset.div_id === "search") {
    //     props.changeComponent(<Results searchValue='0' />)
    // }


    let changeComponent = e => {
        if (e.currentTarget.dataset.div_id === "landing") {
            handleContentView("0");
        } else if (e.currentTarget.dataset.div_id === "trending") {
            handleContentView("5");
        }
    }




    // CREATIVE TIM FUNCTIONS
    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };
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

                        to="/"
                        tag={Link}

                        // This fields are for displaying the landing in Main view
                        // Once profile component is fixed, this can be implemented
                        key={"landing"}
                        data-div_id={"landing"}
                        onClick={changeComponent}
                    >
                        Infoflix
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Nav navbar>
                    <NavItem>
                        <NavLink
                            style={{cursor: 'pointer'}}
                            onClick={() => props.setLoginModal(true)}
                        >
                            Login
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <Button
                            className="btn-round"
                            color="danger"
                            key={"trending"}
                            data-div_id={"trending"}
                            onClick={changeComponent}
                        >
                            <i className="nc-icon nc-spaceship" /> Trending
                        </Button>
                    </NavItem>
                    <NavItem style={{width: '200px', margin: "14px 3px 14px 14px"}}>
                        <form>
                            <MovieDetailsDropdown handleMenuSelect={handleContentView}/>
                        </form>
                    </NavItem >
                    {/*SEARCH BOX*/}
                    {/*<NavItem style={{margin: "14px 3px 14px 14px"}}>*/}
                    {/*    <Input*/}
                    {/*        placeholder="Search"*/}
                    {/*        type="text"*/}
                    {/*        key={"search"}*/}
                    {/*        data-div_id={"search"}*/}
                    {/*        value={value}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        onKeyPress={handleKeypress}*/}
                    {/*    />*/}
                    {/*</NavItem>*/}
                </Nav>
            </Container>
        </Navbar>
    );
}
