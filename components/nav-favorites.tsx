"use client";

import PiArrowRightUpStroke from "@/lib/icons/arrows-&-chevrons/PiArrowRightUpStroke";
import PiLinkHorizontalStroke from "@/lib/icons/development/PiLinkHorizontalStroke";
import PiStarStroke from "@/lib/icons/general/PiStarStroke";
import PiDeleteDustbin02Stroke from "@/lib/icons/general/PiDeleteDustbin02Stroke";
import PiThreeDotsMenuHorizontalStroke from "@/lib/icons/general/PiThreeDotsMenuHorizontalStroke";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavFavorites({
  favorites,
}: {
  favorites: {
    name: string;
    url: string;
    emoji: string;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Favorites</SidebarGroupLabel>
      <SidebarMenu>
        {favorites.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url} title={item.name}>
                <span>{item.emoji}</span>
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <PiThreeDotsMenuHorizontalStroke size={16} />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <PiStarStroke className="text-muted-foreground" size={16} />
                  <span>Remove from Favorites</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PiLinkHorizontalStroke
                    className="text-muted-foreground"
                    size={16}
                  />
                  <span>Copy Link</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <PiArrowRightUpStroke
                    className="text-muted-foreground"
                    size={16}
                  />
                  <span>Open in New Tab</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PiDeleteDustbin02Stroke
                    className="text-muted-foreground"
                    size={16}
                  />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <PiThreeDotsMenuHorizontalStroke size={16} />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
