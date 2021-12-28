import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { LINKS } from './shared/links';
import { Table } from './components/Table/Table';
import { NEXT_MATCH, POINTS, RESULTS } from './shared/results';
import { NextMatch } from './components/NextMatch/NextMatch';
import Results from './components/Results/Results';

import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path={LINKS.A_TEAM}
          element={
            <>
              <Header />
              <NextMatch match={NEXT_MATCH.A_TEAM} />
              <Table points={POINTS.A_TEAM} />
              <Results results={RESULTS.A_TEAM} />
            </>
          }
        ></Route>
        <Route
          path={LINKS.U19}
          element={
            <>
              <Header />
              <NextMatch match={NEXT_MATCH.U19} />
              <Table points={POINTS.U19} />
              <Results results={RESULTS.U19} />
            </>
          }
        ></Route>
        <Route
          path={LINKS.U15}
          element={
            <>
              <Header />
              <NextMatch match={NEXT_MATCH.U15} />
              <Table points={POINTS.U15} />
              <Results results={RESULTS.U15} />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
