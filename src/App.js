import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import FeleNavbar from './components/Navbar/FeleNavbar';
import Team from './components/Team/Team';
import Home from './components/Home/Home'
import Mentors from './components/Mentors/Mentors';
import Meetings from './components/Meetings/Meetings';
import Reports from './components/Reports/Reports';
import Deliverables from './components/Deliverables/Deliverables';
import References from './components/References/References';
import Footer from './components/Footer/Footer';
import NotFound from "./components/Misc/NotFound";

const App = () => {
  return (
    <Router basename="/caps23g31">
      <FeleNavbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mentors" element={<Mentors />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/meetings" element={<Meetings />}/>
        <Route path="/deliverables" element={<Deliverables />} />
        <Route path="/reports" element={<Reports />}/>
        <Route path="/references" element={<References />}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
