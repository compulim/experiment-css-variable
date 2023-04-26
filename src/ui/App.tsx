import { useMemo } from 'react';

var App = () => {
  var backgroundColor = useMemo(() => getComputedStyle(document.body).getPropertyValue('background-color'), []);
  var variableOne = useMemo(() => getComputedStyle(document.body).getPropertyValue('--var-one'), []);
  var variableTwo = useMemo(() => getComputedStyle(document.body).getPropertyValue('--var-two'), []);
  var variableThree = useMemo(() => (getComputedStyle(document.body) as any)['-ie-var-three'], []);
  var variableFour = useMemo(() => (getComputedStyle(document.body) as any)['-ie-var-four'], []);

  // Check mutation.

  return (
    <div>
      <h1>CSS variable experiment</h1>
      <dl>
        <dt>
          <code>background-color</code>
        </dt>
        <dd>
          {backgroundColor} (type of <code>{typeof backgroundColor}</code>)
        </dd>
        <dt>
          <code>--var-one</code>
        </dt>
        <dd>
          {variableOne} (type of <code>{typeof variableOne}</code>)
        </dd>
        <dt>
          <code>--var-two</code>
        </dt>
        <dd>
          {variableTwo} (type of <code>{typeof variableTwo}</code>)
        </dd>
        <dt>
          <code>-ie-var-three</code>
        </dt>
        <dd>
          {variableThree} (type of <code>{typeof variableThree}</code>)
        </dd>
        <dt>
          <code>-ie-var-four</code>
        </dt>
        <dd>
          {variableFour} (type of <code>{typeof variableFour}</code>)
        </dd>
      </dl>
    </div>
  );
};

export default App;
