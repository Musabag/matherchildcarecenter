import React from 'react';

const StaffPage = () => {
    const staffMembers = [
        { role: 'Director', name: 'Maria Voicova' },
        { role: 'Music Teacher', name: 'Ella Bagci' },
        { role: 'Art Teacher', name: 'Suleyman Akbas' },
        { role: 'Skill Directors', name: 'Cumali Akbas & Isa Kurucan' },
        { role: 'Chefs', name: 'Gokhan Bagci & Furkan Bagci' },
        { role: 'Facilities Management', name: 'Rojhat Bagci' },
        { role: 'Coding Instructors', name: 'Mert Bagci & John Bagci' },
        { role: 'Director Assistant', name: 'Yusuf Bagci' },
    ];

    return (
        <div style={ { padding: '20px', maxWidth: '800px', margin: '0 auto' } }>
            <h1>Meet Our Staff</h1>
            <p>We are proud to introduce the talented and passionate individuals who make Mahter Little Stars a special place for children.</p>
            <ul style={ { listStyleType: 'none', padding: 0 } }>
                { staffMembers.map((member, index) => (
                    <li
                        key={ index }
                        style={ {
                            background: '#f9f9f9',
                            margin: '10px 0',
                            padding: '15px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        } }
                    >
                        <strong>{ member.role }:</strong> { member.name }
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default StaffPage;
