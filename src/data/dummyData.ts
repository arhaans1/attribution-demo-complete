// Campaign Data Structure
export interface Ad {
  id: string;
  name: string;
  thumbnail: string;
  spend: number;
  reach: number;
  impressions: number;
  clicks: number;
  ctr: number;
  landingPageViews: number;
  cpm: number;
  frequency: number;
  videoViews?: number;
  videoViewsBreakdown?: {
    twentyFive: number;
    fifty: number;
    hundred: number;
  };
  leads: number;
  purchases: number;
  revenue: number;
  roas: number;
}

export interface AdSet {
  id: string;
  name: string;
  spend: number;
  reach: number;
  clicks: number;
  ctr: number;
  leads: number;
  purchases: number;
  revenue: number;
  roas: number;
  ads: Ad[];
}

export interface Campaign {
  id: string;
  name: string;
  spend: number;
  reach: number;
  impressions: number;
  clicks: number;
  ctr: number;
  leads: number;
  purchases: number;
  revenue: number;
  roas: number;
  status: 'active' | 'paused';
  adSets: AdSet[];
}

export const campaigns: Campaign[] = [
  {
    id: 'camp_1',
    name: 'High-Ticket Coaching Webinar - Oct 2025',
    spend: 185000,
    reach: 98456,
    impressions: 245678,
    clicks: 4567,
    ctr: 4.64,
    leads: 189,
    purchases: 15,
    revenue: 735000,
    roas: 3.97,
    status: 'active',
    adSets: [
      {
        id: 'adset_1_1',
        name: 'Cold Audience - Coaches 25-45',
        spend: 95000,
        reach: 52345,
        clicks: 2456,
        ctr: 4.69,
        leads: 98,
        purchases: 8,
        revenue: 392000,
        roas: 4.13,
        ads: [
          {
            id: 'ad_1_1_1',
            name: 'Webinar Invitation - Video Ad',
            thumbnail: 'https://placehold.co/150x150/3b82f6/white?text=Video+Ad',
            spend: 52000,
            reach: 28456,
            impressions: 134567,
            clicks: 1345,
            ctr: 5.2,
            landingPageViews: 1123,
            cpm: 387,
            frequency: 2.1,
            videoViews: 8456,
            videoViewsBreakdown: {
              twentyFive: 6234,
              fifty: 3456,
              hundred: 1234,
            },
            leads: 56,
            purchases: 5,
            revenue: 245000,
            roas: 4.71,
          },
          {
            id: 'ad_1_1_2',
            name: 'Webinar Invitation - Carousel Ad',
            thumbnail: 'https://placehold.co/150x150/10b981/white?text=Carousel',
            spend: 43000,
            reach: 23889,
            impressions: 111111,
            clicks: 1111,
            ctr: 4.8,
            landingPageViews: 945,
            cpm: 387,
            frequency: 1.9,
            leads: 42,
            purchases: 3,
            revenue: 147000,
            roas: 3.42,
          },
        ],
      },
      {
        id: 'adset_1_2',
        name: 'Warm Audience - Website Visitors',
        spend: 90000,
        reach: 46111,
        clicks: 2111,
        ctr: 4.58,
        leads: 91,
        purchases: 7,
        revenue: 343000,
        roas: 3.81,
        ads: [
          {
            id: 'ad_1_2_1',
            name: 'Limited Seats - Urgency Video',
            thumbnail: 'https://placehold.co/150x150/f59e0b/white?text=Urgency',
            spend: 48000,
            reach: 25234,
            impressions: 98765,
            clicks: 1156,
            ctr: 5.1,
            landingPageViews: 987,
            cpm: 486,
            frequency: 2.3,
            videoViews: 5678,
            videoViewsBreakdown: {
              twentyFive: 4123,
              fifty: 2456,
              hundred: 987,
            },
            leads: 52,
            purchases: 4,
            revenue: 196000,
            roas: 4.08,
          },
          {
            id: 'ad_1_2_2',
            name: 'Social Proof - Testimonial Carousel',
            thumbnail: 'https://placehold.co/150x150/a855f7/white?text=Testimonial',
            spend: 42000,
            reach: 20877,
            impressions: 87654,
            clicks: 955,
            ctr: 4.2,
            landingPageViews: 812,
            cpm: 479,
            frequency: 2.1,
            leads: 39,
            purchases: 3,
            revenue: 147000,
            roas: 3.50,
          },
        ],
      },
    ],
  },
  {
    id: 'camp_2',
    name: 'Front-End Product Launch - Oct 2025',
    spend: 145000,
    reach: 112345,
    impressions: 298765,
    clicks: 5234,
    ctr: 4.67,
    leads: 198,
    purchases: 18,
    revenue: 594000,
    roas: 4.10,
    status: 'active',
    adSets: [
      {
        id: 'adset_2_1',
        name: 'Interest Targeting - Online Coaches',
        spend: 78000,
        reach: 62456,
        clicks: 2890,
        ctr: 4.63,
        leads: 112,
        purchases: 10,
        revenue: 330000,
        roas: 4.23,
        ads: [
          {
            id: 'ad_2_1_1',
            name: 'Course Promo - Image Ad',
            thumbnail: 'https://placehold.co/150x150/3b82f6/white?text=Course',
            spend: 42000,
            reach: 34567,
            impressions: 156789,
            clicks: 1567,
            ctr: 4.54,
            landingPageViews: 1334,
            cpm: 268,
            frequency: 2.2,
            leads: 62,
            purchases: 6,
            revenue: 198000,
            roas: 4.71,
          },
          {
            id: 'ad_2_1_2',
            name: 'Course Promo - Video Ad',
            thumbnail: 'https://placehold.co/150x150/10b981/white?text=Video',
            spend: 36000,
            reach: 27889,
            impressions: 134567,
            clicks: 1323,
            ctr: 4.74,
            landingPageViews: 1124,
            cpm: 267,
            frequency: 2.1,
            videoViews: 6789,
            videoViewsBreakdown: {
              twentyFive: 5123,
              fifty: 2890,
              hundred: 1456,
            },
            leads: 50,
            purchases: 4,
            revenue: 132000,
            roas: 3.67,
          },
        ],
      },
      {
        id: 'adset_2_2',
        name: 'Lookalike Audience - Past Buyers',
        spend: 67000,
        reach: 49889,
        clicks: 2344,
        ctr: 4.70,
        leads: 86,
        purchases: 8,
        revenue: 264000,
        roas: 3.94,
        ads: [
          {
            id: 'ad_2_2_1',
            name: 'Exclusive Discount - Static Image',
            thumbnail: 'https://placehold.co/150x150/f59e0b/white?text=Discount',
            spend: 35000,
            reach: 26234,
            impressions: 123456,
            clicks: 1234,
            ctr: 4.71,
            landingPageViews: 1049,
            cpm: 283,
            frequency: 2.0,
            leads: 45,
            purchases: 4,
            revenue: 132000,
            roas: 3.77,
          },
          {
            id: 'ad_2_2_2',
            name: 'Limited Time Offer - Video',
            thumbnail: 'https://placehold.co/150x150/a855f7/white?text=Timer',
            spend: 32000,
            reach: 23655,
            impressions: 112345,
            clicks: 1110,
            ctr: 4.69,
            landingPageViews: 943,
            cpm: 285,
            frequency: 1.9,
            videoViews: 5234,
            videoViewsBreakdown: {
              twentyFive: 3890,
              fifty: 2123,
              hundred: 987,
            },
            leads: 41,
            purchases: 4,
            revenue: 132000,
            roas: 4.13,
          },
        ],
      },
    ],
  },
  {
    id: 'camp_3',
    name: 'Retargeting - Abandoned Leads',
    spend: 122340,
    reach: 34877,
    impressions: 187654,
    clicks: 2544,
    ctr: 7.29,
    leads: 100,
    purchases: 4,
    revenue: 516000,
    roas: 4.22,
    status: 'active',
    adSets: [
      {
        id: 'adset_3_1',
        name: 'Webinar No-Shows',
        spend: 68000,
        reach: 18456,
        clicks: 1456,
        ctr: 7.89,
        leads: 58,
        purchases: 2,
        revenue: 258000,
        roas: 3.79,
        ads: [
          {
            id: 'ad_3_1_1',
            name: 'You Missed It - Replay Available',
            thumbnail: 'https://placehold.co/150x150/3b82f6/white?text=Replay',
            spend: 38000,
            reach: 10456,
            impressions: 98765,
            clicks: 823,
            ctr: 7.87,
            landingPageViews: 698,
            cpm: 385,
            frequency: 1.8,
            leads: 32,
            purchases: 1,
            revenue: 129000,
            roas: 3.39,
          },
          {
            id: 'ad_3_1_2',
            name: 'Last Chance - Bonus Included',
            thumbnail: 'https://placehold.co/150x150/10b981/white?text=Bonus',
            spend: 30000,
            reach: 8000,
            impressions: 88889,
            clicks: 633,
            ctr: 7.91,
            landingPageViews: 537,
            cpm: 338,
            frequency: 1.7,
            leads: 26,
            purchases: 1,
            revenue: 129000,
            roas: 4.30,
          },
        ],
      },
      {
        id: 'adset_3_2',
        name: 'Call No-Shows',
        spend: 54340,
        reach: 16421,
        clicks: 1088,
        ctr: 6.63,
        leads: 42,
        purchases: 2,
        revenue: 258000,
        roas: 4.75,
        ads: [
          {
            id: 'ad_3_2_1',
            name: 'Reschedule Your Call',
            thumbnail: 'https://placehold.co/150x150/f59e0b/white?text=Calendar',
            spend: 29340,
            reach: 8890,
            impressions: 45678,
            clicks: 589,
            ctr: 6.63,
            landingPageViews: 500,
            cpm: 642,
            frequency: 1.6,
            leads: 23,
            purchases: 1,
            revenue: 129000,
            roas: 4.40,
          },
          {
            id: 'ad_3_2_2',
            name: 'Special Offer - Book Now',
            thumbnail: 'https://placehold.co/150x150/a855f7/white?text=Offer',
            spend: 25000,
            reach: 7531,
            impressions: 41976,
            clicks: 499,
            ctr: 6.63,
            landingPageViews: 423,
            cpm: 596,
            frequency: 1.5,
            leads: 19,
            purchases: 1,
            revenue: 129000,
            roas: 5.16,
          },
        ],
      },
    ],
  },
];

// Customer Journey Data
export interface JourneyEvent {
  timestamp: string;
  type: string;
  title: string;
  description: string;
  icon: string;
  source?: string;
  metadata?: Record<string, any>;
}

export interface Lead {
  email: string;
  name: string;
  firstTouchSource: string;
  firstTouchCampaign: string;
  firstTouchDate: string;
  totalEvents: number;
  totalValue: number;
  status: 'lead' | 'registered' | 'attended' | 'purchased';
  lastActivity: string;
  journey: JourneyEvent[];
}

export const leads: Lead[] = [
  {
    email: 'priya.sharma@gmail.com',
    name: 'Priya Sharma',
    firstTouchSource: 'Facebook Ad',
    firstTouchCampaign: 'High-Ticket Coaching Webinar',
    firstTouchDate: 'Oct 15, 2025, 10:23 AM',
    totalEvents: 12,
    totalValue: 49000,
    status: 'purchased',
    lastActivity: 'Oct 28, 2025',
    journey: [
      {
        timestamp: 'Oct 15, 2025 - 10:23 AM',
        type: 'ad_click',
        title: 'Ad Click - "Webinar Invitation - Video Ad"',
        description: 'Campaign: High-Ticket Coaching Webinar\nUTM Source: facebook | Medium: cpc | Campaign: webinar_oct\nfbclid: fb.1.1697368980.IwAR2x...',
        icon: '🎯',
      },
      {
        timestamp: 'Oct 15, 2025 - 10:24 AM',
        type: 'page_view',
        title: 'Landing Page View - https://example.com/webinar-register',
        description: 'Time on page: 2m 34s | Scroll depth: 85%',
        icon: '👁️',
      },
      {
        timestamp: 'Oct 15, 2025 - 10:26 AM',
        type: 'form_submit',
        title: 'Form Submission - Webinar Registration',
        description: 'Email: priya.sharma@gmail.com | Phone: +91 98765 43210',
        icon: '📝',
      },
      {
        timestamp: 'Oct 16, 2025 - 9:00 AM',
        type: 'email_open',
        title: 'Email Opened - "Webinar Reminder - 1 Day to Go"',
        description: 'Source: GoHighLevel',
        icon: '📧',
      },
      {
        timestamp: 'Oct 17, 2025 - 7:00 PM',
        type: 'webinar_attended',
        title: 'Webinar Attended - "Scale to 7 Figures Masterclass"',
        description: 'Duration: 58 minutes (96% attendance)\nSource: Zoom',
        icon: '📹',
      },
      {
        timestamp: 'Oct 18, 2025 - 10:15 AM',
        type: 'call_booked',
        title: 'Sales Call Booked - Calendar Link Clicked',
        description: 'Call scheduled: Oct 22, 2025 at 3:00 PM\nSource: GoHighLevel',
        icon: '📞',
      },
      {
        timestamp: 'Oct 20, 2025 - 9:00 AM',
        type: 'email_open',
        title: 'Email Opened - "Call Reminder - 2 Days Away"',
        description: 'Source: GoHighLevel',
        icon: '📧',
      },
      {
        timestamp: 'Oct 22, 2025 - 3:00 PM',
        type: 'call_completed',
        title: 'Sales Call Completed - 45 minutes',
        description: 'Closer: Punith Kumar\nOutcome: Interested, sent proposal\nSource: GoHighLevel (Opportunity created)',
        icon: '📞',
      },
      {
        timestamp: 'Oct 23, 2025 - 11:30 AM',
        type: 'page_view',
        title: 'Page View - Proposal Link Opened',
        description: 'Time on page: 8m 12s',
        icon: '👁️',
      },
      {
        timestamp: 'Oct 25, 2025 - 10:00 AM',
        type: 'email_open',
        title: 'Email Opened - "Special Discount - 48 Hours Only"',
        description: 'Source: GoHighLevel',
        icon: '📧',
      },
      {
        timestamp: 'Oct 28, 2025 - 4:23 PM',
        type: 'checkout_initiated',
        title: 'Payment Page Visited - Checkout Initiated',
        description: 'Product: High-Ticket Coaching Program',
        icon: '💳',
      },
      {
        timestamp: 'Oct 28, 2025 - 4:28 PM',
        type: 'purchase',
        title: 'Purchase Completed - ₹49,000',
        description: 'Payment Method: Razorpay (UPI)\nProduct: High-Ticket Coaching Program\nSource: GoHighLevel (Opportunity won)',
        icon: '✅',
      },
    ],
  },
  {
    email: 'rahul.verma@yahoo.com',
    name: 'Rahul Verma',
    firstTouchSource: 'Facebook Ad',
    firstTouchCampaign: 'High-Ticket Coaching Webinar',
    firstTouchDate: 'Oct 16, 2025, 2:45 PM',
    totalEvents: 5,
    totalValue: 0,
    status: 'registered',
    lastActivity: 'Oct 17, 2025',
    journey: [
      {
        timestamp: 'Oct 16, 2025 - 2:45 PM',
        type: 'ad_click',
        title: 'Ad Click - "Webinar Invitation - Carousel Ad"',
        description: 'Campaign: High-Ticket Coaching Webinar',
        icon: '🎯',
      },
      {
        timestamp: 'Oct 16, 2025 - 2:46 PM',
        type: 'page_view',
        title: 'Landing Page View',
        description: 'Time on page: 1m 12s',
        icon: '👁️',
      },
      {
        timestamp: 'Oct 16, 2025 - 2:47 PM',
        type: 'form_submit',
        title: 'Form Submission - Webinar Registration',
        description: 'Email: rahul.verma@yahoo.com',
        icon: '📝',
      },
      {
        timestamp: 'Oct 17, 2025 - 9:00 AM',
        type: 'email_open',
        title: 'Email Opened - "Webinar Reminder"',
        description: 'Source: GoHighLevel',
        icon: '📧',
      },
      {
        timestamp: 'Oct 17, 2025 - 7:00 PM',
        type: 'webinar_no_show',
        title: 'Webinar No-Show',
        description: 'Did not attend scheduled webinar',
        icon: '❌',
      },
    ],
  },
  {
    email: 'anjali.desai@gmail.com',
    name: 'Anjali Desai',
    firstTouchSource: 'Facebook Ad',
    firstTouchCampaign: 'Front-End Product Launch',
    firstTouchDate: 'Oct 18, 2025, 11:20 AM',
    totalEvents: 8,
    totalValue: 0,
    status: 'attended',
    lastActivity: 'Oct 25, 2025',
    journey: [
      {
        timestamp: 'Oct 18, 2025 - 11:20 AM',
        type: 'ad_click',
        title: 'Ad Click - "Course Promo - Image Ad"',
        description: 'Campaign: Front-End Product Launch',
        icon: '🎯',
      },
      {
        timestamp: 'Oct 18, 2025 - 11:21 AM',
        type: 'page_view',
        title: 'Landing Page View',
        description: 'Time on page: 3m 45s',
        icon: '👁️',
      },
      {
        timestamp: 'Oct 18, 2025 - 11:24 AM',
        type: 'form_submit',
        title: 'Form Submission - Webinar Registration',
        description: 'Email: anjali.desai@gmail.com',
        icon: '📝',
      },
      {
        timestamp: 'Oct 20, 2025 - 7:00 PM',
        type: 'webinar_attended',
        title: 'Webinar Attended',
        description: 'Duration: 62 minutes (100% attendance)',
        icon: '📹',
      },
      {
        timestamp: 'Oct 21, 2025 - 10:00 AM',
        type: 'call_booked',
        title: 'Sales Call Booked',
        description: 'Call scheduled for Oct 25',
        icon: '📞',
      },
      {
        timestamp: 'Oct 23, 2025 - 9:00 AM',
        type: 'email_open',
        title: 'Email Opened - "Call Reminder"',
        description: 'Source: GoHighLevel',
        icon: '📧',
      },
      {
        timestamp: 'Oct 25, 2025 - 3:00 PM',
        type: 'call_no_show',
        title: 'Sales Call No-Show',
        description: 'Did not attend scheduled call',
        icon: '❌',
      },
      {
        timestamp: 'Oct 25, 2025 - 3:15 PM',
        type: 'opportunity_updated',
        title: 'Opportunity Status Updated',
        description: 'Status: No Show in GHL',
        icon: '📊',
      },
    ],
  },
  {
    email: 'vikram.singh@outlook.com',
    name: 'Vikram Singh',
    firstTouchSource: 'Facebook Ad',
    firstTouchCampaign: 'Front-End Product Launch',
    firstTouchDate: 'Oct 19, 2025, 9:15 AM',
    totalEvents: 6,
    totalValue: 3300,
    status: 'purchased',
    lastActivity: 'Oct 19, 2025',
    journey: [
      {
        timestamp: 'Oct 19, 2025 - 9:15 AM',
        type: 'ad_click',
        title: 'Ad Click - "Course Promo - Video Ad"',
        description: 'Campaign: Front-End Product Launch',
        icon: '🎯',
      },
      {
        timestamp: 'Oct 19, 2025 - 9:16 AM',
        type: 'page_view',
        title: 'Landing Page View - Sales Page',
        description: 'Time on page: 4m 20s',
        icon: '👁️',
      },
      {
        timestamp: 'Oct 19, 2025 - 9:20 AM',
        type: 'add_to_cart',
        title: 'Add to Cart',
        description: 'Product: Front-End Course',
        icon: '🛒',
      },
      {
        timestamp: 'Oct 19, 2025 - 9:22 AM',
        type: 'checkout_view',
        title: 'Checkout Page View',
        description: '',
        icon: '💳',
      },
      {
        timestamp: 'Oct 19, 2025 - 9:25 AM',
        type: 'payment_initiated',
        title: 'Payment Initiated',
        description: 'Payment gateway: Razorpay',
        icon: '💳',
      },
      {
        timestamp: 'Oct 19, 2025 - 9:26 AM',
        type: 'purchase',
        title: 'Purchase Completed - ₹3,300',
        description: 'Product: Front-End Course\nPayment Method: UPI',
        icon: '✅',
      },
    ],
  },
  {
    email: 'neha.kapoor@gmail.com',
    name: 'Neha Kapoor',
    firstTouchSource: 'Facebook Ad',
    firstTouchCampaign: 'High-Ticket Coaching Webinar',
    firstTouchDate: 'Oct 12, 2025, 3:30 PM',
    totalEvents: 15,
    totalValue: 49000,
    status: 'purchased',
    lastActivity: 'Nov 2, 2025',
    journey: [
      {
        timestamp: 'Oct 12, 2025 - 3:30 PM',
        type: 'ad_click',
        title: 'Ad Click - "Limited Seats - Urgency Video"',
        description: 'Campaign: High-Ticket Coaching Webinar',
        icon: '🎯',
      },
      {
        timestamp: 'Oct 12, 2025 - 3:31 PM',
        type: 'page_view',
        title: 'Landing Page View',
        description: 'Time on page: 1m 45s (exited)',
        icon: '👁️',
      },
      {
        timestamp: 'Oct 14, 2025 - 10:00 AM',
        type: 'ad_click',
        title: 'Retargeting Ad Click - "You Missed It - Replay Available"',
        description: 'Campaign: Retargeting - Abandoned Leads',
        icon: '🎯',
      },
      {
        timestamp: 'Oct 14, 2025 - 10:01 AM',
        type: 'page_view',
        title: 'Landing Page View',
        description: 'Time on page: 3m 20s',
        icon: '👁️',
      },
      {
        timestamp: 'Oct 14, 2025 - 10:04 AM',
        type: 'form_submit',
        title: 'Form Submission - Webinar Registration',
        description: 'Email: neha.kapoor@gmail.com',
        icon: '📝',
      },
      {
        timestamp: 'Oct 15, 2025 - 7:00 PM',
        type: 'webinar_attended',
        title: 'Webinar Attended',
        description: 'Duration: 55 minutes (91% attendance)',
        icon: '📹',
      },
      {
        timestamp: 'Oct 16, 2025 - 11:00 AM',
        type: 'call_booked',
        title: 'Sales Call Booked',
        description: 'Call scheduled for Oct 18',
        icon: '📞',
      },
      {
        timestamp: 'Oct 18, 2025 - 2:00 PM',
        type: 'call_completed',
        title: 'Sales Call Completed',
        description: 'Closer: Punith Kumar\nOutcome: Interested',
        icon: '📞',
      },
      {
        timestamp: 'Oct 20, 2025 - 10:00 AM',
        type: 'page_view',
        title: 'Proposal Link Opened',
        description: 'Time on page: 6m 30s',
        icon: '👁️',
      },
      {
        timestamp: 'Oct 22, 2025 - 9:00 AM',
        type: 'email_open',
        title: 'Email Opened - Follow-up',
        description: 'Source: GoHighLevel',
        icon: '📧',
      },
      {
        timestamp: 'Oct 25, 2025 - 4:00 PM',
        type: 'ad_click',
        title: 'Retargeting Ad Click - "Special Offer - Book Now"',
        description: 'Campaign: Retargeting',
        icon: '🎯',
      },
      {
        timestamp: 'Oct 25, 2025 - 4:01 PM',
        type: 'checkout_view',
        title: 'Checkout Page View',
        description: '',
        icon: '💳',
      },
      {
        timestamp: 'Oct 25, 2025 - 4:05 PM',
        type: 'payment_initiated',
        title: 'Payment Initiated',
        description: 'Payment gateway: Razorpay',
        icon: '💳',
      },
      {
        timestamp: 'Oct 25, 2025 - 4:07 PM',
        type: 'payment_failed',
        title: 'Payment Failed',
        description: 'Reason: Card declined',
        icon: '❌',
      },
      {
        timestamp: 'Nov 2, 2025 - 11:30 AM',
        type: 'purchase',
        title: 'Purchase Completed - ₹49,000',
        description: 'Product: High-Ticket Coaching Program\nPayment Method: UPI',
        icon: '✅',
      },
    ],
  },
];

// Sales Calls Data
export interface Closer {
  id: string;
  name: string;
  avatar: string;
  appointments: number;
  callsCompleted: number;
  completionRate: number;
  noShows: number;
  noShowRate: number;
  disqualified: number;
  disqualifiedRate: number;
  purchases: number;
  conversionRate: number;
  dealsLost: number;
  dealLostRate: number;
  totalRevenue: number;
}

export const closers: Closer[] = [
  {
    id: 'closer_1',
    name: 'Punith Kumar',
    avatar: 'PK',
    appointments: 42,
    callsCompleted: 32,
    completionRate: 76.2,
    noShows: 10,
    noShowRate: 23.8,
    disqualified: 3,
    disqualifiedRate: 9.4,
    purchases: 18,
    conversionRate: 56.3,
    dealsLost: 11,
    dealLostRate: 34.4,
    totalRevenue: 882000,
  },
  {
    id: 'closer_2',
    name: 'Arjun Mehta',
    avatar: 'AM',
    appointments: 35,
    callsCompleted: 26,
    completionRate: 74.3,
    noShows: 9,
    noShowRate: 25.7,
    disqualified: 4,
    disqualifiedRate: 15.4,
    purchases: 14,
    conversionRate: 53.8,
    dealsLost: 8,
    dealLostRate: 30.8,
    totalRevenue: 686000,
  },
  {
    id: 'closer_3',
    name: 'Unassigned',
    avatar: '?',
    appointments: 12,
    callsCompleted: 9,
    completionRate: 75.0,
    noShows: 3,
    noShowRate: 25.0,
    disqualified: 1,
    disqualifiedRate: 11.1,
    purchases: 5,
    conversionRate: 55.6,
    dealsLost: 3,
    dealLostRate: 33.3,
    totalRevenue: 245000,
  },
];

// Webinars Data
export interface Webinar {
  id: string;
  name: string;
  date: string;
  registrations: number;
  showUps: number;
  dropOffs: number;
  showUpRate: number;
  l1Conversions: number;
  l1Revenue: number;
  l1ConversionRate: number;
  adSpend: number;
  costPerAttendee: number;
  highTicketSales: number;
  highTicketRevenue: number;
  totalRevenue: number;
  profitLoss: number;
  roas: number;
  status: 'completed' | 'upcoming';
}

export const webinars: Webinar[] = [
  {
    id: 'web_1',
    name: 'Scale to 7 Figures Masterclass - Oct 17, 2025',
    date: 'Oct 17, 2025, 7:00 PM IST',
    registrations: 342,
    showUps: 198,
    dropOffs: 144,
    showUpRate: 57.9,
    l1Conversions: 12,
    l1Revenue: 39600,
    l1ConversionRate: 6.1,
    adSpend: 185000,
    costPerAttendee: 934,
    highTicketSales: 15,
    highTicketRevenue: 735000,
    totalRevenue: 774600,
    profitLoss: 589600,
    roas: 4.19,
    status: 'completed',
  },
  {
    id: 'web_2',
    name: 'AI for Coaches - Oct 3, 2025',
    date: 'Oct 3, 2025, 8:00 PM IST',
    registrations: 287,
    showUps: 165,
    dropOffs: 122,
    showUpRate: 57.5,
    l1Conversions: 9,
    l1Revenue: 29700,
    l1ConversionRate: 5.5,
    adSpend: 145000,
    costPerAttendee: 879,
    highTicketSales: 11,
    highTicketRevenue: 539000,
    totalRevenue: 568700,
    profitLoss: 423700,
    roas: 3.92,
    status: 'completed',
  },
  {
    id: 'web_3',
    name: 'Instagram Marketing Secrets - Sep 19, 2025',
    date: 'Sep 19, 2025, 7:30 PM IST',
    registrations: 198,
    showUps: 112,
    dropOffs: 86,
    showUpRate: 56.6,
    l1Conversions: 7,
    l1Revenue: 23100,
    l1ConversionRate: 6.3,
    adSpend: 98000,
    costPerAttendee: 875,
    highTicketSales: 6,
    highTicketRevenue: 294000,
    totalRevenue: 317100,
    profitLoss: 219100,
    roas: 3.24,
    status: 'completed',
  },
  {
    id: 'web_4',
    name: 'YouTube Growth Hacks - Sep 5, 2025',
    date: 'Sep 5, 2025, 8:00 PM IST',
    registrations: 156,
    showUps: 89,
    dropOffs: 67,
    showUpRate: 57.1,
    l1Conversions: 5,
    l1Revenue: 16500,
    l1ConversionRate: 5.6,
    adSpend: 78000,
    costPerAttendee: 876,
    highTicketSales: 4,
    highTicketRevenue: 196000,
    totalRevenue: 212500,
    profitLoss: 134500,
    roas: 2.72,
    status: 'completed',
  },
  {
    id: 'web_5',
    name: 'LinkedIn Lead Gen - Aug 22, 2025',
    date: 'Aug 22, 2025, 7:00 PM IST',
    registrations: 134,
    showUps: 76,
    dropOffs: 58,
    showUpRate: 56.7,
    l1Conversions: 4,
    l1Revenue: 13200,
    l1ConversionRate: 5.3,
    adSpend: 65000,
    costPerAttendee: 855,
    highTicketSales: 3,
    highTicketRevenue: 147000,
    totalRevenue: 160200,
    profitLoss: 95200,
    roas: 2.46,
    status: 'completed',
  },
  {
    id: 'web_6',
    name: 'Email Marketing Mastery - Aug 8, 2025',
    date: 'Aug 8, 2025, 8:00 PM IST',
    registrations: 112,
    showUps: 64,
    dropOffs: 48,
    showUpRate: 57.1,
    l1Conversions: 3,
    l1Revenue: 9900,
    l1ConversionRate: 4.7,
    adSpend: 52000,
    costPerAttendee: 813,
    highTicketSales: 2,
    highTicketRevenue: 98000,
    totalRevenue: 107900,
    profitLoss: 55900,
    roas: 2.07,
    status: 'completed',
  },
  {
    id: 'web_7',
    name: 'Funnel Building 101 - Jul 25, 2025',
    date: 'Jul 25, 2025, 7:30 PM IST',
    registrations: 98,
    showUps: 56,
    dropOffs: 42,
    showUpRate: 57.1,
    l1Conversions: 2,
    l1Revenue: 6600,
    l1ConversionRate: 3.6,
    adSpend: 45000,
    costPerAttendee: 804,
    highTicketSales: 1,
    highTicketRevenue: 49000,
    totalRevenue: 55600,
    profitLoss: 10600,
    roas: 1.24,
    status: 'completed',
  },
  {
    id: 'web_8',
    name: 'Content Creation Secrets - Jul 11, 2025',
    date: 'Jul 11, 2025, 8:00 PM IST',
    registrations: 89,
    showUps: 52,
    dropOffs: 37,
    showUpRate: 58.4,
    l1Conversions: 2,
    l1Revenue: 6600,
    l1ConversionRate: 3.8,
    adSpend: 38000,
    costPerAttendee: 731,
    highTicketSales: 1,
    highTicketRevenue: 49000,
    totalRevenue: 55600,
    profitLoss: 17600,
    roas: 1.46,
    status: 'completed',
  },
  {
    id: 'web_9',
    name: 'AI Automation for Coaches - Nov 20, 2025',
    date: 'Nov 20, 2025, 7:00 PM IST',
    registrations: 78,
    showUps: 0,
    dropOffs: 0,
    showUpRate: 0,
    l1Conversions: 0,
    l1Revenue: 0,
    l1ConversionRate: 0,
    adSpend: 0,
    costPerAttendee: 0,
    highTicketSales: 0,
    highTicketRevenue: 0,
    totalRevenue: 0,
    profitLoss: 0,
    roas: 0,
    status: 'upcoming',
  },
];

// Tracking Links Data
export interface TrackingLink {
  id: string;
  shortLink: string;
  destinationUrl: string;
  campaign: string;
  clicks: number;
  conversions: number;
  status: 'active' | 'paused';
}

export const trackingLinks: TrackingLink[] = [
  {
    id: 'link_1',
    shortLink: 'atr.link/webinar-oct',
    destinationUrl: 'https://example.com/webinar-register',
    campaign: 'Oct Webinar',
    clicks: 1234,
    conversions: 56,
    status: 'active',
  },
  {
    id: 'link_2',
    shortLink: 'atr.link/course-promo',
    destinationUrl: 'https://example.com/course-sales-page',
    campaign: 'Front-End Course',
    clicks: 2456,
    conversions: 89,
    status: 'active',
  },
  {
    id: 'link_3',
    shortLink: 'atr.link/call-booking',
    destinationUrl: 'https://calendly.com/yourname/30min',
    campaign: 'Sales Call Booking',
    clicks: 567,
    conversions: 42,
    status: 'active',
  },
  {
    id: 'link_4',
    shortLink: 'atr.link/replay-offer',
    destinationUrl: 'https://example.com/webinar-replay',
    campaign: 'Retargeting - No Shows',
    clicks: 345,
    conversions: 12,
    status: 'paused',
  },
];

// Recent Events Data
export interface RecentEvent {
  timestamp: string;
  eventType: string;
  pageUrl: string;
  visitorId: string;
  email: string;
}

export const recentEvents: RecentEvent[] = [
  {
    timestamp: '2 min ago',
    eventType: 'Page View',
    pageUrl: '/webinar-register',
    visitorId: 'vis_abc123',
    email: '-',
  },
  {
    timestamp: '5 min ago',
    eventType: 'Form Submit',
    pageUrl: '/webinar-register',
    visitorId: 'vis_def456',
    email: 'priya@gmail.com',
  },
  {
    timestamp: '8 min ago',
    eventType: 'Button Click',
    pageUrl: '/sales-page',
    visitorId: 'vis_ghi789',
    email: '-',
  },
  {
    timestamp: '12 min ago',
    eventType: 'Page View',
    pageUrl: '/course-sales',
    visitorId: 'vis_jkl012',
    email: 'rahul@yahoo.com',
  },
  {
    timestamp: '15 min ago',
    eventType: 'Scroll Depth (75%)',
    pageUrl: '/blog/post-1',
    visitorId: 'vis_mno345',
    email: '-',
  },
  {
    timestamp: '18 min ago',
    eventType: 'Video View (50%)',
    pageUrl: '/webinar-replay',
    visitorId: 'vis_pqr678',
    email: 'anjali@gmail.com',
  },
  {
    timestamp: '22 min ago',
    eventType: 'Exit Intent',
    pageUrl: '/checkout',
    visitorId: 'vis_stu901',
    email: '-',
  },
  {
    timestamp: '25 min ago',
    eventType: 'Form Submit',
    pageUrl: '/call-booking',
    visitorId: 'vis_vwx234',
    email: 'vikram@outlook.com',
  },
  {
    timestamp: '30 min ago',
    eventType: 'Page View',
    pageUrl: '/landing-page',
    visitorId: 'vis_yz567',
    email: '-',
  },
  {
    timestamp: '35 min ago',
    eventType: 'Button Click',
    pageUrl: '/pricing',
    visitorId: 'vis_abc890',
    email: 'neha@gmail.com',
  },
];
