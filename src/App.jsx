import "./App.css";
import Header from "./components/Header";
import LearnSection from "./components/LearnSection";
import MainSection from "./components/MainSection";
import TabsSection from "./components/TabsSection";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainSection />} />
            <Route path="learn" element={<LearnSection />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
