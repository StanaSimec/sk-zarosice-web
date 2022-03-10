import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { LINKS } from "./constants/constants";
import { Table } from "./components/Table/Table";
import { RESULTS } from "./data/results";
import { FRIENDLY_MATCHES, NEXT_MATCH } from "./data/nextMatches";
import { POINTS } from "./data/points";
import { NextMatch } from "./components/NextMatch/NextMatch";
import Results from "./components/Results/Results";
import { CategoryHeader } from "./components/CategoryHeader/CategoryHeader";
import { TEAM_CATEGORIES, COMPETITIONS } from "./constants/constants";
import { FriendlyMatches } from "./components/FriendlyMatches/FriendlyMatches";

const Page = ({
  competition,
  nextMatch,
  points,
  results,
  category,
  frienldyMatch,
}) => {
  return (
    <>
      <Header />
      <CategoryHeader text={`${category} : ${competition}`} />
      <FriendlyMatches matches={frienldyMatch} />
      <NextMatch match={nextMatch} />
      <Table points={points} />
      <Results results={results} />
    </>
  );
};

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          exact
          path={LINKS.A_TEAM}
          element={
            <Page
              nextMatch={NEXT_MATCH.A_TEAM}
              frienldyMatch={FRIENDLY_MATCHES.A_TEAM}
              points={POINTS.A_TEAM}
              results={RESULTS.A_TEAM}
              competition={COMPETITIONS.A_TEAM}
              category={TEAM_CATEGORIES.A_TEAM}
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
              competition={COMPETITIONS.U19}
              category={TEAM_CATEGORIES.U19}
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
              competition={COMPETITIONS.U15}
              category={TEAM_CATEGORIES.U15}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
