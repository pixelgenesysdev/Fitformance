'use client';
import {faXmark} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface Notification {
  id: number;
  title: string;
  body: string;
  time: string;
  read: boolean;
}
interface Notificationbox {
  show: boolean;
  onClose: () => void;
}


const initialNotifications: Notification[] = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: '2:00 AM',
    read: true,
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: '2:00 AM',
    read: false,
  },
  {
    id: 3,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: '2:00 AM',
    read: false,
  },
  {
    id: 4,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: '2:00 AM',
    read: true,
  },
    {
    id: 5,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: '2:00 AM',
    read: false,
  },
    {
    id: 6,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: '2:00 AM',
    read: false,
  },
    {
    id: 7,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: '2:00 AM',
    read: false,
  },
    {
    id: 8,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: '2:00 AM',
    read: true,
  },
    {
    id: 9,
    title: 'Lorem Ipsum',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: '2:00 AM',
    read: false,
  },

];

export default function NotificationsBox({ show, onClose}: Notificationbox) {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [activeTab, setActiveTab] = useState<'read' | 'unread'>('unread');

  const toggleRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: !n.read } : n
    ));
  };

  const unreadNotifications = notifications.filter(n => !n.read);
  const readNotifications = notifications.filter(n => n.read);
  const currentNotifications = activeTab === 'unread' ? unreadNotifications : readNotifications;

  return (
    <>
      <div className={`${show ? 'block' :'hidden'} fixed inset-0 z-50 flex items-center p-3 justify-center w-screen h-screen bg-black/80`} id="notibox">
        <div className="relative w-full pt-10  max-w-3xl h-full max-h-[80vh] mx-4 overflow-hidden p-6 text-white bg-[#1F1F1F] border-4 border-[#37B5FF] rounded-3xl">
          <div className="boxiconcross absolute top-[15px] right-[15px]">
              <FontAwesomeIcon icon={faXmark} className="text-2xl cursor-pointer text-white"      onClick={onClose} />
            </div>
          {/* Header */}
          <div className="flex items-center gap-3 flex-col lg:flex-row justify-between mb-6">
            
            <h3 className="text-2xl sm:text-3xl font-bold capitalize">Notifications</h3>
            <div className="flex items-center gap-3 tabsButtonsbar">
              <button
                onClick={() => setActiveTab('read')}
                className={`px-5 py-2 rounded-full transition text-sm sm:text-base ${
                  activeTab === 'read'
                    ? 'bg-[#2A2A2A]/50 text-gray-400 activ'
                    : 'bg-transparent text-gray-500 hover:text-white'
                }`}
              >
                Read Notifications
              </button>
              <button
                onClick={() => setActiveTab('unread')}
                className={`px-5 py-2 rounded-full transition text-sm sm:text-base ${
                  activeTab === 'unread'
                    ? 'bg-[#37B5FF] text-black active'
                    : 'bg-transparent text-gray-500 hover:text-white'
                }`}
              >
                Unread Notifications
              </button>
            </div>
          </div>

          {/* Notifications List - Scrollable */}
          <div className="lg:max-h-[calc(80vh-180px)] max-h-full overflow-y-auto pr-2 space-y-4">
            {currentNotifications.length === 0 ? (
              <div className="text-center text-gray-500 py-10">
                No {activeTab} notifications
              </div>
            ) : (
              currentNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-4 pb-6 rounded-lg transition-all duration-300 relative  ${
                    !notif.read ? 'bg-[#37B5FF]/10 border-2 border-[#37B5FF]' : 'bg-[#070707]'
                  }`}
                >
                  <div className="flex justify-between items-start flex-col sm:flex-row ">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">{notif.title}</h4>
                      <p className="text-sm text-gray-300 mt-1">{notif.body}</p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap mt-2 sm:mt-0 sm:ml-4">
                      {notif.time}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleRead(notif.id)}
                    className="mt-3 text-xs text-[#37B5FF] markButtons hover:underline transition absolute bottom-2 right-3"
                  >
                    {notif.read ? 'Mark as Unread' : 'Mark as Read'}
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {/* <div className="mt-6 text-center">
            <button className="text-[#37B5FF] hover:underline transition text-sm sm:text-base absolute bottom-3 left-1/2 transform -translate-x-1/2 mainbottomButtons">
              VIEW ALL NOTIFICATIONS
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}