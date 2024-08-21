import React from 'react';
import image1 from './Photo by Amin RK.png';
import image2 from './Photo by Brooke Cagle.png';
import image3 from './Photo by Chris Zhang (1).png';
import image4 from './Photo by Chris Zhang.png';
import image5 from './Photo by Franco Figueroa.png';
import image6 from './Photo by Hayes Potter.png';
import image7 from './Photo by Joe Gardner (1).png';
import image8 from './Photo by Joe Gardner.png';
import image9 from './Photo by Matteo Minoglio (1).png';
import image10 from './Photo by Matteo Minoglio.png';
import image11 from './Photo by Peter Idowu (1).png';
import image12 from './Photo by Peter Idowu.png';

const creators = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    description: 'Experienced video editor and content creator.',
    languages: ['English', 'Spanish'],
    education: "Bachelor's in Media Studies",
    specialization: 'Video Editing, Content Creation',
    image: image1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    description: 'Social media influencer with a focus on fashion and beauty.',
    languages: ['English'],
    education: "Bachelor's in Fashion Design",
    specialization: 'Fashion, Beauty, Content Creation',
    image: image2,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    description: 'Tech enthusiast and product reviewer.',
    languages: ['English', 'Hindi'],
    education: "Master's in Computer Science",
    specialization: 'Tech Reviews, Content Creation',
    image: image3,
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@example.com',
    description: 'Travel blogger with a passion for adventure and photography.',
    languages: ['English', 'French'],
    education: "Bachelor's in Tourism Management",
    specialization: 'Travel Blogging, Photography',
    image: image4,
  },
  {
    id: 5,
    name: 'Alex Brown',
    email: 'alex@example.com',
    description: 'Fitness coach and content creator specializing in wellness.',
    languages: ['English'],
    education: "Diploma in Fitness Training",
    specialization: 'Fitness, Wellness, Content Creation',
    image: image5,
  },
  {
    id: 6,
    name: 'Sophia Wilson',
    email: 'sophia@example.com',
    description: 'Food blogger with a focus on healthy and sustainable cooking.',
    languages: ['English', 'Spanish'],
    education: "Bachelor's in Culinary Arts",
    specialization: 'Healthy Cooking, Food Blogging',
    image: image6,
  },
  {
    id: 7,
    name: 'Daniel Lee',
    email: 'daniel@example.com',
    description: 'Music producer and content creator focusing on electronic music.',
    languages: ['English', 'Korean'],
    education: "Bachelor's in Music Production",
    specialization: 'Music Production, Sound Design',
    image: image7,
  },
  {
    id: 8,
    name: 'Olivia Taylor',
    email: 'olivia@example.com',
    description: 'Fashion photographer and stylist.',
    languages: ['English', 'Italian'],
    education: "Bachelor's in Fashion Photography",
    specialization: 'Photography, Styling',
    image: image8,
  },
  {
    id: 9,
    name: 'Liam Martinez',
    email: 'liam@example.com',
    description: 'Digital artist and animator specializing in 2D animation.',
    languages: ['English', 'Spanish'],
    education: "Bachelor's in Digital Arts",
    specialization: '2D Animation, Digital Art',
    image: image9,
  },
  {
    id: 10,
    name: 'Isabella Hernandez',
    email: 'isabella@example.com',
    description: 'Lifestyle influencer with a focus on home decor and DIY projects.',
    languages: ['English', 'Portuguese'],
    education: "Bachelor's in Interior Design",
    specialization: 'Home Decor, DIY Projects',
    image: image10,
  },
  {
    id: 11,
    name: 'Ethan White',
    email: 'ethan@example.com',
    description: 'Tech reviewer and content creator with a focus on gadgets.',
    languages: ['English', 'German'],
    education: "Bachelor's in Information Technology",
    specialization: 'Tech Reviews, Gadget Analysis',
    image: image11,
  },
  {
    id: 12,
    name: 'Ava Green',
    email: 'ava@example.com',
    description: 'Beauty influencer with a passion for makeup and skincare.',
    languages: ['English'],
    education: "Certificate in Cosmetology",
    specialization: 'Makeup, Skincare, Beauty Blogging',
    image: image12,
  },
];

const ProfileView = () => {
  return (
    <div className="profile-view">
      {creators.map(creator => (
        <div key={creator.id} className="profile-card">
          <img src={creator.image} alt={creator.name} className="profile-image" />
          <h1>{creator.name}</h1>
          <p>Email: {creator.email}</p>
          <p>Description: {creator.description}</p>
          <p>Languages: {creator.languages.join(', ')}</p>
          <p>Education: {creator.education}</p>
          <p>Specialization: {creator.specialization}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileView;
