import React, { useState } from "react";

export default function UrlInputField({ onShortClick }) {
  const [urlValue, setUrlValue] = useState("");
  console.log("urlValue", urlValue);
  return (
    <>
      <div className="main-container__inputfield">
        <input
          type="text"
          placeholder="Paste your url here."
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
        />
        <button onClick={() => onShortClick(urlValue)}>Convert</button>
      </div>
    </>
  );
}
