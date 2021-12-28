import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { LINKS } from './shared/links';
import { Table } from './components/Table/Table';
import { NEXT_MATCH, POINTS, RESULTS } from './shared/results';
import { NextMatch } from './components/NextMatch/NextMatch';
import Results from './components/Results/Results';
import { CategoryHeader } from './components/CategoryHeader/CategoryHeader';

import './App.scss';

const Page = ({ nextMatch, points, results }) => {
  return (
    <>
      <Header />
      <CategoryHeader text='Následující utkání:' />
      <NextMatch match={nextMatch} />
      <CategoryHeader text='Tabulka:' />
      <Table points={points} />
      <CategoryHeader text='Odehraná utkání:' />
      <Results results={results} />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path={LINKS.A_TEAM}
          element={
            <Page
              nextMatch={NEXT_MATCH.A_TEAM}
              points={POINTS.A_TEAM}
              results={RESULTS.A_TEAM}
            />
          }
        ></Route>
        <Route
          path={LINKS.U19}
          element={
            <Page
              nextMatch={NEXT_MATCH.U19}
              points={POINTS.U19}
              results={RESULTS.U19}
            />
          }
        ></Route>
        <Route
          path={LINKS.U15}
          element={
            <Page
              nextMatch={NEXT_MATCH.U15}
              points={POINTS.U15}
              results={RESULTS.U15}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
