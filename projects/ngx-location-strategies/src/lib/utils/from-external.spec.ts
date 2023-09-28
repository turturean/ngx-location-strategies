import { FromExternalUrl } from './from-external-url';

describe('FromExternalUrl', () => {
  const queryParamNames = ['app', 'MyApp', 'my-app']
  for (let i = 0; i < queryParamNames.length; i++) {
    const queryParamName = queryParamNames[i]

    describe(`When query param name is ${queryParamName}`, () => {
      const urls = [
        ['/', '/'],
        ['', '/'],
        ['/#tag', '/#tag'],
        [`/?${queryParamName}=/posts`, '/posts'],
        [`/?${queryParamName}=/posts&${queryParamName}=/post/23`, '/posts'],
        [`/?${queryParamName}=/posts#tag`, '/posts#tag'],
        [`/?${queryParamName}=/`, '/'],
        [`/?${queryParamName}=`, '/'],
        [`/?${queryParamName}=/posts&test=23`, '/posts?test=23'],
        [`/?${queryParamName}=/posts&test=23#tag`, '/posts?test=23#tag'],
        ['/?test=23&test1=23', '/?test=23&test1=23'],
        ['/?test=23&test1=23#tag', '/?test=23&test1=23#tag'],
        [`/mypath/?${queryParamName}=/posts&test=23`, '/posts?test=23'],
        [`/mypath/?${queryParamName}=/posts&test=23#tag`, '/posts?test=23#tag'],
      ];

      for (let i = 0; i < urls.length; i++) {
        const [externalUrl, internalUrl] = urls[i];

        it(`external url="${externalUrl}" internal should be "${internalUrl}"`, () => {
          const parsedUrl = new FromExternalUrl(externalUrl, queryParamName);

          expect(parsedUrl.getUrl()).toBe(internalUrl);
        });
      }
    })

  }

});
