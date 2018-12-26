# Screen Guru 🔮

> Take clean screenshot of any websites. — https://screen.guru

- 🎨 Custom background color
- 🖥 Browser template
- ⚡️ Emoji ready (with [Emojione font](https://github.com/emojione/emojione-assets))

[![Screeshot](https://user-images.githubusercontent.com/1102595/50456960-4de2ec00-0958-11e9-8f50-598b1eceb026.png)](https://screen.guru)

## Getting started

**Stack**

- ⚛️ [Create React App](https://facebook.github.io/create-react-app/)
- ✨ [Amazon Lambda](https://aws.amazon.com/fr/lambda/)
- 📸 [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- ☁️ [Serverless](https://serverless.com/)
- 🏡 [Netlify](https://netlify.com)

**Install dependencies**

```sh
yarn install
```

**Build app**

```sh
yarn build
# Deploy the static app with Netlify / Surge.sh / Zeit
```

**Deploy lambda on AWS**

With [serverless](https://serverless.com/):

```sh
yarn global add serverless

cd lambda/screenshot
serverless config credentials –provider aws –key XXX –secret XXX
yarn
yarn add --dev serverless-apigwy-binary serverless-apigw-binary
yarn build-lambda-sharp

serverless deploy
```

Update the env var `REACT_APP_LAMBDA_ENDPOINT` (in `.env`) with your lambda endpoint
