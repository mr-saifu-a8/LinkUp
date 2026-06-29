import React, { useState } from "react";

import {
  Play,
  LayoutDashboard,
  Calendar as CalendarIcon,
  CalendarDays,
  MessageSquare,
  Users,
  Circle,
  PenSquare,
  Settings,
  Search,
  SquarePen,
  Filter,
  Video,
  Phone,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  Download,
  ChevronDown,
  Gem,
} from "lucide-react";

// ---- Static data (mirrors the reference design) ----------------------------

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: CalendarIcon, label: "Meetings" },
  { icon: CalendarDays, label: "Calendar" },
  { icon: MessageSquare, label: "Chat", active: true },
  { icon: Users, label: "Team" },
  { icon: Circle, label: "Recordings" },
  { icon: PenSquare, label: "Whiteboard" },
  { icon: Settings, label: "Settings" },
];

const filterTabs = ["All", "Direct", "Groups", "Unread"];

const conversations = [
  {
    id: 1,
    name: "Design Team",
    preview: "Sarah: Here is the latest update...",
    time: "10:24 AM",
    unread: 3,
    avatar:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=80&h=80&fit=crop&crop=faces",
    group: true,
    active: true,
  },
  {
    id: 2,
    name: "John Smith",
    preview: "You: Thanks! 🔥",
    time: "10:21 AM",
    unread: 1,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
  },
  {
    id: 3,
    name: "Marketing Team",
    preview: "Michael: Can we reschedule...",
    time: "9:48 AM",
    unread: 2,
    initial: "M",
    color: "bg-violet-500",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    preview: "You: Great, let's do it!",
    time: "9:30 AM",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
  },
  {
    id: 5,
    name: "Product Team",
    preview: "David: New features look awes...",
    time: "Yesterday",
    unread: 4,
    avatar:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=80&h=80&fit=crop&crop=faces",
    group: true,
  },
  {
    id: 6,
    name: "Emily Davis",
    preview: "You: Sounds good!",
    time: "Yesterday",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
  },
  {
    id: 7,
    name: "Mike Johnson",
    preview: "Mike: Call ended",
    time: "Yesterday",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=faces",
  },
  {
    id: 8,
    name: "Client Discussion",
    preview: "You: https://docs.google.com/...",
    time: "Mon",
    unread: 2,
    avatar:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=80&h=80&fit=crop&crop=faces",
    group: true,
  },
];

const channelTabs = ["Chat", "Files", "Tasks", "Whiteboard"];

const messages = [
  {
    id: 1,
    from: "them",
    name: "Sarah Wilson",
    time: "10:20 AM",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
    text: "Hi team! Here is the latest update on the landing page design.",
    attachment: {
      name: "Landing_Page_Design.fig",
      size: "12.4 MB",
    },
  },
  {
    id: 2,
    from: "me",
    time: "10:22 AM",
    text: "Looks amazing! 🎉\nI love the new color scheme.",
  },
  {
    id: 3,
    from: "them",
    name: "Michael Brown",
    time: "10:23 AM",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
    text: "Can we also update the icons as per the new brand guidelines?",
  },
  {
    id: 4,
    from: "me",
    time: "10:24 AM",
    text: "Sure! I'll make those changes and share the updated file.",
  },
  {
    id: 5,
    from: "them",
    name: "Sarah Wilson",
    time: "10:25 AM",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
    text: "Great! Let's review it in our meeting tomorrow.",
    reaction: { emoji: "👍", count: 2 },
  },
];

// Tiny inline "Figma-ish" icon for the attachment card, built from CSS so we
// don't depend on any external asset.
function FileGlyph() {
  return (
    <div className="grid h-9 w-9 shrink-0 grid-cols-2 grid-rows-2 gap-[2px] rounded-md bg-slate-800 p-1.5">
      <div className="rounded-sm bg-red-400" />
      <div className="rounded-sm bg-orange-400" />
      <div className="rounded-sm bg-sky-400" />
      <div className="rounded-sm bg-emerald-400" />
    </div>
  );
}

function DoubleCheck() {
  return (
    <svg viewBox="0 0 20 12" className="h-3 w-5 text-teal-300/80">
      <path
        d="M1 6l3 3 5-7"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6l3 3 7-9"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MeetSphereChat() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeChannelTab, setActiveChannelTab] = useState("Chat");
  const [draft, setDraft] = useState("");

  return (
    <div className="flex h-screen w-full bg-[#0b1220] text-slate-200 antialiased">
      {/* ---------------- Sidebar ---------------- */}
      <aside className="flex w-64 shrink-0 flex-col border-r border-white/5 bg-[#0d1526] px-4 py-5">
        <div className="mb-8 flex items-center gap-2 px-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-teal-500 text-white">
            <Play className="h-4 w-4 fill-current" strokeWidth={0} />
          </div>
          <span className="text-lg font-semibold text-white">MeetSphere</span>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              type="button"
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-teal-600/90 font-medium text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              {label}
            </button>
          ))}
        </nav>

        {/* Plan usage card */}
        <div className="mb-3 rounded-2xl bg-white/[0.04] p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
            <Gem className="h-4 w-4 text-teal-400" />
            Pro Plan
          </div>
          <p className="mb-2 text-xs text-slate-400">300 GB of 1 TB used</p>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[30%] rounded-full bg-teal-500" />
          </div>
        </div>

        {/* User card */}
        <div className="flex items-center gap-2 rounded-2xl bg-white/[0.04] p-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=faces"
              alt="Emery George"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0d1526] bg-emerald-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">
              Emery George
            </p>
            <p className="truncate text-xs text-slate-500">
              emery@meetsphere.com
            </p>
          </div>
          <ChevronDown className="h-4 w-4 shrink-0 text-slate-500" />
        </div>
      </aside>

      {/* ---------------- Conversation list ---------------- */}
      <section className="flex w-80 shrink-0 flex-col border-r border-white/5 bg-[#0a111f] px-4 py-5">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Chat</h1>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-xl bg-white/[0.05] px-3 py-2.5">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-600 text-white hover:bg-teal-500"
          >
            <SquarePen className="h-4 w-4" />
          </button>
        </div>

        <div className="mb-4 flex items-center gap-1">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                activeFilter === tab
                  ? "bg-teal-600/90 font-medium text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
          <button
            type="button"
            className="ml-auto grid h-8 w-8 place-items-center rounded-lg text-slate-500 hover:bg-white/5 hover:text-slate-300"
          >
            <Filter className="h-4 w-4" />
          </button>
        </div>

        <div className="-mx-2 flex-1 overflow-y-auto">
          {conversations.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                c.active ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
              }`}
            >
              {c.avatar ? (
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-semibold text-white ${c.color}`}
                >
                  {c.initial}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium text-white">
                    {c.name}
                  </p>
                  <span className="shrink-0 text-xs text-slate-500">
                    {c.time}
                  </span>
                </div>
                <div className="mt-0.5 flex items-center justify-between gap-2">
                  <p className="truncate text-sm text-slate-500">
                    {c.preview}
                  </p>
                  {c.unread ? (
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-500 text-[11px] font-semibold text-white">
                      {c.unread}
                    </span>
                  ) : null}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ---------------- Active conversation ---------------- */}
      <section className="flex min-w-0 flex-1 flex-col bg-[#0b1220]">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/5 px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=80&h=80&fit=crop&crop=faces"
              alt="Design Team"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <p className="text-base font-semibold text-white">
                Design Team
              </p>
              <p className="text-sm text-slate-500">8 members</p>
            </div>
          </div>
          <div className="flex items-center gap-5 text-slate-400">
            <Video className="h-5 w-5 cursor-pointer hover:text-slate-200" />
            <Phone className="h-5 w-5 cursor-pointer hover:text-slate-200" />
            <Search className="h-5 w-5 cursor-pointer hover:text-slate-200" />
            <MoreVertical className="h-5 w-5 cursor-pointer hover:text-slate-200" />
          </div>
        </header>

        {/* Channel tabs */}
        <div className="flex items-center gap-8 border-b border-white/5 px-6">
          {channelTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveChannelTab(tab)}
              className={`relative py-3 text-sm transition-colors ${
                activeChannelTab === tab
                  ? "font-medium text-teal-400"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab}
              {activeChannelTab === tab && (
                <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-teal-400" />
              )}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-slate-500">Today</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex flex-col gap-5">
            {messages.map((m) =>
              m.from === "me" ? (
                <div key={m.id} className="flex justify-end">
                  <div className="max-w-md">
                    <div className="flex items-center justify-end gap-2 px-1 pb-1">
                      <span className="text-xs text-slate-500">{m.time}</span>
                    </div>
                    <div className="rounded-2xl rounded-tr-sm bg-teal-700/80 px-4 py-3 text-sm leading-relaxed text-white">
                      {m.text.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <div className="flex justify-end pr-1 pt-1">
                      <DoubleCheck />
                    </div>
                  </div>
                </div>
              ) : (
                <div key={m.id} className="flex items-start gap-3">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                  />
                  <div className="max-w-md">
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="text-sm font-medium text-sky-400">
                        {m.name}
                      </span>
                      <span className="text-xs text-slate-500">{m.time}</span>
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-white/[0.05] px-4 py-3 text-sm leading-relaxed text-slate-200">
                      {m.text}
                    </div>

                    {m.attachment && (
                      <div className="mt-2 flex items-center gap-3 rounded-2xl bg-white/[0.05] px-4 py-3">
                        <FileGlyph />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm text-slate-200">
                            {m.attachment.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {m.attachment.size}
                          </p>
                        </div>
                        <Download className="h-4 w-4 shrink-0 text-slate-400" />
                      </div>
                    )}

                    {m.reaction && (
                      <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-slate-300">
                        <span>{m.reaction.emoji}</span>
                        <span>{m.reaction.count}</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Composer */}
        <div className="border-t border-white/5 px-6 py-4">
          <div className="flex items-center gap-3 rounded-2xl bg-white/[0.05] px-4 py-2.5">
            <Paperclip className="h-5 w-5 shrink-0 text-slate-400" />
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a message..."
              className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
            />
            <Smile className="h-5 w-5 shrink-0 text-slate-400" />
            <button
              type="button"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-600 text-white hover:bg-teal-500"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}