import PropTypes from 'prop-types';
import { Event } from '../../../src/components/Event/Event.jsx';
import { EventsList } from "./PageBoard.js"

export const PageBoard = ({ events }) => {
  return (
    <EventsList className="board">
      {events.map((event, index) => (
        <Event
          key={index}
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          start={event.time.start}
          end={event.time.end}
        />
      ))}
    </EventsList>
  );
};

PageBoard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};