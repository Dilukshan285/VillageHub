
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HouseholdPage from './pages/householdPage.js';
import Filedvisit from './pages/Filedvisit.js'
import GramaNiladhariDashboard from './pages/GramaNiladhariDashboard.js';
import VillagerDashboard from './pages/VillagerDashboard.js';
import ProceduresVil from './pages/ProceduresVil';
import ProceduresGrama from './pages/ProceduresGrama.js';
import ElectionGrama from './pages/electionGrama.js';
import Ticket from './pages/ticket.js';
import Detailsappointment from './pages/ApointmentGrama.js';
import Userappointment from './pages/ApointmentUser.js';
import NoticeResident from './pages/NoticeResident.js';
import NoticeGramaNiladhari from './pages/NoticeGramaNiladhari.js';
import ElectionVil from './pages/electionVill.js';
import TicketVill from './pages/createeticket.js';
import DocumentScanner from './components/AI OCR/DocumentScanner.js';
import RetrieveTickets from './components/ticket/retrieve_ticket.js';
import AdminTickets from './components/ticket/AdminTicket.js';

function App() {
  return (
    <Router>
     
      
 
      
          <Routes>
          <Route path="/" element={<VillagerDashboard/>} />
          <Route path="/villagerDashboard" element={<VillagerDashboard/>} />
          <Route path="/gramaniladharidashboard" element={<GramaNiladhariDashboard/>} />
          <Route path="/villagerhome" element={<VillagerDashboard/>} />


            <Route path="/household-data" element={<HouseholdPage />} />
            <Route path="/field-visits" element={<Filedvisit />} />

            <Route path= "/villagerprocedures" element={<ProceduresVil/>} />
            <Route path= "/procedures" element={<ProceduresGrama/>} />

         
            <Route path= "/appointments" element={<Detailsappointment/>} />
            <Route path= "/villagerappointments" element={<Userappointment/>} />

            <Route path= "/notices" element= {<NoticeResident/>} />
            <Route path= "/gramaNotices" element= {<NoticeGramaNiladhari/>} />

            <Route path ="/voter-rights-request" element={<ElectionVil/>} />
            <Route path= "/election" element={<ElectionGrama/>} />

            <Route path ="/villagertickets" element={<TicketVill/>} />
            <Route path= "/tickets" element={<Ticket/>} />

            <Route path= "/DocumentScanner" element={<DocumentScanner />} />

            <Route path= "/GetAllTickets" element={<RetrieveTickets />} />

          <Route path= "/AdminTicket" element={<AdminTickets />} />
            
          </Routes>
 
    </Router>
  );
}

export default App;