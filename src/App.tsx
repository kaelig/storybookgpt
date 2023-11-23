import "./App.css";
import { Head } from "@impalajs/react/head";

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
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Generate Storybook stories in React and TypeScript with CSF 2.0"
        />
      </Head>
      {children}
    </>
  );
};
