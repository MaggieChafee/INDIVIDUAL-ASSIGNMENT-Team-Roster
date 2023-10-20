import { Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
      }}
    >

      <h1>Welcome to the Arconia, {user.displayName}! </h1>
      <h4>At once both historically iconic and daringly dangerous, we hope you enjoy your stay at the Arconia.</h4>

      <Card id="welcomeCard">
        <Card.Header>From a Current Resident:</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Here’s a thing I don’t get -- people who worry about living in abig city because of all the crime.
              <br />
              As any true-crime aficionado will tell you, it’s the boondocks you need to worry about. I mean, let’s face it: nobody ever
              discovered 19 bodies buried in the backyard of a 14-story apartment building. Because a backyard here
              is a courtyard -- and there’s about 200 windows and 400 eyes with a view of that courtyard.
              Long way around to say, there’s safety in numbers.
              <br />
              Like the numbers who live... at The Arconia.{' '}
            </p>
            <footer className="blockquote-footer">
              Charles Haden-Savage
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
