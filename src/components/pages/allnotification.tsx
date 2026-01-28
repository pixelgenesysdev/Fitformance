'use client';

import { useState } from 'react';
import Topbar from '../ui/topbar';
import Top_title_backicon from '../layouts/top_title_backicon';

interface Notification {
  id: number;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: '2:00 AM',
    read: true,
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    time: '3:15 AM',
    read: false,
  },
  {
    id: 3,
    title: 'System Update',
    body: "Your system was updated successfully.",
    time: '5:45 AM',
    read: false,
  },
  {
    id: 4,
    title: 'Welcome',
    body: "Welcome to the platform! We're glad to have you.",
    time: 'Yesterday',
    read: true,
  },
];

export default function AllNotification() {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);
  const [activeTab, setActiveTab] =
    useState<'all' | 'read' | 'unread'>('all');

  const toggleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    );
  };

  const filteredNotifications = notifications.filter((n) => {
    if (activeTab === 'read') return n.read;
    if (activeTab === 'unread') return !n.read;
    return true;
  });

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="mx-auto">

        {/* Header */}
        <div className="mb-8">
          <Top_title_backicon title="All Notifications" />

        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {['all', 'unread', 'read'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-5 py-2 rounded-full text-sm sm:text-base transition ${
                activeTab === tab
                  ? ' text-[#37B5FF]'
                  : ' text-white'
              }`}

                  style={{
                    background:'transparent',
                    border:'none',
                    outline:'none',
                  }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="text-center text-gray-500 py-16">
              No notifications found
            </div>
          ) : (
            filteredNotifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-5 rounded-xl border transition-all ${
                  notif.read
                    ? 'bg-[#424242] border-transparent'
                    : 'bg-[#2e2e2e]/10 border-[#37B5FF]'
                }`}
              >
                <div className="flex justify-between gap-4 flex-col sm:flex-row">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">
                      {notif.title}
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      {notif.body}
                    </p>
                  </div>

                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {notif.time}
                  </span>
                </div>

                <button
                  onClick={() => toggleRead(notif.id)}
                  className="mt-3 text-xs text-[#37B5FF] p-0 border-0 mt-2 outline-none hover:underline"
                  style={{
                    background:'transparent',
                    boxShadow:'none',
                    border:'none',
                    outline:'none',
                    padding:'0',
                  }}
                >
                  {notif.read ? 'Mark as Unread' : 'Mark as Read'}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
