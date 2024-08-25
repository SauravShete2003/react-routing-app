import { createRoot } from "react-dom/client";
import Home from "./views/Home/Home";
import About from './views/About/About'
import Footer from './components/Footer/Footer'
const root = createRoot(document.getElementById("root"));
const currentPath = window.location.pathname ;
if (currentPath == '/'){
    root.render(<Home/>);
}
else if (currentPath == '/about'){
    root.render(<About/>);
}
else if (currentPath == '/footer'){
    root.render(<Footer/>);
}
else{
    root.render(<h1>404 Not Found</h1>)
}

