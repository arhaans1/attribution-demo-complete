import { useState } from 'react';
import { MetricCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { campaigns, webinars, closers } from '../data/dummyData';
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

  // Calculate video engagement metrics
  const videoEngagement = campaigns.reduce(
    (acc, campaign) => {
      campaign.adSets.forEach((adSet) => {
        adSet.ads.forEach((ad) => {
          if (ad.videoViewsBreakdown) {
            acc.viewers25 += ad.videoViewsBreakdown.twentyFive;
            acc.viewers50 += ad.videoViewsBreakdown.fifty;
            acc.viewers100 += ad.videoViewsBreakdown.hundred;
          }
        });
      });
      return acc;
    },
    { viewers25: 0, viewers50: 0, viewers100: 0 }
  );

  // Calculate webinar stats
  const webinarStats = webinars.reduce(
    (acc, webinar) => ({
      registrations: acc.registrations + webinar.registrations,
      attended: acc.attended + webinar.showUps,
      l1Sales: acc.l1Sales + webinar.l1Conversions,
      l1Revenue: acc.l1Revenue + webinar.l1Revenue,
    }),
    { registrations: 0, attended: 0, l1Sales: 0, l1Revenue: 0 }
  );

  // Calculate sales call stats
  const callStats = closers.reduce(
    (acc, closer) => ({
      booked: acc.booked + closer.appointments,
      completed: acc.completed + closer.callsCompleted,
      sales: acc.sales + closer.purchases,
      revenue: acc.revenue + closer.totalRevenue,
    }),
    { booked: 0, completed: 0, sales: 0, revenue: 0 }
  );

  // Mock data for additional metrics
  const l2Sales = 18; // High-ticket sales from webinars
  const l2Revenue = 882000;
  const l3Sales = 5; // Upsells/additional sales
  const l3Revenue = 245000;
  const avgScrollDepth = 68.5;
  const avgTimeOnPage = 142; // in seconds
  const instagramFollowersGained = 1247;

  // Calculate ad creative performance
  const adCreatives = campaigns.flatMap((campaign) =>
    campaign.adSets.flatMap((adSet) =>
      adSet.ads.map((ad) => ({
        ...ad,
        campaignName: campaign.name,
        adSetName: adSet.name,
        costPerLead: ad.leads > 0 ? ad.spend / ad.leads : 0,
        costPerSale: ad.purchases > 0 ? ad.spend / ad.purchases : 0,
      }))
    )
  );

  // Calculate totals for funnel
  const totalImpressions = campaigns.reduce((acc, c) => acc + c.impressions, 0);
  const totalLandingPageViews = campaigns.reduce(
    (acc, campaign) =>
      acc +
      campaign.adSets.reduce(
        (adSetAcc, adSet) =>
          adSetAcc +
          adSet.ads.reduce((adAcc, ad) => adAcc + ad.landingPageViews, 0),
        0
      ),
    0
  );

  // Funnel data
  const funnelData = [
    { stage: 'Ad Views', count: totalImpressions, percentage: 100, color: 'from-blue-500 to-blue-600' },
    { stage: 'Landing Page Visitors', count: totalLandingPageViews, percentage: (totalLandingPageViews / totalImpressions) * 100, color: 'from-indigo-500 to-indigo-600' },
    { stage: 'Leads Generated', count: totals.leads, percentage: (totals.leads / totalImpressions) * 100, color: 'from-violet-600 to-violet-700' },
    { stage: 'Webinar/Call Attended', count: webinarStats.attended + callStats.completed, percentage: ((webinarStats.attended + callStats.completed) / totals.leads) * 100, color: 'from-pink-500 to-pink-600' },
    { stage: 'L1 Conversions', count: webinarStats.l1Sales, percentage: (webinarStats.l1Sales / (webinarStats.attended + callStats.completed)) * 100, color: 'from-orange-500 to-orange-600' },
    { stage: 'L2 Webinar/Call', count: callStats.completed, percentage: (callStats.completed / webinarStats.l1Sales) * 100, color: 'from-amber-500 to-amber-600' },
    { stage: 'L2 Conversions', count: l2Sales, percentage: (l2Sales / callStats.completed) * 100, color: 'from-green-500 to-green-600' },
  ];

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

      {/* Campaign Overview */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Campaign Overview</h2>
          <div className="h-px bg-gradient-to-r from-gray-300 to-transparent mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
          <div className="glass-card p-4">
            <p className="text-2xl font-bold text-gray-900">
              {formatNumber(245678)}
            </p>
            <p className="text-sm text-gray-600 mt-1">Unique users reached</p>
          </div>
        </div>
      </div>

      {/* Engagement & Click Metrics */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Engagement & Click Metrics</h2>
          <div className="h-px bg-gradient-to-r from-gray-300 to-transparent mt-2"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4">
            <p className="text-sm text-gray-600 mb-2">Total Clicks</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatNumber(12345)}
            </p>
            <p className="text-xs text-gray-500 mt-1">5.02% CTR</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-sm text-gray-600 mb-2">Landing Page Views</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatNumber(totalLandingPageViews)}
            </p>
          </div>
          <div className="glass-card p-4">
            <p className="text-sm text-gray-600 mb-2">Avg Scroll Depth</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatPercentage(avgScrollDepth)}
            </p>
          </div>
          <div className="glass-card p-4">
            <p className="text-sm text-gray-600 mb-2">Avg Time on Page</p>
            <p className="text-2xl font-bold text-gray-900">
              {Math.floor(avgTimeOnPage / 60)}m {avgTimeOnPage % 60}s
            </p>
          </div>
        </div>
      </div>

      {/* Video Engagement Metrics */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Video Engagement Metrics</h2>
          <div className="h-px bg-gradient-to-r from-gray-300 to-transparent mt-2"></div>
        </div>
        <div className="glass-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">25% Video Viewers</p>
            <p className="text-3xl font-bold text-gray-900">
              {formatNumber(videoEngagement.viewers25)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Watched 25% or more</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">50% Video Viewers</p>
            <p className="text-3xl font-bold text-gray-900">
              {formatNumber(videoEngagement.viewers50)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Watched 50% or more</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">100% Video Viewers</p>
            <p className="text-3xl font-bold text-gray-900">
              {formatNumber(videoEngagement.viewers100)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Watched complete video</p>
          </div>
        </div>
        </div>
      </div>

      {/* Lead Generation Metrics */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Lead Generation Metrics</h2>
          <div className="h-px bg-gradient-to-r from-gray-300 to-transparent mt-2"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4">
            <p className="text-sm text-gray-600 mb-2">Total Leads Generated</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatNumber(totals.leads)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {formatCurrency(totals.spend / totals.leads)} Cost Per Lead
            </p>
          </div>
          <div className="glass-card p-4">
            <p className="text-sm text-gray-600 mb-2">Webinars Booked</p>
            <p className="text-2xl font-bold text-gray-900">
              {webinarStats.registrations}
            </p>
          </div>
          <div className="glass-card p-4">
            <p className="text-sm text-gray-600 mb-2">Sales Calls Booked</p>
            <p className="text-2xl font-bold text-gray-900">
              {callStats.booked}
            </p>
          </div>
          <div className="glass-card p-4">
            <p className="text-sm text-gray-600 mb-2">Instagram Followers</p>
            <p className="text-2xl font-bold text-gray-900">
              +{formatNumber(instagramFollowersGained)}
            </p>
          </div>
        </div>
      </div>

      {/* Sales & Revenue Metrics */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Sales & Revenue Metrics</h2>
          <div className="h-px bg-gradient-to-r from-gray-300 to-transparent mt-2"></div>
        </div>
        <div className="glass-card p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Total Purchases</p>
              <p className="text-3xl font-bold text-gray-900">{totals.purchases}</p>
              <p className="text-xs text-gray-500 mt-1">
                {formatPercentage((totals.purchases / totals.leads) * 100)} conversion
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Webinars Attended</p>
              <p className="text-3xl font-bold text-gray-900">{webinarStats.attended}</p>
              <p className="text-xs text-gray-500 mt-1">
                {formatPercentage(
                  (webinarStats.attended / webinarStats.registrations) * 100
                )}{' '}
                show-up
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Calls Completed</p>
              <p className="text-3xl font-bold text-gray-900">{callStats.completed}</p>
              <p className="text-xs text-gray-500 mt-1">
                {formatPercentage((callStats.completed / callStats.booked) * 100)} completion
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(totals.revenue)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Breakdown (L1, L2, L3) */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Sales Tier Breakdown
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">L1 Sales (Front-End)</p>
            <p className="text-4xl font-bold text-gray-900 mb-2">
              {webinarStats.l1Sales}
            </p>
            <p className="text-lg font-semibold text-green-600 mb-1">
              {formatCurrency(webinarStats.l1Revenue)}
            </p>
            <p className="text-sm text-gray-600">
              Cost per L1:{' '}
              {formatCurrency(totals.spend / webinarStats.l1Sales)}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">L2 Sales (High-Ticket)</p>
            <p className="text-4xl font-bold text-gray-900 mb-2">{l2Sales}</p>
            <p className="text-lg font-semibold text-blue-600 mb-1">
              {formatCurrency(l2Revenue)}
            </p>
            <p className="text-sm text-gray-600">
              Cost per L2: {formatCurrency(totals.spend / l2Sales)}
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">L3 Sales (Upsells)</p>
            <p className="text-4xl font-bold text-gray-900 mb-2">{l3Sales}</p>
            <p className="text-lg font-semibold text-purple-600 mb-1">
              {formatCurrency(l3Revenue)}
            </p>
            <p className="text-sm text-gray-600">
              Cost per L3: {formatCurrency(totals.spend / l3Sales)}
            </p>
          </div>
        </div>
      </div>

      {/* Conversion Funnel Visualization */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Conversion Funnel</h2>
          <div className="h-px bg-gradient-to-r from-gray-300 to-transparent mt-2"></div>
        </div>
        <div className="glass-card p-6">
          <div className="space-y-3 max-w-full">
            {funnelData.map((stage, index) => {
              // Calculate width as percentage of container, not absolute percentage
              const widthPercent = 100 - (index * 10); // Each stage gets 10% narrower
              return (
                <div key={stage.stage} className="relative w-full">
                  <div
                    className={`bg-gradient-to-r ${stage.color} text-white p-4 rounded-lg shadow-md transition-all hover:shadow-lg mx-auto`}
                    style={{
                      width: `${widthPercent}%`,
                      maxWidth: '100%',
                    }}
                  >
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium opacity-90 truncate">
                          {stage.stage}
                        </p>
                        <p className="text-2xl md:text-3xl font-bold">
                          {formatNumber(stage.count)}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xl md:text-2xl font-bold">
                          {formatPercentage(stage.percentage)}
                        </p>
                        <p className="text-xs opacity-75">
                          {index > 0 ? `${formatPercentage((stage.count / funnelData[index - 1].count) * 100)} of prev` : 'Total'}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < funnelData.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="text-gray-400 text-xl">↓</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ad Creative Performance */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Ad Creative Performance</h2>
          <div className="h-px bg-gradient-to-r from-gray-300 to-transparent mt-2"></div>
        </div>
        <div className="glass-card p-6">

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Creative
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Spend
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Leads
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Cost Per Lead
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Sales
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Cost Per Sale
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  ROAS
                </th>
              </tr>
            </thead>
            <tbody>
              {adCreatives.map((creative) => (
                <tr
                  key={creative.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={creative.thumbnail}
                        alt={creative.name}
                        className="w-16 h-16 rounded object-cover shadow-sm"
                      />
                      <div>
                        <p className="font-medium text-gray-900">
                          {creative.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {creative.campaignName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right py-3 px-4">
                    {formatCurrency(creative.spend)}
                  </td>
                  <td className="text-right py-3 px-4">{creative.leads}</td>
                  <td className="text-right py-3 px-4">
                    {formatCurrency(creative.costPerLead)}
                  </td>
                  <td className="text-right py-3 px-4">
                    {creative.purchases}
                  </td>
                  <td className="text-right py-3 px-4">
                    {creative.purchases > 0
                      ? formatCurrency(creative.costPerSale)
                      : '-'}
                  </td>
                  <td className="text-right py-3 px-4 font-semibold text-green-600">
                    {formatROAS(creative.roas)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>

      {/* Campaign Performance Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Campaign Performance Breakdown</h2>
          <div className="h-px bg-gradient-to-r from-gray-300 to-transparent mt-2"></div>
        </div>
        <div className="glass-card p-6">

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
    </div>
  );
};

export default Dashboard;
