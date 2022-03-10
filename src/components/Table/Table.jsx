import { HOME_TEAM } from "../../constants/constants";
import { CategoryHeader } from "../CategoryHeader/CategoryHeader";
import Text, { TEXT_COLOR } from "../Text/Text";

import "./Table.scss";

const Header = () => (
  <tr>
    <th>
      <Text text={"#"} />
    </th>
    <th>
      <Text text={"Klub"} />
    </th>
    <th>
      <Text text={"Z"} />
    </th>
    <th>
      <Text text={"B"} />
    </th>
  </tr>
);

const Row = ({ point, position = 0 }) => {
  const { team = "", points = 0, matches = 0 } = point;
  const color = team === HOME_TEAM ? TEXT_COLOR.GREEN : undefined;
  return (
    <tr>
      <td>
        <Text text={position} color={color} />
      </td>
      <td>
        <Text text={team} color={color} />
      </td>
      <td>
        <Text text={matches} color={color} />
      </td>
      <td>
        <Text text={points} color={color} />
      </td>
    </tr>
  );
};

const Content = ({ points = [] }) => {
  const sorted = points.sort((a, b) => {
    if (a.position < b.position) {
      return -1;
    }
    if (a.position > b.position) {
      return 1;
    }
    return 0;
  });
  return sorted.map((point) => (
    <Row point={point} key={point.team} position={point.position} />
  ));
};

export const Table = ({ points = [] }) => {
  return (
    <>
      <CategoryHeader text="Tabulka:" />
      <div className="results-table">
        <table className="points">
          <tbody>
            <Header />
            <Content points={points} />
          </tbody>
        </table>
      </div>
    </>
  );
};
