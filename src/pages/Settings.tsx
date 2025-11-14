import { useState } from 'react';
import { Badge } from '../components/ui/Badge';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');

  const tabs = [
    { id: 'account', label: 'Account' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'billing', label: 'Billing', badge: 'Coming Soon' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          Manage your account and preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              disabled={tab.badge === 'Coming Soon'}
            >
              <span className="flex items-center gap-2">
                {tab.label}
                {tab.badge && (
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Account Tab Content */}
      {activeTab === 'account' && (
        <div className="space-y-6">
          {/* Company Information */}
          <div className="glass-card p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Company Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  defaultValue="ASR Media Pro"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  defaultValue="https://asrmediapro.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">
                Save Changes
              </button>
            </div>
          </div>

          {/* Facebook Pixel Settings */}
          <div className="glass-card p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Facebook Pixel Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pixel ID
                </label>
                <input
                  type="text"
                  defaultValue="123456789012345"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CAPI Access Token
                </label>
                <input
                  type="password"
                  defaultValue="EAAG...xyz"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono"
                />
              </div>
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">
                Save Changes
              </button>
            </div>
          </div>

          {/* Account Status */}
          <div className="glass-card p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Account Status
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Plan</span>
                <Badge status="active" text="Professional" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Status</span>
                <span className="font-medium text-green-600">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Next Billing Date</span>
                <span className="font-medium text-gray-900">Dec 1, 2025</span>
              </div>
              <button className="w-full px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 mt-4">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Integrations Tab Content */}
      {activeTab === 'integrations' && (
        <div className="glass-card p-6">
          <p className="text-gray-600">
            Integration settings can be found on the{' '}
            <a href="/integrations" className="text-primary hover:underline">
              Integrations page
            </a>
            .
          </p>
        </div>
      )}

      {/* Notifications Tab Content */}
      {activeTab === 'notifications' && (
        <div className="glass-card p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Email Notifications
          </h2>
          <div className="space-y-4">
            {[
              'Daily performance summary',
              'Weekly performance report',
              'New lead notifications',
              'Purchase notifications',
              'Integration sync errors',
            ].map((notification) => (
              <div
                key={notification}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-sm text-gray-700">{notification}</span>
                <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
