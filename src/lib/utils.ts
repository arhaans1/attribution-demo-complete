// Format currency in Indian Rupee format
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

// Format numbers with Indian number system commas
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-IN').format(num);
};

// Format percentage with one decimal place
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

// Format ROAS with two decimal places
export const formatROAS = (value: number): string => {
  return `${value.toFixed(2)}x`;
};

// Get status badge color
export const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    active: 'bg-green-100 text-green-700',
    paused: 'bg-gray-100 text-gray-700',
    lead: 'bg-blue-100 text-blue-700',
    registered: 'bg-yellow-100 text-yellow-700',
    attended: 'bg-purple-100 text-purple-700',
    purchased: 'bg-green-100 text-green-700',
    completed: 'bg-green-100 text-green-700',
    upcoming: 'bg-blue-100 text-blue-700',
  };
  return colors[status] || 'bg-gray-100 text-gray-700';
};

// Calculate change percentage
export const calculateChange = (current: number, previous: number): number => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};

// Format date
export const formatDate = (dateString: string): string => {
  return dateString;
};

// Get change indicator
export const getChangeIndicator = (value: number): { text: string; color: string; icon: string } => {
  if (value > 0) {
    return {
      text: `+${value.toFixed(1)}% vs last period`,
      color: 'text-green-600',
      icon: '↑',
    };
  } else if (value < 0) {
    return {
      text: `${value.toFixed(1)}% vs last period`,
      color: 'text-red-600',
      icon: '↓',
    };
  } else {
    return {
      text: 'No change',
      color: 'text-gray-600',
      icon: '→',
    };
  }
};

// Truncate text
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Get metric icon
export const getMetricIcon = (metric: string): string => {
  const icons: Record<string, string> = {
    spend: '💰',
    revenue: '💵',
    roas: '📈',
    reach: '👥',
    clicks: '🖱️',
    leads: '📝',
    purchases: '🛒',
    registrations: '📹',
    attendance: '✅',
    calls: '📞',
    sales: '💎',
  };
  return icons[metric] || '📊';
};
