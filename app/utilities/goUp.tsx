import React from "react";
import "@/app/styles/goUp.css";

type goUpProps = {
  mounted: boolean | null;
  children: React.ReactNode;
};
export default function goUp({ mounted, children }: goUpProps) {
  console.log(mounted, "IS OPEN");
  return (
    <div className="go-up-container">
      <div className={`go-up ${mounted ? "go" : ""}`}>{children}</div>
    </div>
  );
}
