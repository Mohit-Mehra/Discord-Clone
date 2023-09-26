"use client";

import { ServerWithMembersWithProfile } from "@/types";
import { ChannelType, MemberRole } from "@prisma/client";
import { ActionTooltip } from "@/components/action-tooltip";
import { Plus } from "lucide-react";

interface ServerSearchProps {
  label: string;
  role?: MemberRole;
  sectionType: "channels" | "members";
  channelTypes?: ChannelType;
  server?: ServerWithMembersWithProfile;
}

export const ServerSection = ({
  label,
  role,
  sectionType,
  channelTypes,
  server,
}: ServerSearchProps) => {
  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      {role !== MemberRole.GUEST && sectionType === "channels" && (
        <ActionTooltip label="Create Channel" side="top">
          <button>
            <Plus />
          </button>
        </ActionTooltip>
      )}
    </div>
  );
};
