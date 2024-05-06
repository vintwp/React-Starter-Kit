/* eslint-disable react/jsx-one-expression-per-line */
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as counterActions from 'features/counter';
import reactLogo from 'assets/react.svg';
import viteLogo from 'assets/vite.svg';
import './App.css';

export const App = () => {
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector(state => state.counter);

  const handleClickIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleClickDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux</h1>
      <div className="card">
        <button
          className="button button--action"
          type="button"
          onClick={handleClickDecrement}
        >
          -
        </button>
        <button className="button button--view" type="button" disabled>
          {`count is ${counter}`}
        </button>
        <button
          className="button button--action"
          type="button"
          onClick={handleClickIncrement}
        >
          +
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
