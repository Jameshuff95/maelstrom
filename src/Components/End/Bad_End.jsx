function Bad_End({ setGameState }) {
  return (
    <>
      <p>
        Victor, overwhelmed by the relentless torment of the voices, finally
        succumbs to the darkness. The oppressive whispers, once faint and
        insidious, now dominate his every thought. The furniture, once mere
        objects, seem to pulse with a malevolent life, their voices a constant
        barrage of venom and despair. Victor’s mind fractures under the weight
        of the relentless assault, and he descends into madness. The room, now a
        twisted reflection of his shattered psyche, closes in on him. Shadows
        twist and writhe, and the walls seem to breathe with a sinister life of
        their own. Victor, lost in the labyrinth of his own mind, can no longer
        distinguish reality from the nightmarish delusions that consume him. The
        once faint hope of reclaiming his sanity is extinguished, and he is left
        to wander the dark corridors of his mind, a prisoner of his own madness.
      </p>

      <button className="button" onClick={() => setGameState('start')}>
        Start Menu
      </button>
    </>
  );
}
export default Bad_End;
