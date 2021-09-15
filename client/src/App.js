import { useEffect, useState } from "react";
import "./App.css";
import LoginSignup from "./components/login-signup/login-signup.component";
import { useTransition, animated } from "react-spring";
import Home from "./components/home/home.component";

function App() {
  const [loggedStatus, setLoggedStatus] = useState(false);

  const transition = useTransition(loggedStatus, {
    from: { tranform: "scale(0)", borderRadius: "50%" },
    enter: { transform: "scale(1)", borderRadius: "0%" },
    leave: { tranform: "scale(0)", borderRadius: "50%" },
  });

  useEffect(() => {
    if (document.cookie) setLoggedStatus(true);
  }, []);

  const AnimatedHome = animated(Home);

  return (
    <div className="App">
      {transition((style, item) =>
        item ? (
          <AnimatedHome style={style} />
        ) : (
          <LoginSignup setLoggedStatus={setLoggedStatus} />
        )
      )}
    </div>
  );
}

export default App;
