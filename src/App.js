import React from 'react';
import {
  Page,
  ExampleUseSpringWithoutState,
  ExampleUseSpringWithState,
  ExampleUseSpringCallback,
  ExampleUseSpringAsyncAwait,
  ExampleUseSpringPreset,
  ExampleUseTrail,
  ExampleUseChain
} from './components';

const data = {
  user: {
    avatar:
      'https://cdnph.upi.com/svc/sv/upi/6421558273361/2019/1/3c5388612e5bf9806e5ef89b2f1cc87b/John-Wick-tops-the-North-American-box-office-with-57M.jpg',
    name: 'John Wick',
    career: 'Matador de dragões'
  },
  title: 'Tutorial: Matando com um lápis',
  description:
    'John Wick está com a cabeça a prêmio por US$ 14 milhões. O motivo: ele quebrou a regra básica de não matar ninguém no território do Hotel Continental. '
};

// #282A36

function App() {
  return (
    <Page>
      <ExampleUseSpringWithoutState {...data} />
      <ExampleUseSpringWithState {...data} />
      <ExampleUseSpringCallback {...data} />
      <ExampleUseSpringAsyncAwait {...data} />
      <ExampleUseSpringPreset {...data} />
      <ExampleUseChain {...data} />
      <ExampleUseTrail />
    </Page>
  );
}

export default App;
