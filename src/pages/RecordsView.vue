<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <!-- Sidebar - Fixed -->
        <div class="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white flex flex-col shadow-2xl z-40">
            <!-- Sidebar Header -->
            <div class="p-6 bg-gradient-to-r from-blue-950 to-indigo-950 border-b border-blue-800/50">
                <div class="flex items-center gap-3">
                    <div class="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full p-2.5 shadow-lg">
                        <svg class="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-lg font-bold bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">Admin Dashboard</h1>
                        <p class="text-xs text-blue-300">Police Attendance System</p>
                    </div>
                </div>
            </div>

            <!-- Navigation Menu -->
            <div class="flex-1 p-4 space-y-2">
                <router-link to="/admin-dashboard" class="block p-3 hover:bg-blue-800/30 rounded-lg transition cursor-pointer">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                        </svg>
                        <span class="text-sm text-blue-100">Overview</span>
                    </div>
                </router-link>
                
                <div class="bg-blue-800/50 rounded-lg p-3 border-l-4 border-yellow-400">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                        <span class="font-semibold text-sm">Records</span>
                    </div>
                </div>
                
                <router-link to="/officers" class="block p-3 hover:bg-blue-800/30 rounded-lg transition cursor-pointer">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span class="text-sm text-blue-100">Officers</span>
                    </div>
                </router-link>
            </div>

            <!-- Logout Button -->
            <div class="p-6 border-t border-blue-800/50 mt-auto">
                <button 
                    @click="handleLogout"
                    class="w-full bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                <div class="mb-8 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 text-white">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 class="text-4xl font-bold mb-1">Attendance Records</h1>
                            <p class="text-blue-100">Filter and view all attendance records by date</p>
                        </div>
                    </div>
                </div>

                <!-- Filter Section -->
                <div class="bg-linear-to-br from-white to-blue-50 rounded-2xl shadow-xl p-6 mb-8 border-2 border-blue-200">
                    <div class="flex items-end gap-4">
                        <div class="flex-1">
                            <label class="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                Select Date
                            </label>
                            <input 
                                v-model="selectedDate" 
                                type="date" 
                                class="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition bg-white shadow-sm font-medium text-gray-700"
                                @change="filterRecords"
                            />
                        </div>
                        <button 
                            @click="resetFilters"
                            class="bg-linear-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer flex items-center gap-2"
                        >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            Clear
                        </button>
                    </div>
                </div>

                <!-- Attendance Management Tabs -->
                <div class="mb-8">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="h-10 w-1.5 bg-linear-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                        <h2 class="text-3xl font-bold text-gray-800">Attendance Management</h2>
                    </div>
                    
                    <!-- Tab Buttons -->
                    <div class="flex gap-4 flex-wrap">
                        <button 
                            @click="activeTab = 'with-attendance'"
                            :class="activeTab === 'with-attendance' 
                                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-2xl scale-105 border-blue-600' 
                                : 'bg-white text-gray-700 hover:bg-blue-50 shadow-lg border-gray-200'"
                            class="px-8 py-4 rounded-2xl font-bold transition-all duration-200 flex items-center gap-3 transform hover:scale-105 border-2"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            With Attendance
                            <span :class="activeTab === 'with-attendance' ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-700'" class="px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">{{ filteredRecords.length }}</span>
                        </button>
                        <button 
                            @click="activeTab = 'without-attendance'"
                            :class="activeTab === 'without-attendance' 
                                ? 'bg-linear-to-r from-red-600 to-pink-600 text-white shadow-2xl scale-105 border-red-600' 
                                : 'bg-white text-gray-700 hover:bg-red-50 shadow-lg border-gray-200'"
                            class="px-8 py-4 rounded-2xl font-bold transition-all duration-200 flex items-center gap-3 transform hover:scale-105 border-2"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Without Attendance
                            <span :class="activeTab === 'without-attendance' ? 'bg-white text-red-600' : 'bg-red-100 text-red-700'" class="px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">{{ officersWithoutAttendance.length }}</span>
                        </button>
                    </div>
                </div>

                <!-- Tab Content -->
                <!-- With Attendance Tab -->
                <div v-if="activeTab === 'with-attendance'" class="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
                    <div class="p-6 bg-linear-to-r from-blue-600 to-indigo-600 border-b-2 border-blue-700">
                        <h2 class="text-2xl font-bold text-white flex items-center gap-3">
                            <div class="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            All Attendance Records
                        </h2>
                        <p class="text-blue-100 mt-2 font-semibold">Showing {{ filteredRecords.length }} records</p>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-linear-to-r from-blue-900 to-indigo-900 text-white">
                                <tr>
                                    <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Date & Time</th>
                                    <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Name</th>
                                    <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Status</th>
                                    <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-100">
                                <tr v-for="record in filteredRecords" :key="record.id" 
                                    class="hover:bg-linear-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-150">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{{ record.date }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{{ record.name }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span 
                                            v-if="record.status === true"
                                            class="px-4 py-2 inline-flex text-xs leading-5 font-bold rounded-full bg-linear-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200 shadow-sm"
                                        >
                                            ✓ Present
                                        </span>
                                        <span 
                                            v-else
                                            class="px-4 py-2 inline-flex text-xs leading-5 font-bold rounded-full bg-linear-to-r from-red-100 to-pink-100 text-red-800 border border-red-200 shadow-sm"
                                        >
                                            ✗ Absent
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <button 
                                            @click="downloadWordReport(record)"
                                            class="bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-2xl flex items-center gap-2 text-sm cursor-pointer transform hover:scale-110"
                                        >
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                            Download
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="filteredRecords.length === 0">
                                    <td colspan="5" class="px-6 py-16 text-center text-gray-500">
                                        <div class="flex flex-col items-center">
                                            <div class="bg-gray-100 rounded-full p-4 mb-4">
                                                <svg class="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                                </svg>
                                            </div>
                                            <p class="font-semibold text-lg text-gray-700">No records found</p>
                                            <p class="text-sm text-gray-500 mt-1">Try adjusting your date filter</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Without Attendance Tab -->
                <div v-if="activeTab === 'without-attendance'" class="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-200">
                    <div class="mb-8 bg-linear-to-r from-red-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
                        <div class="flex items-center justify-between">
                            <div>
                                <h2 class="text-3xl font-bold flex items-center gap-3">
                                    <div class="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                        </svg>
                                    </div>
                                    Officers Without Attendance
                                </h2>
                                <p class="text-red-100 mt-2 font-semibold text-lg">{{ officersWithoutAttendance.length }} officer(s) haven't submitted attendance for the selected date</p>
                            </div>
                            <button 
                                v-if="officersWithoutAttendance.length > 0"
                                @click="downloadWithoutAttendanceReport"
                                class="bg-white hover:bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm transform hover:scale-105"
                            >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Download List
                            </button>
                        </div>
                    </div>
                    
                    <div v-if="officersWithoutAttendance.length > 0">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            <div 
                                v-for="officer in officersWithoutAttendance" 
                                :key="officer.id"
                                class="group border-2 border-red-300 rounded-2xl p-6 hover:shadow-2xl hover:border-red-500 transition-all duration-200 bg-linear-to-br from-red-50 to-pink-50 transform hover:-translate-y-2 cursor-pointer"
                            >
                                <div class="flex items-center gap-4">
                                    <div class="bg-linear-to-br from-red-500 to-pink-600 rounded-xl p-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-1">
                                        <p class="font-bold text-gray-900 text-base leading-tight group-hover:text-red-700 transition-colors">{{ officer.rank_full_name }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="text-center py-16 bg-linear-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                        <div class="bg-linear-to-br from-green-500 to-emerald-600 rounded-full p-5 mx-auto w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <p class="text-gray-800 mt-4 text-xl font-bold">All officers have submitted attendance!</p>
                        <p class="text-gray-600 mt-2 text-sm">Great job everyone! 100% attendance for the selected date 🎉</p>
                    </div>
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