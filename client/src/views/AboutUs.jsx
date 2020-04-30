import React, { Component } from 'react'

import MainNavbar from "components/Navbars/MainNavbar.jsx";
import AboutUs from "components/AboutPage/AboutPage.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import ContactForm from "components/Forms/ContactForm.jsx";


import {
  Container,
  Row,
  Col
} from "reactstrap";

class About extends Component {


  render() {
    return (
        <div>

        <section className="breadcrumps-section section section-lg bg-secondary ">

            <div className="container p-1 p-sm3">

                <div className="row">

                    <div className="col-12">
                        <h2>About Us</h2>

                        <ol className="breadcrumb">
                             <li className="breadcrumb-item"><a href="/">Home</a></li>
                             <li className="breadcrumb-item active"> About Us </li>
                        </ol>
                    </div>
                </div>
            </div>

        </section>

        <section className = "about-company-section">

                <div className="container p-1 p-sm3">

                    <div className="row">

                        <div className="col-12 text text-center">
                            <h2>Welcome to Jewish Women Will's </h2>

                                <hr/>
                        </div>

                        <div className="col-md-3">

                            <img className="img-fluid" src="./client/src/assets/img/logo/LogoSample_ByTailorBrands.jpg" alt=""></img>
                        </div>

                        <div className="col- md-9">
                           <p>

                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos tempora quas quibusdam. Maxime laborum a velit id consequatur autem corporis. Officiis vitae corrupti eius recusandae mollitia!
                               Eaque, exercitationem adipisci.
                           </p>

                            <p>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos tempora quas quibusdam. Maxime laborum a velit id consequatur autem corporis. Officiis vitae corrupti eius recusandae mollitia!
                                Eaque, exercitationem adipisci.
                           </p>

                            <p>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos tempora quas quibusdam. Maxime laborum a velit id consequatur autem corporis. Officiis vitae corrupti eius recusandae mollitia!
                                Eaque, exercitationem adipisci.
                           </p>

                            <hr />
                        </div>
                    </div>
                </div>

        </section>

        </div>

     );
}

}
export default About;
