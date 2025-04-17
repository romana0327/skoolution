"use client";


import '@fontsource/inter';
import LoginLeft from 'C:/Users/AdMin/skoolution-v2/app/components/ui2/LoginForm.js';
import LoginForm from 'C:/Users/AdMin/skoolution-v2/app/components/ui2/LoginLeft.js';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <LoginLeft />
      <LoginForm />
    </div>
  );
}