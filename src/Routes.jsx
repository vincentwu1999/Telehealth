import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AbdomenThree = React.lazy(() => import("pages/AbdomenThree"));
const AbdomenTwo = React.lazy(() => import("pages/AbdomenTwo"));
const AbdomenOne = React.lazy(() => import("technician/LegsMedPage"));
const Abdomen = React.lazy(() => import("technician/PulsesMedPage"));
const AbdomenFour = React.lazy(() => import("technician/AbdomenMedPage"));
const DemographicOne = React.lazy(() => import("technician/GeneralMedPage"));
const Heart = React.lazy(() => import("technician/HeartMedPage"));
const HandsOne = React.lazy(() => import("technician/HandsMedPage"));
const Hands = React.lazy(() => import("technician/EyesMedPage"));
const Demographic = React.lazy(() => import("technician/DemographicMedPage"));
const Lungs = React.lazy(() => import("technician/LungsMedPage"));
const Calendario = React.lazy(() => import("pages/Calendario"));
const Form = React.lazy(() => import("pages/Form"));
const PageFour = React.lazy(() => import("pages/PageFour"));
const PageThree = React.lazy(() => import("pages/PageThree"));
const PageTwo = React.lazy(() => import("pages/PageTwo"));
const PatientDetails = React.lazy(() => import("pages/PatientDetails"));
const AppointmentsOverviewPage = React.lazy(
  () => import("pages/AppointmentsOverviewPage"),
);
const LegsTabclickedOne = React.lazy(() => import("pages/LegsTabclickedOne"));
const LungsTabselectedlungregionOne = React.lazy(
  () => import("pages/LungsTabselectedlungregionOne"),
);
const Summaryflagged = React.lazy(() => import("pages/Summaryflagged"));
const LegsTabclicked = React.lazy(() => import("pages/LegsTabclicked"));
const HeartTabclicked = React.lazy(() => import("pages/HeartTabclicked"));
const AbdomenTabquestionmarkclicked = React.lazy(
  () => import("pages/AbdomenTabquestionmarkclicked"),
);
const PulsesTabselectedartery = React.lazy(
  () => import("pages/PulsesTabselectedartery"),
);
const LungsTabselectedlungregion = React.lazy(
  () => import("pages/LungsTabselectedlungregion"),
);
const Summary = React.lazy(() => import("pages/Summary"));
const LegsTab = React.lazy(() => import("pages/LegsTab"));
const HeartTab = React.lazy(() => import("pages/HeartTab"));
const AbdomenTab = React.lazy(() => import("pages/AbdomenTab"));
const PulsesTab = React.lazy(() => import("pages/PulsesTab"));
const LungsTab = React.lazy(() => import("pages/LungsTab"));
const GeneralTab = React.lazy(() => import("pages/GeneralTab"));
const DemographicsTab = React.lazy(() => import("pages/DemographicsTab"));
const Page = React.lazy(() => import("pages/Page"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/page" element={<Page />} />
          <Route path="/demographicstab" element={<DemographicsTab />} />
          <Route path="/generaltab" element={<GeneralTab />} />
          <Route path="/lungstab" element={<LungsTab />} />
          <Route path="/pulsestab" element={<PulsesTab />} />
          <Route path="/abdomentab" element={<AbdomenTab />} />
          <Route path="/hearttab" element={<HeartTab />} />
          <Route path="/legstab" element={<LegsTab />} />
          <Route path="/summary" element={<Summary />} />
          <Route
            path="/lungstabselectedlungregion"
            element={<LungsTabselectedlungregion />}
          />
          <Route
            path="/pulsestabselectedartery"
            element={<PulsesTabselectedartery />}
          />
          <Route
            path="/abdomentabquestionmarkclicked"
            element={<AbdomenTabquestionmarkclicked />}
          />
          <Route path="/hearttabclicked" element={<HeartTabclicked />} />
          <Route path="/legstabclicked" element={<LegsTabclicked />} />
          <Route path="/summaryflagged" element={<Summaryflagged />} />
          <Route
            path="/lungstabselectedlungregionone"
            element={<LungsTabselectedlungregionOne />}
          />
          <Route path="/legstabclickedone" element={<LegsTabclickedOne />} />
          <Route
            path="/appointmentsoverviewpage"
            element={<AppointmentsOverviewPage />}
          />
          <Route path="/patientdetails" element={<PatientDetails />} />
          <Route path="/pagetwo" element={<PageTwo />} />
          <Route path="/pagethree" element={<PageThree />} />
          <Route path="/pagefour" element={<PageFour />} />
          <Route path="/form" element={<Form />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/lungs" element={<Lungs />} />
          <Route path="/demographic" element={<Demographic />} />
          <Route path="/hands" element={<Hands />} />
          <Route path="/handsone" element={<HandsOne />} />
          <Route path="/heart" element={<Heart />} />
          <Route path="/demographicone" element={<DemographicOne />} />
          <Route path="/abdomenfour" element={<AbdomenFour />} />
          <Route path="/abdomen" element={<Abdomen />} />
          <Route path="/abdomenone" element={<AbdomenOne />} />
          <Route path="/abdomentwo" element={<AbdomenTwo />} />
          <Route path="/abdomenthree" element={<AbdomenThree />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
