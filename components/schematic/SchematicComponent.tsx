import { getTemporaryAccessToken } from "@/actions/getTemporaryAccessToken";
import SchematicEmbed from "./SchematicEmbed";

import React from "react";

async function SchematicComponent({ componentId }: { componentId: string }) {
  if (!componentId) {
    return null;
  }

  const accessToken = await getTemporaryAccessToken();

  if (!accessToken) {
    throw new Error("Failed to get acces token");
  }

  return <SchematicEmbed accessToken={accessToken} componentId={componentId} />;
}

export default SchematicComponent;
