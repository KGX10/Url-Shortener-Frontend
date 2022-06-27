import React, { useState } from "react";
import UrlInputField from "./components/UrlInputField";
import isUrl from "is-url";
import axios from "axios";
import UrlDisplayField from "./components/UrlDisplayField";

export default function Main() {
  const [errorMsg, setErrorMsg] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const onShortenClick = async (original_url) => {
    if (!isUrl(original_url)) {
      setErrorMsg("Invalid url");
      return;
    }
    setShortUrl("");
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/url/shorten`,
        {
          longUrl: original_url,
        }
      );
      if (res.data) {
        setShortUrl(res.data.shortUrl);
      }
      console.log("res", res);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="container main-container">
        <h1 className="main-heading">Best Url Shortener</h1>
        <UrlInputField onShortClick={onShortenClick} />
        {loading ? (
          <div class="spinner-border text-light" role="status" />
        ) : (
          <></>
        )}
        {shortUrl ? <UrlDisplayField shortUrl={shortUrl} /> : <></>}
        <div className="error-message">{errorMsg}</div>
      </div>
    </>
  );
}
