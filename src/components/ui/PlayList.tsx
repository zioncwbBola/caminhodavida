import React from "react";
import { cn } from "@/utils/cn";

type OffcanvasProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
};

export const Offcanvas: React.FC<OffcanvasProps> = ({
  isOpen,
  onClose,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex transition-transform transform bg-opacity-50 bg-black",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}
    >
      <div className="w-64 bg-base-100 shadow-xl">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="p-4">{children}</div>
      </div>
      <div
        className="flex-1"
        onClick={onClose}
      ></div>
    </div>
  );
};

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button className={cn("btn", className)} onClick={onClick}>
      {children}
    </button>
  );
};
