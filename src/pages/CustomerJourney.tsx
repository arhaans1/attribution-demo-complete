import { useState } from 'react';
import { Badge } from '../components/ui/Badge';
import { leads } from '../data/dummyData';
import { formatCurrency } from '../lib/utils';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';

const CustomerJourney = () => {
  const [expandedLeads, setExpandedLeads] = useState<Set<string>>(new Set());

  const toggleLead = (email: string) => {
    const newExpanded = new Set(expandedLeads);
    if (newExpanded.has(email)) {
      newExpanded.delete(email);
    } else {
      newExpanded.add(email);
    }
    setExpandedLeads(newExpanded);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Customer Journey</h1>
        <p className="text-gray-600 mt-1">
          Track every touchpoint from ad click to purchase
        </p>
        
        {/* Search and Filters */}
        <div className="mt-4 flex gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by email, name, or phone"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
            <option>All Status</option>
            <option>Lead</option>
            <option>Registered</option>
            <option>Attended</option>
            <option>Purchased</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div className="glass-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Email
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Name
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  First Touch
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Events
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Value
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Last Activity
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <>
                  {/* Lead Row */}
                  <tr
                    key={lead.email}
                    className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                    onClick={() => toggleLead(lead.email)}
                  >
                    <td className="py-3 px-4">
                      {expandedLeads.has(lead.email) ? (
                        <ChevronDown size={16} className="text-gray-600" />
                      ) : (
                        <ChevronRight size={16} className="text-gray-600" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {lead.email}
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-900">
                      {lead.name}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <div>{lead.firstTouchSource}</div>
                      <div className="text-xs text-gray-500">
                        {lead.firstTouchCampaign}
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                        {lead.totalEvents}
                      </span>
                    </td>
                    <td className="text-right py-3 px-4 font-semibold text-gray-900">
                      {lead.totalValue > 0
                        ? formatCurrency(lead.totalValue)
                        : '-'}
                    </td>
                    <td className="text-center py-3 px-4">
                      <Badge status={lead.status} />
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {lead.lastActivity}
                    </td>
                  </tr>

                  {/* Expanded Journey Timeline */}
                  {expandedLeads.has(lead.email) && (
                    <tr>
                      <td colSpan={8} className="bg-gray-50 p-6">
                        <div className="max-w-4xl mx-auto">
                          <div className="mb-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {lead.name}'s Journey
                            </h3>
                            <p className="text-sm text-gray-600">
                              {lead.totalEvents} touchpoints • First touch:{' '}
                              {lead.firstTouchDate}
                            </p>
                          </div>

                          {/* Timeline */}
                          <div className="relative space-y-6">
                            {/* Vertical line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                            {lead.journey.map((event, index) => (
                              <div
                                key={index}
                                className="relative flex gap-6 items-start"
                              >
                                {/* Icon */}
                                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center text-2xl">
                                  {event.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1 glass-card p-4">
                                  <div className="flex items-start justify-between mb-2">
                                    <div>
                                      <p className="font-semibold text-gray-900">
                                        {event.title}
                                      </p>
                                      <p className="text-xs text-gray-500 mt-1">
                                        {event.timestamp}
                                      </p>
                                    </div>
                                    <span className="text-xs font-medium text-primary px-2 py-1 bg-blue-50 rounded">
                                      {event.type.replace('_', ' ')}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600 whitespace-pre-line">
                                    {event.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Attribution Summary */}
                          {lead.status === 'purchased' && (
                            <div className="mt-8 glass-card p-6 bg-gradient-to-br from-green-50 to-green-100">
                              <h4 className="font-bold text-gray-900 mb-3">
                                Attribution Summary
                              </h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-gray-600">First Touch</p>
                                  <p className="font-semibold text-gray-900">
                                    {lead.firstTouchSource}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-600">
                                    Total Revenue
                                  </p>
                                  <p className="font-semibold text-gray-900">
                                    {formatCurrency(lead.totalValue)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerJourney;
