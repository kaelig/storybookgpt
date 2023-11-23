# StorybookGPT template

## Create your own GPT-powered chat bot

You can use this template to create your own StorybookGPT chat bot powered by OpenAI and the
ChatGPT API. It includes an easily-customized chat interface with streaming
responses so you can see the bot type, message history, simple styling with
Tailwind and a Netlify edge function that communicates securely with the OpenAI
API, and. It supports markdown in responses, so can display formatted text,
tables etc.

### [Demo site](https://storybookgpt.netlify.app/) (private at the moment)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kaelig/storybookgpt)

## Features

- :zap: deploy your StorybookGPT bot in less than 5 minutes
- :rocket: streaming responses powered by ChatGPT
- :100: simple, high-performance chat interface
- :moneybag: This template is completely free for any use. Use free OpenAI
  credits to get started, and deploy your site for free to Netlify.
- ⚛️ easy to customize: built with React, TailwindCSS and TypeScript

## Getting started

1. [Sign up for an OpenAI account](https://platform.openai.com/signup) and
   [get your API key](https://platform.openai.com/account/api-keys)
2. [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/kaelig/storybookgpt),
   pasting the API key when prompted
3. [Customize StorybookGPT](#customizing-your-bot)
4. [Share your creation](https://github.com/kaelig/storybookgpt/discussions/categories/show-and-tell)

## Local development

1. Clone your repository `gh repo clone <your-username>/storybookgpt`
1. Install dependencies: `npm install`
1. Run the bot locally: `npm run dev`

## Customizing your bot

This bot is preconfigured for Netlify's preferences when it comes to its stories formats, but each team has different preferences. For example, you may use Component Story Format 3.0 with vanilla JSX, whereas Netlify uses CSF 2.0 with TypeScript.

### Name

Edit your site title and description in `src/App.tsx`, `src/index.html`, `src/routes/index.tsx`.

### Prompt

The prompt is what tells your bot who it is. It is here that you give the bot
its mission, personality and rules. The most important thing to do is create
your own prompt to follow your team's conventions.

The prompt is set in `storybookgpt.ts`.

## Impala

The chat interface is an
[Impala](https://github.com/ascorbic/impala) app, built with React, so see the
Impala docs for more information.

---

Original [Daneel](https://github.com/ascorbic/daneel) template Released under the MIT license. Free for any use. ©
[Matt Kane](https://github.com/ascorbic) and contributors 2023.
