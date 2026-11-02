import { useRef } from 'react';
import useCountUp from '../hooks/useCountUp';

/**
 * Animated statistic, e.g. "4,800+".
 * An invisible copy of the final value reserves the space, so the layout never
 * shifts while the number counts up. Screen readers only hear the final value.
 */
export default function StatCounter({ value }) {
  const liveRef = useRef(null);
  useCountUp(liveRef, value);

  return (
    <span className="counter">
      <span className="visually-hidden">{value}</span>
      <span className="counter__ghost" aria-hidden="true">
        {value}
      </span>
      <span className="counter__live" aria-hidden="true" ref={liveRef} />
    </span>
  );
}
