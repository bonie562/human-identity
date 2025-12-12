import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { header, myWork } from "./api/api";

// Pages & Components
import HomePage from "./component/frontPage/HomePage";
import RandomPage from "./component/randowmPage/RandomPage";
import Bimbeat from "./pages/Bimbeat";
import Loca from "./pages/Loca";
import Ravewave from "./pages/Ravewave";
import Creatir from "./pages/Creatir";
import ContentPage from "./pages/ContentPage";
import NotFound from './pages/NotFound'
import "lenis/dist/lenis.css";


function App() {
  const [apiData, setApiData] = useState({
    headerData: null,
    workData: null,
  });

  useEffect(() => {
    const loadData = async () => {
      const headerData = await header();
      const workData = await myWork();
      setApiData({ headerData, workData });
    };

    loadData();
  }, []);

  if (!apiData.headerData || !Array.isArray(apiData.workData)) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />

          <h1 className="text-xl font-semibold text-gray-700">Loading...</h1>
          <p className="text-sm text-gray-500">
            Please wait while we prepare everything for you.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            apiData={apiData}
            setApiData={setApiData}
            headerData={apiData.headerData}
            workData={apiData.workData}
          />
        }
      />

      <Route
        path="/work/*"
        element={<ContentPage apiData={apiData} workData={apiData.workData} />}
      >
        <Route
          path="bimbeat"
          element={
            <Bimbeat
              key="bimbeat"
              workData={apiData.workData.find((item) => item.tag === "bimbeat")}
            />
          }
        />
        <Route
          path="loca"
          element={
            <Loca
              key="loca"
              workData={apiData.workData.find((item) => item.tag === "loca")}
            />
          }
        />
        <Route
          path="rave"
          element={
            <Ravewave
              key="rave"
              workData={apiData.workData.find((item) => item.tag === "rave")}
            />
          }
        />
        <Route
          path="creatir"
          element={
            <Creatir
              key="creatir"
              workData={apiData.workData.find((item) => item.tag === "creatir")}
            />
          }
        />
      </Route>

      {/* Optional: 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
