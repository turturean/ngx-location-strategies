import { ToExternalUrl } from './to-external-url';

describe('ToExternalUrl', () => {
  const queryParamNames = ['app', 'MyApp', 'my-app']

  for (let i = 0; i < queryParamNames.length; i++) {
    const queryParamName = queryParamNames[i]

    describe(`When query param name is ${queryParamName}`, () => {
      const urls = [
        ['/', ''],
        ['/#tag', '#tag'],
        ['/posts?test=23', `?${queryParamName}=/posts&test=23`],
        ['/posts?test=23#test', `?${queryParamName}=/posts&test=23#test`],
        ['/post/23', `?${queryParamName}=/post/23`],
        ['/post/23#tag', `?${queryParamName}=/post/23#tag`],
        ['/?test=23', '?test=23'],
        ['/?test=23&param1=aaa', '?test=23&param1=aaa'],
        ['/?test=23#tag', '?test=23#tag'],
      ];


      for (let i = 0; i < urls.length; i++) {
        const [internalUrl, externalUrl] = urls[i];

        it(`when internal url="${internalUrl}" external should be "${externalUrl}"`, () => {
          const parsedUrl = new ToExternalUrl(internalUrl, queryParamName);

          expect(parsedUrl.getUrl()).toBe(externalUrl);
        });
      }
    })
  }
});
