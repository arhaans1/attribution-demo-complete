import { MetricCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { webinars } from '../data/dummyData';
import {
  formatCurrency,
  formatNumber,
  formatPercentage,
  formatROAS,
} from '../lib/utils';

const Webinars = () => {
  const completedWebinars = webinars.filter((w) => w.status === 'completed');
  const totalRegistrations = completedWebinars.reduce(
    (acc, w) => acc + w.registrations,
    0
  );
  const totalAttendees = completedWebinars.reduce((acc, w) => acc + w.showUps, 0);
  const totalRevenue = completedWebinars.reduce(
    (acc, w) => acc + w.totalRevenue,
    0
  );
  const avgShowUpRate =
    completedWebinars.reduce((acc, w) => acc + w.showUpRate, 0) /
    completedWebinars.length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Webinar Analytics</h1>
        <p className="text-gray-600 mt-1">
          Track webinar performance and conversion metrics
        </p>
        <div className="mt-4 flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
            <option>Last 90 Days</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
            <option>All Webinars</option>
            <option>Completed</option>
            <option>Upcoming</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="Total Webinars"
          value={completedWebinars.length}
          subtitle="In last 90 days"
          icon="📹"
          bgColor="bg-gradient-to-br from-blue-50 to-blue-100"
        />
        <MetricCard
          title="Total Registrations"
          value={formatNumber(totalRegistrations)}
          subtitle={`Avg ${Math.round(totalRegistrations / completedWebinars.length)} per webinar`}
          icon="📝"
          bgColor="bg-gradient-to-br from-purple-50 to-purple-100"
        />
        <MetricCard
          title="Total Attendees"
          value={formatNumber(totalAttendees)}
          subtitle={`${formatPercentage(avgShowUpRate)} show-up rate`}
          icon="✅"
          bgColor="bg-gradient-to-br from-green-50 to-green-100"
        />
        <MetricCard
          title="Total Revenue"
          value={formatCurrency(totalRevenue)}
          subtitle="From webinar funnel"
          icon="💰"
          bgColor="bg-gradient-to-br from-yellow-50 to-yellow-100"
        />
      </div>

      {/* Webinars Table */}
      <div className="glass-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Webinar
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Registrations
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Show-Ups
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Show-Up %
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  L1 Conv.
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  L1 Revenue
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Ad Spend
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  HT Sales
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Total Revenue
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Profit/Loss
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  ROAS
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {webinars.map((webinar) => (
                <tr
                  key={webinar.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">
                      {webinar.name}
                    </div>
                    <div className="text-xs text-gray-500">{webinar.date}</div>
                  </td>
                  <td className="text-center py-3 px-4">
                    {formatNumber(webinar.registrations)}
                  </td>
                  <td className="text-center py-3 px-4 font-semibold">
                    {webinar.status === 'completed'
                      ? formatNumber(webinar.showUps)
                      : '-'}
                  </td>
                  <td className="text-center py-3 px-4">
                    {webinar.status === 'completed'
                      ? formatPercentage(webinar.showUpRate)
                      : '-'}
                  </td>
                  <td className="text-center py-3 px-4">
                    {webinar.status === 'completed'
                      ? `${webinar.l1Conversions} (${formatPercentage(webinar.l1ConversionRate)})`
                      : '-'}
                  </td>
                  <td className="text-right py-3 px-4">
                    {webinar.status === 'completed'
                      ? formatCurrency(webinar.l1Revenue)
                      : '-'}
                  </td>
                  <td className="text-right py-3 px-4">
                    {webinar.status === 'completed'
                      ? formatCurrency(webinar.adSpend)
                      : '-'}
                  </td>
                  <td className="text-center py-3 px-4 font-semibold">
                    {webinar.status === 'completed'
                      ? webinar.highTicketSales
                      : '-'}
                  </td>
                  <td className="text-right py-3 px-4 font-semibold">
                    {webinar.status === 'completed'
                      ? formatCurrency(webinar.totalRevenue)
                      : '-'}
                  </td>
                  <td
                    className={`text-right py-3 px-4 font-bold ${
                      webinar.profitLoss > 0
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {webinar.status === 'completed'
                      ? formatCurrency(webinar.profitLoss)
                      : '-'}
                  </td>
                  <td className="text-right py-3 px-4 font-semibold text-green-600">
                    {webinar.status === 'completed'
                      ? formatROAS(webinar.roas)
                      : '-'}
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge status={webinar.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
