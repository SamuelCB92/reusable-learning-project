// TypeScriptApp.tsx
import React from "react";

interface Props {
  name?: string;
}

const TypeScriptApp: React.FC<Props> = ({ name = "World" }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>This is a TypeScript component</p>
    </div>
  );
};

export default TypeScriptApp;
