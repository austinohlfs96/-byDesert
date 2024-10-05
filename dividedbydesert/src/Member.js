import React, { useState } from 'react';
import './Member.css';
import Newsletter from './ContactButton';

const Members = () => {
  // Band members data
  const bandMembers = [
    {
      name: 'Daniel Waite',
      role: 'Lead and rhythm electric guitars, electric bass, acoustic guitar, lead and backing vocals',
      bio: `A multi-instrumentalist and vocalist, Dan brings a wealth of experience to the table. With a musical journey spanning over four decades, his passion for music production was ignited in college, where he honed his skills in multi-track recording. Dan's impressive portfolio includes contributions to various studio albums, a live action play soundtrack, and numerous original compositions. Currently, he enjoys playing bass and guitar at Lighthouse Church in Parker, CO and collaborating with local musicians. As a founding member of Divided By Desert, Dan is eagerly anticipating the release of their self-titled debut album this Fall.`,
      image: 'Dan.jpeg',
    },
    {
      name: 'David Lunbeck',
      role: 'Lead and rhythm electric guitars, acoustic guitars, lead and backing vocals and harmonies',
      bio: `A Colorado native, now living in Arizona, David’s been playing guitar since the age of 12. “My dad gave me my first guitar when I was 12. It was a classical guitar and my hands were so small, it took me two years to be able to play 3 chords”. A songwriter and composer, David is responsible for more than half of the songs on our upcoming debut album, Divided By Desert. David has been writing songs since his teen years.`,
      image: 'David.jpeg',
    },
    {
      name: 'Pete Ohlin',
      role: 'Piano, organ, keys, backing vocals and harmonies',
      bio: `Pete started playing piano in college. He recorded his first album in Nashville in 2007. He enjoys composing and playing any chance he gets.`,
      image: 'Pete.jpg',
    },
    {
      name: 'Brian Petry',
      role: 'Drums',
      bio: `Brian is the heartbeat of the band, driving the rhythm with his impeccable skills on the drums.`,
      image: 'Brian.jpg',
    },
    {
      name: 'Chris Bates',
      role: 'Backing vocals and harmonies',
      bio: `Newcomer, Chris Bates from Auckland, NZ has joined us to add his amazing harmonies and backing vocals! Welcome Chris!`,
      image: 'Chris.jpg',
    },
  ];

  // State to track expanded state for each member
  const [expandedState, setExpandedState] = useState(
    new Array(bandMembers.length).fill(false)
  );

  // Toggle the expanded state of a specific member
  const toggleExpand = (index) => {
    const newExpandedState = [...expandedState];
    newExpandedState[index] = !newExpandedState[index];
    setExpandedState(newExpandedState);
  };

  return (
    <section className="members-section">
  <h2>Meet the Band</h2>

  {/* Render band members dynamically */}
  {bandMembers.map((member, index) => {
    const isExpanded = expandedState[index];
    const shouldShowReadMore = member.bio.length > 150; // Check if bio is longer than 150 characters
    return (
      <div className="member" key={index}>
        <div className="member-photo">
          <img src={member.image} alt={member.name} />
        </div>
        <div className="member-info">
          <h3 style={{ textDecoration: 'underline', marginTop: '10px' }}>{member.name}</h3>
          <p className="role"><strong>Roles: </strong>{member.role}</p>
          <br />
          <p className="bio">
            {isExpanded || !shouldShowReadMore ? member.bio : member.bio.substring(0, 150) + '...'}
            {shouldShowReadMore && (
              <span
                style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                onClick={() => toggleExpand(index)}
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </span>
            )}
          </p>
        </div>
      </div>
    );
  })}
  <Newsletter />
</section>

  );
};

export default Members;
