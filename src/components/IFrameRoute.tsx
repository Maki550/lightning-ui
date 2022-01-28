import React, { useEffect, useRef } from "react";

import useLightingState from "hooks/useLightningState";

type Props = {
  name: string;
  iframeTargetUrl: string;
};

export default function IFrameRoute(props: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const lightningState = useLightingState();

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin === "TODO(alecmerdler): What do we expect here...?") {
        console.log(e.data);
      }
    }

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    }
  });

  useEffect(() => {
    if (iframeRef.current && lightningState.data) {
      iframeRef.current.contentWindow?.postMessage(
        // TODO(alecmerdler): Use tree traversal to only pass the piece of state for the given component...
        lightningState.data,
        window.location.host
      );
    }
  }, [lightningState.data]);

  return (
    <iframe 
      name={props.name} 
      src={props.iframeTargetUrl} 
      title={props.name} 
      ref={iframeRef}
    />
  );
}
