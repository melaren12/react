import "./App.css";
import Header from "./components/Header";
import LearnSection from "./components/LearnSection";
import MainSection from "./components/MainSection";
import TabsSection from "./components/TabsSection";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("learn");
  return (
    <>
      <Header></Header>
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {tab === "main" && (
          <>
            <MainSection />
          </>
        )}
        {tab === "learn" && <LearnSection />}
      </main>
    </>
  );
}

export default App;
