import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Table, FriendlyMatches, CategoryHeader, Results, NextMatch } from "./components";
import { LINKS, TEAM_CATEGORIES, COMPETITIONS } from "./constants";
import { RESULTS, FRIENDLY_MATCHES, POINTS } from "./data";
import { NextMatchService } from "./service";

const Page = ({
  competition,
  nextMatch,
  points,
  results,
  category,
  friendlyMatch,
}) => {
  return (
    <>
      <Header />
      <CategoryHeader text={`${category} : ${competition}`} />
      <FriendlyMatches matches={friendlyMatch} />
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
              nextMatch={NextMatchService.getAteamNextMatch()}
              friendlyMatch={FRIENDLY_MATCHES.A_TEAM}
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
              nextMatch={NextMatchService.getU19NextMatch()}
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
              nextMatch={NextMatchService.getU15NextMatch()}
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
