"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AssignToIcon,
  BacklogIcon,
  NoPriorityIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  InProgressIcon,
  LabelIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
  HighIcon,
  MediumIcon,
  LowIcon,
  AddLabels,
} from "./icons/command-bar";
import { cn } from "@/utils/utils";

const commandOptions = [
  {
    label: "Assign to..",
    icon: AssignToIcon,
    subOptions: [
      { label: "Jori", icon: PersonIcon },
      { label: "Karri", icon: PersonIcon },
      { label: "Tuomas", icon: PersonIcon },
    ],
  },
  {
    label: "Change status...",
    icon: ChangeStatusIcon,
    subOptions: [
      { label: "Backlog", icon: BacklogIcon },
      { label: "Todo", icon: TodoIcon },
      { label: "In Progress", icon: InProgressIcon },
      { label: "Done", icon: DoneIcon },
    ],
  },
  {
    label: "Change priority...",
    icon: ChangePriorityIcon,
    subOptions: [
      { label: "No priority", icon: NoPriorityIcon },
      { label: "Urgent", icon: UrgentIcon },
      { label: "High", icon: HighIcon },
      { label: "Medium", icon: MediumIcon },
      { label: "Low", icon: LowIcon },
    ],
  },
  {
    label: "Add labels...",
    icon: AddLabels,
    subOptions: [
      { label: "Bug", icon: () => <LabelIcon type="bug" /> },
      { label: "Feature", icon: () => <LabelIcon type="feature" /> },
      { label: "Improvement", icon: () => <LabelIcon type="improvement" /> },
    ],
  },
] as const;

export const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<number | null>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      if (!commandMenuRef.current) return;

      const isMenuButton =
        e.target instanceof Element &&
        e.target.classList.contains("command-menu-button");

      const clickedOutside =
        !isMenuButton && !commandMenuRef.current?.contains(e.target as Node);

      setOpened(clickedOutside ? false : true);
    };
    window.addEventListener("click", toggleCommandMenu);

    return () => {
      window.removeEventListener("click", toggleCommandMenu);
    };
  }, []);

  const currentOptions = useMemo(() => {
    const options =
      selectedOptions === null
        ? commandOptions
        : commandOptions[selectedOptions].subOptions;

    return options;
  }, [selectedOptions]);

  useEffect(() => {
    if (!commandMenuRef.current) return;

    commandMenuRef.current.classList.remove("animate-bounce");
    commandMenuRef.current.clientWidth;
    commandMenuRef.current.classList.add("animate-bounce");
  }, [selectedOptions]);
  return (
    <div ref={commandMenuRef} className={cn(opened && "opened")}>
      <div
        className={cn(
          "flex flex-col items-start absolute -translate-x-1/2 rounded-lg bg-transparent-white border border-transparent-white w-[90vw] max-w-[64rem] left-[calc(50%+7.5rem)] md:left-1/2 transition-[transform-opacity] shadow-[rgb(0_0 0_/_35%)_0px_7px_32px ]",
          opened && "translate-y-[12.8rem] md:translate-y-[2.4rem] opacity-100",
          !opened && "opacity-60 translate-y-[12.8rem]"
        )}
      >
        <span className="ml-5 mt-2 bg-white/5 text-xs px-2 leading-10 text-white/50">
          LIN-111 Walkway lighting
        </span>

        <input
          className="text-lg bg-transparent p-5 w-full outline-none"
          placeholder="Type a command or search"
        />

        <div className="w-full flex flex-col text-sm text-off-white">
          {currentOptions.map(({ label, icon: Icon, ...menuItems }, idx) => (
            <button
              className="command-menu-button   px-5 flex h-[4.6rem] items-center hover:bg-white/5 w-full first:bg-white/[0.15]"
              key={label}
              onClick={(ev) => {
                const clickedRootItem = "subOptions" in menuItems;
                setSelectedOptions(clickedRootItem ? idx : null);
                if (!clickedRootItem) {
                  setOpened(false);
                }

                ev.stopPropagation();
              }}
            >
              <Icon />
              <span className="ml-3">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
