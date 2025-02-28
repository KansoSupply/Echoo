"use client";

import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

function AnalyseButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Analysing..." : "Analyse"}
    </Button>
  );
}

export default AnalyseButton;
