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
                
                <router-link to="/records" class="block p-4 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer group">
                    <div class="flex items-center gap-3">
                        <div class="rounded-lg p-2 group-hover:bg-white/10 transition" style="background: rgba(255, 255, 255, 0.05);">
                            <svg class="w-5 h-5" style="color: #f3f1ee;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                        </div>
                        <span class="text-sm font-semibold uppercase tracking-wider" style="color: #f3f1ee;">Records</span>
                    </div>
                </router-link>
                
                <div class="rounded-lg p-4 border-l-4 shadow-lg" style="background: #004595; border-left-color: #ffffff;">
                    <div class="flex items-center gap-3">
                        <div class="rounded-lg p-2" style="background: rgba(255, 255, 255, 0.1);">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <span class="font-bold text-sm uppercase tracking-wider">Officers</span>
                    </div>
                </div>
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
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold mb-1" style="color: #002147;">Officers & Personnel</h1>
                            <p class="text-sm font-semibold" style="color: #00397a;">Manage and view all registered officers</p>
                        </div>
                    </div>
                </div>

                <!-- Statistics Card -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div class="rounded-lg p-6 border-l-4 shadow-lg hover:shadow-xl transition-all duration-200" style="background: #ffffff; border-left-color: #004595;">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-xs font-bold uppercase mb-3 tracking-wider" style="color: #6b7280;">Total Officers</p>
                                <p class="text-4xl font-bold mb-2" style="color: #004595;">{{ officers.length }}</p>
                                <p class="text-sm font-semibold" style="color: #9ca3af;">Registered</p>
                            </div>
                            <div class="rounded-xl p-3" style="background: #004595;">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-lg p-6 border-l-4 shadow-lg hover:shadow-xl transition-all duration-200" style="background: #ffffff; border-left-color: #10b981;">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-xs font-bold uppercase mb-3 tracking-wider" style="color: #6b7280;">Active Today</p>
                                <p class="text-4xl font-bold mb-2" style="color: #10b981;">{{ activeToday }}</p>
                                <p class="text-sm font-semibold" style="color: #9ca3af;">Checked in</p>
                            </div>
                            <div class="rounded-xl p-3" style="background: #10b981;">
                                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Search Bar -->
                <div class="bg-white rounded-lg p-6 mb-6 shadow-sm">
                    <div class="flex items-center gap-3">
                        <div class="rounded-lg p-2" style="background: #f3f1ee;">
                            <svg class="w-5 h-5" style="color: #004595;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input 
                            v-model="searchQuery"
                            type="text"
                            placeholder="Search officers by rank or name..."
                            class="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition text-sm font-medium" style="border-color: #e5e7eb; color: #002147;"
                        />
                    </div>
                </div>

                <!-- Officers Grid -->
                <div class="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div class="p-6 border-b" style="background: #f3f1ee; border-color: #e5e7eb;">
                        <div class="flex items-center gap-3">
                            <div class="rounded-lg p-2" style="background: #004595;">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h2 class="text-base font-bold" style="color: #002147;">All Officers</h2>
                                <p class="text-sm font-semibold" style="color: #00397a;">{{ filteredOfficers.length }} officers found</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-6">
                        <div v-if="filteredOfficers.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div 
                                v-for="officer in filteredOfficers" 
                                :key="officer.id"
                                class="border-2 rounded-lg p-5 hover:shadow-md transition-all duration-200" style="background: #ffffff; border-color: #e5e7eb;"
                            >
                                <div class="flex items-start gap-3">
                                    <div class="rounded-lg p-3" style="background: #f3f1ee;">
                                        <svg class="w-7 h-7" style="color: #002147;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="font-bold text-sm mb-2 truncate" style="color: #002147;">{{ officer.rank_full_name }}</p>
                                        <span 
                                            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase"
                                            :style="officer.hasAttendanceToday ? 'background: #dcfce7; color: #15803d;' : 'background: #fee2e2; color: #991b1b;'"
                                        >
                                            <span class="w-1.5 h-1.5 rounded-full" :style="officer.hasAttendanceToday ? 'background: #15803d;' : 'background: #991b1b;'"></span>
                                            {{ officer.hasAttendanceToday ? 'Present' : 'Absent' }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div v-else class="text-center py-12">
                            <div class="rounded p-3 mx-auto w-12 h-12 flex items-center justify-center mb-3" style="background: #f3f1ee;">
                                <svg class="w-6 h-6" style="color: #9ca3af;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                            </div>
                            <p class="font-bold text-sm mb-1" style="color: #002147;">No officers found</p>
                            <p class="text-xs" style="color: #6b7280;">Try adjusting your search</p>
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
