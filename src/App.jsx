import React from 'react';
import events from './data/upcoming-events.json';
import { PageBoard } from './components/PageBoard/PageBoard.jsx';
import { GlobalStyle } from "./GlobalStyles";
import { Title } from "./components/Title";

const App = () => (
  <>
    <GlobalStyle />
    <Title>24th Core Worlds Coalition Conference</Title>
    <PageBoard events={events} />
  </>
);

export default App;
