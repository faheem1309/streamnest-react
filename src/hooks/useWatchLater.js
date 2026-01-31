export function useWatchLater() {
  const toggle = (video) => {
    const list = JSON.parse(localStorage.getItem("later")) || [];
    const exists = list.find(v => v.id === video.id);
    const updated = exists
      ? list.filter(v => v.id !== video.id)
      : [...list, video];

    localStorage.setItem("later", JSON.stringify(updated));
  };

  return { toggle };
}