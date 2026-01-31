import { useEffect } from "react";

const STORAGE_KEY = "streamnest_history";

export function useHistory() {
  const save = (video) => {
    const existing =
      JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const updated = [
      video,
      ...existing.filter((v) => v.id !== video.id),
    ];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );
  };

  return { save };
}