import React from "react";

//import ReactDOM from "react-dom"; es reemplazado en nuevas versiones por:
import { createRoot } from "react-dom/client"
//-------------------------------------------------------------------------

import HelloWorld from "./components/HelloWorld"

//ReactDOM.render( <HelloWorld/>, document.getElementById('app'));
//Reemplazado en nuevas versiones por:
const root = createRoot(document.getElementById('app'))
root.render(<HelloWorld />)