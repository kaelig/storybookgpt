import { useState } from "react";
import "./App.css";
import { Head } from "@impalajs/react/head";
import Logo from "./assets/logo.png";

interface AppProps {
  title: string;
}

export const App: React.FC<React.PropsWithChildren<AppProps>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Generate Storybook stories in React and TypeScript with CSF v2"
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Generate Storybook stories in React and TypeScript with CSF v2"
        />
        <meta property="og:url" content="https://storybookgpt.netlify.app" />
        <meta property="og:image" content={Logo} />
      </Head>
      {children}
    </>
  );
};
