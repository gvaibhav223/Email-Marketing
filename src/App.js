import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/Homelayout";
import AllPages from "./Pages";
import DashboardLayout from "./Layout/DashboardLayout";
import LandingPage from "./Pages/View/Landing";
import PrivacyPolicy from "./Pages/View/Landing/PrivacyPolicy";
import TermsandCondition from "./Pages/View/Landing/TermsandCondition";
import Dashboard from "./Redeux Containers/DashboardContainer";
import ContentManagement from "./Pages/View/Dashboard/Content Management";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPages />} />

          {/* Login Pages */}
          <Route element={<HomeLayout />}>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termscondition" element={<TermsandCondition />} />
          </Route>

          {/* Landing Page */}
          <Route element={<HomeLayout />}>
            {/* <Route path="/dashboard" element={<Curd />} /> */}
          </Route>

          {/* Dashboard Pages */}
          <Route element={<DashboardLayout />}>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/contentmanagement" element={<ContentManagement />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
