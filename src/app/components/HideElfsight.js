"use client";
import { useEffect } from "react";

export default function HideElfsight() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const elfsightLink = document.querySelector(
        'a[href*="elfsight.com/google-reviews-widget"]'
      );
      if (elfsightLink) {
        elfsightLink.style.display = "none";
        elfsightLink.style.visibility = "hidden";
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
