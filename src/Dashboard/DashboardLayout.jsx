// src/dashboard/layout/DashboardLayout.jsx

import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  Home, Wallet, User, Settings, LogOut, Bell, Search, Menu, X 
} from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';
import profileAvatar from '../assets/WhatsApp Image 2025-09-01 at 20.28.49.jpeg';

 

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
 

  const sidebarItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: Home },
    { href: '/admin/dashboard/user', label: 'user', icon: User },
    { href: '/admin/dashboard/profile', label: 'Profile', icon: User },
    { href: '/admin/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  const profileData = {
    name: 'Rafika Khatun',
    avatar: profileAvatar
  };

  const handleLogoutClick = () => setIsLogoutModalOpen(true);
  const confirmLogout = () => {
    console.log("Logging out...");
    
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-sky-100 via-indigo-100 to-sky-100 border-r border-slate-300/80 shadow-md transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
          <div className="flex items-center justify-between p-6 border-b border-slate-200/80">
            <h1 className="text-2xl font-bold text-sky-700">Dashboard</h1>
            <button className="lg:hidden text-sky-700 hover:text-sky-600" onClick={() => setSidebarOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink 
                  key={item.label}
                  to={item.href}
                  end={item.href === '/admin/dashboard'} // শুধু ড্যাশবোর্ড লিঙ্কের জন্য end prop
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive ? 'bg-indigo-600 text-indigo-700' : 'text-sky-700 hover:text-white hover:bg-sky-600'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" /><span className="font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
          <div className="absolute bottom-4 left-4 right-4">
            <button onClick={handleLogoutClick} className="w-full flex items-center space-x-3 px-4 py-3 font-bold rounded-xl text-red-600 hover:bg-red-500/10 transition-all">
              <LogOut className="w-5 h-5" /><span className="font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          <header className="sticky top-0 z-30 bg-gradient-to-l from-sky-100 via-indigo-100 to-sky-100 shadow-md border-b border-slate-200/80 px-4 lg:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="lg:hidden text-sky-700 " onClick={() => setSidebarOpen(true)}><Menu className="w-6 h-6" /></button>
               
              </div>
              <div className="flex items-center space-x-4">
                <button className="relative p-2"><Bell className="w-5 h-5" /></button>
                <div className="flex items-center space-x-3">
                  <img src={profileData.avatar} alt="Profile" className="w-8 h-8 rounded-full object-cover border-2 border-[#EDBA3D]/30" />
                  <span className="hidden sm:block font-semibold">{profileData.name}</span>
                </div>
              </div>
            </div>
          </header>
          <main className="p-4 lg:p-6">
            <Outlet /> 
          </main>
        </div>
      </div>
      <ConfirmationModal
        isOpen={isLogoutModalOpen}
        onConfirm={confirmLogout}
        onCancel={() => setIsLogoutModalOpen(false)}
        title="Confirm Logout"
        description="Are you sure you want to end your current session?"
        confirmText="Yes, Logout"
        icon={LogOut}
        variant="danger"
      />


       
     
    </>
  );
}