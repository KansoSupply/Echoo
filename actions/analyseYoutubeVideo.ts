"use server";

import { getVideoIdFromUrl } from "@/lib/getVideoIdFromUrl";
import { video } from "motion/react-client";

import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) {
    return;
  }

  const videoId = getVideoIdFromUrl(url);

  console.log(`videoId is ${videoId}`);

  if (!videoId) return;

  // redirect to the new post

  redirect(`/video/${videoId}/analysis`);
}
