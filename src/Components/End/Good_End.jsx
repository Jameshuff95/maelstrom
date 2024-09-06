function Good_End({ setGameState }) {
  return (
    <>
      <p>
        Victor, overwhelmed by the suffocating madness, flees the apartment in a
        desperate bid for freedom. The cold night air hits him like a shock, and
        he stumbles through the empty streets, the sinister whispers still
        echoing in his mind. As he runs, the voices gradually fade, replaced by
        the distant sounds of the city. Exhausted and disoriented, Victor
        collapses on a park bench, the first rays of dawn breaking through the
        darkness. Though the voices are gone, the scars they left remain. Victor
        knows he must seek help to truly escape the torment that has plagued
        him, but for now, he finds solace in the quiet morning light.
      </p>
      <button className="button" onClick={() => setGameState('start')}>
        Start Menu
      </button>
    </>
  );
}

export default Good_End;
