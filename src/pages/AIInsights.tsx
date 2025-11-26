import { useState } from 'react';
import { Sparkles, Send, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

const AIInsights = () => {
  const [inputMessage, setInputMessage] = useState('');

  // Pre-filled demo conversation
  const demoMessages = [
    {
      type: 'ai',
      content: "👋 Hi! I'm your AI marketing assistant. I've analyzed your campaigns and funnel performance. Here's what I found:",
      timestamp: '10:30 AM',
    },
    {
      type: 'ai',
      content: `📊 **Campaign Performance Insights:**

• Your "High-Ticket Coaching Webinar - Oct 2025" campaign is performing exceptionally well with 3.97x ROAS
• The "Webinar Invitation - Video Ad" has the highest ROAS (4.71x) and should be scaled
• However, I noticed the "Retargeting - Abandoned Leads" campaign has lower spend but strong 4.22x ROAS - this is an opportunity`,
      timestamp: '10:30 AM',
    },
    {
      type: 'user',
      content: 'What about my funnel? Where am I losing people?',
      timestamp: '10:32 AM',
    },
    {
      type: 'ai',
      content: `🔍 **Funnel Analysis:**

I've identified key drop-off points in your funnel:

1. **Landing Page → Leads:** Only 4.6% conversion (487 leads from 10,475 visitors)
   - This is below industry average of 8-12%
   - Consider A/B testing your landing page copy and CTA placement

2. **Webinar Registration → Show-up:** 54.4% attendance rate
   - Good, but could be improved to 65%+ with better reminder sequences
   - Add SMS reminders 1 hour before webinar

3. **L1 → L2 Conversion:** Only 67 completed calls from 44 L1 sales
   - This 152% ratio means you're getting more calls than expected
   - The bottleneck is L2 conversion (26.9%) - focus on closer training`,
      timestamp: '10:33 AM',
    },
    {
      type: 'user',
      content: 'What specific actions should I take right now?',
      timestamp: '10:35 AM',
    },
    {
      type: 'ai',
      content: `💡 **Immediate Action Plan:**

**HIGH PRIORITY - Do Today:**
1. ✅ Duplicate "Webinar Invitation - Video Ad" and increase budget by 50%
   - Current spend: ₹52,000 → Recommended: ₹78,000
   - Expected additional revenue: ₹122,500

2. ⚠️ Pause "Social Proof - Testimonial Carousel" (₹42,000 spend, 3.50x ROAS)
   - It's underperforming compared to video ads
   - Reallocate budget to top performers

3. 📈 Scale "Retargeting - Abandoned Leads" campaign by 2x
   - Currently only ₹122K spend with 4.22x ROAS
   - This is your most efficient spend

**MEDIUM PRIORITY - This Week:**
4. 🎯 Create lookalike audience from your 18 L2 buyers
   - These are your highest value customers
   - Target similar profiles for better quality leads

5. 📧 Set up automated SMS reminder 1hr before webinars
   - Can improve show-up rate from 54% to 65%+
   - Expected: +89 additional attendees per webinar

6. 🎓 Schedule training for closers on objection handling
   - Current L2 close rate: 26.9%
   - Industry benchmark: 35-40%
   - Potential additional revenue: ₹291,060/month`,
      timestamp: '10:36 AM',
    },
    {
      type: 'user',
      content: 'Which ad creative is performing best?',
      timestamp: '10:38 AM',
    },
    {
      type: 'ai',
      content: `🎨 **Creative Performance Ranking:**

**TOP PERFORMERS (Scale These):**
1. 🥇 "Webinar Invitation - Video Ad" - 4.71x ROAS, 5.2% CTR
   - Why it works: Video format, clear value prop
   - Action: Duplicate with slight variations

2. 🥈 "Course Promo - Image Ad" - 4.71x ROAS, 4.54% CTR
   - Strong performer in cold audience
   - Action: Increase daily budget by 40%

3. 🥉 "Special Offer - Book Now" - 5.16x ROAS (Retargeting)
   - Highest ROAS but low volume
   - Action: Expand retargeting audience

**UNDERPERFORMERS (Optimize or Pause):**
❌ "Webinar Invitation - Carousel Ad" - 3.42x ROAS
   - 17% lower ROAS than video version
   - Action: Test new carousel slides or pause

⚠️ "Social Proof - Testimonial Carousel" - 3.50x ROAS
   - Not resonating with warm audience
   - Action: Refresh testimonials or switch format`,
      timestamp: '10:38 AM',
    },
  ];

  const suggestedPrompts = [
    'How can I improve my webinar show-up rate?',
    'Which campaign should I scale next?',
    'Analyze my cost per acquisition trends',
    'What\'s my best performing audience segment?',
  ];

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <Sparkles className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900 tracking-tight">AI Insights</h1>
            <p className="text-sm text-gray-500">Your intelligent marketing assistant</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Online
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {demoMessages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              message.type === 'ai'
                ? 'bg-gradient-to-br from-purple-500 to-blue-500'
                : 'bg-gray-700'
            }`}>
              {message.type === 'ai' ? (
                <Sparkles size={16} className="text-white" />
              ) : (
                <span className="text-white text-xs font-semibold">You</span>
              )}
            </div>

            {/* Message Content */}
            <div className={`flex-1 max-w-3xl ${message.type === 'user' ? 'flex justify-end' : ''}`}>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.type === 'ai'
                    ? 'bg-white border border-gray-200 shadow-sm'
                    : 'bg-blue-600 text-white'
                }`}
              >
                <div className={`text-sm leading-relaxed whitespace-pre-wrap ${
                  message.type === 'ai' ? 'text-gray-800' : 'text-white'
                }`}>
                  {message.content}
                </div>
                <div className={`text-xs mt-2 ${
                  message.type === 'ai' ? 'text-gray-400' : 'text-blue-100'
                }`}>
                  {message.timestamp}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} className="text-green-500" />
              <h3 className="font-semibold text-gray-900">Quick Win</h3>
            </div>
            <p className="text-sm text-gray-600">
              Scale your top 3 video ads by 50% to capture ₹3.2L additional revenue this month
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={18} className="text-orange-500" />
              <h3 className="font-semibold text-gray-900">Attention Needed</h3>
            </div>
            <p className="text-sm text-gray-600">
              Webinar show-up rate dropped 8% this week. Add SMS reminders to recover 43 attendees
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={18} className="text-blue-500" />
              <h3 className="font-semibold text-gray-900">Opportunity</h3>
            </div>
            <p className="text-sm text-gray-600">
              Your retargeting campaigns have 22% higher ROAS. Allocate 15% more budget here
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Prompts */}
      <div className="px-6 py-3 bg-white border-t border-gray-200">
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestedPrompts.map((prompt, index) => (
            <button
              key={index}
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm transition-colors"
              onClick={() => setInputMessage(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about your campaigns, funnel, or performance..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          This is a demo interface. AI responses are pre-generated for demonstration purposes.
        </p>
      </div>
    </div>
  );
};

export default AIInsights;
