<template>
    <div class="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-800 via-blue-900 to-slate-900">
        <!-- Police badge background decoration -->
        <div class="absolute inset-0 opacity-5">
            <div class="absolute top-10 left-10 text-white text-6xl">★</div>
            <div class="absolute bottom-10 right-10 text-white text-6xl">★</div>
        </div>
        
        <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm relative z-10 border-t-4 border-blue-900">
            <!-- Header with police badge icon -->
            <div class="text-center mb-4">
                <div class="inline-block bg-blue-900 rounded-full p-2 mb-2">
                    <svg class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>
                <h1 class="text-xl font-bold text-blue-900 mb-1">POLICE DEPARTMENT</h1>
                <p class="text-xs text-gray-600 font-semibold tracking-wide">ATTENDANCE MONITORING</p>
            </div>
            
            <!-- Dropdown for selecting login type -->
            <div class="mb-4">
                <label class="block text-blue-900 text-xs font-bold mb-1 uppercase tracking-wide">Login As:</label>
                <select 
                    v-model="loginType" 
                    class="w-full px-3 py-2 text-sm border-2 border-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition bg-gray-50 font-semibold text-gray-700"
                >
                    <option value="administrator">Administrator</option>
                    <option value="user">Officer / Personnel</option>
                </select>
            </div>

            <!-- Administrator Login Form -->
            <div v-if="loginType === 'administrator'" class="space-y-3">
                <!-- Error Message -->
                <div v-if="errorMessage" class="bg-red-100 border-l-4 border-red-500 p-2 rounded">
                    <p class="text-red-700 text-xs font-semibold">{{ errorMessage }}</p>
                </div>

                <div class="mb-3">
                    <label class="block text-blue-900 text-xs font-bold mb-1 uppercase tracking-wide">Email:</label>
                    <input 
                        v-model="email" 
                        type="email" 
                        placeholder="Enter your email"
                        class="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-900 transition bg-gray-50"
                        @keyup.enter="handleAdminLogin"
                    />
                </div>
                <div class="mb-3">
                    <label class="block text-blue-900 text-xs font-bold mb-1 uppercase tracking-wide">Password:</label>
                    <div class="relative">
                        <input 
                            v-model="password" 
                            :type="showPassword ? 'text' : 'password'"
                            placeholder="Enter your password"
                            class="w-full px-3 py-2 pr-10 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-900 transition bg-gray-50"
                            @keyup.enter="handleAdminLogin"
                        />
                        <button
                            type="button"
                            @click="showPassword = !showPassword"
                            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-900 focus:outline-none"
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
                    class="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-2 text-sm rounded-md transition duration-200 shadow-lg hover:shadow-xl uppercase tracking-wide"
                >
                    <span v-if="isLoading">Logging in...</span>
                    <span v-else>Secure Login</span>
                </button>
            </div>

            <!-- User Login (Proceed only) -->
            <div v-else class="space-y-3">
                <!-- Error Message -->
                <div v-if="errorMessage" class="bg-red-100 border-l-4 border-red-500 p-2 rounded">
                    <p class="text-red-700 text-xs font-semibold">{{ errorMessage }}</p>
                </div>

                <div class="bg-blue-50 border-l-4 border-blue-900 p-3 mb-2">
                    <p class="text-blue-900 text-center text-sm font-semibold">Officer/Personnel Access</p>
                    <p class="text-gray-600 text-center text-xs mt-1">Click proceed to continue</p>
                </div>
                <button 
                    @click="handleUserProceed"
                    class="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 text-sm rounded-md transition duration-200 shadow-lg hover:shadow-xl uppercase tracking-wide"
                >
                    Proceed
                </button>
            </div>
            
            <!-- Footer -->
            <div class="mt-4 pt-3 border-t border-gray-200">
                <p class="text-center text-xs text-gray-500">Authorized Personnel Only</p>
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