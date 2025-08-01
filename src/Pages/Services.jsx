
import React from 'react';
import {
  FaBriefcase,
  FaBullhorn,
  FaPaintBrush,
  FaPenFancy,
  FaFilm,
  FaCommentDots,
  FaGlobe,
  FaThumbsUp
} from 'react-icons/fa';

const items = [
  {
    title: "Employer Branding",
    icon: <FaBriefcase className="text-blue-700 text-3xl mb-2" />,
    description: "Attract top talent with a strong, clear employer identity.",
  },
  {
    title: "Digital Media",
    icon: <FaBullhorn className="text-blue-700 text-3xl mb-2" />,
    description: "Boost brand awareness through engaging digital content.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-blue-700 text-3xl mb-2" />,
    description: "Design beautiful and intuitive user experiences.",
  },
  {
    title: "Content Marketing",
    icon: <FaPenFancy className="text-blue-700 text-3xl mb-2" />,
    description: "Build trust and visibility with strategic content.",
  },
  {
    title: "Motion Graphics",
    icon: <FaFilm className="text-blue-700 text-3xl mb-2" />,
    description: "Bring your brand to life with captivating animations.",
  },
  {
    title: "Brand Communication",
    icon: <FaCommentDots className="text-blue-700 text-3xl mb-2" />,
    description: "Craft messages that clearly reflect your brand.",
  },
  {
    title: "Web Design & Development",
    icon: <FaGlobe className="text-blue-700 text-3xl mb-2" />,
    description: "Modern, responsive websites that drive results.",
  },
  {
    title: "Social Media Marketing",
    icon: <FaThumbsUp className="text-blue-700 text-3xl mb-2" />,
    description: "Grow your community and engage your audience.",
  },
];

const Services = () => {
  return (
    <section id="items" className="min-h-screen bg-blue-100 py-20 px-6 ">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">Our Services</h2>
      <p className="text-gray-600 text-lg text-center font-bold mb-10">
        Explore what Firebrand Labs can do to elevate your brand.
      </p>

           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
{items.map((item,index) => (
  <div key={index} className='bg-indigo-300 p-10 rounded-lg border-indigo-950 border-2'>

    <div className='flex flex-col  text-center items-center'>{item.icon}
      <h3 className='text-black font-bold '>{item.title}</h3>
      <h3 className='text-white'>{item.description}</h3>

    </div>
</div>

))}
           </div>
   
    </section>
  );
};

export default Services;
