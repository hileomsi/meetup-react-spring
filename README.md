# React Spring

Baseado no principio de mola, não tem uma duração envolvida ou curva, um pouco diferente das medidas usadas geralmente nas animações, os movimentos na vida real não acontecem sobre curvas de tempo e duração

arbitrary curves, easings, time waterfalls, not to mention getting this all in sync

Como Andy Matuschak (ex-desenvolvedor da Apple UI-Kit) expressou isso uma vez: APIs de animação parametrizadas por duração e curva são fundamentalmente opostas à interatividade contínua e fluida.

Fisica de mola

Baseado em animated e react-motion

Interpolações, perfomance do animated, declarativo

suporte: web, react-native, react-native-web

### Hooks Api

Existem 5 hooks

useSpring: uma unica e simples animação de mola de um ponto A ou ponto B (Mudanças de propriedades de A até B)

useSprings: multiplas animações, para listas, onde executa um animação de A até B para cada item da lista

useTrail:

useTransition: transições para montagem de componentes e desmontagem

useChain: Uma fila ou encadeamento de animações

Necessario sempre usar o animated.div por razões de performance

Existem palavras reservadas para o objeto de parametro. (from, to, config, delay, onStart)

Sendo ele universal pode ser usado com React-native, componentes personalizados

```javascript
// React components
const AnimatedDonut = animated(Donut);

// React-native
const AnimatedView = animated(View);
```

Exemplos de uso

1.Opacity Heigth(-32px)

2.SVG

3.Number(Pode ser uma calculadora)

Existe a possibilidade de interpolação de animações

Exemplo com [react-measure](https://github.com/souporserious/react-measure).

```jsx
const [bind, { height }] = useMeasure();
const props = useSpring({ height });
return (
  <animated.div style={{ overflow: 'hidden', ...props }}>
    <div {...bind}>content</div>
  </animated.div>
);
```

##### Config

mass, tension, friction, velocity, duration

##### Presets

default, gentle, wobbly, stiff, slow, molasses

##### Properties

from, to, delay, config, onStart
