import React from "react";

type AgentPulseProps = {
  size?: "small" | "medium" | "large";
  color?: "red" | "blue" | "lime";
};

function AgentPulse({ size = "medium", color = "lime" }: AgentPulseProps) {
  const sizeClasses = {
    small: "h-2 w-2",
    medium: "h-4 w-4",
    large: "h-6 w-6",
  };

  const colorClasses = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    lime: "bg-lime-500",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
    />
  );
}

export default AgentPulse;
