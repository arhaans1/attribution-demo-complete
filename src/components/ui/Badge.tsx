import { getStatusColor } from '../../lib/utils';

interface BadgeProps {
  status: string;
  text?: string;
}

export const Badge = ({ status, text }: BadgeProps) => {
  const displayText = text || status.charAt(0).toUpperCase() + status.slice(1);
  
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
        status
      )}`}
    >
      {displayText}
    </span>
  );
};
