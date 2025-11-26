import { useState } from 'react';
import { Sparkles, Send, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

const AIInsights = () => {
  const [inputMessage, setInputMessage] = useState('');

  // Pre-filled demo conversation
  const demoMessages = [
    {
      type: 'ai',
      content: "Hey! I just analyzed your campaigns. Found some interesting patterns you should know about.",
      timestamp: '10:30 AM',
    },
    {
      type: 'ai',
      content: (
        <div className="space-y-3">
          <p className="font-semibold text-gray-900">Quick Overview:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Your High-Ticket Coaching campaign is crushing it at 3.97x ROAS</li>
            <li>• Video ads are outperforming everything else by a solid margin</li>
            <li>• Found an underutilized opportunity in your retargeting campaign</li>
          </ul>
        </div>
      ),
      timestamp: '10:30 AM',
    },
    {
      type: 'user',
      content: 'What about my funnel? Where am I losing people?',
      timestamp: '10:32 AM',
    },
    {
      type: 'ai',
      content: (
        <div className="space-y-4">
          <p>Spotted three areas that need attention:</p>

          <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
            <p className="font-semibold text-red-900">Landing Page Conversion</p>
            <p className="text-sm text-red-700 mt-1">Only 4.6% converting (should be 8-12%). Your page might be too long or CTA isn't clear enough.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
            <p className="font-semibold text-yellow-900">Webinar Show-ups</p>
            <p className="text-sm text-yellow-700 mt-1">54% attendance is okay, but you could hit 65%+ with SMS reminders 1 hour before.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
            <p className="font-semibold text-blue-900">L2 Close Rate</p>
            <p className="text-sm text-blue-700 mt-1">26.9% is below the 35-40% benchmark. Might be worth doing some objection handling training with your closers.</p>
          </div>
        </div>
      ),
      timestamp: '10:33 AM',
    },
    {
      type: 'user',
      content: 'What specific actions should I take right now?',
      timestamp: '10:35 AM',
    },
    {
      type: 'ai',
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-900 mb-2">Do these today:</p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="text-green-600 font-bold">1.</span>
                <div>
                  <p className="text-gray-900">Scale your video webinar ad by 50%</p>
                  <p className="text-sm text-gray-600">₹52K → ₹78K/day. Should bring in ~₹1.2L extra revenue</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-red-600 font-bold">2.</span>
                <div>
                  <p className="text-gray-900">Pause "Social Proof Carousel"</p>
                  <p className="text-sm text-gray-600">3.50x ROAS is dragging down your average. Move budget to winners</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                <div>
                  <p className="text-gray-900">Double retargeting budget</p>
                  <p className="text-sm text-gray-600">4.22x ROAS with only ₹1.2L spend? This is low hanging fruit</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-900 mb-2">This week:</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>• Create lookalike audience from your 18 L2 buyers</li>
              <li>• Set up SMS reminders for webinars (should add ~89 attendees)</li>
              <li>• Schedule training session for closers on handling objections</li>
            </ul>
          </div>
        </div>
      ),
      timestamp: '10:36 AM',
    },
    {
      type: 'user',
      content: 'Which ad creative is performing best?',
      timestamp: '10:38 AM',
    },
    {
      type: 'ai',
      content: (
        <div className="space-y-4">
          <p className="font-semibold text-gray-900">Here's your creative leaderboard:</p>

          <div className="space-y-3">
            {/* Top Performer */}
            <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <img
                src="https://placehold.co/80x80/3b82f6/white?text=Video+Ad"
                alt="Video Ad"
                className="w-20 h-20 rounded object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-gray-900">Webinar Invitation - Video Ad</p>
                  <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-semibold rounded">TOP</span>
                </div>
                <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">4.71x ROAS</span> • 5.2% CTR</p>
                <p className="text-sm text-green-700 mt-1">→ Duplicate this and test slight variations</p>
              </div>
            </div>

            {/* Second Place */}
            <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <img
                src="https://placehold.co/80x80/10b981/white?text=Course"
                alt="Course Ad"
                className="w-20 h-20 rounded object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Course Promo - Image Ad</p>
                <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">4.71x ROAS</span> • 4.54% CTR</p>
                <p className="text-sm text-blue-700 mt-1">→ Increase daily budget by 40%</p>
              </div>
            </div>

            {/* Third Place */}
            <div className="flex gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <img
                src="https://placehold.co/80x80/a855f7/white?text=Offer"
                alt="Special Offer"
                className="w-20 h-20 rounded object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Special Offer - Book Now</p>
                <p className="text-sm text-gray-700 mt-1"><span className="font-semibold">5.16x ROAS</span> (Retargeting)</p>
                <p className="text-sm text-purple-700 mt-1">→ Best ROAS but low volume. Expand audience</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-3 mt-3">
            <p className="text-sm font-semibold text-gray-700 mb-2">Not performing well:</p>
            <div className="space-y-2">
              <div className="flex gap-3 p-2 bg-gray-50 rounded">
                <img
                  src="https://placehold.co/60x60/10b981/white?text=Carousel"
                  alt="Carousel"
                  className="w-16 h-16 rounded object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Webinar Carousel</p>
                  <p className="text-xs text-gray-600">3.42x ROAS - 17% worse than video version</p>
                </div>
              </div>
              <div className="flex gap-3 p-2 bg-gray-50 rounded">
                <img
                  src="https://placehold.co/60x60/a855f7/white?text=Testimonial"
                  alt="Testimonial"
                  className="w-16 h-16 rounded object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Social Proof Carousel</p>
                  <p className="text-xs text-gray-600">3.50x ROAS - Consider pausing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
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
