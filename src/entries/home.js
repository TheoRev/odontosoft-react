import React from "react";
import { render } from "react-dom";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/start/theme.css";
import "font-awesome/css/font-awesome.css";
import Patient from '../patients/containers/patient';

const homeContainer = document.getElementById("app");
render(<Patient />, homeContainer);
