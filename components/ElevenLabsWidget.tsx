"use client";

import Script from "next/script";

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;

export default function ElevenLabsWidget() {
  if (!AGENT_ID) return null;

  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
      <elevenlabs-convai agent-id={AGENT_ID}></elevenlabs-convai>
    </>
  );
}