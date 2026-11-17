import LandingPage from "./pages/LandingPage.jsx";
import DeveloperElementInspector from "./components/DeveloperElementInspector.jsx";

function App() {
  return (
    <>
      <LandingPage />
      {import.meta.env.DEV && <DeveloperElementInspector />}
    </>
  );
}

export default App;
