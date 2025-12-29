"use client";

import { GoogleAnalytics as GAComponent } from "nextjs-google-analytics";

export default function GoogleAnalytics() {
  return (
    <GAComponent
      trackPageViews
      gaMeasurementId="G-Z6GERH4RW8"
      debugMode={false}
    />
  );
}