"use client"; // Ensure this runs on the client-side

import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { Mic, FileText, Key, Smile, Globe, Video } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Paste YouTube URL",
    description:
      "Copy the URL of the YouTube video you want to analyze and paste it into the input field.",
    icon: Globe,
  },
  {
    title: "Select Features",
    description:
      "Choose the features you want to use, such as transcription, summarization, or sentiment analysis.",
    icon: Key,
  },
  {
    title: "Get Results",
    description:
      "Click the analyze button to get instant insights into the video's content, including transcripts and summaries.",
    icon: Smile,
  },
];

const features = [
  {
    title: "Transcription",
    description:
      "Convert speech to text with high accuracy, making it easy to create written records of your videos.",
    icon: Mic,
  },
  {
    title: "Summarization",
    description:
      "Get concise summaries of long videos, allowing you to quickly grasp the main points without watching the entire content.",
    icon: FileText,
  },
  {
    title: "Keyword Extraction",
    description:
      "Identify key topics and phrases in the video, helping you to understand the core subjects discussed.",
    icon: Key,
  },
  {
    title: "Sentiment Analysis",
    description:
      "Analyze the sentiment of the video's content to gauge the overall tone and emotional impact.",
    icon: Smile,
  },
  {
    title: "Translation",
    description:
      "Translate video transcripts into multiple languages, making your content accessible to a global audience.",
    icon: Globe,
  },
  {
    title: "Video Editing",
    description:
      "Edit your videos with ease, providing tools to cut, merge, and enhance your footage effortlessly.",
    icon: Video,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full items-start justify-items-center min-h-screen px-6 sm:px-20 font-sans bg-black">
      <section className="flex flex-col justify-center items-center w-full py-48 gap-10">
        <div className="flex flex-col gap-2 max-w-xl items-center">
          <div>
            <motion.h1
              className="text-4xl font-bold text-center text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Instantly transcribe and summarize any YouTube video.
            </motion.h1>
          </div>
          <p className="text-lg text-center text-white mt-4">
            Meet Echoo — Your personal assistant to analyze any YouTube video in
            seconds, so you can get to insights that matter.
          </p>
        </div>
        <div>
          <YoutubeVideoForm />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full py-24 rounded-xl">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white text-center">
            Powerful features for content creators
          </h2>
          <p className="text-lg text-gray-500 text-center mt-4">
            Discover tools that help you create, edit, and optimize your content
            effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-16 rounded-xl gap-4  bg-neutral-900"
              >
                <Icon className="w-8 h-8 mb-4 text-lime-300" />
                <h3 className="text-xl text-white font-semibold">
                  {feature.title}
                </h3>
                <p className="text-center text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full py-24 rounded-xl">
        <div>
          <h2 className="text-3xl font-bold text-white text-center">
            Meet Your AI Agent in 3 Simple Steps
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-16 rounded-xl gap-4  bg-neutral-900"
              >
                <Icon className="text-lime-400" />
                <h3 className="text-white text-3xl">{step.title}</h3>
                <p className="text-white text-xl">{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <footer>
        <footer className="w-full py-8 bg-neutral-900">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Echoo. All rights reserved.
            </p>
          </div>
        </footer>
      </footer>
    </div>
  );
}
