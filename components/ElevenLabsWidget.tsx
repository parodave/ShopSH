'use client';

import { useEffect, useState } from 'react';

const SCRIPT_SRC = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
const AGENT_ID = 'agent_6801kcv4f1g9fbyt2fmesqhfap8r';

export default function ElevenLabsWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return <elevenlabs-convai agent-id={AGENT_ID}></elevenlabs-convai>;
}
