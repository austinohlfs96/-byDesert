import React, { useState } from 'react';
import './Member.css';
import ContactButton from './ContactButton';


const Members = () => {
  // Dictionary (array of objects) for storing band members' data
  const bandMembers = [
    {
      name: 'Daniel Waite',
      role: `Lead and rhythm electric guitars, electric bass, acoustic guitar, lead and backing vocals.

      A multi-instrumentalist and vocalist, Dan brings a wealth of experience to the table. With a musical journey spanning over four decades, his passion for music production was ignited in college, where he honed his skills in multi-track recording. Dan's impressive portfolio includes contributions to various studio albums, a live action play soundtrack, and numerous original compositions. Currently, he enjoys playing bass and guitar at Lighthouse Church in Parker, CO and collaborating with local musicians. As a founding member of Divided By Desert, Dan is eagerly anticipating the release of their self-titled debut album this Fall.`,
      image: 'Dan.jpeg',
    },
    {
      name: 'David Lunbeck',
      role: `Lead and rhythm electric guitars, acoustic guitars, lead and backing vocals and harmonies.

      A Colorado native, now living in Arizona, David’s been playing guitar since the age of 12. “My dad gave me my first guitar when I was 12. It was a classical guitar and my hands were so small, it took me two years to be able to play 3 chords”.
      
      A songwriter and composer, David is responsible for more than half of the songs on our upcoming debut album, Divided By Desert. David has been writing songs since his teen years. “I wrote my first song when I was 17 to impress a girl, she liked it but I never got a kiss. It was called Save It For A Rainy Day”.`,
      image: 'David.jpeg',
    },
    {
      name: 'Pete Ohlin',
      role: 'Piano, organ, keys, backing vocals and harmonies.',
      image: 'Pete.jpg',
    },
    {
      name: 'Brian Petry',
      role: 'Drums',
      image: 'Brian.jpg',
    },
    {
      name: 'Chris Bates',
      role: 'Newcomer, Chris Bates from Auckland, NZ has joined us to add his amazing harmonies and backing vocals! Welcome Chris!',
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

  // Utility function to truncate long text
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  return (
    <section className="members-section">
      <h2>Meet the Band</h2>

      {/* Map through the band members array to dynamically create member sections */}
      {bandMembers.map((member, index) => {
        const isExpanded = expandedState[index];
        const shouldShowReadMore = member.role.length > 150;

        return (
          <div className="member" key={index}>
            <div className="member-info">
              <h3 style={{ textDecoration: 'underline' }}>{member.name}</h3>

              {/* Conditionally show the full or truncated text */}
              <p>
                {isExpanded ? member.role : truncateText(member.role, 150)}
                {/* Show "Read more" only if the bio is longer than 150 characters */}
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
            <div className="member-photo">
              <img src={member.image} alt={member.name} />
            </div>
          </div>
        );
      })}
      <ContactButton />
    </section>
  );
};

export default Members;
