import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`glass-card p-6 ${className}`}>
      {children}
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: string;
  changeColor?: string;
  icon?: ReactNode;
  bgColor?: string;
}

export const MetricCard = ({
  title,
  value,
  subtitle,
  change,
  changeColor = 'text-green-600',
  icon,
  bgColor = 'bg-gradient-to-br from-blue-50 to-blue-100',
}: MetricCardProps) => {
  return (
    <div className={`metric-card ${bgColor}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
          )}
          {change && (
            <p className={`text-sm font-medium ${changeColor}`}>{change}</p>
          )}
        </div>
        {icon && (
          <div className="text-4xl opacity-80">{icon}</div>
        )}
      </div>
    </div>
  );
};
