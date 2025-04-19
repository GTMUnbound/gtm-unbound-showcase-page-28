
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, CheckCircle, Clock, FileText, MessageSquare } from 'lucide-react';

interface Notification {
  id: string;
  type: 'message' | 'event' | 'report' | 'template' | 'booking';
  title: string;
  time: string;
  status: 'pending' | 'completed' | 'urgent';
  avatar?: string;
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'message',
    title: 'GTM Expert Arjun replied to your strategy doc',
    time: '5m ago',
    status: 'urgent',
    avatar: '/lovable-uploads/1b9d407a-6505-49b0-aaca-8206b2237132.png'
  },
  {
    id: '2',
    type: 'event',
    title: 'GTM Roundtable: Today 4:00 PM — Confirmed',
    time: 'in 2h',
    status: 'pending'
  },
  {
    id: '3',
    type: 'report',
    title: 'Your SEO Audit Report is Ready',
    time: '1h ago',
    status: 'completed'
  },
  {
    id: '4',
    type: 'template',
    title: 'New GTM Template Unlocked: Launch Playbook',
    time: '2h ago',
    status: 'completed'
  },
  {
    id: '5',
    type: 'booking',
    title: "You're booked for: Messaging Sprint — Monday",
    time: 'Mon 10am',
    status: 'pending'
  }
];

const NotificationFeed = () => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 max-w-md w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">GTM Updates</h3>
        <span className="text-sm text-gray-500">Now</span>
      </div>
      
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-xl bg-white/60 hover:bg-white/80 transition-all cursor-pointer"
          >
            {notification.avatar ? (
              <img src={notification.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gtm-pink/10 flex items-center justify-center">
                {notification.type === 'message' && <MessageSquare className="w-4 h-4 text-gtm-pink" />}
                {notification.type === 'event' && <Calendar className="w-4 h-4 text-gtm-pink" />}
                {notification.type === 'report' && <FileText className="w-4 h-4 text-gtm-pink" />}
                {notification.type === 'template' && <FileText className="w-4 h-4 text-gtm-pink" />}
                {notification.type === 'booking' && <Clock className="w-4 h-4 text-gtm-pink" />}
              </div>
            )}
            
            <div className="flex-1">
              <p className="text-sm text-gray-800 font-medium">{notification.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-500">{notification.time}</span>
                {notification.status === 'completed' && (
                  <CheckCircle className="w-3 h-3 text-green-500" />
                )}
                {notification.status === 'urgent' && (
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-gtm-pink opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gtm-pink"></span>
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xl font-medium text-gray-800">Finally. GTM that talks back.</p>
      </div>
    </div>
  );
};

export default NotificationFeed;
