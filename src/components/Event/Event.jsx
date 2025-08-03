import PropTypes from 'prop-types';
import { EventItem, InfoName } from "./Event";

export const Event = ({ name, location, speaker, start, end }) => {
  const duration = Math.round((new Date(end) - new Date(start)) / 1000 / 60 / 60);
  const date = new Date(start).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <EventItem className="event">
      <InfoName>{name}</InfoName>
      <InfoName>📍 {location}</InfoName>
      <InfoName>🧑 {speaker}</InfoName>
      <InfoName>📅 {date}</InfoName>
      <InfoName>⏱️ {duration} hours</InfoName>
    </EventItem>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};