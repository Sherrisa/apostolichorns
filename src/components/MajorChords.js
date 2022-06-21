import Table from "react-bootstrap/Table";

const MajorChords = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Root</th>
            <th>2nd Inversion</th>
            <th>Root Position</th>
            <th>1st Inversion</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>7 sharps</td>
            <td>G#-C#-E#</td>
            <td>C#-E#-G#</td>
            <td>E#-G#-C#</td>
          </tr>
          <tr>
            <td>6 sharps</td>
            <td>C#-F#-A#</td>
            <td>F#-A#-C#</td>
            <td>A#-C#-F#</td>
          </tr>
          <tr>
            <td>5 sharps</td>
            <td>G#-B-D#</td>
            <td>B-D#-F#</td>
            <td>D#-F#-B</td>
          </tr>
          <tr>
            <td>4 sharps</td>
            <td>B-E-G#</td>
            <td>E-G#-B</td>
            <td>G#-B-E</td>
          </tr>
          <tr>
            <td>3 sharps</td>
            <td>E-A-C#</td>
            <td>A-C#-E</td>
            <td>C#-E-A</td>
          </tr>
          <tr>
            <td>2 sharps</td>
            <td>A-D-F#</td>
            <td>D-F#-A</td>
            <td>F#-A-D</td>
          </tr>
          <tr>
            <td>1 sharp</td>
            <td>D-G-B</td>
            <td>G-B-D</td>
            <td>B-D-G</td>
          </tr>
          <tr>
            <td></td>
            <td>G-C-E</td>
            <td>C-E-G</td>
            <td>E-G-C</td>
          </tr>
          <tr>
            <td>1 flat</td>
            <td>C-F-A</td>
            <td>F-A-C</td>
            <td>A-C-F</td>
          </tr>
          <tr>
            <td>2 flats</td>
            <td>F-Bb-D</td>
            <td>Bb-D-F</td>
            <td>D-F-Bb</td>
          </tr>
          <tr>
            <td>3 flats</td>
            <td>Bb-Eb-G</td>
            <td>Eb-G-Bb</td>
            <td>G-Bb-Eb</td>
          </tr>
          <tr>
            <td>4 flats</td>
            <td>Eb-Ab-C</td>
            <td>Ab-C-Eb</td>
            <td>C-Eb-Ab</td>
          </tr>
          <tr>
            <td>5 flats</td>
            <td>Ab-Db-F</td>
            <td>Db-F-Ab</td>
            <td>F-Ab-Db</td>
          </tr>
          <tr>
            <td>6 flats</td>
            <td>Db-Gb-Bb</td>
            <td>Gb-Bb-Db</td>
            <td>Bb-Db-Gb</td>
          </tr>
          <tr>
            <td>7 flats</td>
            <td>Gb-Cb-Eb</td>
            <td>Cb-Eb-Gb</td>
            <td>Eb-Gb-Cb</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default MajorChords;
