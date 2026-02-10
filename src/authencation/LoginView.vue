<template>
    <div class="min-h-screen flex items-center justify-center" style="background: #f3f1ee;">
        <!-- PNP badge background decoration -->
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-10 left-10 text-6xl" style="color: #002147;">★</div>
            <div class="absolute bottom-10 right-10 text-6xl" style="color: #002147;">★</div>
            <div class="absolute top-1/3 right-1/4 text-5xl" style="color: #004595;">★</div>
            <div class="absolute bottom-1/3 left-1/4 text-5xl" style="color: #004595;">★</div>
        </div>
        
        <div class="bg-white rounded p-8 w-full max-w-md relative z-10 shadow-xl" style="border-top: 4px solid #002147;">
            <!-- Header with PNP logo -->
            <div class="text-center mb-8">
                <div class="flex justify-center mb-5">
                    <div class="rounded-full p-4" style="background: #f3f1ee;">
                        <img src="../assets/pnplogo.png" alt="PNP Logo" class="w-20 h-20 object-contain" />
                    </div>
                </div>
                <h1 class="text-xl font-bold uppercase mb-2 tracking-wide" style="color: #002147;">Philippine National Police</h1>
                <p class="text-sm uppercase font-semibold tracking-widest" style="color: #00397a;">Attendance System</p>
            </div>
            
            <!-- Dropdown for selecting login type -->
            <div class="mb-6">
                <label class="block text-sm font-bold mb-3 uppercase tracking-wide" style="color: #002147;">Login As:</label>
                <div class="relative">
                    <select 
                        v-model="loginType" 
                        class="w-full px-4 py-3 text-sm border-2 rounded-lg focus:outline-none focus:ring-2 transition font-semibold appearance-none cursor-pointer shadow-sm" style="border-color: #e5e7eb; color: #002147; background: #ffffff;"
                    >
                        <option value="administrator">🔐 Administrator</option>
                        <option value="user">👤 Officer / Personnel</option>
                    </select>
                    <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg class="w-5 h-5" style="color: #00397a;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Administrator Login Form -->
            <div v-if="loginType === 'administrator'" class="space-y-5">
                <!-- Error Message -->
                <div v-if="errorMessage" class="border-l-4 p-4 rounded" style="background: #fee2e2; border-color: #dc2626;">
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5" style="color: #dc2626;" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                        </svg>
                        <p class="text-sm font-bold" style="color: #dc2626;">{{ errorMessage }}</p>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-bold mb-3 uppercase tracking-wide" style="color: #002147;">Email:</label>
                    <input 
                        v-model="email" 
                        type="email" 
                        placeholder="Enter your email"
                        class="w-full px-4 py-3 text-sm border-2 rounded focus:outline-none focus:ring-2 transition font-medium" style="border-color: #e5e7eb; color: #002147; background: #ffffff;"
                        @keyup.enter="handleAdminLogin"
                    />
                </div>
                <div>
                    <label class="block text-sm font-bold mb-3 uppercase tracking-wide" style="color: #002147;">Password:</label>
                    <div class="relative">
                        <input 
                            v-model="password" 
                            :type="showPassword ? 'text' : 'password'"
                            placeholder="Enter your password"
                            class="w-full px-4 py-3 pr-12 text-sm border-2 rounded focus:outline-none focus:ring-2 transition font-medium" style="border-color: #e5e7eb; color: #002147; background: #ffffff;"
                            @keyup.enter="handleAdminLogin"
                        />
                        <button
                            type="button"
                            @click="showPassword = !showPassword"
                            class="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none transition" style="color: #6b7280;"
                        >
                            <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <button 
                    @click="handleAdminLogin"
                    :disabled="isLoading"
                    class="w-full text-white font-bold py-4 text-sm rounded-lg transition duration-200 uppercase tracking-widest disabled:opacity-50 hover:opacity-90 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl" style="background: #002147;">
                    <svg v-if="!isLoading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                    </svg>
                    <svg v-else class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span v-if="isLoading">Logging in...</span>
                    <span v-else>Login</span>
                </button>
            </div>

            <!-- User Login (Proceed only) -->
            <div v-else class="space-y-5">
                <!-- Error Message -->
                <div v-if="errorMessage" class="border-l-4 p-4 rounded" style="background: #fee2e2; border-color: #dc2626;">
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5" style="color: #dc2626;" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                        </svg>
                        <p class="text-sm font-bold" style="color: #dc2626;">{{ errorMessage }}</p>
                    </div>
                </div>

                <div class="border-l-4 p-5 rounded-lg shadow-sm" style="background: #f3f1ee; border-color: #004595;">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="rounded-lg p-2" style="background: #004595;">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </div>
                        <p class="text-base font-bold" style="color: #002147;">Officer/Personnel Access</p>
                    </div>
                    <p class="text-sm font-semibold" style="color: #00397a;">Click proceed to record your attendance</p>
                </div>
                <button 
                    @click="handleUserProceed"
                    class="w-full text-white font-bold py-4 text-sm rounded-lg transition duration-200 uppercase tracking-widest hover:opacity-90 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl" style="background: #004595;"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Proceed
                </button>
            </div>
            
            <!-- Footer -->
            <div class="mt-6 pt-4 border-t" style="border-color: #e5e7eb;">
                <p class="text-center text-xs font-semibold" style="color: #6b7280;">Authorized Personnel Only</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabaseClient'

const router = useRouter()
const loginType = ref('administrator')

// Login fields
const email = ref('')
const password = ref('')
const showPassword = ref(false)

// Messages
const errorMessage = ref('')
const isLoading = ref(false)

// Clear error message when switching login types
watch(loginType, () => {
    errorMessage.value = ''
})

const handleAdminLogin = async () => {
    errorMessage.value = ''
    isLoading.value = true

    // Validation
    if (!email.value || !password.value) {
        errorMessage.value = 'Please enter email and password'
        isLoading.value = false
        return
    }

    try {
        // Sign in with Supabase Auth
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        })

        if (error) {
            errorMessage.value = error.message || 'Invalid email or password'
            isLoading.value = false
            return
        }

        if (data.user) {
            // Login successful
            console.log('Admin login successful:', { email: data.user.email })
            
            // Store user info locally for reference
            localStorage.setItem('currentAdmin', JSON.stringify({ 
                email: data.user.email,
                id: data.user.id 
            }))
            
            router.push('/admin-dashboard')
        }
    } catch (err) {
        console.error('Login error:', err)
        errorMessage.value = 'An error occurred during login'
    } finally {
        isLoading.value = false
    }
}

const handleUserProceed = () => {
    console.log('User proceeding to personnel dashboard...')
    // Just navigate to user dashboard without affecting admin session
    router.push('/user-dashboard')
}

onMounted(() => {
    // Don't clear sessions - allow independent access to both dashboards
})
</script>

<style scoped>
/* Additional custom styles if needed */
</style>