<template>
    <div class="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-indigo-100">
        <!-- Sidebar - Fixed -->
        <div class="fixed left-0 top-0 h-screen w-64 bg-linear-to-b from-blue-900 via-blue-950 to-slate-900 text-white flex flex-col shadow-2xl z-40">
            <!-- Sidebar Header -->
            <div class="p-6 bg-linear-to-r from-blue-950 to-indigo-950 border-b border-blue-800/50">
                <div class="flex items-center gap-3">
                    <div class="bg-linear-to-br from-yellow-400 to-amber-500 rounded-full p-2.5 shadow-lg">
                        <svg class="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-lg font-bold bg-linear-to-r from-white to-blue-200 text-transparent bg-clip-text">Admin Dashboard</h1>
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
                
                <router-link to="/records" class="block p-3 hover:bg-blue-800/30 rounded-lg transition cursor-pointer">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                        <span class="text-sm text-blue-100">Records</span>
                    </div>
                </router-link>
                
                <div class="bg-blue-800/50 rounded-lg p-3 border-l-4 border-yellow-400">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span class="font-semibold text-sm">Officers</span>
                    </div>
                </div>
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
                <div class="mb-8">
                    <h1 class="text-4xl font-bold text-gray-800 mb-2">Officers & Personnel</h1>
                    <p class="text-gray-600">Manage all registered officers and personnel</p>
                </div>

                <!-- Statistics Card -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div class="bg-linear-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 border border-blue-200">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-blue-700 text-sm font-semibold uppercase tracking-wide">Total Officers</p>
                                <p class="text-5xl font-bold text-blue-700 mt-3">{{ officers.length }}</p>
                                <p class="text-xs text-blue-600 mt-2 font-medium">Registered in system</p>
                            </div>
                            <div class="bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 shadow-lg">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="bg-linear-to-br from-green-50 to-emerald-100 rounded-xl shadow-lg p-6 border border-green-200">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-green-700 text-sm font-semibold uppercase tracking-wide">Active Today</p>
                                <p class="text-5xl font-bold text-green-700 mt-3">{{ activeToday }}</p>
                                <p class="text-xs text-green-600 mt-2 font-medium">Officers who checked in</p>
                            </div>
                            <div class="bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl p-5 shadow-lg">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Search Bar -->
                <div class="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
                    <div class="flex items-center gap-3">
                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <input 
                            v-model="searchQuery"
                            type="text"
                            placeholder="Search officers by rank or name..."
                            class="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>
                </div>

                <!-- Officers Grid -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    <div class="p-6 bg-linear-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                        <h2 class="text-xl font-bold text-blue-900 flex items-center gap-2">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                            All Officers
                        </h2>
                        <p class="text-sm text-blue-700 mt-1 font-medium">{{ filteredOfficers.length }} officers found</p>
                    </div>
                    
                    <div class="p-6">
                        <div v-if="filteredOfficers.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div 
                                v-for="officer in filteredOfficers" 
                                :key="officer.id"
                                class="group border-2 border-gray-200 rounded-xl p-5 hover:shadow-xl hover:border-blue-400 transition-all duration-200 bg-linear-to-br from-gray-50 to-blue-50 transform hover:-translate-y-1"
                            >
                                <div class="flex items-start justify-between mb-3">
                                    <div class="flex items-center gap-3">
                                        <div class="bg-linear-to-br from-blue-500 to-indigo-600 rounded-full p-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span 
                                        v-if="officer.hasAttendanceToday"
                                        class="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-300"
                                    >
                                        Active
                                    </span>
                                    <span 
                                        v-else
                                        class="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-300"
                                    >
                                        Inactive
                                    </span>
                                </div>
                                <div>
                                    <p class="font-bold text-gray-900 text-lg leading-tight mb-1">{{ officer.rank_full_name }}</p>
                                    <p class="text-sm text-gray-600">ID: {{ officer.id }}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div v-else class="text-center py-16">
                            <div class="bg-gray-100 rounded-full p-5 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                                <svg class="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <p class="font-semibold text-lg text-gray-700">No officers found</p>
                            <p class="text-sm text-gray-500 mt-1">Try adjusting your search query</p>
                        </div>
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

const router = useRouter()

// Data
const officers = ref([])
const searchQuery = ref('')
const todayAttendanceUserIds = ref([])

// Computed
const filteredOfficers = computed(() => {
    if (!searchQuery.value) return officers.value
    
    const query = searchQuery.value.toLowerCase()
    return officers.value.filter(officer => 
        officer.rank_full_name.toLowerCase().includes(query)
    )
})

const activeToday = computed(() => {
    return officers.value.filter(o => o.hasAttendanceToday).length
})

// Fetch officers
const fetchOfficers = async () => {
    try {
        // Fetch all users
        const { data: users, error: usersError } = await supabase
            .from('users')
            .select('*')
            .order('rank_full_name', { ascending: true })

        if (usersError) throw usersError

        // Get today's date range
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        // Fetch today's attendance
        const { data: attendance, error: attendanceError } = await supabase
            .from('submittedprof')
            .select('user_id')
            .gte('created_at', today.toISOString())
            .lt('created_at', tomorrow.toISOString())

        if (attendanceError) throw attendanceError

        todayAttendanceUserIds.value = attendance?.map(a => a.user_id) || []

        // Map officers with attendance status
        officers.value = (users || []).map(user => ({
            ...user,
            hasAttendanceToday: todayAttendanceUserIds.value.includes(user.id)
        }))

    } catch (error) {
        console.error('Error fetching officers:', error)
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

    await fetchOfficers()
})
</script>

<style scoped>
/* Additional styles if needed */
</style>
