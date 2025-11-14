import { Badge } from '../components/ui/Badge';
import { trackingLinks, recentEvents } from '../data/dummyData';
import { formatNumber } from '../lib/utils';
import { Copy, Plus } from 'lucide-react';

const TrackingSetup = () => {
  const pixelCode = `<!-- Attribution Pixel -->
<script>
(function() {
  var t = document.createElement('script');
  t.src = 'https://cdn.attribution.app/pixel/ATR_3fa9b2e4c8d1.js';
  t.async = true;
  document.head.appendChild(t);
})();
</script>
<!-- End Attribution Pixel -->`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tracking Setup</h1>
        <p className="text-gray-600 mt-1">
          Install your tracking pixel and create tracking links
        </p>
      </div>

      {/* Pixel Installation */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Pixel Installation
        </h2>

        {/* Pixel Status */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">✅</div>
            <div className="flex-1">
              <h3 className="font-semibold text-green-900 mb-1">
                Installed and Active
              </h3>
              <p className="text-sm text-green-700">
                Last Event Received: 2 minutes ago
              </p>
              <div className="mt-3 flex gap-4 text-sm">
                <div>
                  <span className="text-green-700">
                    Total Events (Last 7 Days):
                  </span>
                  <span className="font-semibold text-green-900 ml-2">
                    {formatNumber(12456)}
                  </span>
                </div>
                <div>
                  <span className="text-green-700">Tracking ID:</span>
                  <span className="font-mono text-green-900 ml-2">
                    ATR_3fa9b2e4c8d1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Code */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700">
              Installation Code
            </label>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-primary text-white rounded-lg hover:bg-blue-600">
              <Copy size={16} />
              Copy to Clipboard
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{pixelCode}</code>
          </pre>
        </div>

        {/* Instructions */}
        <details className="cursor-pointer">
          <summary className="text-sm font-semibold text-gray-700 hover:text-gray-900">
            Installation Instructions
          </summary>
          <ol className="mt-3 space-y-2 text-sm text-gray-600 list-decimal list-inside">
            <li>Copy the code above</li>
            <li>
              Paste before the closing <code>&lt;/head&gt;</code> tag on every
              page
            </li>
            <li>Verify installation by checking "Pixel Status" above</li>
            <li>
              Test by visiting your website and checking for events below
            </li>
          </ol>
        </details>
      </div>

      {/* Tracking Links */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Tracking Links</h2>
            <p className="text-sm text-gray-600 mt-1">
              Create short tracking links with UTM parameters for your campaigns
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">
            <Plus size={20} />
            Create Link
          </button>
        </div>

        {/* Links Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Short Link
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Destination URL
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Campaign
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Clicks
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Conversions
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {trackingLinks.map((link) => (
                <tr
                  key={link.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <code className="text-sm font-mono text-primary">
                      {link.shortLink}
                    </code>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 truncate max-w-xs">
                    {link.destinationUrl}
                  </td>
                  <td className="py-3 px-4 text-sm">{link.campaign}</td>
                  <td className="text-center py-3 px-4 font-semibold">
                    {formatNumber(link.clicks)}
                  </td>
                  <td className="text-center py-3 px-4 font-semibold">
                    {link.conversions}
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge status={link.status} />
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-primary hover:text-blue-700 text-sm">
                        Copy
                      </button>
                      <span className="text-gray-300">|</span>
                      <button className="text-gray-600 hover:text-gray-900 text-sm">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Event Tracking Settings */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Event Tracking Settings
        </h2>

        <div className="space-y-3 mb-6">
          {[
            'Page Views',
            'Form Submissions',
            'Button Clicks',
            'Scroll Depth (75% threshold)',
            'Exit Intent',
            'Video Views',
          ].map((event) => (
            <div
              key={event}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">{event}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-green-600 font-medium">
                  Enabled
                </span>
                <div className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Events */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-4">
            Recent Events (Last 10)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">
                    Timestamp
                  </th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">
                    Event Type
                  </th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">
                    Page URL
                  </th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">
                    Visitor ID
                  </th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentEvents.map((event, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-2 px-3 text-xs text-gray-600">
                      {event.timestamp}
                    </td>
                    <td className="py-2 px-3 text-xs">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {event.eventType}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-xs text-gray-600 font-mono">
                      {event.pageUrl}
                    </td>
                    <td className="py-2 px-3 text-xs text-gray-600 font-mono">
                      {event.visitorId}
                    </td>
                    <td className="py-2 px-3 text-xs text-gray-600">
                      {event.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingSetup;
