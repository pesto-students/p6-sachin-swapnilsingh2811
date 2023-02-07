import React from "react";
import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import  "../App.css";
const LinkShortener = (props) => {
  const [shortenLink, setShortenLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (props.input.length) {
      const fetchData = () => {
        setLoading(true);
        console.log("a");
        fetch(`https://api.shrtco.de/v2/shorten?url=${props.input}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.result.full_short_link);
            setShortenLink(data.result.full_short_link);
          })
          .catch((err) => setError(err))
          .finally(setLoading(false));
      };
      fetchData();
    }
  }, [props.input]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="noData">loading</p>;
  }
  if (error) {
    return <p className="noData">Something Went Wrong</p>;
  }
  const copyingHandler = () => {
    setCopied(true);
  };

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p className="result p">{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={copyingHandler}>
            <button className={copied? "copied":""}>CopyToClipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkShortener;
