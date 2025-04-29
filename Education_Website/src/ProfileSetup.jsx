import React, {useState} from "react";
import {auth, db} from './firebase';
import {doc , setDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function ProfileSetup(){
    const [form , setForm] = useState({
        university: '',
        course: '',
        year: '',
        interests: [],
        interest1: '',
        interest2: '',
        interest3: '',
        age: '',
        gender: '',
        country: '',
        availabilityDay: '',
        availabilityTime: '',


    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    const handleInterestToggle = (interests) => {
        setForm ((prev) => {
            const exists = prev.interests.includes(interests);
            const updated = exists
            ? prev.interests.filter((i) => i !== interests)
            : [...prev.interests, interests];
            return {...prev, interests:updated};
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = auth.currentUser;
        if(!user) return;

        if(!form.university || !form.course || !form.year || !form.age || !form.gender || !form.country || !form.availabilityDay || !form.availabilityTime || !form.interest1 || !form.interest2 || !form.interest3){
            alert('Please fill in all required fields and select at least on interest.');
            return;
        }
        try{
            const userRef = doc(db , 'users', user.uid);
            await setDoc(userRef ,{
                ...form, interests:[form.interest1, form.interest2, form.interest3]});
            alert('Profile saved Successfully!');
            navigate('/dashboard');
        }catch (error){
            console.error('Error saving Profile');
            alert('Failed to save profile. Please try again.');
        }
    };

    return (
        <div className="pro">
        <div className="set-form">
            <h2>Set Up Your Profile</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="university">University</label>
                <select name="university" onChange={handleChange} required>
                    <option value = "">Select</option>
                    <option value="Unitec">Unitec</option>
                    <option value="AUT">AUT</option>
                </select>

                <label htmlFor="course">Course</label>
                <select name="course" onChange={handleChange} required>
                    <option value = "">Select</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Design">Design</option>
                </select>

                <label htmlFor="year">Year</label>
                <select name="year" onChange={handleChange} required>
                    <option value = "">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                
                <label>Select Interests</label>
                <div className="interest-btn">
                <select name ="interest1" value={form.interest1 || ''} 
                onChange={(e) => setForm(prev => ({...prev, interest1: e.target.value }))}
                required >
                    <option value="">interest 1</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Programming">Programming</option>
                    <option value="Business">Business</option>
                    <option value="Network">Network</option>
                    <option value="Design">Design</option>
                </select>
                <select name ="interest2" value={form.interest2 || ''} 
                onChange={(e) => setForm(prev => ({...prev, interest2: e.target.value }))}
                required >
                    <option value="">interest 2</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Programming">Programming</option>
                    <option value="Business">Business</option>
                    <option value="Network">Network</option>
                    <option value="Design">Design</option>
                </select>
                <select name ="interest3" value={form.interest3 || ''} 
                onChange={(e) => setForm(prev => ({...prev, interest3: e.target.value }))}
                required >
                    <option value="">interest 3</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Programming">Programming</option>
                    <option value="Business">Business</option>
                    <option value="Network">Network</option>
                    <option value="Design">Design</option>
                </select>
                </div>
                <label htmlFor="age">Age</label>
                <select name="age" onChange={handleChange} required>
                    <option value = "">Select</option>
                    <option value="18-22">18-22</option>
                    <option value="23-27">23-27</option>
                </select>

                 <label htmlFor="gender">Gender</label>        
                <select name="gender" onChange={handleChange} required>
                    <option value = "">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                 <label htmlFor="country">Country</label>            
                <select name="country" onChange={handleChange} required>
                    <option value = "">Select</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Australia">Australia</option>
                </select>
                
                <label htmlFor="city">City</label>
                <select name="city" onChange={handleChange} required>
                    <option value = "">Select</option>
                    <option value="Auckland">Auckland</option>
                    <option value="Wellington">Wellington</option>
                </select>

                <label>Availability</label>
                <select name="availabilityDay" onChange={handleChange} required>
                    <option value = "">Select - Day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                </select>

                <select name="availabilityTime" onChange={handleChange} required>
                    <option value = "">Select - Time</option>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                </select>

                <button className="save-btn" type="submit">Save Profile</button>
            </form>
        </div>
        </div>
    );

}
export default ProfileSetup;