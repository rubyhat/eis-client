import React from "react";

import { FeedbackForm } from "./components/FeedbackForm";
import { EstateAgentInfo } from "../CatalogModule/store";

interface FeedbackModuleProps {
  estateId?: string;
  estateAgent?: EstateAgentInfo;
}

export const FeedbackModule = ({
  estateAgent,
  estateId,
}: FeedbackModuleProps) => {
  return (
    <>
      <FeedbackForm estateAgent={estateAgent} estateId={estateId} />
    </>
  );
};
