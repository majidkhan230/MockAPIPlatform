import React from "react";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import {} from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ codeTxt, runScript }) {
  const codeString = `${codeTxt}`;
  return (
    <SyntaxHighlighter language="javascript" style={nightOwl}>
      {runScript
        ? `{"message": "welcome to Backend"}
        `
        : codeString}
    </SyntaxHighlighter>
  );
}

export default Code;
