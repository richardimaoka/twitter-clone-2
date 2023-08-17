"use client";

import { TweetTimelineView } from "@/app/components/timeline/TweetTimeline";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading breeds...</div>}>
        <TweetTimelineView />
      </Suspense>
    </main>
  );
}
