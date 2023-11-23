import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
interface Props {
  message: ChatMessage;
}

/**
 * This component renders a single chat message. It is rendered according to
 * whether it is a message from the assistant or the user.
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
                  className="tw-rounded-lg"
                />
              );
            },
          }}
        />
      </div>
    </div>
  ) : (
    <div className="tw-flex tw-items-end">
      <div className="tw-bg-slate-100 tw-border-slate-300 tw-border tw-rounded-lg tw-py-2 tw-px-3 tw-mr-20 tw-w-full [&_p]:tw-max-w-[72ch] [&_p]:tw-my-1 tw-text-slate-900 tw-text-sm">
        <ReactMarkdown
          children={message.content}
          remarkPlugins={[remarkGfm]}
          components={{
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
                  className="tw-rounded"
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
