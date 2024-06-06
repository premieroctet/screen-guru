<p align="center">
<img width="207" alt="image" src="https://user-images.githubusercontent.com/1102595/56277368-832c6900-6104-11e9-93fa-9d27636e3fb5.png">
</p>

# Screen Guru 🔮

> Take clean screenshot of any websites. — https://screen.guru

- 🎨 Custom background color
- 🖥 Browser template
- ⚡️ Emoji ready (with [Emojione font](https://github.com/emojione/emojione-assets))

[![Screeshot](https://user-images.githubusercontent.com/1102595/53693876-e0fc3000-3da6-11e9-9df2-5acbef417377.png)](https://screen.guru)

**Bookmarklet**

```
javascript:location.href='https://screen.guru?url='+encodeURIComponent(location.href)
```

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
serverless config credentials --provider aws --key XXX --secret XXX
yarn
yarn build-lambda-sharp

serverless deploy
```

Update the env var `REACT_APP_LAMBDA_ENDPOINT` (in `.env`) with your lambda endpoint

## Sponsors

This project is being developed by [Premier Octet](https://www.premieroctet.com), a Web and mobile agency specializing in React and React Native developments.

