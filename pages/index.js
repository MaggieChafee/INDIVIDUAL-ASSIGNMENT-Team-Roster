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

      <p>Here’s a thing I don’t get -- people who worry about living in abig city because of all the crime.
        As any true-crime aficionado will tell you, it’s the boondocks you need to worry about. I mean, let’s face it: nobody ever
        discovered 19 bodies buried in the backyard of a 14-story apartment building. Because a backyard here
        is a courtyard -- and there’s about 200 windows and 400 eyes with a view of that courtyard. Long way around to say, there’s
        safety in numbers. Like the numbers who live... at The Arconia.

        - Charles-Haden Savage
      </p>
    </div>
  );
}

export default Home;
