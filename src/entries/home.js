import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Patient from "../patients/containers/patient";

const homeContainer = document.getElementById("app");
render(<Patient />, homeContainer);
