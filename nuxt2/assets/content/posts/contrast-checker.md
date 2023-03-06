---
title: "Project: Colour Contrast Checker"
description: Check the colour contrast for your apps theme colours using the WebAIM API.
tags: ["WCAG", "API", "WebAIM", "Colour Contrast", "Vue 3"]
---

## Building a theme colour contrast checker

I often use the [WebAIM](https://webaim.org/resources/contrastchecker/) colour contrast checker when coding to make sure colours have enough contrast against the background. Who doesn't want their colour choices to be accessible and readable by everyone. The WebAIM checker is great but you can only check one colour at a time and there's a lot of copy + paste if you need to check all your theme colours. So I thought it would be fun to build an app that can can check a whole theme at the same time.

## WebAIM API

The idea for this project came when I read that the WebAIM checker is also an API. Amazing, I know. It's used by including a foreground and background hex colour code with out the `#` in the URL and appending `&api` at the end. For example:

```js
https://webaim.org/resources/contrastchecker/?fcolor=ffffff&bcolor=000000&api
```

This example is checking a foreground ground colour of `#ffffff` against a background colour of `#000000`. The API response is the ratio along with a pass or fail for each of the WCAG contrast levels (AA, AALarge, AAA and AAALarge).

```json
{
  "ratio": "21",
  "AA": "pass",
  "AALarge": "pass",
  "AAA": "pass",
  "AAALarge": "pass"
}
```

## Checking contrast in the app

To use the API in the app I have a `checkContrast` function that takes in two colours as string values. I create the url template string with the values passed in and then use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to get the contrast result.

```ts
async function checkContrast(
  colour1: string,
  colour2: string
): Promise<ContrastResult | undefined> {
  // Use the WebAIM contrast checker API - https://webaim.org/resources/contrastchecker/
  const url = `https://webaim.org/resources/contrastchecker/?fcolor=${colour1}&bcolor=${colour2}&api`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    // Display error message

    return undefined;
  }
}
```

View the project on [Github](https://github.com/KajsaEklof/contrast-checker) or test it out [here](https://colourcontrastchecker.netlify.app/).
