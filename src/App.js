import logo from './logo.svg';
import './App.css';
import "./align.css"

import {Routes, Route} from "react-router-dom"
import Header from './component/header/header';
import SideBar from './component/sidebar/side-bar';
import TrafficBySite from './pages/dashboard/traffic-by-site';
import Inspections from './component/inspections/inspections';
import CreateNewInspection from './component/create-a-new-inspection/create-a-new-inspection';
import CreateNewCustomer from './component/creatre-new-customer/creatre-new-customer';
import ChooseCustomer from './component/choose-customer/choose-customer';
import SaveNext from './component/save-next/save-next';
import InspectionPropertyInformation from './inspection-property-information/inspection-property-information';
import AddNotes from './component/add-notes/add-notes';
import InProgress from './component/in-progress/in-progress';
import RoofSections from './component/roof-sections/roof-sections';
import GeneralMaintenance from './component/general-maintenance/general-maintenance';
import AddiotionalRepairs from './component/addiotional-repairs/addiotional-repairs';
import Replacements from './component/replacements/replacements';
import History from './component/history/history';
import Review from './component/review/review';

function App() {

  return (
    <>
     <Header />
     <div className="container">
        <SideBar/>
          <Routes>
            <Route path='/' element={<TrafficBySite/>} />
            
            <Route path='inspection' element={<Inspections />} />
            <Route path='createNewInspection' element={<CreateNewInspection />} />
            <Route path='createNewCustomer' element={<CreateNewCustomer />} />
            <Route path="chooseCustomer" element={<ChooseCustomer/>} />
            <Route path="saveNext" element={<SaveNext/>} />
            <Route path='inspectionPropertyInformation' element={<InspectionPropertyInformation/>} />
            <Route path='addNotes' element={<AddNotes/>} />

            <Route path='inprogress' element={<InProgress/>} />
            <Route path='roofSections' element={<RoofSections />} />
            <Route path='generalMaintenance' element={<GeneralMaintenance/>} />
            <Route path='addiotionalRepairs' element={<AddiotionalRepairs />} />
            <Route path='replacements' element={<Replacements/>} />
            <Route path='history' element={<History/>} />
            <Route path='review' element={<Review />} />

            <Route path='completed' element={<h1>completed</h1>} />
            <Route path='reports' element={<h1>report</h1>} />
            <Route path='customers' element={<h1>customers</h1>} />
            <Route path='membersmanagemet' element={<h1>membersmanagemet</h1>} />
            
          </Routes>
      </div>
     </>
  );
}

export default App;
