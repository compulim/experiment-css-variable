import { useMemo } from 'react';

var App = () => {
  var backgroundColor = useMemo(() => getComputedStyle(document.body).getPropertyValue('background-color'), []);
  var variableOne = useMemo(() => getComputedStyle(document.body).getPropertyValue('--var-one'), []);
  var variableTwo = useMemo(() => getComputedStyle(document.body).getPropertyValue('--var-two'), []);
  var variableThree = useMemo(() => (getComputedStyle(document.body) as any)['-var-three'], []);
  var variableFour = useMemo(() => (getComputedStyle(document.body) as any)['-var-four'], []);

  // Check mutation.

  return (
    <div>
      <h1>CSS variable experiment</h1>
      <dl>
        <dt>
          <code>background-color</code>
        </dt>
        <dd>
          {JSON.stringify(backgroundColor)} <small>(type of <code>{typeof backgroundColor}</code>)</small>
        </dd>
        <dt>
          <code>--var-one</code>
        </dt>
        <dd>
          {JSON.stringify(variableOne)} <small>(type of <code>{typeof variableOne}</code>)</small>
        </dd>
        <dt>
          <code>--var-two</code>
        </dt>
        <dd>
          {JSON.stringify(variableTwo)} <small>(type of <code>{typeof variableTwo}</code>)</small>
        </dd>
        <dt>
          <code>-var-three</code>
        </dt>
        <dd>
          {JSON.stringify(variableThree)} <small>(type of <code>{typeof variableThree}</code>)</small>
        </dd>
        <dt>
          <code>-var-four</code>
        </dt>
        <dd>
          {JSON.stringify(variableFour)} <small>(type of <code>{typeof variableFour}</code>)</small>
        </dd>
      </dl>
      <p>IE Mode has some limitations:</p>
      <ul>
        <li>
          Only one dash `-` is allowed
          <ul>
            <li>However, one dash is not supported by modern browsers</li>
          </ul>
        </li>
        <li>
          Use indexer of <code>CSSStyleDeclaration</code>, instead of{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue">
            <code>getPropertyValue</code>
          </a>
          <ul>
            <li>
              For example, <code>getComputedStyle(element)['-my-var']</code>
            </li>
          </ul>
        </li>
        <li>Need to check: CSS cascading</li>
        <li>Need to check: MutationObserver</li>
      </ul>
    </div>
  );
};

export default App;
