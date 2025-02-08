import React, { useState } from 'react';

// ✅ Import images
import maria from '../assets/img/staff/maria.jpg';
import ella from '../assets/img/staff/ella.jpg';
import suleyman from '../assets/img/staff/suleyman.jpg';
import cumali from '../assets/img/staff/cumali.jpg';
import isa from '../assets/img/staff/isa.jpg';
import gokhan from '../assets/img/staff/gokhan.jpg';
import furkan from '../assets/img/staff/furkan.jpg';
import rojhat from '../assets/img/staff/rojhat.jpg';
import mert from '../assets/img/staff/mert.jpg';
import john from '../assets/img/staff/john.jpg';
import yusuf from '../assets/img/staff/yusuf.jpg';

// Staff Data with Skills
const staffMembers = [
    { name: "Maria Voicova", role: "Director", photo: maria, skills: "Leadership, Childcare Management, Parent Communication" },
    { name: "Ella Bagci", role: "Music Teacher", photo: ella, skills: "Piano, Vocal Training, Rhythm Exercises" },
    { name: "Suleyman Akbas", role: "Art Instructor", photo: suleyman, skills: "Painting, Drawing, Sculpture" },
    { name: "Cumali Akbas", role: "Skill Director", photo: cumali, skills: "STEM Activities, Cognitive Development, Hand-Eye Coordination" },
    { name: "Isa Kurucan", role: "Skill Director", photo: isa, skills: "Social Development, Teamwork, Critical Thinking" },
    { name: "Gokhan Bagci", role: "Chef", photo: gokhan, skills: "Healthy Cooking, Meal Planning, Nutrition for Kids" },
    { name: "Furkan Bagci", role: "Chef", photo: furkan, skills: "Baking, Food Safety, Kitchen Organization" },
    { name: "Rojhat Bagci", role: "Facilities Management", photo: rojhat, skills: "Safety Procedures, Building Maintenance, Clean Environment" },
    { name: "Mert Bagci", role: "Coding Instructor", photo: mert, skills: "Scratch, Python, Web Development for Kids" },
    { name: "John Bagci", role: "Coding Instructor", photo: john, skills: "JavaScript, Robotics, Algorithmic Thinking" },
    { name: "Yusuf Bagci", role: "Director Assistant", photo: yusuf, skills: "Administrative Support, Organization, Event Coordination" },
];

const StaffPage = () => {
    const [selectedStaff, setSelectedStaff] = useState(null);

    const openModal = (staff) => {
        setSelectedStaff(staff);
    };

    const closeModal = () => {
        setSelectedStaff(null);
    };

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1 style={{ color: "#4caf50" }}>Meet Our Team</h1>
            <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "800px", margin: "auto" }}>
                Click on a staff member to learn more about their skills!
            </p>

            {/* Staff Grid */}
            <div className="staff-grid">
                {staffMembers.map((staff, index) => (
                    <div key={index} className="staff-card" onClick={() => openModal(staff)}>
                        <img src={staff.photo} alt={staff.name} className="staff-photo" />
                        <h3>{staff.name}</h3>
                        <p>{staff.role}</p>
                    </div>
                ))}
            </div>

            {/* Modal Popup */}
            {selectedStaff && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>✖</button>
                        <img src={selectedStaff.photo} alt={selectedStaff.name} className="modal-photo" />
                        <h2>{selectedStaff.name}</h2>
                        <h4>{selectedStaff.role}</h4>
                        <p><strong>Skills:</strong> {selectedStaff.skills}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffPage;
