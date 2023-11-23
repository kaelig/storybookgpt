import type { Meta, StoryFn } from "@storybook/react";
import { ChatMessage as ChatMessageComponent } from "./ChatMessage";

export default {
  title: "ChatMessage",
  component: ChatMessageComponent,
} as Meta<typeof ChatMessageComponent>;

const StoryTemplate: StoryFn<typeof ChatMessageComponent> = (args) => (
  <ChatMessageComponent {...args} />
);

export const UserChatMessage = StoryTemplate.bind({});
UserChatMessage.args = {
  message: {
    role: "user",
    content: `
import React from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  // Define the base styles
  let baseStyles = 'px-4 py-2 rounded font-bold text-white';

  // Define styles for each variant
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700',
    secondary: 'bg-slate-500 hover:bg-slate-700',
    danger: 'bg-red-500 hover:bg-red-700',
  };

  // Combine base and variant-specific styles
  const buttonStyles = \`\${baseStyles} \${variantStyles[variant]}\`;

  return <button className={buttonStyles}>{children}</button>;
};

export default Button;
`.trim(),
  },
};

export const AssistantChatMessage = StoryTemplate.bind({});
AssistantChatMessage.args = {
  message: {
    role: "assistant",
    content: `
Here's how you would write the Storybook stories for your Button component:

\`\`\`tsx
import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const StoryTemplate: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Primary = StoryTemplate.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Secondary = StoryTemplate.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

export const Danger = StoryTemplate.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger',
};
\`\`\`

This will result in each of the variants 'Primary', 'Secondary', and 'Danger' being available as separate stories in your Storybook.
`.trim(),
  },
};
