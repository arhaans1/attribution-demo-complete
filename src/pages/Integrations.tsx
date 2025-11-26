import { Check, Clock } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      id: 'facebook',
      name: 'Facebook Ads',
      description: 'Sync your ad campaigns, performance metrics, and conversions',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
      logoColor: '#1877F2',
      status: 'connected',
      account: 'ASR Media Pro Ads (Act: 123456789)',
      connectedDate: 'Oct 1, 2025',
      lastSynced: '2 minutes ago',
    },
    {
      id: 'ghl',
      name: 'GoHighLevel',
      description: 'Connect your CRM for lead tracking and opportunity management',
      logoUrl: 'https://cdn.prod.website-files.com/62f89e8c1c557a04272f04fb/62f89e8c1c557aba432f0548_ghl-icon.svg',
      logoColor: '#00A652',
      status: 'connected',
      account: 'ASR Media Pro CRM - Main Location',
      connectedDate: 'Oct 1, 2025',
      lastSynced: '5 minutes ago',
    },
    {
      id: 'zoom',
      name: 'Zoom',
      description: 'Track webinar attendance and engagement metrics',
      logoUrl: 'https://st1.zoom.us/static/6.3.21315/image/new/ZoomLogo.png',
      logoColor: '#2D8CFF',
      status: 'connected',
      account: 'asr.mediapro@gmail.com',
      connectedDate: 'Oct 1, 2025',
      lastSynced: '10 minutes ago',
    },
    {
      id: 'razorpay',
      name: 'Razorpay',
      description: 'Monitor payments and transaction revenue',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg',
      logoColor: '#0C2451',
      status: 'connected',
      account: 'ASR Media Pro',
      connectedDate: 'Oct 1, 2025',
      lastSynced: '1 hour ago',
    },
    {
      id: 'ga',
      name: 'Google Analytics',
      description: 'Track website traffic and user behavior',
      logoUrl: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',
      logoColor: '#F9AB00',
      status: 'coming_soon',
      account: '',
      connectedDate: '',
      lastSynced: '',
    },
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Connect your payment gateway for revenue tracking',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
      logoColor: '#635BFF',
      status: 'coming_soon',
      account: '',
      connectedDate: '',
      lastSynced: '',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Integrations</h1>
        <p className="text-gray-600 mt-2">
          Connect your marketing tools and platforms to centralize your attribution data
        </p>
      </div>

      {/* Integration Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className={`glass-card p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer ${
              integration.status === 'coming_soon' ? 'opacity-60' : ''
            }`}
          >
            <div className="flex items-start gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2 shadow-sm">
                  <img
                    src={integration.logoUrl}
                    alt={`${integration.name} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to colored placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.style.backgroundColor = integration.logoColor;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {integration.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    {integration.status === 'connected' ? (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                        <Check size={14} />
                        Connected
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        <Clock size={14} />
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>

                {integration.status === 'connected' ? (
                  <>
                    {/* Account Info */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        {integration.account}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Last synced: <span className="text-green-600 font-medium">{integration.lastSynced}</span></span>
                        <span>Connected {integration.connectedDate}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm transition-colors">
                        Manage
                      </button>
                      <button className="px-4 py-2.5 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                        Disconnect
                      </button>
                    </div>
                  </>
                ) : (
                  <button
                    className="w-full px-4 py-2.5 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed font-medium text-sm"
                    disabled
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div className="glass-card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl">
            ?
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Need help with integrations?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Check our documentation or contact support for assistance with setting up your integrations.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm transition-colors">
                View Documentation
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm transition-colors border border-gray-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
