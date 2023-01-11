import React from 'react';
import { GlobalStyle } from '../src/shared/global';

/*
 * Global decorator to apply the styles to all stories
 * Read more about them at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 * 
 * The <> in the decorator is not a typo--it’s a React Fragment that we use here to 
 * avoid adding an unnecessary extra HTML tag to our output.
 */
export const decorators = [
     Story => (
       <>
         <GlobalStyle />
         <Story />
       </>
     ),
   ];

/*
 * Read more about global parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}