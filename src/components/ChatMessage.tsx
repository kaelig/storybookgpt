import {
  FunctionComponent,
  DetailedHTMLProps,
  TableHTMLAttributes,
  useState,
  useEffect,
} from "react";
import ReactMarkdown from "react-markdown";
import { ReactMarkdownProps } from "react-markdown/lib/complex-types";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
interface Props {
  message: ChatMessage;
}

// This lets us style any markdown tables that are rendered
const CustomTable: FunctionComponent<
  Omit<
    DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>,
    "ref"
  > &
    ReactMarkdownProps
> = ({ children, ...props }) => {
  return (
    <div className="tw-overflow-x-auto tw-p-1">
      <table
        {...props}
        className="tw-w-full tw-text-left tw-border-collapse tw-table-auto"
      >
        {children}
      </table>
    </div>
  );
};

/**
 * This component renders a single chat message. It is rendered according to
 * whether it isa  message from the assistant or the user.
 */

export const ChatMessage: React.FC<React.PropsWithChildren<Props>> = ({
  message,
}) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus").then(
      (mod) => setStyle(mod.default)
    );
  });

  return message.role === "user" ? (
    <div className="tw-flex tw-items-end tw-justify-end">
      <div className="tw-max-w-lg">
        <ReactMarkdown
          children={"```tsx\n" + message.content + "\n```"}
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;

              return (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language="tsx"
                  style={style}
                  className="tw-rounded-sm"
                />
              );
            },
          }}
        />
      </div>
    </div>
  ) : (
    <div className="tw-flex tw-items-end">
      <div className="tw-bg-gray-lightest tw-border-gray-light tw-border tw-rounded-lg tw-py-2 tw-px-3 tw-mr-20 tw-w-full [&_p]:tw-max-w-[72ch]">
        <ReactMarkdown
          children={message.content}
          remarkPlugins={[remarkGfm]}
          components={{
            table: CustomTable,
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={style}
                  className="tw-rounded-sm"
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
};
