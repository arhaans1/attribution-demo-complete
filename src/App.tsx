import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import AIInsights from './pages/AIInsights';
import CustomerJourney from './pages/CustomerJourney';
import SalesCalls from './pages/SalesCalls';
import Webinars from './pages/Webinars';
import TrackingSetup from './pages/TrackingSetup';
import Integrations from './pages/Integrations';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai-insights" element={<AIInsights />} />
          <Route path="/customer-journey" element={<CustomerJourney />} />
          <Route path="/sales-calls" element={<SalesCalls />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/tracking-setup" element={<TrackingSetup />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
