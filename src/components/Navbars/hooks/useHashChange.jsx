import { useState } from "react"

export const useHashChange = () => {
  const [hash, setHash] = useState(window.location.hash);

  window.addEventListener("hashchange", (e) => {
    const url = new URL(e.newURL)
    setHash(url.hash)
  })
  return hash
}