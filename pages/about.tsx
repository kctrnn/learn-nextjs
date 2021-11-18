import { Header } from '@/components/common';
import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// const Header = dynamic(() => import('@/components/common').then((x) => x.Header), { ssr: false });

function AboutPage() {
  const [meetupList, setMeetupList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://json-server-kctrnn.herokuapp.com/api/meetups');
      const data = await response.json();

      setMeetupList(data);
    })();
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <Header />

      <ul className="meetup-list">
        {meetupList.map((meetup: any) => (
          <li key={meetup.id} className="meetup">
            {meetup.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutPage;
