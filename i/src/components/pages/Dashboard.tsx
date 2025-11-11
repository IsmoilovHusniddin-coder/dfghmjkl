import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Asosiy</h2>
        <p className="text-gray-600">CRM boshqaruv paneliga xush kelibsiz</p>
      </div>

  
      
      <div className="bg-black p-6 rounded-lg shadow-sm border border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-4">So'nggi faollik</h3>
        <p className="text-gray-300">Bu yerda so'nggi faolliklar ko'rsatiladi...</p>
      </div>
    </div>
  );
};

export default Dashboard;