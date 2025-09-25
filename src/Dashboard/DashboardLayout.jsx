// src/dashboard/layout/DashboardLayout.jsx

import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  Home, Wallet, User, Settings, LogOut, Bell, Search, Menu, X 
} from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';
 

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
 

  const sidebarItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: Home },
    { href: '/admin/dashboard/User', label: 'User', icon: User },
    { href: '/admin/dashboard/profile', label: 'Profile', icon: User },
    { href: '/admin/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  const profileData = {
    name: 'sndp bag',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  };

  const handleLogoutClick = () => setIsLogoutModalOpen(true);
  const confirmLogout = () => {
    console.log("Logging out...");
    // command: এখানে লগআউট API কল করতে হবে
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200/80 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
          <div className="flex items-center justify-between p-6 border-b border-slate-200/80">
            <h1 className="text-xl font-bold text-[#EDBA3D]">Dashboard</h1>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}><X className="w-6 h-6" /></button>
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
                      isActive ? 'bg-[#EDBA3D]/10 text-[#EDBA3D]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" /><span className="font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
          <div className="absolute bottom-4 left-4 right-4">
            <button onClick={handleLogoutClick} className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-all">
              <LogOut className="w-5 h-5" /><span className="font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          <header className="sticky top-0 z-30 bg-white shadow-sm border-b border-slate-200/80 px-4 lg:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="lg:hidden" onClick={() => setSidebarOpen(true)}><Menu className="w-6 h-6" /></button>
               
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
            <Outlet /> {/* চাইল্ড পৃষ্ঠাগুলো এখানে রেন্ডার হবে */}
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