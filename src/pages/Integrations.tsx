import { Badge } from '../components/ui/Badge';

const Integrations = () => {
  const integrations = [
    {
      id: 'facebook',
      name: 'Facebook Ads',
      logo: '📘',
      status: 'connected',
      account: 'ASR Media Pro Ads (Act: 123456789)',
      connectedDate: 'Oct 1, 2025',
      lastSynced: '2 minutes ago',
    },
    {
      id: 'ghl',
      name: 'GoHighLevel',
      logo: '🟢',
      status: 'connected',
      account: 'ASR Media Pro CRM - Main Location',
      connectedDate: 'Oct 1, 2025',
      lastSynced: '5 minutes ago',
    },
    {
      id: 'zoom',
      name: 'Zoom',
      logo: '📹',
      status: 'connected',
      account: 'asr.mediapro@gmail.com',
      connectedDate: 'Oct 1, 2025',
      lastSynced: '10 minutes ago',
    },
    {
      id: 'razorpay',
      name: 'Razorpay',
      logo: '💳',
      status: 'connected',
      account: 'ASR Media Pro',
      connectedDate: 'Oct 1, 2025',
      lastSynced: '1 hour ago',
    },
    {
      id: 'ga',
      name: 'Google Analytics',
      logo: '📊',
      status: 'coming_soon',
      account: '',
      connectedDate: '',
      lastSynced: '',
    },
    {
      id: 'stripe',
      name: 'Stripe',
      logo: '💜',
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
        <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
        <p className="text-gray-600 mt-1">
          Connect your marketing tools and platforms
        </p>
      </div>

      {/* Integration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration) => (
          <div key={integration.id} className="glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="text-5xl">{integration.logo}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {integration.name}
                    </h3>
                    {integration.status === 'connected' && (
                      <p className="text-sm text-gray-600 mt-1">
                        {integration.account}
                      </p>
                    )}
                  </div>
                  <Badge
                    status={integration.status}
                    text={
                      integration.status === 'connected'
                        ? 'Connected'
                        : 'Coming Soon'
                    }
                  />
                </div>

                {integration.status === 'connected' ? (
                  <>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Connected:</span>
                        <span className="font-medium">
                          {integration.connectedDate}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Synced:</span>
                        <span className="font-medium text-green-600">
                          {integration.lastSynced}
                        </span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                      Reconnect
                    </button>
                  </>
                ) : (
                  <button
                    className="w-full px-4 py-2 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed"
                    disabled
                  >
                    Notify Me
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
