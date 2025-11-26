import { useState } from 'react';
import { MetricCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { campaigns } from '../data/dummyData';
import {
  formatCurrency,
  formatNumber,
  formatPercentage,
  formatROAS,
} from '../lib/utils';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const [expandedCampaigns, setExpandedCampaigns] = useState<Set<string>>(
    new Set()
  );
  const [expandedAdSets, setExpandedAdSets] = useState<Set<string>>(new Set());

  // Calculate totals
  const totals = campaigns.reduce(
    (acc, campaign) => ({
      spend: acc.spend + campaign.spend,
      revenue: acc.revenue + campaign.revenue,
      leads: acc.leads + campaign.leads,
      purchases: acc.purchases + campaign.purchases,
    }),
    { spend: 0, revenue: 0, leads: 0, purchases: 0 }
  );

  const totalROAS = totals.revenue / totals.spend;
  const spendWithGST = totals.spend * 1.18;

  const toggleCampaign = (campaignId: string) => {
    const newExpanded = new Set(expandedCampaigns);
    if (newExpanded.has(campaignId)) {
      newExpanded.delete(campaignId);
    } else {
      newExpanded.add(campaignId);
    }
    setExpandedCampaigns(newExpanded);
  };

  const toggleAdSet = (adSetId: string) => {
    const newExpanded = new Set(expandedAdSets);
    if (newExpanded.has(adSetId)) {
      newExpanded.delete(adSetId);
    } else {
      newExpanded.add(adSetId);
    }
    setExpandedAdSets(newExpanded);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Track your ad performance and attribution
        </p>
        <div className="mt-4 flex items-center gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
            <option>Last 30 Days (Oct 14, 2025 - Nov 13, 2025)</option>
          </select>
          <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium">
            ✓ All integrations connected
          </div>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Ad Spend"
          value={formatCurrency(totals.spend)}
          subtitle={`+18% GST: ${formatCurrency(spendWithGST)}`}
          change="+12% vs last period ↑"
          changeColor="text-green-600"
          icon="💰"
          bgColor="bg-gradient-to-br from-blue-50 to-blue-100"
        />
        <MetricCard
          title="Total Revenue"
          value={formatCurrency(totals.revenue)}
          subtitle={`From ${totals.purchases} purchases`}
          change="+24% vs last period ↑"
          changeColor="text-green-600"
          icon="💵"
          bgColor="bg-gradient-to-br from-green-50 to-green-100"
        />
        <MetricCard
          title="ROAS"
          value={formatROAS(totalROAS)}
          subtitle="Return on Ad Spend"
          change="+0.8x vs last period ↑"
          changeColor="text-green-600"
          icon="📈"
          bgColor="bg-gradient-to-br from-purple-50 to-purple-100"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-4">
          <div className="text-2xl mb-2">👥</div>
          <p className="text-2xl font-bold text-gray-900">
            {formatNumber(245678)}
          </p>
          <p className="text-sm text-gray-600">Unique users reached</p>
        </div>
        <div className="glass-card p-4">
          <div className="text-2xl mb-2">🖱️</div>
          <p className="text-2xl font-bold text-gray-900">
            {formatNumber(12345)}
          </p>
          <p className="text-sm text-gray-600">5.02% CTR</p>
        </div>
        <div className="glass-card p-4">
          <div className="text-2xl mb-2">📝</div>
          <p className="text-2xl font-bold text-gray-900">
            {formatNumber(totals.leads)}
          </p>
          <p className="text-sm text-gray-600">
            {formatCurrency(totals.spend / totals.leads)} Cost Per Lead
          </p>
        </div>
        <div className="glass-card p-4">
          <div className="text-2xl mb-2">🛒</div>
          <p className="text-2xl font-bold text-gray-900">
            {totals.purchases}
          </p>
          <p className="text-sm text-gray-600">
            {formatPercentage((totals.purchases / totals.leads) * 100)}{' '}
            conversion rate
          </p>
        </div>
        <div className="glass-card p-4">
          <div className="text-2xl mb-2">📹</div>
          <p className="text-2xl font-bold text-gray-900">342</p>
          <p className="text-sm text-gray-600">Webinar Registrations</p>
        </div>
        <div className="glass-card p-4">
          <div className="text-2xl mb-2">✅</div>
          <p className="text-2xl font-bold text-gray-900">198</p>
          <p className="text-sm text-gray-600">57.9% show-up rate</p>
        </div>
        <div className="glass-card p-4">
          <div className="text-2xl mb-2">📞</div>
          <p className="text-2xl font-bold text-gray-900">89</p>
          <p className="text-sm text-gray-600">Sales Calls Booked</p>
        </div>
        <div className="glass-card p-4">
          <div className="text-2xl mb-2">💎</div>
          <p className="text-2xl font-bold text-gray-900">37</p>
          <p className="text-sm text-gray-600">41.6% close rate</p>
        </div>
      </div>

      {/* Campaign Performance Section */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Campaign Performance Breakdown
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Campaign / Ad Set / Ad
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Spend
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Reach
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Clicks
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  CTR
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Leads
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Purchases
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Revenue
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  ROAS
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <>
                  {/* Campaign Row */}
                  <tr
                    key={campaign.id}
                    className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                    onClick={() => toggleCampaign(campaign.id)}
                  >
                    <td className="py-3 px-4 font-semibold text-gray-900">
                      <div className="flex items-center gap-2">
                        {expandedCampaigns.has(campaign.id) ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                        {campaign.name}
                      </div>
                    </td>
                    <td className="text-right py-3 px-4">
                      {formatCurrency(campaign.spend)}
                    </td>
                    <td className="text-right py-3 px-4">
                      {formatNumber(campaign.reach)}
                    </td>
                    <td className="text-right py-3 px-4">
                      {formatNumber(campaign.clicks)}
                    </td>
                    <td className="text-right py-3 px-4">
                      {formatPercentage(campaign.ctr)}
                    </td>
                    <td className="text-right py-3 px-4">{campaign.leads}</td>
                    <td className="text-right py-3 px-4">
                      {campaign.purchases}
                    </td>
                    <td className="text-right py-3 px-4">
                      {formatCurrency(campaign.revenue)}
                    </td>
                    <td className="text-right py-3 px-4 font-semibold text-green-600">
                      {formatROAS(campaign.roas)}
                    </td>
                    <td className="text-right py-3 px-4">
                      <Badge status={campaign.status} />
                    </td>
                  </tr>

                  {/* Ad Sets */}
                  {expandedCampaigns.has(campaign.id) &&
                    campaign.adSets.map((adSet) => (
                      <>
                        <tr
                          key={adSet.id}
                          className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer bg-blue-50/30"
                          onClick={() => toggleAdSet(adSet.id)}
                        >
                          <td className="py-3 px-4 pl-12">
                            <div className="flex items-center gap-2">
                              {expandedAdSets.has(adSet.id) ? (
                                <ChevronDown size={16} />
                              ) : (
                                <ChevronRight size={16} />
                              )}
                              {adSet.name}
                            </div>
                          </td>
                          <td className="text-right py-3 px-4">
                            {formatCurrency(adSet.spend)}
                          </td>
                          <td className="text-right py-3 px-4">
                            {formatNumber(adSet.reach)}
                          </td>
                          <td className="text-right py-3 px-4">
                            {formatNumber(adSet.clicks)}
                          </td>
                          <td className="text-right py-3 px-4">
                            {formatPercentage(adSet.ctr)}
                          </td>
                          <td className="text-right py-3 px-4">
                            {adSet.leads}
                          </td>
                          <td className="text-right py-3 px-4">
                            {adSet.purchases}
                          </td>
                          <td className="text-right py-3 px-4">
                            {formatCurrency(adSet.revenue)}
                          </td>
                          <td className="text-right py-3 px-4 font-semibold text-green-600">
                            {formatROAS(adSet.roas)}
                          </td>
                          <td></td>
                        </tr>

                        {/* Ads */}
                        {expandedAdSets.has(adSet.id) &&
                          adSet.ads.map((ad) => (
                            <tr
                              key={ad.id}
                              className="border-b border-gray-100 hover:bg-gray-50 bg-green-50/20"
                            >
                              <td className="py-3 px-4 pl-20">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={ad.thumbnail}
                                    alt={ad.name}
                                    className="w-12 h-12 rounded object-cover"
                                  />
                                  <span>{ad.name}</span>
                                </div>
                              </td>
                              <td className="text-right py-3 px-4">
                                {formatCurrency(ad.spend)}
                              </td>
                              <td className="text-right py-3 px-4">
                                {formatNumber(ad.reach)}
                              </td>
                              <td className="text-right py-3 px-4">
                                {formatNumber(ad.clicks)}
                              </td>
                              <td className="text-right py-3 px-4">
                                {formatPercentage(ad.ctr)}
                              </td>
                              <td className="text-right py-3 px-4">
                                {ad.leads}
                              </td>
                              <td className="text-right py-3 px-4">
                                {ad.purchases}
                              </td>
                              <td className="text-right py-3 px-4">
                                {formatCurrency(ad.revenue)}
                              </td>
                              <td className="text-right py-3 px-4 font-semibold text-green-600">
                                {formatROAS(ad.roas)}
                              </td>
                              <td></td>
                            </tr>
                          ))}
                      </>
                    ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
