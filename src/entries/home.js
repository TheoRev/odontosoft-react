import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// import Patient from "../patients/containers/patient";
import HomeView from "../views/containers/home-view";

const homeContainer = document.getElementById("app");
render(<HomeView />, homeContainer);
