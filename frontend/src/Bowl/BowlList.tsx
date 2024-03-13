import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlList() {
  const [BowlData, setBowlData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlData = async () => {
      const rsp = await fetch('http://localhost:5176/Bowler');
      const f = await rsp.json();
      setBowlData(f);
    };
    fetchBowlData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name:</th>
            <th>Team Name:</th>
            <th>Address:</th>
            <th>City:</th>
            <th>State:</th>
            <th>Zipcode:</th>
            <th>Phone Number:</th>
          </tr>
        </thead>
        <tbody>
          {BowlData.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerName}</td>
              <td>{b.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlList;
