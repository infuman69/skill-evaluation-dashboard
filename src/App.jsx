import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import SkillTestPage from "./pages/SkillTest/SkillTestPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="main-section">
        <Sidebar />
        <SkillTestPage />
      </main>
    </>
  );
}

export default App;
