"use client"
import React from 'react';
import MemberForm from '@/components/MemberForm';
import { MemberFormData } from '@/components/MemberForm';

function App() {
  const handleFormSubmit = (data: MemberFormData) => {
    console.log("Form data:", data);
    // Handle data (e.g., send to backend or update state)
  };

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold my-4">Member Form</h1>
      <MemberForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
