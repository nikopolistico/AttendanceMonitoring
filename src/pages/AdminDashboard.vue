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
                <div class="bg-blue-800/50 rounded-lg p-3 border-l-4 border-yellow-400">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                        </svg>
                        <span class="font-semibold text-sm">Overview</span>
                    </div>
                </div>
                
                <router-link to="/records" class="block p-3 hover:bg-blue-800/30 rounded-lg transition cursor-pointer">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                        <span class="text-sm text-blue-100">Records</span>
                    </div>
                </router-link>
                
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
                    @click="showLogoutConfirm = true"
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
                <!-- Welcome Header -->
                <div class="mb-8">
                    <h1 class="text-4xl font-bold text-gray-800 mb-2">Welcome Back, Administrator</h1>
                    <p class="text-gray-600">Here's what's happening with attendance today</p>
                </div>

                <!-- Today's Statistics -->
                <div class="mb-8">
                    <p class="text-gray-700 text-sm font-semibold uppercase tracking-wide mb-4 flex items-center gap-2">
                        <span class="h-1 w-8 bg-blue-600 rounded"></span>
                        Today's Statistics
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Today's Attendance -->
                        <div class="bg-linear-to-br from-green-50 to-emerald-100 rounded-xl shadow-lg p-6 border border-green-200 transform hover:scale-105 transition-transform duration-200 hover:shadow-2xl">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-green-700 text-sm font-semibold uppercase tracking-wide">Total Attendance</p>
                                    <p class="text-4xl font-bold text-green-700 mt-3">{{ todayCheckIns }}</p>
                                    <p class="text-xs text-green-600 mt-2 font-medium">{{ currentDate }}</p>
                                </div>
                                <div class="bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl p-4 shadow-lg">
                                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Total Officers -->
                        <div class="bg-linear-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 border border-blue-200 transform hover:scale-105 transition-transform duration-200 hover:shadow-2xl">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-blue-700 text-sm font-semibold uppercase tracking-wide">Total Officers</p>
                                    <p class="text-4xl font-bold text-blue-700 mt-3">{{ totalOfficers }}</p>
                                    <p class="text-xs text-blue-600 mt-2 font-medium">Registered users</p>
                                </div>
                                <div class="bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 shadow-lg">
                                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Absent Officers -->
                        <div class="bg-linear-to-br from-red-50 to-pink-100 rounded-xl shadow-lg p-6 border border-red-200 transform hover:scale-105 transition-transform duration-200 hover:shadow-2xl">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-red-700 text-sm font-semibold uppercase tracking-wide">No Attendance</p>
                                    <p class="text-4xl font-bold text-red-700 mt-3">{{ officersWithoutAttendance.length }}</p>
                                    <p class="text-xs text-red-600 mt-2 font-medium">Officers absent</p>
                                </div>
                                <div class="bg-linear-to-br from-red-500 to-pink-600 rounded-2xl p-4 shadow-lg">
                                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Logout Confirmation Modal -->
        <div v-if="showLogoutConfirm" 
            class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm animate-fade-in"
        >
            <!-- Backdrop overlay with slight transparency -->
            <div 
                @click="showLogoutConfirm = false"
                class="absolute inset-0 bg-gray-900 bg-opacity-50"
            ></div>
            
            <!-- Modal dialog -->
            <div 
                @click.stop
                class="relative bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full mx-4 border-2 border-gray-100 transform transition-all animate-scale-in"
            >
                <div class="text-center">
                    <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-linear-to-br from-red-100 to-pink-100 mb-5 shadow-lg">
                        <svg class="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Confirm Logout</h3>
                    <p class="text-gray-600 mb-8 text-base">Are you sure you want to logout from your administrator account?</p>
                </div>
                
                <div class="flex gap-3">
                    <button 
                        @click="showLogoutConfirm = false"
                        class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105"
                    >
                        Cancel
                    </button>
                    <button 
                        @click="handleLogout"
                        class="flex-1 bg-linear-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabaseClient'

const router = useRouter()

// Data
const totalAttendance = ref(0)
const todayCheckIns = ref(0)
const totalOfficers = ref(0)
const allUsers = ref([])
const todayAttendanceUserIds = ref([])
const showLogoutConfirm = ref(false)

// Current date for display
const currentDate = computed(() => {
    const today = new Date()
    return today.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    })
})

// Officers without attendance
const officersWithoutAttendance = computed(() => {
    return allUsers.value.filter(user => 
        !todayAttendanceUserIds.value.includes(user.id)
    )
})

// Fetch data from Supabase
const fetchData = async () => {
    try {
        // Fetch all users
        const { data: users, error: usersError } = await supabase
            .from('users')
            .select('*')
            .order('rank_full_name', { ascending: true })

        if (usersError) throw usersError
        allUsers.value = users || []
        totalOfficers.value = users?.length || 0

        // Get today's date range
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        // Fetch today's attendance records
        const { data: attendance, error: attendanceError } = await supabase
            .from('submittedprof')
            .select(`
                *,
                users (
                    id,
                    rank_full_name
                )
            `)
            .gte('created_at', today.toISOString())
            .lt('created_at', tomorrow.toISOString())
            .order('created_at', { ascending: false })

        if (attendanceError) throw attendanceError

        todayCheckIns.value = attendance?.length || 0
        todayAttendanceUserIds.value = attendance?.map(a => a.user_id) || []

        // Fetch total attendance count (all time)
        const { count, error: countError } = await supabase
            .from('submittedprof')
            .select('*', { count: 'exact', head: true })

        if (countError) throw countError
        totalAttendance.value = count || 0

    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

// Check authentication on mount
onMounted(async () => {
    const { data: { user } } = await supabase.auth.getUser()

    console.log('Authenticated user:', user?.id)
    if (!user) {
        router.push('/')
        return
    }

    // Fetch dashboard data
    await fetchData()
})

const handleLogout = async () => {
    showLogoutConfirm.value = false
    
    try {
        // Sign out from Supabase
        const { error } = await supabase.auth.signOut()
        
        if (error) {
            console.error('Logout error:', error)
        }
        
        // Clear local storage
        localStorage.removeItem('currentAdmin')
        
        // Redirect to login page
        router.push('/')
    } catch (err) {
        console.error('Logout error:', err)
        // Still redirect even if error
        router.push('/')
    }
}
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
