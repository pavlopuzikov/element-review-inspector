"use client";

// Dev-only element inspector + comment queue, for React and Next.js.
//
// Mount it outside production only:
//   {process.env.NODE_ENV !== "production" && <DevInspector />}
//
// Everything lives in ./element-review-inspector.js. This file is deliberately a thin
// wrapper: the previous version was a second full implementation that had
// already drifted from the vanilla one (different DOM traversal depth, missing
// clipboard fallback) after a single commit.

import { useEffect } from "react";
import { mount, type ElementReviewInspectorOptions } from "./element-review-inspector.js";

export type DevInspectorProps = ElementReviewInspectorOptions;

export function DevInspector({ accent, select, hotkey, storage }: DevInspectorProps = {}) {
  useEffect(() => {
    const api = mount({ accent, select, hotkey, storage });
    return () => api?.destroy();
  }, [accent, select, hotkey, storage]);

  // The UI is rendered into a shadow root attached to document.body, so React
  // has nothing to render here and never fights the host page's stacking order.
  return null;
}

export default DevInspector;
