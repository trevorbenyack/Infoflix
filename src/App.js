import React, {useState} from "react";

import NavbarComponent from "./Components/NavbarComponent";
import LandingComponent from "./Components/LandingComponent";
import background from "./assets/img/jeremy-yap-J39X2xX_8CQ-unsplash.jpg";

// core components

function App() {
    const [content, setContent] = useState(<LandingComponent />);

    function handleContentComponent(newValue) {
        setContent(newValue);
    }

  return (
    <div>
      <NavbarComponent changeComponent={handleContentComponent} />
          {content}
    </div>
  );
}
export default App;
