import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'
import Toptitle from '../layouts/top_title'
import Searchfeild from '../layouts/searchfeild'

interface Message {
  id: number
  text: string
  sender: 'me' | 'other'
  time: string
}

interface ChatUser {
  id: number
  name: string
  avatar: string
  lastMsg: string
  time: string
  unread: number
  online: boolean
  messages: Message[]
}

export default function Chatpage() {
  const [users, setUsers] = useState<ChatUser[]>([
    {
      id: 0,
      name: 'Join in Internet',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=internet',
      lastMsg: "This has been best to see you tomorrow for coffee.",
      time: '10:27am',
      unread: 2,
      online: true,
      messages: [
        { 
          id: 1, 
          text: '# Join in Internet\nThis has been best to see you tomorrow for coffee.', 
          sender: 'other', 
          time: '10:27am' 
        },
        { 
          id: 2, 
          text: '## Join-Con\n1. start jobs, carry home that', 
          sender: 'me', 
          time: '10:28am' 
        },
        { 
          id: 3, 
          text: '## Help-Batch\nThanks, I can\'t wait to save you tomorrow for coffee!', 
          sender: 'other', 
          time: '10:30am' 
        },
        { 
          id: 4, 
          text: '## Today\n- **Angel Lohn**\n  - No', 
          sender: 'other', 
          time: '10:30am' 
        },
        { 
          id: 5, 
          text: '## Start-Look\n- Have you asked about how plug?????', 
          sender: 'me', 
          time: '10:31am' 
        },
        { 
          id: 6, 
          text: '## Build-Around\n- I won\'t find out who have plug-in!', 
          sender: 'me', 
          time: '10:32am' 
        },
        { 
          id: 7, 
          text: '## Start-Center\n- You\'re asking yourself if they paypaint!', 
          sender: 'me', 
          time: '10:32am' 
        },
        { 
          id: 8, 
          text: '## Help-Baseline\n- Sounds good!', 
          sender: 'other', 
          time: '12:01pm' 
        },
        { 
          id: 9, 
          text: '---', 
          sender: 'other', 
          time: '12:01pm' 
        },
        { 
          id: 10, 
          text: '## Today up 27hrs\n- **Why are there?** Users will continue to take a positive phone account until the day goes online quickly?\n\n- Use it much to help users show on my vacation since I think close to today, and I know not both here.', 
          sender: 'other', 
          time: '12:02pm' 
        },
        { 
          id: 11, 
          text: '---', 
          sender: 'other', 
          time: '12:02pm' 
        },
        { 
          id: 12, 
          text: '# Join your home\n- **Get home to get it!**\n\n- **Create a new home to get it!**', 
          sender: 'me', 
          time: '12:03pm' 
        },
        { 
          id: 13, 
          text: '---', 
          sender: 'other', 
          time: '12:03pm' 
        },
        { 
          id: 14, 
          text: '## Create a set of cars at 4:00:57:30 am-5', 
          sender: 'other', 
          time: '12:04pm' 
        },
      ]
    },
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      lastMsg: "Thanks, I can't wait to see you tomorrow for coffee!",
      time: '12:01pm',
      unread: 0,
      online: true,
      messages: []
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=5',
      lastMsg: 'Can you review the design mockups when you get a chance?',
      time: '11:45am',
      unread: 3,
      online: true,
      messages: []
    },
    {
      id: 3,
      name: 'Emma Wilson',
      avatar: 'https://i.pravatar.cc/150?img=8',
      lastMsg: 'The party starts at 8 PM, don\'t be late! 🎉',
      time: 'Yesterday',
      unread: 0,
      online: false,
      messages: []
    },
  ])

  const [selected, setSelected] = useState<ChatUser>(users[0])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [selected.messages])

  const sendMessage = () => {
    if (!input.trim()) return

    const newMsg: Message = {
      id: Date.now(),
      text: input,
      sender: 'me',
      time: new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }).toLowerCase()
    }

    setUsers(prev => prev.map(u =>
      u.id === selected.id
        ? { 
            ...u, 
            messages: [...u.messages, newMsg], 
            lastMsg: input.length > 30 ? input.substring(0, 30) + '...' : input, 
            time: newMsg.time,
            unread: 0
          }
        : u
    ))

    setSelected(prev => ({
      ...prev,
      messages: [...prev.messages, newMsg],
      lastMsg: input,
      time: newMsg.time
    }))

    setInput('')
  }

  const formatMessage = (text: string) => {
    const lines = text.split('\n')
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-lg font-bold text-white mb-2">{line.substring(2)}</h1>
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-md font-bold text-white mb-2">{line.substring(3)}</h2>
      } else if (line.startsWith('- **')) {
        const boldText = line.match(/\*\*(.*?)\*\*/)?.[1] || ''
        const rest = line.replace(/\*\*(.*?)\*\*/, '').replace('- ', '')
        return (
          <div key={index} className="flex items-start gap-2 mb-1 ml-2">
            <span className="text-gray-300">•</span>
            <span><strong className="text-white">{boldText}</strong>{rest}</span>
          </div>
        )
      } else if (line.startsWith('- ')) {
        return (
          <div key={index} className="flex items-start gap-2 mb-1 ml-2">
            <span className="text-gray-300">•</span>
            <span>{line.substring(2)}</span>
          </div>
        )
      } else if (line.trim() === '---') {
        return <hr key={index} className="my-3 border-gray-700" />
      } else if (line.match(/^\d+\.\s/)) {
        const number = line.match(/^(\d+)\./)?.[1]
        return (
          <div key={index} className="flex items-start gap-2 mb-1 ml-4">
            <span className="text-gray-300">{number}.</span>
            <span>{line.substring(line.indexOf('.') + 2)}</span>
          </div>
        )
      } else if (line.trim()) {
        return <p key={index} className="mb-2">{line}</p>
      }
      return <br key={index} />
    })
  }

  return (
    <>
      <Toptitle title="Chat" />
      <Searchfeild />

      <div className="h-full flex bg-black text-white">
        {/* Left Sidebar */}
        <div className="w-80 border-r border-gray-800 flex flex-col">
          <div className="p-4 border-b border-gray-800">
            <h2 className="font-bold text-lg">Messages</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelected(user)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer
                  ${selected.id === user.id ? 'bg-sky-600' : 'hover:bg-gray-900'}`}
              >
                <div className="relative">
                  <img src={user.avatar} alt="" className="w-12 h-12 rounded-full" />
                  {user.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <p className={`font-medium ${selected.id === user.id ? 'text-white' : 'text-gray-200'}`}>
                      {user.name}
                    </p>
                    <span className="text-xs text-gray-400">{user.time}</span>
                  </div>
                  <p className={`text-sm truncate ${selected.id === user.id ? 'text-sky-100' : 'text-gray-400'}`}>
                    {user.lastMsg}
                  </p>
                </div>
                {user.unread > 0 && (
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center text-xs font-bold">
                    {user.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-800">
            <img src={selected.avatar} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-bold">{selected.name}</h3>
              <p className="text-sm text-green-400">
                {selected.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 bg-black">
            {selected.messages.map((msg) => (
              <div key={msg.id} className={`mb-4 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block max-w-lg px-4 py-3 rounded-lg text-sm ${msg.sender === 'me' ? 'bg-sky-600 text-white' : 'bg-gray-800 text-gray-200'}`}>
                  <div className="text-left">
                    {formatMessage(msg.text)}
                  </div>
                  <div className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-sky-200 text-right' : 'text-gray-400 text-left'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-800 p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message"
                className="flex-1 bg-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
              <a
                onClick={sendMessage}
                className="px-4 py-3 bg-[#0AB4FF] cursor-pointer  rounded-lg flex items-center justify-center hover:bg-sky-700"
              >
                <Send className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}