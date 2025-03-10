"use client";

import ThumbnailGeneration from "@/components/ThumbnailGeneration";
import YoutubeVideoDetails from "@/components/YoutubeVideoDetails";
import TitleGenerations from "@/components/TitleGenerations";
// import Transciption from "@/components/Transciption";
import Usage from "@/components/Usage";
import { FeatureFlag } from "@/Features/flags";
import { useParams } from "next/navigation";
import React from "react";

function AnalysisPage() {
  const params = useParams<{ videoId: string }>();
  const { videoId } = params;

  return (
    <div className="xl:container mx:auto px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 order-2 lg:order-1 lg:border border-gray-200 p-6">
          {/* Analysis section */}
          <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-xl">
            <Usage
              featureFlag={FeatureFlag.ANALYSE_VIDEO}
              title="Analyse Video"
            />
          </div>
          {/* Youtube Details */}
          <YoutubeVideoDetails videoId={videoId} />

          {/* Thumbnail Generation */}
          <ThumbnailGeneration videoId={videoId} />

          {/* Title Generation */}
          <TitleGenerations videoId={videoId} />

          {/* Transcription
          <Transciption videoId={videoId} /> */}
        </div>
        <div className="flex flex-col gap-4 order-1 lg:order-2 lg:sticky Lg:top-20 h-[500px] md:h-[calc(100vh-6rem)] bg-amber-400">
          <p>right side</p>
        </div>
      </div>
    </div>
  );
}

export default AnalysisPage;
