import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Route,
  Phone,
  Video,
  Link2,
  Plug,
  Settings,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/customer-journey', icon: Route, label: 'Customer Journey' },
    { path: '/sales-calls', icon: Phone, label: 'Sales Calls' },
    { path: '/webinars', icon: Video, label: 'Webinars', badge: 'NEW' },
    { path: '/tracking-setup', icon: Link2, label: 'Tracking Setup' },
    { path: '/integrations', icon: Plug, label: 'Integrations' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary">Attribution Pro</h1>
        <p className="text-sm text-gray-600 mt-1">Know Your ROAS</p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
            AP
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              ASR Media Pro
            </p>
            <p className="text-xs text-gray-600 truncate">
              asr.mediapro@gmail.com
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
