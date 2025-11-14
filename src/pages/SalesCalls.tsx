import { MetricCard } from '../components/ui/Card';
import { closers } from '../data/dummyData';
import { formatCurrency, formatPercentage } from '../lib/utils';

const SalesCalls = () => {
  const totalAppointments = closers.reduce(
    (acc, closer) => acc + closer.appointments,
    0
  );
  const totalCompleted = closers.reduce(
    (acc, closer) => acc + closer.callsCompleted,
    0
  );
  const totalPurchases = closers.reduce(
    (acc, closer) => acc + closer.purchases,
    0
  );
  const totalNoShows = closers.reduce((acc, closer) => acc + closer.noShows, 0);
  const totalDisqualified = closers.reduce(
    (acc, closer) => acc + closer.disqualified,
    0
  );
  const totalDealsLost = closers.reduce(
    (acc, closer) => acc + closer.dealsLost,
    0
  );

  const completionRate = (totalCompleted / totalAppointments) * 100;
  const conversionRate = (totalPurchases / totalCompleted) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Sales Calls Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Track closer performance and sales call metrics
        </p>
        <div className="mt-4 flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
            <option>Last 30 Days (Oct 14 - Nov 13, 2025)</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
            <option>All Closers</option>
            <option>Punith Kumar</option>
            <option>Arjun Mehta</option>
            <option>Unassigned</option>
          </select>
        </div>
      </div>

      {/* Overall Performance Cards */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Overall Performance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <MetricCard
            title="Total Appointments"
            value={totalAppointments}
            subtitle="3 closers"
            icon="📞"
            bgColor="bg-gradient-to-br from-blue-50 to-blue-100"
          />
          <MetricCard
            title="Calls Completed"
            value={totalCompleted}
            subtitle={`${formatPercentage(completionRate)} completion rate`}
            icon="✅"
            bgColor="bg-gradient-to-br from-green-50 to-green-100"
          />
          <MetricCard
            title="High-Ticket Purchases"
            value={totalPurchases}
            subtitle={`${formatPercentage(conversionRate)} conversion rate`}
            icon="💎"
            bgColor="bg-gradient-to-br from-purple-50 to-purple-100"
          />
          <MetricCard
            title="No Shows"
            value={totalNoShows}
            subtitle={`${formatPercentage((totalNoShows / totalAppointments) * 100)} no-show rate`}
            icon="❌"
            bgColor="bg-gradient-to-br from-red-50 to-red-100"
          />
          <MetricCard
            title="Disqualified"
            value={totalDisqualified}
            subtitle={`${formatPercentage((totalDisqualified / totalCompleted) * 100)} disqualified rate`}
            icon="⚠️"
            bgColor="bg-gradient-to-br from-yellow-50 to-yellow-100"
          />
          <MetricCard
            title="Deal Lost"
            value={totalDealsLost}
            subtitle={`${formatPercentage((totalDealsLost / totalCompleted) * 100)} deal lost rate`}
            icon="📉"
            bgColor="bg-gradient-to-br from-orange-50 to-orange-100"
          />
        </div>
      </div>

      {/* Closer Performance Cards */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Closer Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {closers.map((closer) => (
            <div key={closer.id} className="glass-card p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {closer.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">
                    {closer.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {formatCurrency(closer.totalRevenue)} Revenue
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Appointments</span>
                  <span className="font-semibold text-gray-900">
                    {closer.appointments}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completed</span>
                  <span className="font-semibold text-green-600">
                    {closer.callsCompleted} (
                    {formatPercentage(closer.completionRate)})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">No Shows</span>
                  <span className="font-semibold text-red-600">
                    {closer.noShows} ({formatPercentage(closer.noShowRate)})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Disqualified</span>
                  <span className="font-semibold text-yellow-600">
                    {closer.disqualified} (
                    {formatPercentage(closer.disqualifiedRate)})
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Purchases</span>
                  <span className="font-bold text-green-600 text-lg">
                    {closer.purchases} (
                    {formatPercentage(closer.conversionRate)})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Deals Lost</span>
                  <span className="font-semibold text-orange-600">
                    {closer.dealsLost} (
                    {formatPercentage(closer.dealLostRate)})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesCalls;
