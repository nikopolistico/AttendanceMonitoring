<template>
    <div class="min-h-screen bg-linear-to-br from-indigo-900 via-blue-800 to-purple-900 py-12 px-4">
        <div class="max-w-3xl mx-auto">
            <!-- Header -->
            <div class="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 mb-8 text-white relative overflow-hidden">
                <!-- Decorative elements -->
                <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
                
                <div class="flex items-center justify-between relative z-10">
                    <div class="flex items-center gap-4">
                        <div class="bg-linear-to-br from-yellow-400 to-amber-500 rounded-2xl p-4 shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                            <svg class="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 class="text-3xl font-extrabold tracking-tight">ATTENDANCE CHECK-IN</h1>
                            <p class="text-blue-100 font-medium mt-1">Officer/Personnel Portal</p>
                        </div>
                    </div>
                    <button 
                        @click="returnToLogin"
                        class="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                    >
                        <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Login
                    </button>
                </div>
            </div>

            <!-- Form -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 space-y-6 border-2 border-blue-200">
                <div class="flex items-center gap-3 bg-linear-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border-l-4 border-blue-600">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p class="text-sm text-gray-700 font-semibold">Please fill out the form to record your attendance</p>
                </div>

                <!-- Error Message -->
                <div v-if="fetchError" class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
                    <p class="text-red-700 text-sm font-semibold">{{ fetchError }}</p>
                </div>

                <!-- Searchable User Selection -->
                <div>
                    <label class=" text-blue-900 text-base font-extrabold mb-3 uppercase tracking-wide flex items-center gap-2">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        Select Your Name <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                        <input 
                            v-model="searchQuery" 
                            @focus="showDropdown = true"
                            @blur="hideDropdown"
                            :disabled="isLoadingUsers"
                            type="text" 
                            placeholder="🔍 Type to search or click to view all officers..."
                            class="w-full px-5 py-3.5 text-base border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition bg-white disabled:bg-gray-100 shadow-sm font-medium"
                            autocomplete="off"
                        />
                        
                        <!-- Dropdown List -->
                        <div 
                            v-if="showDropdown && !isLoadingUsers" 
                            class="absolute z-10 w-full mt-2 bg-white border-2 border-blue-300 rounded-xl shadow-2xl max-h-64 overflow-y-auto"
                        >
                            <div v-if="filteredUsers.length === 0" class="px-4 py-3 text-gray-500 text-sm">
                                No users found
                            </div>
                            <div 
                                v-for="user in filteredUsers" 
                                :key="user.id"
                                @mousedown.prevent="selectUser(user)"
                                class="px-5 py-3 hover:bg-linear-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer text-base border-b border-gray-100 last:border-b-0 transition-all duration-150 font-medium text-gray-700 hover:text-blue-900"
                                :class="{ 'bg-linear-to-r from-blue-100 to-indigo-100 text-blue-900 font-bold': selectedUserId === user.id }"
                            >
                                {{ user.rank_full_name }}
                            </div>
                        </div>
                        
                        <!-- Loading indicator -->
                        <div v-if="isLoadingUsers" class="absolute right-3 top-3">
                            <svg class="animate-spin h-5 w-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Selected User Display -->
                    <div v-if="selectedUserName" class="mt-3 px-5 py-4 bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl text-base shadow-sm">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span class="text-gray-600 font-semibold">Selected:</span> 
                                <span class="font-bold text-green-900">{{ selectedUserName }}</span>
                            </div>
                            <button 
                                @click="clearSelection"
                                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-1"
                            >
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                Clear
                            </button>
                        </div>
                    </div>
                    
                    <p v-if="!isLoadingUsers && allUsers.length > 0" class="text-xs text-gray-500 mt-1">
                        {{ filteredUsers.length }} of {{ allUsers.length }} users
                    </p>
                </div>

                <!-- Screenshot Upload Field -->
                <div>
                    <label class=" text-blue-900 text-base font-extrabold mb-3 uppercase tracking-wide flex items-center gap-2">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Screenshots <span class="text-red-500">*</span>
                    </label>
                    <div class="border-3 border-dashed border-blue-300 rounded-2xl p-8 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 bg-linear-to-br from-gray-50 to-blue-50">
                        <input 
                            ref="fileInput"
                            type="file" 
                            accept="image/*"
                            multiple
                            @change="handleFileUpload"
                            class="hidden"
                        />
                        
                        <div v-if="previewImages.length === 0" @click="$refs.fileInput.click()" class="cursor-pointer text-center group">
                            <div class="bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <p class="mt-3 text-base font-bold text-gray-700">Click to upload screenshots</p>
                            <p class="text-sm text-gray-500 mt-2">PNG, JPG, GIF up to 25MB each</p>
                            <p class="text-sm text-blue-700 font-bold mt-1">📎 Multiple files supported</p>
                        </div>

                        <div v-else class="space-y-4">
                            <!-- Horizontal scrollable image gallery -->
                            <div class="flex gap-4 overflow-x-auto pb-3">
                                <div v-for="(preview, index) in previewImages" :key="index" class="relative shrink-0 bg-white rounded-2xl border-3 border-blue-200 hover:border-blue-500 transition-all duration-200 shadow-lg hover:shadow-2xl group">
                                    <div class="relative">
                                        <img 
                                            @click="zoomImage(preview.url)" 
                                            :src="preview.url" 
                                            alt="Preview" 
                                            class="w-40 h-40 object-cover rounded-2xl cursor-zoom-in group-hover:scale-105 transition-transform duration-200" 
                                        />
                                        <button 
                                            @click.stop="removeImage(index)"
                                            class="absolute -top-2 -right-2 bg-linear-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-full p-2 shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 transform hover:scale-110"
                                        >
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                        <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/80 to-transparent text-white text-xs p-2 rounded-b-2xl">
                                            <p class="truncate px-1 font-semibold">{{ preview.name }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button 
                                @click="$refs.fileInput.click()"
                                class="w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                                Add More Screenshots
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 border-2 border-blue-200">
                <button 
                    @click="submitForm"
                    :disabled="!isFormValid || isSubmitting"
                    class="w-full bg-linear-to-r from-green-500 via-emerald-600 to-teal-600 hover:from-green-600 hover:via-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-extrabold py-5 rounded-2xl transition-all duration-200 shadow-2xl hover:shadow-3xl uppercase tracking-wider text-lg transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-3"
                    :class="{ 'cursor-not-allowed opacity-60': !isFormValid || isSubmitting }"
                >
                    <svg v-if="!isSubmitting" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <svg v-else class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span v-if="isSubmitting">Uploading...</span>
                    <span v-else>Submit Attendance</span>
                </button>
                <p class="text-center text-sm text-gray-500 mt-4 font-semibold">
                    <span class="text-red-500">*</span> Required fields must be filled
                </p>
            </div>

            <!-- Success Message -->
            <div v-if="showSuccess" class="fixed top-6 left-6 bg-linear-to-r from-green-500 to-emerald-600 border-2 border-green-400 px-5 py-3 rounded-xl shadow-2xl z-50 animate-slide-in">
                <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <p class="text-white font-bold text-sm">Attendance submitted successfully! ✓</p>
                </div>
            </div>

            <!-- Zoom Modal -->
            <div v-if="showZoomModal" 
                @click="closeZoom" 
                class="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            >
                <button 
                    @click="closeZoom"
                    class="absolute top-6 right-6 bg-linear-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-2xl p-3 shadow-2xl transition-all duration-200 z-10 transform hover:scale-110 hover:rotate-90"
                >
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <img 
                    :src="zoomedImage" 
                    alt="Zoomed" 
                    class="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" 
                    @click.stop
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabaseClient'

const router = useRouter()
const allUsers = ref([])
const selectedUserId = ref(null)
const selectedUserName = ref('')
const isLoadingUsers = ref(false)
const fetchError = ref('')
const searchQuery = ref('')
const showDropdown = ref(false)

const formData = ref({
    screenshots: []
})

const previewImages = ref([])
const fileInput = ref(null)
const showSuccess = ref(false)
const showZoomModal = ref(false)
const zoomedImage = ref(null)
const isSubmitting = ref(false)
const MAX_FILE_SIZE = 25 * 1024 * 1024 // 25MB in bytes

const isFormValid = computed(() => {
    return selectedUserId.value !== null &&
           selectedUserId.value !== '' &&
           formData.value.screenshots.length > 0
})

// Filter users based on search query
const filteredUsers = computed(() => {
    if (!searchQuery.value || searchQuery.value.trim() === '') {
        return allUsers.value
    }
    
    const query = searchQuery.value.toLowerCase()
    return allUsers.value.filter(user => 
        user.rank_full_name.toLowerCase().includes(query)
    )
})

const selectUser = (user) => {
    selectedUserId.value = user.id
    selectedUserName.value = user.rank_full_name
    searchQuery.value = ''
    showDropdown.value = false
}

const clearSelection = () => {
    selectedUserId.value = null
    selectedUserName.value = ''
    searchQuery.value = ''
}

const hideDropdown = () => {
    setTimeout(() => {
        showDropdown.value = false
    }, 200)
}

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    
    files.forEach(file => {
        // Check file size
        if (file.size > MAX_FILE_SIZE) {
            alert(`File ${file.name} is too large. Maximum size is 25MB.`)
            return
        }
        
        // Check if file is an image
        if (!file.type.startsWith('image/')) {
            alert(`File ${file.name} is not an image.`)
            return
        }
        
        formData.value.screenshots.push(file)
        
        const reader = new FileReader()
        reader.onload = (e) => {
            previewImages.value.push({
                url: e.target.result,
                name: file.name,
                size: file.size
            })
        }
        reader.readAsDataURL(file)
    })
    
    // Reset file input
    if (fileInput.value) {
        fileInput.value.value = ''
    }
}

const removeImage = (index) => {
    formData.value.screenshots.splice(index, 1)
    previewImages.value.splice(index, 1)
}

const zoomImage = (imageUrl) => {
    zoomedImage.value = imageUrl
    showZoomModal.value = true
}

const closeZoom = () => {
    showZoomModal.value = false
    zoomedImage.value = null
}

const submitForm = async () => {
    if (!isFormValid.value || isSubmitting.value) return
    
    isSubmitting.value = true
    
    try {
        fetchError.value = ''
        console.log('Uploading screenshots to Supabase Storage...')
        
        const uploadedUrls = []
        
        // Upload each screenshot to Supabase Storage
        for (const file of formData.value.screenshots) {
            // Create unique filename with timestamp
            const fileExt = file.name.split('.').pop()
            const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`
            
            // Upload to Screenshots bucket
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('Screenshots')
                .upload(fileName, file, {
                    cacheControl: '3600',
                    upsert: false
                })
            
            if (uploadError) {
                console.error('Upload error:', uploadError)
                throw new Error(`Failed to upload ${file.name}: ${uploadError.message}`)
            }
            
            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('Screenshots')
                .getPublicUrl(fileName)
            
            uploadedUrls.push(publicUrl)
            console.log('Uploaded:', fileName, '→', publicUrl)
        }
        
        // Join URLs with comma
        const screenshotLinks = uploadedUrls.join(',')
        
        console.log('Inserting into submittedprof table...')
        
        // Insert into submittedprof table
        const { data, error } = await supabase
            .from('submittedprof')
            .insert({
                user_id: selectedUserId.value,
                screenshots: screenshotLinks,
                status: true,
                created_at: new Date().toISOString()
            })
            .select()   
        
        if (error) {
            console.error('Database insert error:', error)
            throw new Error(`Failed to save record: ${error.message}`)
        }
        
        console.log('Form submitted successfully:', data)
        showSuccess.value = true
        
        // Reset form after 5 seconds
        setTimeout(() => {
            selectedUserId.value = null
            selectedUserName.value = ''
            searchQuery.value = ''
            formData.value = {
                screenshots: []
            }
            previewImages.value = []
            showSuccess.value = false
        }, 5000)
        
    } catch (err) {
        console.error('Submit error:', err)
        fetchError.value = err.message || 'Failed to submit form'
        
        // Scroll to error message
        window.scrollTo({ top: 0, behavior: 'smooth' })
    } finally {
        isSubmitting.value = false
    }
}

const returnToLogin = () => {
    router.push('/')
}

// Fetch users from users table
onMounted(async () => {
    isLoadingUsers.value = true
    fetchError.value = ''
    
    try {
        console.log('Fetching users from Supabase...')
        
        // Fetch all users for the dropdown
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .order('rank_full_name', { ascending: true })
        
        if (error) {
            console.error('Error fetching users:', error)
            fetchError.value = `Failed to load users: ${error.message}`
            return
        }

        if (data) {
            allUsers.value = data
            console.log('Users loaded successfully:', data.length, 'users')
            if (data.length > 0) {
                console.log('users:', data[0])
            }
        } else {
            console.warn('No data returned from users table')
            allUsers.value = []
        }
    } catch (err) {
        console.error('Exception while fetching users:', err)
        fetchError.value = `Error: ${err.message}`
    } finally {
        isLoadingUsers.value = false
    }
})
</script>

<style scoped>
/* Horizontal scroll styling */
.overflow-x-auto {
    scrollbar-width: thin;
    scrollbar-color: #3b82f6 #e0e7ff;
}

.overflow-x-auto::-webkit-scrollbar {
    height: 10px;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background: linear-gradient(to right, #e0e7ff, #ddd6fe);
    border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, #3b82f6, #6366f1);
    border-radius: 10px;
    border: 2px solid transparent;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to right, #2563eb, #4f46e5);
}

/* Smooth transitions */
.group:hover .group-hover\:opacity-100 {
    opacity: 1;
}

/* Custom animations */
@keyframes slide-in {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.animate-slide-in {
    animation: slide-in 0.3s ease-out;
}
</style>
