import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface Message {
  content: string;
  sender: "me" | "ai";
}

export interface Sender {
  sender: string;
}

export interface DarkMode {
  children: React.ReactNode;
}

export interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void; // Update the type of setDarkMode
  toggleDarkMode: () => void;
}

export interface type {
  number: number;
}
