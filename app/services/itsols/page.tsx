import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
}

const TechDrivenPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    { title: 'Project A', description: 'Description of Project A' },
    { title: 'Project B', description: 'Description of Project B' },
  ]);

  const [feedbacks, setFeedbacks] = useState<string[]>([
    'Great platform!',
    'Very intuitive UI.',
  ]);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      
      {/* Tech-Driven Environment Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Tech-Driven Environment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-700 text-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Learning Management Systems</h3>
            <p>Streamlined platforms for content delivery, student tracking, and online learning.</p>
          </div>
          <div className="bg-blue-700 text-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Billing Software</h3>
            <p>Efficient solutions for handling payments, invoicing, and financial reporting.</p>
          </div>
          <div className="bg-blue-700 text-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">AI-Integrated EdTech Platforms</h3>
            <p>Personalized learning experiences powered by artificial intelligence.</p>
          </div>
          <div className="bg-blue-700 text-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Custom Web Development</h3>
            <p>Tailored websites to support your brand, academics, and community engagement.</p>
          </div>
          <div className="bg-blue-700 text-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">ERP & CRM Systems</h3>
            <p>Manage institutional operations, data, admissions, and finances efficiently.</p>
          </div>
          <div className="bg-blue-700 text-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Custom App Development</h3>
            <p>Mobile apps to support your brand, academics, and community engagement.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Feedback</h2>
        <div className="space-y-4">
          {feedbacks.map((fb, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow">
              {fb}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechDrivenPage;
