import { Fragment, useMemo } from 'react';

var App = () => {
  var cssStyleSheet = useMemo(
    () =>
      document
        .getElementsByTagName('style')?.[0]
        ?.textContent?.split('\n')
        .slice(1)
        .map(line => line.substring(6))
        .join('\n'),
    []
  );
  var backgroundColor = useMemo(() => getComputedStyle(document.body).getPropertyValue('background-color'), []);
  var variableOne = useMemo(() => getComputedStyle(document.body).getPropertyValue('--var-one'), []);
  var variableTwo = useMemo(() => getComputedStyle(document.body).getPropertyValue('--var-two'), []);
  var variableThree = useMemo(() => (getComputedStyle(document.body) as any)['-var-three'], []);
  var variableFour = useMemo(() => (getComputedStyle(document.body) as any)['-var-four'], []);

  // Check mutation.

  return (
    <Fragment>
      <h1>CSS variables experiment</h1>
      <section>
        <p>Study how CSS variables work across browsers and quirks.</p>
      </section>
      <section>
        <h2>CSS stylesheet</h2>
        <pre>{cssStyleSheet}</pre>
      </section>
      <section>
        <h2>
          Using <code>CSSStyleDeclaration.getPropertyValue</code>
        </h2>
        <dl>
          <dt>
            <code>background-color</code>
          </dt>
          <dd>
            {JSON.stringify(backgroundColor)}{' '}
            <small>
              (type of <code>{typeof backgroundColor}</code>)
            </small>
          </dd>
          <dt>
            <code>--var-one</code>
          </dt>
          <dd>
            {JSON.stringify(variableOne)}{' '}
            <small>
              (type of <code>{typeof variableOne}</code>)
            </small>
          </dd>
          <dt>
            <code>--var-two</code>
          </dt>
          <dd>
            {JSON.stringify(variableTwo)}{' '}
            <small>
              (type of <code>{typeof variableTwo}</code>)
            </small>
          </dd>
          <dt>
            <code>-var-three</code>
          </dt>
          <dd>
            {JSON.stringify(variableThree)}{' '}
            <small>
              (type of <code>{typeof variableThree}</code>)
            </small>
          </dd>
          <dt>
            <code>-var-four</code>
          </dt>
          <dd>
            {JSON.stringify(variableFour)}{' '}
            <small>
              (type of <code>{typeof variableFour}</code>)
            </small>
          </dd>
        </dl>
      </section>
      <section>
        <h2>IE Mode has some limitations:</h2>
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
        </ul>
      </section>
      <section>
        <h2>To-do</h2>
        <ul>
          <li>Need to check: CSS cascading</li>
          <li>
            Need to check: support of <code>MutationObserver</code>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default App;
