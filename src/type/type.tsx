import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface Message {
  content: string;
  sender: "me" | "bot";
}

export interface Sender {
  sender: string;
}
