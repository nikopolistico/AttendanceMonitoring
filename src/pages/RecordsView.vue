<template>
    <div class="min-h-screen" style="background: #f3f1ee;">
        <!-- Sidebar - Fixed -->
        <div class="fixed left-0 top-0 h-screen w-64 text-white flex flex-col shadow-2xl z-40" style="background: #002147;">
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
        <div class="ml-64 min-h-screen overflow-auto">
            <div class="p-8">
                <!-- Page Header -->
                <div class="mb-8 p-6 rounded-lg shadow-sm" style="background: #ffffff; border-left: 4px solid #004595;">
                    <div class="flex items-center gap-4">
                        <div class="rounded-full p-3" style="background: #f3f1ee;">
                            <svg class="w-8 h-8" style="color: #002147;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold mb-1" style="color: #002147;">Attendance Records</h1>
                            <p class="text-sm font-semibold" style="color: #00397a;">Filter and view attendance records by date</p>
                        </div>
                    </div>
                </div>

                <!-- Filter and Tabs Section -->
                <div class="bg-white rounded-lg p-6 mb-6 shadow-sm">
                    <div class="flex items-center justify-between gap-4 flex-wrap">
                        <!-- Tab Buttons -->
                        <div class="flex gap-2">
                            <button 
                                @click="activeTab = 'with-attendance'"
                                :class="activeTab === 'with-attendance' 
                                    ? 'text-white shadow-lg' 
                                    : 'bg-white border-2'"
                                :style="activeTab === 'with-attendance' ? 'background: #004595; color: #ffffff;' : 'background: #ffffff; color: #002147; border-color: #e5e7eb;'"
                                class="px-4 py-2.5 rounded-lg font-bold text-sm uppercase flex items-center gap-2 transition hover:opacity-90"
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
                                class="px-4 py-2.5 rounded-lg font-bold text-sm uppercase flex items-center gap-2 transition hover:opacity-90"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Without Attendance
                                <span class="px-2 py-0.5 rounded-full text-xs font-bold" :style="activeTab === 'without-attendance' ? 'background: #ffffff; color: #ef4444;' : 'background: #fee2e2; color: #991b1b;'">{{ officersWithoutAttendance.length }}</span>
                            </button>
                        </div>

                        <!-- Date Filter -->
                        <div class="flex items-center gap-3">
                            <label class="text-sm font-bold uppercase flex items-center gap-2" style="color: #002147;">
                                <div class="rounded-lg p-1.5" style="background: #f3f1ee;">
                                    <svg class="w-4 h-4" style="color: #004595;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                Select Date
                            </label>
                            <input 
                                v-model="selectedDate" 
                                type="date" 
                                class="px-4 py-2.5 border-2 rounded-lg focus:outline-none text-sm font-medium" style="border-color: #e5e7eb; color: #002147;"
                                @change="filterRecords"
                            />
                            <button 
                                @click="resetFilters"
                                class="text-white px-4 py-2.5 rounded-lg font-bold text-sm uppercase hover:opacity-90 flex items-center gap-2 transition" style="background: #00397a;"
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
                <div v-if="activeTab === 'with-attendance'" class="bg-white rounded overflow-hidden">
                    <div class="p-5 border-b" style="background: #f3f1ee; border-color: #e5e7eb;">
                        <h2 class="text-base font-bold flex items-center gap-2" style="color: #002147;">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            All Attendance Records
                        </h2>
                        <p class="text-sm mt-1" style="color: #00397a;">Showing {{ filteredRecords.length }} records</p>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="text-white" style="background: #002147;">
                                <tr>
                                    <th class="px-4 py-3 text-left text-xs font-bold uppercase">Date & Time</th>
                                    <th class="px-4 py-3 text-left text-xs font-bold uppercase">Name</th>
                                    <th class="px-4 py-3 text-left text-xs font-bold uppercase">Status</th>
                                    <th class="px-4 py-3 text-left text-xs font-bold uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-100">
                                <tr v-for="record in filteredRecords" :key="record.id" 
                                    class="hover:bg-gray-50">
                                    <td class="px-4 py-3 text-sm text-gray-900">{{ record.date }}</td>
                                    <td class="px-4 py-3 text-sm text-gray-900">{{ record.name }}</td>
                                    <td class="px-4 py-3">
                                        <span 
                                            v-if="record.status === true"
                                            class="px-3 py-1 inline-flex text-xs font-bold rounded" style="background: #d1fae5; color: #065f46;"
                                        >
                                            Present
                                        </span>
                                        <span 
                                            v-else
                                            class="px-3 py-1 inline-flex text-xs font-bold rounded" style="background: #fee2e2; color: #991b1b;"
                                        >
                                            Absent
                                        </span>
                                    </td>
                                    <td class="px-4 py-3">
                                        <div class="flex gap-2">
                                            <button 
                                                @click="previewReport(record)"
                                                class="text-white px-4 py-2 rounded font-bold flex items-center gap-2 text-xs" style="background: #004595;"
                                            >
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                </svg>
                                                Preview
                                            </button>
                                        
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="filteredRecords.length === 0">
                                    <td colspan="5" class="px-4 py-12 text-center text-gray-500">
                                        <div class="flex flex-col items-center">
                                            <div class="bg-gray-100 rounded-full p-3 mb-3">
                                                <svg class="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                                </svg>
                                            </div>
                                            <p class="font-semibold text-sm text-gray-700">No records found</p>
                                            <p class="text-sm text-gray-500 mt-1">Try adjusting your date filter</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Without Attendance Tab -->
                <div v-if="activeTab === 'without-attendance'" class="bg-white rounded p-5">
                    <div class="mb-5 rounded p-5 text-white" style="background: #ef4444;">
                        <div class="flex items-center justify-between">
                            <div>
                                <h2 class="text-lg font-bold flex items-center gap-2">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                    </svg>
                                    Officers Without Attendance
                                </h2>
                                <p class="text-sm mt-1">{{ officersWithoutAttendance.length }} officer(s) without attendance</p>
                            </div>
                            <div v-if="officersWithoutAttendance.length > 0" class="flex gap-2">
                                <button 
                                    @click="previewWithoutAttendanceReport"
                                    class="bg-white px-5 py-2.5 rounded font-bold text-xs uppercase flex items-center gap-2 hover:opacity-90" style="color: #004595;"
                                >
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    Preview
                                </button>
                                <button 
                                    @click="downloadWithoutAttendanceReport"
                                    class="bg-white px-5 py-2.5 rounded font-bold text-xs uppercase flex items-center gap-2 hover:opacity-90" style="color: #ef4444;"
                                >
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="officersWithoutAttendance.length > 0">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            <div 
                                v-for="officer in officersWithoutAttendance" 
                                :key="officer.id"
                                class="rounded p-4" style="border: 1px solid #ef4444; background: #fef2f2;"
                            >
                                <div class="flex items-center gap-3">
                                    <div class="rounded p-2" style="background: #ef4444;">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-1">
                                        <p class="font-bold text-gray-900 text-sm">{{ officer.rank_full_name }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="text-center py-12 rounded" style="background: #f0fdf4; border: 1px solid #86efac;">
                        <div class="rounded-full p-4 mx-auto w-14 h-14 flex items-center justify-center mb-4" style="background: #10b981;">
                            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <p class="text-gray-800 text-base font-bold">All officers have submitted attendance!</p>
                        <p class="text-gray-600 text-sm mt-2">100% attendance for the selected date</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Preview Modal -->
        <div v-if="showPreviewModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click.self="closePreview">
            <div class="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
                <!-- Modal Header -->
                <div class="sticky top-0 bg-white border-b-2 p-6 flex justify-between items-center z-10" style="border-color: #004595;">
                    <div class="flex items-center gap-3">
                        <div class="rounded-lg p-2" style="background: #004595;">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold" style="color: #002147;">Document Preview</h2>
                    </div>
                    <button @click="closePreview" class="rounded-full p-2 hover:bg-gray-100 transition">
                        <svg class="w-6 h-6" style="color: #002147;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Preview Content -->
                <div class="flex-1 overflow-y-auto p-8" style="background: #f3f1ee;">
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <div v-html="previewContent"></div>
                    </div>
                </div>
                
                <!-- Modal Footer -->
                <div class="sticky bottom-0 bg-white border-t-2 p-6 flex justify-end gap-3" style="border-color: #004595;">
                    <button 
                        @click="closePreview"
                        class="px-6 py-2.5 rounded-lg font-bold text-sm uppercase hover:opacity-90 transition flex items-center gap-2" style="background: #6b7280; color: #ffffff;"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Close
                    </button>
                    <button 
                        v-if="previewRecord || isWithoutAttendancePreview"
                        @click="downloadFromPreview"
                        class="px-6 py-2.5 rounded-lg font-bold text-sm uppercase hover:opacity-90 transition flex items-center gap-2 shadow-lg hover:shadow-xl" style="background: #10b981; color: #ffffff;"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Download Report
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabaseClient'
import { Document, Paragraph, TextRun, HeadingLevel, AlignmentType, ImageRun } from 'docx'
import { saveAs } from 'file-saver'
import { Packer } from 'docx'

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
                <div style="text-align: center; margin-bottom: 30px; background: linear-gradient(135deg, #002147 0%, #004595 100%); padding: 30px; border-radius: 12px;">
                    <h1 style="color: #ffffff; font-size: 28px; margin-bottom: 10px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
                    <h2 style="color: #f3f1ee; font-size: 22px; margin-bottom: 5px;">Attendance Report Preview</h2>
                    <p style="color: #e0e7ff; font-size: 14px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <div style="border: 3px solid #004595; border-radius: 12px; padding: 25px; margin-bottom: 30px; background: linear-gradient(to bottom, #ffffff 0%, #f3f1ee 100%); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <h3 style="color: #002147; font-size: 20px; margin-bottom: 20px; border-bottom: 2px solid #004595; padding-bottom: 10px; font-weight: bold;">👮 Officer Information</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px; font-weight: bold; color: #002147; width: 200px; font-size: 15px;">Officer Name:</td>
                            <td style="padding: 12px; color: #374151; font-size: 15px;">${record.fullRankName || record.name || 'N/A'}</td>
                        </tr>
                        <tr style="background: rgba(0, 69, 149, 0.05);">
                            <td style="padding: 12px; font-weight: bold; color: #002147; font-size: 15px;">Attendance Date:</td>
                            <td style="padding: 12px; color: #374151; font-size: 15px;">${record.date || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; font-weight: bold; color: #002147; font-size: 15px;">Status:</td>
                            <td style="padding: 12px;">
                                <span style="display: inline-block; padding: 6px 16px; border-radius: 6px; font-weight: bold; font-size: 14px; ${
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
                
                <div style="text-align: center; padding-top: 25px; border-top: 2px solid #e5e7eb; margin-top: 40px;">
                    <p style="color: #6b7280; font-size: 13px; font-weight: 500;">This is an official document preview from the PNP Attendance Monitoring System</p>
                    <p style="color: #9ca3af; font-size: 12px; margin-top: 5px;">For official use only</p>
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
                <td style="padding: 14px; border: 1px solid #e5e7eb; text-align: center; font-weight: 600; color: #374151;">${index + 1}</td>
                <td style="padding: 14px; border: 1px solid #e5e7eb; color: #1f2937; font-weight: 500;">${officer.rank_full_name || 'N/A'}</td>
                <td style="padding: 14px; border: 1px solid #e5e7eb; text-align: center; color: #6b7280;">${officer.badge_number || 'N/A'}</td>
                <td style="padding: 14px; border: 1px solid #e5e7eb; text-align: center;">
                    <span style="display: inline-block; padding: 6px 14px; border-radius: 6px; font-weight: bold; font-size: 13px; background: #fee2e2; color: #991b1b; border: 2px solid #ef4444;">✗ Absent</span>
                </td>
            </tr>
        `).join('')
        
        const previewHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 30px; background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 30px; border-radius: 12px;">
                    <h1 style="color: #ffffff; font-size: 28px; margin-bottom: 10px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
                    <h2 style="color: #fee2e2; font-size: 22px; margin-bottom: 5px; font-weight: bold;">Officers Without Attendance Report</h2>
                    <p style="color: #fecaca; font-size: 14px;">Date: ${new Date(selectedDate.value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p style="color: #fecaca; font-size: 14px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <div style="border: 3px solid #ef4444; border-radius: 12px; padding: 25px; margin-bottom: 30px; background: linear-gradient(to right, #fee2e2 0%, #fef2f2 100%); box-shadow: 0 4px 6px rgba(239, 68, 68, 0.2);">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="background: #dc2626; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: #ffffff; font-size: 28px; font-weight: bold;">⚠️</span>
                        </div>
                        <div>
                            <p style="color: #991b1b; font-weight: bold; font-size: 18px; margin: 0;">
                                Total Officers Without Attendance: ${officersWithoutAttendance.value.length}
                            </p>
                            <p style="color: #b91c1c; font-size: 14px; margin: 5px 0 0 0;">
                                These officers have not submitted their attendance for the selected date
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style="background: #ffffff; border-radius: 12px; overflow: hidden; border: 2px solid #e5e7eb; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #002147 0%, #004595 100%);">
                                <th style="padding: 16px; border: 1px solid #004595; text-align: center; width: 80px; color: #ffffff; font-weight: bold; font-size: 14px;">#</th>
                                <th style="padding: 16px; border: 1px solid #004595; text-align: left; color: #ffffff; font-weight: bold; font-size: 14px;">RANK & FULL NAME</th>
                                <th style="padding: 16px; border: 1px solid #004595; text-align: center; width: 180px; color: #ffffff; font-weight: bold; font-size: 14px;">BADGE NUMBER</th>
                                <th style="padding: 16px; border: 1px solid #004595; text-align: center; width: 150px; color: #ffffff; font-weight: bold; font-size: 14px;">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${officersHTML}
                        </tbody>
                    </table>
                </div>
                
                <div style="text-align: center; padding-top: 25px; border-top: 2px solid #e5e7eb; margin-top: 40px;">
                    <p style="color: #6b7280; font-size: 13px; font-weight: 500;">This is an official document preview from the PNP Attendance Monitoring System</p>
                    <p style="color: #9ca3af; font-size: 12px; margin-top: 5px;">For official use only</p>
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

const closePreview = () => {
    showPreviewModal.value = false
    previewContent.value = ''
    previewRecord.value = null
    isWithoutAttendancePreview.value = false
}

const downloadFromPreview = () => {
    if (isWithoutAttendancePreview.value) {
        downloadWithoutAttendanceReport()
    } else if (previewRecord.value) {
        downloadWordReport(previewRecord.value)
    }
    closePreview()
}

// Download Word report with screenshots
const downloadWordReport = async (record) => {
    try {
        // Parse screenshots URLs (comma-separated)
        const screenshotUrls = record.screenshots ? record.screenshots.split(',').map(url => url.trim()).filter(url => url) : []
        
        if (screenshotUrls.length === 0) {
            alert('No screenshots available for this record.')
            return
        }

        // Fetch images as base64
        const imagePromises = screenshotUrls.map(async (url) => {
            try {
                const response = await fetch(url)
                const blob = await response.blob()
                return new Promise((resolve) => {
                    const reader = new FileReader()
                    reader.onloadend = () => resolve(reader.result.split(',')[1])
                    reader.readAsDataURL(blob)
                })
            } catch (error) {
                console.error('Error fetching image:', error)
                return null
            }
        })

        const imageBase64Array = await Promise.all(imagePromises)
        const validImages = imageBase64Array.filter(img => img !== null)

        // Create document sections
        const sections = []

        // Add header
        sections.push(
            new Paragraph({
                text: 'BCPS1',
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 }
            })
        )

        // Add rank and full name
        sections.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: record.fullRankName,
                        bold: true,
                        size: 28
                    })
                ],
                spacing: { after: 200 }
            })
        )

        // Add date
        sections.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: `Date: ${record.date}`,
                        size: 24
                    })
                ],
                spacing: { after: 400 }
            })
        )

        // Add screenshots (3 per row for A4 size)
        for (let i = 0; i < validImages.length; i += 3) {
            const rowImages = validImages.slice(i, i + 3)
            
            // Create image runs with spacing between them
            const children = []
            rowImages.forEach((imageBase64, index) => {
                children.push(
                    new ImageRun({
                        data: Uint8Array.from(atob(imageBase64), c => c.charCodeAt(0)),
                        transformation: {
                            width: 180,  // Smaller width to fit 3 in a row
                            height: 135  // Maintain aspect ratio (4:3)
                        }
                    })
                )
                
                // Add spacing between images (not after the last image in the row)
                if (index < rowImages.length - 1) {
                    children.push(
                        new TextRun({
                            text: '    ' // Multiple spaces for gap
                        })
                    )
                }
            })

            sections.push(
                new Paragraph({
                    children: children,
                    spacing: { after: 200 }
                })
            )
        }

        // Create document
        const doc = new Document({
            sections: [{
                properties: {},
                children: sections
            }]
        })

        // Generate and download
        const blob = await Packer.toBlob(doc)
        const fileName = `Attendance_${record.fullRankName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.docx`
        saveAs(blob, fileName)

    } catch (error) {
        console.error('Error generating Word document:', error)
        alert('Error generating document. Please try again.')
    }
}

// Download Word report for officers without attendance
const downloadWithoutAttendanceReport = async () => {
    try {
        const sections = []

        // Add header
        sections.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: 'BCPS1',
                        bold: true,
                        size: 32,
                        color: '1e40af'
                    })
                ],
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 }
            })
        )

        // Add title
        sections.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: 'Officers Without Attendance',
                        bold: true,
                        size: 28,
                        color: 'dc2626'
                    })
                ],
                spacing: { after: 200 },
                alignment: AlignmentType.CENTER
            })
        )

        // Add date
        sections.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: `Date: ${selectedDate.value}`,
                        size: 24
                    })
                ],
                spacing: { after: 300 }
            })
        )

        // Add total count
        sections.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: `Total Officers Without Attendance: ${officersWithoutAttendance.value.length}`,
                        bold: true,
                        size: 24,
                        color: 'dc2626'
                    })
                ],
                spacing: { after: 400 }
            })
        )

        // Add list of officers
        officersWithoutAttendance.value.forEach((officer, index) => {
            sections.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `${index + 1}. ${officer.rank_full_name}`,
                            size: 22
                        })
                    ],
                    spacing: { after: 150 }
                })
            )
        })

        // Create document
        const doc = new Document({
            sections: [{
                properties: {},
                children: sections
            }]
        })

        // Generate and download
        const blob = await Packer.toBlob(doc)
        const fileName = `Officers_Without_Attendance_${selectedDate.value}.docx`
        saveAs(blob, fileName)

    } catch (error) {
        console.error('Error generating Word document:', error)
        alert('Error generating document. Please try again.')
    }
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