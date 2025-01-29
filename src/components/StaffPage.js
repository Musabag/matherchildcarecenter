import React from 'react';
import maria from '../assets/staff/maria.jpg';
import ella from '../assets/staff/ella.jpg';
import david from '../assets/staff/david.jpg';
import cumali from '../assets/staff/cumali.jpg';
import gokhan from '../assets/staff/gokhan.jpg';
import yusuf from '../assets/staff/yusuf.jpg';
import furkan from '../assets/staff/furkan.jpg';
import isa from '../assets/staff/isa.jpg';
import rojhat from '../assets/staff/rojhat.jpg';
import john from '../assets/staff/john.jpg';
import mert from '../assets/staff/mert.jpg';
const staffMembers = [
    { name: 'Maria Voicova', title: 'Director', image: maria },
    { name: 'Ella Bagci', title: 'Music Teacher', image: ella },
    { name: 'David Davidson', title: 'Art Teacher', image: david },
    { name: 'Cumali Akbas', title: 'Skill Director', image: cumali },
    { name: 'Gokhan Bagci', title: 'Chef', image: gokhan },
    { name: 'Yusuf Bagci', title: 'Director Assistant', image: yusuf },
];

const StaffPage = () => {
    return (
        <div style={ { padding: '20px', fontFamily: "'Arial', sans-serif" } }>
            <h1 style={ { textAlign: 'center', color: '#4caf50' } }>Our Staff</h1>
            <div style={ { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' } }>
                { staffMembers.map((staff, index) => (
                    <div
                        key={ index }
                        style={ {
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '10px',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                        } }
                    >
                        <img
                            src={ staff.image }
                            alt={ staff.name }
                            style={ { width: '100%', borderRadius: '10px', marginBottom: '10px' } }
                        />
                        <h2 style={ { color: '#4caf50', marginBottom: '5px' } }>{ staff.name }</h2>
                        <p style={ { color: '#555' } }>{ staff.title }</p>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default StaffPage;
