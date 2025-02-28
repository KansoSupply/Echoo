import React from "react";
import Form from "next/form";
import { analyseYoutubeVideo } from "@/actions/analyseYoutubeVideo";
import AnalyseButton from "./AnalyseButton";

function YoutubeVideoForm() {
  return (
    <div>
      <Form
        action={analyseYoutubeVideo}
        className="flex flex-col sm:flex-row w-full items-center gap-4"
      >
        <input
          type="text"
          name="url"
          placeholder="Enter YouTube URL"
          className="p-2 rounded-lg border border-gray-300 text-white"
        />
        <AnalyseButton />
      </Form>
    </div>
  );
}

export default YoutubeVideoForm;
