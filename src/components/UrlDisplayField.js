import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function UrlDisplayField({ shortUrl }) {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <div className="main-container__displayfield">
        <span className="main-container__displayfield__shortUrl">
          {shortUrl}
        </span>
        <CopyToClipboard text={shortUrl} onCopy={() => setCopied(true)}>
          <span className="main-container__displayfield__copyButton">Copy</span>
        </CopyToClipboard>
        {copied ? (
          <span className="main-container__displayfield__copied">
            {" "}
            &#10003; Copied !
          </span>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
