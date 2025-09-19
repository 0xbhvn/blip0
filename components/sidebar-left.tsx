"use client";

import * as React from "react";
import PiAudioBars01Stroke from "@/lib/icons/media/PiAudioBars01Stroke";
import PiGrid01Stroke from "@/lib/icons/general/PiGrid01Stroke";
import PiCalendarDefaultStroke from "@/lib/icons/time/PiCalendarDefaultStroke";
import PiTerminalConsoleSquareStroke from "@/lib/icons/development/PiTerminalConsoleSquareStroke";
import PiHomeDefaultStroke from "@/lib/icons/building/PiHomeDefaultStroke";
import PiInboxDefaultStroke from "@/lib/icons/communication/PiInboxDefaultStroke";
import PiChatDefaultStroke from "@/lib/icons/communication/PiChatDefaultStroke";
import PiSearchDefaultStroke from "@/lib/icons/general/PiSearchDefaultStroke";
import PiSettings02Stroke from "@/lib/icons/general/PiSettings02Stroke";
import PiSparkleAI02Stroke from "@/lib/icons/general/PiSparkleAI02Stroke";
import PiDeleteDustbin02Stroke from "@/lib/icons/general/PiDeleteDustbin02Stroke";

import { NavFavorites } from "@/components/nav-favorites";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavWorkspaces } from "@/components/nav-workspaces";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: PiTerminalConsoleSquareStroke,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: PiAudioBars01Stroke,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: PiTerminalConsoleSquareStroke,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: PiSearchDefaultStroke,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: PiSparkleAI02Stroke,
    },
    {
      title: "Home",
      url: "#",
      icon: PiHomeDefaultStroke,
      isActive: true,
    },
    {
      title: "Inbox",
      url: "#",
      icon: PiInboxDefaultStroke,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: PiCalendarDefaultStroke,
    },
    {
      title: "Settings",
      url: "#",
      icon: PiSettings02Stroke,
    },
    {
      title: "Templates",
      url: "#",
      icon: PiGrid01Stroke,
    },
    {
      title: "Trash",
      url: "#",
      icon: PiDeleteDustbin02Stroke,
    },
    {
      title: "Help",
      url: "#",
      icon: PiChatDefaultStroke,
    },
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
      emoji: "🍳",
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "#",
      emoji: "💪",
    },
    {
      name: "Book Notes & Reading List",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Sustainable Gardening Tips & Plant Care",
      url: "#",
      emoji: "🌱",
    },
    {
      name: "Language Learning Progress & Resources",
      url: "#",
      emoji: "🗣️",
    },
    {
      name: "Home Renovation Ideas & Budget Tracker",
      url: "#",
      emoji: "🏠",
    },
    {
      name: "Personal Finance & Investment Portfolio",
      url: "#",
      emoji: "💰",
    },
    {
      name: "Movie & TV Show Watchlist with Reviews",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
  ],
  workspaces: [
    {
      name: "Personal Life Management",
      emoji: "🏠",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "#",
          emoji: "📔",
        },
        {
          name: "Health & Wellness Tracker",
          url: "#",
          emoji: "🍏",
        },
        {
          name: "Personal Growth & Learning Goals",
          url: "#",
          emoji: "🌟",
        },
      ],
    },
    {
      name: "Professional Development",
      emoji: "💼",
      pages: [
        {
          name: "Career Objectives & Milestones",
          url: "#",
          emoji: "🎯",
        },
        {
          name: "Skill Acquisition & Training Log",
          url: "#",
          emoji: "🧠",
        },
        {
          name: "Networking Contacts & Events",
          url: "#",
          emoji: "🤝",
        },
      ],
    },
    {
      name: "Creative Projects",
      emoji: "🎨",
      pages: [
        {
          name: "Writing Ideas & Story Outlines",
          url: "#",
          emoji: "✍️",
        },
        {
          name: "Art & Design Portfolio",
          url: "#",
          emoji: "🖼️",
        },
        {
          name: "Music Composition & Practice Log",
          url: "#",
          emoji: "🎵",
        },
      ],
    },
    {
      name: "Home Management",
      emoji: "🏡",
      pages: [
        {
          name: "Household Budget & Expense Tracking",
          url: "#",
          emoji: "💰",
        },
        {
          name: "Home Maintenance Schedule & Tasks",
          url: "#",
          emoji: "🔧",
        },
        {
          name: "Family Calendar & Event Planning",
          url: "#",
          emoji: "📅",
        },
      ],
    },
    {
      name: "Travel & Adventure",
      emoji: "🧳",
      pages: [
        {
          name: "Trip Planning & Itineraries",
          url: "#",
          emoji: "🗺️",
        },
        {
          name: "Travel Bucket List & Inspiration",
          url: "#",
          emoji: "🌎",
        },
        {
          name: "Travel Journal & Photo Gallery",
          url: "#",
          emoji: "📸",
        },
      ],
    },
  ],
};

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
