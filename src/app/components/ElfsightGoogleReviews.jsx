// src/app/components/ElfsightGoogleReviews.jsx
"use client"; // This component needs to be a Client Component

import { useEffect } from "react";

const ElfsightGoogleReviews = () => {
  useEffect(() => {
    // This script will load the Elfsight platform and render the widget
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.dataset.useCdn = "true"; // Often recommended by Elfsight for better performance
    document.body.appendChild(script);

    // Clean up the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Run once on mount

  return (
    // This div is where the Elfsight widget will be injected
    <div
      className="elfsight-app-2bcd10cd-e13a-411e-bd88-42eb6e5db7a0 bg-transparent"
      data-elfsight-app-lazy
    ></div>
  );
};

export default ElfsightGoogleReviews;
