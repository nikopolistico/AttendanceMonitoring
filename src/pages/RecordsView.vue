<template>
    <div class="min-h-screen" style="background: #f3f1ee;">
        <!-- Sidebar - Desktop Only -->
        <div 
            class="hidden lg:flex fixed left-0 top-0 h-screen w-64 text-white flex-col shadow-2xl z-40"
            style="background: linear-gradient(180deg, #001a3a 0%, #002147 50%, #00295a 100%);"
        >
            <!-- Sidebar Header -->
            <div class="p-6 border-b border-white/10">
                <div class="flex flex-col items-center text-center gap-4">
                    <div class="rounded-full p-4" style="background: #f3f1ee;">
                        <img src="../assets/pnplogo.png" alt="PNP Logo" class="w-20 h-20 object-contain" />
                    </div>
                    <div>
                        <h1 class="text-lg font-bold text-white uppercase tracking-wide">Admin<br>Dashboard</h1>
                        <p class="text-xs mt-2 font-semibold" style="color: #f3f1ee;">Police Attendance System</p>
                    </div>
                </div>
            </div>

            <!-- Navigation Menu -->
            <div class="flex-1 p-5 space-y-3">
                <router-link to="/admin-dashboard" class="block p-4 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer group">
                    <div class="flex items-center gap-3">
                        <div class="rounded-lg p-2 group-hover:bg-white/10 transition" style="background: rgba(255, 255, 255, 0.05);">
                            <svg class="w-5 h-5" style="color: #f3f1ee;" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                            </svg>
                        </div>
                        <span class="text-sm font-semibold uppercase tracking-wider" style="color: #f3f1ee;">Overview</span>
                    </div>
                </router-link>
                
                <div class="rounded-lg p-4 border-l-4 shadow-lg" style="background: #004595; border-left-color: #ffffff;">
                    <div class="flex items-center gap-3">
                        <div class="rounded-lg p-2" style="background: rgba(255, 255, 255, 0.1);">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                        </div>
                        <span class="font-bold text-sm uppercase tracking-wider">Records</span>
                    </div>
                </div>
                
                <router-link to="/officers" class="block p-4 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer group">
                    <div class="flex items-center gap-3">
                        <div class="rounded-lg p-2 group-hover:bg-white/10 transition" style="background: rgba(255, 255, 255, 0.05);">
                            <svg class="w-5 h-5" style="color: #f3f1ee;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <span class="text-sm font-semibold uppercase tracking-wider" style="color: #f3f1ee;">Officers</span>
                    </div>
                </router-link>
            </div>

            <!-- Logout Button -->
            <div class="p-5 border-t border-white/10 mt-auto">
                <button 
                    @click="handleLogout"
                    class="w-full text-white py-3.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-90"
                    style="background: #dc2626;"
                >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    Logout
                </button>
            </div>
        </div>

        <!-- Main Content -->
        <div class="lg:ml-64 min-h-screen overflow-auto pb-20 lg:pb-0">
            <div class="p-4 sm:p-6 lg:p-8">
                <!-- Page Header -->
                <div class="mb-6 lg:mb-8 p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm" style="background: #ffffff; border-left: 4px solid #004595;">
                    <div class="flex items-center gap-3 sm:gap-4">
                        <div class="rounded-full p-2 sm:p-3" style="background: #f3f1ee;">
                            <svg class="w-6 h-6 sm:w-8 sm:h-8" style="color: #002147;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 class="text-lg sm:text-xl lg:text-2xl font-bold mb-1" style="color: #002147;">Attendance Records</h1>
                            <p class="text-xs sm:text-sm font-semibold" style="color: #00397a;">Filter and view attendance records by date</p>
                        </div>
                    </div>
                </div>

                <!-- Filter and Tabs Section -->
                <div class="bg-white rounded-lg p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6 shadow-sm">
                    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                        <!-- Tab Buttons -->
                        <div class="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                            <button 
                                @click="activeTab = 'with-attendance'"
                                :class="activeTab === 'with-attendance' 
                                    ? 'text-white shadow-lg' 
                                    : 'bg-white border-2'"
                                :style="activeTab === 'with-attendance' ? 'background: #004595; color: #ffffff;' : 'background: #ffffff; color: #002147; border-color: #e5e7eb;'"
                                class="px-3 sm:px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 transition hover:opacity-90"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                With Attendance
                                <span class="px-2 py-0.5 rounded-full text-xs font-bold" :style="activeTab === 'with-attendance' ? 'background: #ffffff; color: #004595;' : 'background: #e0f2fe; color: #0369a1;'">{{ filteredRecords.length }}</span>
                            </button>
                            <button 
                                @click="activeTab = 'without-attendance'"
                                :class="activeTab === 'without-attendance' 
                                    ? 'text-white shadow-lg' 
                                    : 'bg-white border-2'"
                                :style="activeTab === 'without-attendance' ? 'background: #ef4444; color: #ffffff;' : 'background: #ffffff; color: #002147; border-color: #e5e7eb;'"
                                class="px-3 sm:px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 transition hover:opacity-90"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Without Attendance
                                <span class="px-2 py-0.5 rounded-full text-xs font-bold" :style="activeTab === 'without-attendance' ? 'background: #ffffff; color: #ef4444;' : 'background: #fee2e2; color: #991b1b;'">{{ officersWithoutAttendance.length }}</span>
                            </button>
                        </div>

                        <!-- Date Filter -->
                        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full lg:w-auto">
                            <label class="text-xs sm:text-sm font-bold uppercase flex items-center gap-2" style="color: #002147;">
                                <div class="rounded-lg p-1.5" style="background: #f3f1ee;">
                                    <svg class="w-3 h-3 sm:w-4 sm:h-4" style="color: #004595;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                Select Date
                            </label>
                            <input 
                                v-model="selectedDate" 
                                type="date" 
                                class="px-3 sm:px-4 py-2.5 border-2 rounded-lg focus:outline-none text-xs sm:text-sm font-medium w-full sm:w-auto" style="border-color: #e5e7eb; color: #002147;"
                                @change="filterRecords"
                            />
                            <button 
                                @click="resetFilters"
                                class="text-white px-3 sm:px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase hover:opacity-90 flex items-center justify-center gap-2 transition" style="background: #00397a;"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Tab Content -->
                <!-- With Attendance Tab -->
                <div v-if="activeTab === 'with-attendance'" class="bg-white rounded overflow-hidden shadow-sm">
                    <div class="p-4 sm:p-5 lg:p-6 border-b" style="background: #f3f1ee; border-color: #e5e7eb;">
                        <h2 class="text-sm sm:text-base font-bold flex items-center gap-2 sm:gap-3" style="color: #002147;">
                            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            All Attendance Records
                        </h2>
                        <p class="text-xs sm:text-sm mt-1" style="color: #00397a;">Showing {{ filteredRecords.length }} records</p>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[600px]">
                            <thead class="text-white" style="background: #002147;">
                                <tr>
                                    <th class="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase">Date & Time</th>
                                    <th class="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase">Name</th>
                                    <th class="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase">Status</th>
                                    <th class="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-100">
                                <tr v-for="record in filteredRecords" :key="record.id" 
                                    class="hover:bg-gray-50">
                                    <td class="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900">{{ record.date }}</td>
                                    <td class="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900">{{ record.name }}</td>
                                    <td class="px-3 sm:px-4 py-2.5 sm:py-3">
                                        <span 
                                            v-if="record.status === true"
                                            class="px-2.5 sm:px-3 py-1 inline-flex text-xs sm:text-sm font-bold rounded" style="background: #d1fae5; color: #065f46;"
                                        >
                                            Present
                                        </span>
                                        <span 
                                            v-else
                                            class="px-2.5 sm:px-3 py-1 inline-flex text-xs sm:text-sm font-bold rounded" style="background: #fee2e2; color: #991b1b;"
                                        >
                                            Absent
                                        </span>
                                    </td>
                                    <td class="px-3 sm:px-4 py-2.5 sm:py-3">
                                        <div class="flex flex-col sm:flex-row gap-2">
                                            <button 
                                                @click="previewReport(record)"
                                                class="text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded font-bold flex items-center justify-center gap-2 text-xs sm:text-sm" style="background: #004595;"
                                            >
                                                <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                </svg>
                                                Preview
                                            </button>
                                        
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="filteredRecords.length === 0">
                                    <td colspan="5" class="px-4 py-8 sm:py-12 text-center text-gray-500">
                                        <div class="flex flex-col items-center">
                                            <div class="bg-gray-100 rounded-full p-3 sm:p-4 mb-3">
                                                <svg class="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                                </svg>
                                            </div>
                                            <p class="font-semibold text-xs sm:text-sm text-gray-700">No records found</p>
                                            <p class="text-xs sm:text-sm text-gray-500 mt-1">Try adjusting your date filter</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Without Attendance Tab -->
                <div v-if="activeTab === 'without-attendance'" class="bg-white rounded p-4 sm:p-5 lg:p-6 shadow-sm">
                    <div class="mb-4 sm:mb-5 lg:mb-6 rounded p-4 sm:p-5 lg:p-6 text-white" style="background: #ef4444;">
                        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                            <div class="flex-1">
                                <h2 class="text-base sm:text-lg font-bold flex items-center gap-2 sm:gap-3">
                                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                    </svg>
                                    Officers Without Attendance
                                </h2>
                                <p class="text-xs sm:text-sm mt-1">{{ officersWithoutAttendance.length }} officer(s) without attendance</p>
                            </div>
                            <div v-if="officersWithoutAttendance.length > 0" class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                                <button 
                                    @click="previewWithoutAttendanceReport"
                                    class="bg-white px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 hover:opacity-90" style="color: #004595;"
                                >
                                    <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    Preview
                                </button>
                                <button 
                                    @click="downloadWithoutAttendanceReport"
                                    class="bg-white px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 hover:opacity-90" style="color: #004595;"
                                >
                                    <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="officersWithoutAttendance.length > 0">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                            <div 
                                v-for="officer in officersWithoutAttendance" 
                                :key="officer.id"
                                class="rounded p-3 sm:p-4" style="border: 1px solid #ef4444; background: #fef2f2;"
                            >
                                <div class="flex items-center gap-3">
                                    <div class="rounded p-2" style="background: #ef4444;">
                                        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-1">
                                        <p class="font-bold text-gray-900 text-xs sm:text-sm">{{ officer.rank_full_name }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="text-center py-8 sm:py-12 rounded" style="background: #f0fdf4; border: 1px solid #86efac;">
                        <div class="rounded-full p-3 sm:p-4 mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-3 sm:mb-4" style="background: #10b981;">
                            <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <p class="text-gray-800 text-sm sm:text-base font-bold">All officers have submitted attendance!</p>
                        <p class="text-gray-600 text-xs sm:text-sm mt-2">100% attendance for the selected date</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Preview Modal -->
        <div v-if="showPreviewModal" class="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-4" style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);" @click.self="closePreview">
            <div class="bg-white rounded-lg max-w-6xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
                <!-- Modal Header -->
                <div class="sticky top-0 bg-white border-b-2 p-4 sm:p-5 lg:p-6 flex justify-between items-center z-10" style="border-color: #004595;">
                    <div class="flex items-center gap-2 sm:gap-3">
                        <div class="rounded-lg p-1.5 sm:p-2" style="background: #004595;">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                        </div>
                        <h2 class="text-lg sm:text-xl lg:text-2xl font-bold" style="color: #002147;">Document Preview</h2>
                    </div>
                    <button @click="closePreview" class="rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6" style="color: #002147;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Preview Content -->
                <div class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8" style="background: #f3f1ee;">
                    <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
                        <div v-html="previewContent"></div>
                    </div>
                </div>
                
                <!-- Modal Footer -->
                <div class="sticky bottom-0 bg-white border-t-2 p-4 sm:p-5 lg:p-6 flex flex-col sm:flex-row justify-end gap-2 sm:gap-3" style="border-color: #004595;">
                    <button 
                        @click="downloadFromPreview"
                        class="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase hover:opacity-90 transition flex items-center justify-center gap-2" style="background: #004595; color: #ffffff;"
                    >
                        <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Download Report
                    </button>
                    <button 
                        @click="closePreview"
                        class="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase hover:opacity-90 transition flex items-center justify-center gap-2" style="background: #6b7280; color: #ffffff;"
                    >
                        <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Close
                    </button>
                </div>
            </div>
        </div>

        <!-- Logout Confirmation Modal -->
        <div v-if="showLogoutConfirm" 
            class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
            style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);"
        >
            <!-- Backdrop overlay -->
            <div 
                @click="showLogoutConfirm = false"
                class="absolute inset-0 bg-opacity-40"
            ></div>
            
            <!-- Modal dialog -->
            <div 
                @click.stop
                class="relative bg-white rounded-2xl max-w-md w-full mx-3 sm:mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
            >
                <!-- Modal Header with gradient -->
                <div class="relative px-6 sm:px-8 pt-6 sm:pt-8 pb-5 sm:pb-6" style="background: linear-gradient(135deg, #002147 0%, #004595 100%);">
                    <div class="flex items-center justify-between mb-3 sm:mb-4">
                        <div class="flex items-center gap-2 sm:gap-3">
                            <div class="rounded-lg p-2 sm:p-2.5" style="background: rgba(255, 255, 255, 0.15);">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                            </div>
                            <h3 class="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">Logout Confirmation</h3>
                        </div>
                    </div>
                </div>

                <!-- Modal Body -->
                <div class="px-6 sm:px-8 py-5 sm:py-6">
                    <div class="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                        <div class="flex-shrink-0">
                            <div class="rounded-full p-2 sm:p-3" style="background: #fef2f2;">
                                <svg class="h-6 w-6 sm:h-7 sm:w-7" style="color: #dc2626;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <h4 class="text-sm sm:text-base font-bold mb-2" style="color: #002147;">Are you sure you want to logout?</h4>
                            <p class="text-xs sm:text-sm leading-relaxed" style="color: #6b7280;">
                                You will be signed out from the admin dashboard and redirected to the login page.
                            </p>
                        </div>
                    </div>

                    <!-- Important Info Box -->
                    <div class="rounded-lg p-3 sm:p-4 mb-5 sm:mb-6 border-l-4" style="background: #f0f9ff; border-left-color: #002147;">
                        <div class="flex items-center gap-2">
                            <svg class="w-3 h-3 sm:w-4 sm:h-4" style="color: #002147;" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                            <p class="text-xs font-semibold" style="color: #002147;">You can login again anytime using your credentials</p>
                        </div>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <button 
                            @click="showLogoutConfirm = false"
                            class="flex-1 font-bold py-3 sm:py-3.5 px-4 sm:px-5 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg border-2" 
                            style="background: #ffffff; color: #002147; border-color: #e5e7eb;"
                        >
                            <div class="flex items-center justify-center gap-2">
                                <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                Cancel
                            </div>
                        </button>
                        <button 
                            @click="handleLogout"
                            class="flex-1 text-white font-bold py-3 sm:py-3.5 px-4 sm:px-5 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg" 
                            style="background: #dc2626;"
                        >
                            <div class="flex items-center justify-center gap-2">
                                <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                                Logout
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Bottom Navigation -->
        <nav class="lg:hidden fixed bottom-0 left-0 right-0 z-50" style="box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);">
            <!-- Top Border Gradient -->
            <div class="h-1" style="background: linear-gradient(90deg, #002147 0%, #004595 50%, #002147 100%);"></div>
            
            <div class="grid grid-cols-4 h-16 sm:h-18" style="background: #ffffff;">
                <!-- Overview -->
                <router-link to="/admin-dashboard" class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300">
                    <div class="absolute inset-0 bg-gray-50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300" style="color: #6b7280;" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                    <span class="text-[10px] sm:text-xs font-semibold relative z-10 tracking-wide" style="color: #6b7280;">Overview</span>
                </router-link>

                <!-- Records -->
                <div class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 transition-all duration-300" style="border-color: #004595; background: linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%);">
                    <div class="absolute inset-0 bg-blue-50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 relative z-10 transform transition-transform duration-300" style="color: #004595;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>
                    <span class="text-[10px] sm:text-xs font-bold relative z-10 tracking-wide" style="color: #003d82;">Records</span>
                </div>

                <!-- Officers -->
                <router-link to="/officers" class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300">
                    <div class="absolute inset-0 bg-gray-50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300" style="color: #6b7280;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <span class="text-[10px] sm:text-xs font-semibold relative z-10 tracking-wide" style="color: #6b7280;">Officers</span>
                </router-link>

                <!-- Logout -->
                <button @click="showLogoutConfirm = true" class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300">
                    <div class="absolute inset-0 bg-red-50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300" style="color: #dc2626;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    <span class="text-[10px] sm:text-xs font-semibold relative z-10 tracking-wide" style="color: #dc2626;">Logout</span>
                </button>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabaseClient'
import { Document, Paragraph, TextRun, HeadingLevel, AlignmentType, ImageRun, Packer } from 'docx'
import { saveAs } from 'file-saver'

const router = useRouter()

// Filter date
const selectedDate = ref('')
const activeTab = ref('with-attendance')

// All records
const allRecords = ref([])
const filteredRecords = ref([])
const allUsers = ref([])
const filteredAttendanceUserIds = ref([])

// Preview modal state
const showPreviewModal = ref(false)
const previewContent = ref('')
const previewRecord = ref(null)
const showLogoutConfirm = ref(false)
const isWithoutAttendancePreview = ref(false)

// Officers without attendance
const officersWithoutAttendance = computed(() => {
    return allUsers.value.filter(user => 
        !filteredAttendanceUserIds.value.includes(user.id)
    )
})

// Set default date (today)
const setDefaultDate = () => {
    const today = new Date()
    selectedDate.value = today.toISOString().split('T')[0]
}

// Fetch all attendance records
const fetchRecords = async () => {
    try {
        // Fetch all users
        const { data: users, error: usersError } = await supabase
            .from('users')
            .select('*')
            .order('rank_full_name', { ascending: true })

        if (usersError) throw usersError
        allUsers.value = users || []

        // Fetch all attendance
        const { data: attendance, error } = await supabase
            .from('submittedprof')
            .select(`
                *,
                users (
                    id,
                    rank_full_name
                )
            `)
            .order('created_at', { ascending: false })

        if (error) throw error

        allRecords.value = (attendance || []).map(record => ({
            id: record.id,
            date: new Date(record.created_at).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }),
            dateObj: new Date(record.created_at),
            rank: record.users?.rank_full_name?.split(' ')[0] || 'N/A',
            name: record.users?.rank_full_name || 'Unknown',
            fullRankName: record.users?.rank_full_name || 'Unknown',
            userId: record.user_id,
            status: record.status === true,
            screenshots: record.screenshots || ''
        }))

        filterRecords()
    } catch (error) {
        console.error('Error fetching records:', error)
    }
}

// Filter records by selected date
const filterRecords = () => {
    if (!selectedDate.value) {
        filteredRecords.value = allRecords.value
        filteredAttendanceUserIds.value = allRecords.value.map(r => r.userId)
        return
    }

    const selected = new Date(selectedDate.value)
    selected.setHours(0, 0, 0, 0)
    
    const endOfDay = new Date(selected)
    endOfDay.setHours(23, 59, 59, 999)

    filteredRecords.value = allRecords.value.filter(record => {
        return record.dateObj >= selected && record.dateObj <= endOfDay
    })

    filteredAttendanceUserIds.value = filteredRecords.value.map(r => r.userId)
}

// Reset filters
const resetFilters = () => {
    selectedDate.value = ''
    filteredRecords.value = allRecords.value
    filteredAttendanceUserIds.value = allRecords.value.map(r => r.userId)
}

// Preview report functions
const previewReport = async (record) => {
    try {
        previewRecord.value = record
        isWithoutAttendancePreview.value = false
        
        // Parse screenshots URLs (comma-separated)
        const screenshotUrls = record.screenshots ? record.screenshots.split(',').map(url => url.trim()).filter(url => url) : []
        
        const imagesHTML = screenshotUrls.length > 0 ? `
            <div style="margin-top: 30px;">
                <h3 style="color: #002147; font-size: 18px; margin-bottom: 20px; border-bottom: 2px solid #004595; padding-bottom: 10px; font-weight: bold;">
                    📸 Uploaded Images (${screenshotUrls.length})
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    ${screenshotUrls.map((url, index) => `
                        <div style="text-align: center; background: #f3f1ee; padding: 15px; border-radius: 8px; border: 2px solid #004595;">
                            <p style="font-weight: bold; color: #002147; margin-bottom: 10px; font-size: 14px;">Image ${index + 1}</p>
                            <img src="${url}" alt="Attendance Image ${index + 1}" 
                                style="width: 100%; height: auto; border-radius: 8px; border: 3px solid #002147; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '<div style="text-align: center; padding: 40px; background: #fee2e2; border-radius: 8px; border: 2px solid #ef4444; margin-top: 30px;"><p style="color: #991b1b; font-weight: bold; font-size: 16px;">No images uploaded for this attendance record</p></div>'
        
        const previewHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 20px; background: linear-gradient(135deg, #002147 0%, #004595 100%); padding: 20px; border-radius: 8px;">
                    <h1 style="color: #ffffff; font-size: 20px; margin-bottom: 6px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
                    <h2 style="color: #f3f1ee; font-size: 16px; margin-bottom: 3px;">Attendance Report Preview</h2>
                    <p style="color: #e0e7ff; font-size: 12px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <div style="border: 2px solid #004595; border-radius: 8px; padding: 18px; margin-bottom: 20px; background: linear-gradient(to bottom, #ffffff 0%, #f3f1ee 100%); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    <h3 style="color: #002147; font-size: 16px; margin-bottom: 15px; border-bottom: 2px solid #004595; padding-bottom: 8px; font-weight: bold;">👮 Officer Information</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #002147; width: 160px; font-size: 13px;">Officer Name:</td>
                            <td style="padding: 8px; color: #374151; font-size: 13px;">${record.fullRankName || record.name || 'N/A'}</td>
                        </tr>
                        <tr style="background: rgba(0, 69, 149, 0.05);">
                            <td style="padding: 8px; font-weight: bold; color: #002147; font-size: 13px;">Attendance Date:</td>
                            <td style="padding: 8px; color: #374151; font-size: 13px;">${record.date || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #002147; font-size: 13px;">Status:</td>
                            <td style="padding: 8px;">
                                <span style="display: inline-block; padding: 4px 12px; border-radius: 4px; font-weight: bold; font-size: 12px; ${
                                    record.status === true 
                                        ? 'background: #d1fae5; color: #065f46; border: 2px solid #10b981;' 
                                        : 'background: #fee2e2; color: #991b1b; border: 2px solid #ef4444;'
                                }">
                                    ${record.status === true ? '✓ Present' : '✗ Absent'}
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
                
                ${imagesHTML}
                
                <div style="text-align: center; padding-top: 15px; border-top: 2px solid #e5e7eb; margin-top: 25px;">
                    <p style="color: #6b7280; font-size: 11px; font-weight: 500;">This is an official document preview from the PNP Attendance Monitoring System</p>
                    <p style="color: #9ca3af; font-size: 10px; margin-top: 3px;">For official use only</p>
                </div>
            </div>
        `
        
        previewContent.value = previewHTML
        showPreviewModal.value = true
    } catch (error) {
        console.error('Error generating preview:', error)
        alert('Error generating preview. Please try again.')
    }
}

const previewWithoutAttendanceReport = () => {
    try {
        previewRecord.value = null
        isWithoutAttendancePreview.value = true
        
        const officersHTML = officersWithoutAttendance.value.map((officer, index) => `
            <tr style="${index % 2 === 0 ? 'background: #f9fafb;' : 'background: #ffffff;'}">
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 600; color: #374151; font-size: 11px;">${index + 1}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; color: #1f2937; font-weight: 500; font-size: 11px;">${officer.rank_full_name || 'N/A'}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 11px;">${officer.badge_number || 'N/A'}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">
                    <span style="display: inline-block; padding: 3px 8px; border-radius: 3px; font-weight: bold; font-size: 10px; background: #fee2e2; color: #991b1b; border: 1.5px solid #ef4444;">✗ Absent</span>
                </td>
            </tr>
        `).join('')
        
        const previewHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 15px; background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 12px; border-radius: 6px;">
                    <h1 style="color: #ffffff; font-size: 16px; margin-bottom: 4px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
                    <h2 style="color: #fee2e2; font-size: 13px; margin-bottom: 2px; font-weight: bold;">Officers Without Attendance Report</h2>
                    <p style="color: #fecaca; font-size: 10px;">Date: ${new Date(selectedDate.value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p style="color: #fecaca; font-size: 10px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <div style="border: 2px solid #ef4444; border-radius: 6px; padding: 10px; margin-bottom: 15px; background: linear-gradient(to right, #fee2e2 0%, #fef2f2 100%); box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="background: #dc2626; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: #ffffff; font-size: 16px; font-weight: bold;">⚠️</span>
                        </div>
                        <div>
                            <p style="color: #991b1b; font-weight: bold; font-size: 12px; margin: 0;">
                                Total Officers Without Attendance: ${officersWithoutAttendance.value.length}
                            </p>
                            <p style="color: #b91c1c; font-size: 10px; margin: 2px 0 0 0;">
                                These officers have not submitted their attendance for the selected date
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style="background: #ffffff; border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #002147 0%, #004595 100%);">
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 50px; color: #ffffff; font-weight: bold; font-size: 11px;">#</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: left; color: #ffffff; font-weight: bold; font-size: 11px;">RANK & FULL NAME</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 120px; color: #ffffff; font-weight: bold; font-size: 11px;">BADGE NUMBER</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 100px; color: #ffffff; font-weight: bold; font-size: 11px;">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${officersHTML}
                        </tbody>
                    </table>
                </div>
                
                <div style="text-align: center; padding-top: 15px; border-top: 2px solid #e5e7eb; margin-top: 25px;">
                    <p style="color: #6b7280; font-size: 11px; font-weight: 500;">This is an official document preview from the PNP Attendance Monitoring System</p>
                    <p style="color: #9ca3af; font-size: 10px; margin-top: 3px;">For official use only</p>
                </div>
            </div>
        `
        
        previewContent.value = previewHTML
        showPreviewModal.value = true
    } catch (error) {
        console.error('Error generating preview:', error)
        alert('Error generating preview. Please try again.')
    }
}

// Download from preview modal
const downloadFromPreview = () => {
    if (isWithoutAttendancePreview.value) {
        downloadWithoutAttendanceReport()
    } else if (previewRecord.value) {
        downloadWordReport(previewRecord.value)
    }
}

// Download Word report for individual attendance record
const downloadWordReport = async (record) => {
    try {
        const images = record.images || []
        const imageElements = []

        // Convert images to base64 and create ImageRun elements
        for (let i = 0; i < images.length; i++) {
            try {
                const response = await fetch(images[i])
                const blob = await response.blob()
                const buffer = await blob.arrayBuffer()

                imageElements.push(
                    new ImageRun({
                        data: buffer,
                        transformation: {
                            width: 150,
                            height: 150,
                        },
                    })
                )
            } catch (error) {
                console.error(`Error loading image ${i}:`, error)
            }
        }

        // Create paragraphs with 3 images per row
        const imageParagraphs = []
        for (let i = 0; i < imageElements.length; i += 3) {
            const rowImages = imageElements.slice(i, i + 3)
            imageParagraphs.push(
                new Paragraph({
                    children: rowImages,
                    spacing: { before: 200, after: 200 },
                    alignment: AlignmentType.CENTER,
                })
            )
        }

        const doc = new Document({
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: 720,
                            right: 720,
                            bottom: 720,
                            left: 720,
                        },
                    },
                },
                children: [
                    new Paragraph({
                        text: "PHILIPPINE NATIONAL POLICE",
                        heading: HeadingLevel.HEADING_1,
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                    }),
                    new Paragraph({
                        text: "Attendance Report",
                        heading: HeadingLevel.HEADING_2,
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 400 },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Officer Name: ",
                                bold: true,
                            }),
                            new TextRun(record.fullRankName || record.name || 'N/A'),
                        ],
                        spacing: { after: 200 },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Attendance Date: ",
                                bold: true,
                            }),
                            new TextRun(record.date || 'N/A'),
                        ],
                        spacing: { after: 200 },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Status: ",
                                bold: true,
                            }),
                            new TextRun(record.status === true ? 'Present' : 'Absent'),
                        ],
                        spacing: { after: 400 },
                    }),
                    new Paragraph({
                        text: "Attendance Images:",
                        heading: HeadingLevel.HEADING_3,
                        spacing: { before: 400, after: 200 },
                    }),
                    ...imageParagraphs,
                ],
            }],
        })

        const blob = await Packer.toBlob(doc)
        saveAs(blob, `Attendance_Report_${record.fullRankName || record.name || 'Officer'}_${record.date}.docx`)
    } catch (error) {
        console.error('Error generating Word document:', error)
        alert('Error generating Word document. Please try again.')
    }
}

// Download Word report for officers without attendance
const downloadWithoutAttendanceReport = async () => {
    try {
        const tableRows = officersWithoutAttendance.value.map((officer, index) => {
            return new Paragraph({
                children: [
                    new TextRun({
                        text: `${index + 1}. `,
                        bold: true,
                    }),
                    new TextRun(`${officer.rank_full_name || 'N/A'} - Badge: ${officer.badge_number || 'N/A'}`),
                ],
                spacing: { after: 100 },
            })
        })

        const doc = new Document({
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: 720,
                            right: 720,
                            bottom: 720,
                            left: 720,
                        },
                    },
                },
                children: [
                    new Paragraph({
                        text: "PHILIPPINE NATIONAL POLICE",
                        heading: HeadingLevel.HEADING_1,
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                    }),
                    new Paragraph({
                        text: "Officers Without Attendance Report",
                        heading: HeadingLevel.HEADING_2,
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Date: ",
                                bold: true,
                            }),
                            new TextRun(new Date(selectedDate.value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })),
                        ],
                        spacing: { after: 200 },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Total Officers Without Attendance: ${officersWithoutAttendance.value.length}`,
                                bold: true,
                            }),
                        ],
                        spacing: { after: 400 },
                    }),
                    new Paragraph({
                        text: "List of Officers:",
                        heading: HeadingLevel.HEADING_3,
                        spacing: { before: 400, after: 200 },
                    }),
                    ...tableRows,
                ],
            }],
        })

        const blob = await Packer.toBlob(doc)
        saveAs(blob, `Officers_Without_Attendance_${new Date(selectedDate.value).toLocaleDateString('en-US')}.docx`)
    } catch (error) {
        console.error('Error generating Word document:', error)
        alert('Error generating Word document. Please try again.')
    }
}

const closePreview = () => {
    showPreviewModal.value = false
    previewContent.value = ''
    previewRecord.value = null
    isWithoutAttendancePreview.value = false
}

// Logout handler
const handleLogout = async () => {
    try {
        await supabase.auth.signOut()
        localStorage.removeItem('currentAdmin')
        router.push('/')
    } catch (err) {
        console.error('Logout error:', err)
        router.push('/')
    }
}

// Initialize
onMounted(async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        router.push('/')
        return
    }

    setDefaultDate()
    await fetchRecords()
})
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes scale-in {
    from {
        transform: scale(0.9);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 0.2s ease-out;
}

.animate-scale-in {
    animation: scale-in 0.3s ease-out;
}
</style>
