import { ReactNode } from "react";

export type Button = {
  children: ReactNode
  disabled?: boolean
  onClick: () => void
  className?: string
}
