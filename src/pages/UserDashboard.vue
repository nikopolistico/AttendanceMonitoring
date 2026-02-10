<template>
    <div class="min-h-screen py-12 px-4" style="background: #f3f1ee;">
        <div class="max-w-3xl mx-auto">
            <!-- Header -->
            <div class="rounded p-8 mb-8 text-white relative shadow-xl" style="background: #002147; border-bottom: 4px solid #004595;">
                <div class="flex items-center justify-between relative z-10">
                    <div class="flex items-center gap-5">
                        <div class="rounded-full p-3" style="background: #f3f1ee;">
                            <img src="../assets/pnplogo.png" alt="PNP Logo" class="w-16 h-16 object-contain" />
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold uppercase tracking-wide mb-1">Attendance Check-In</h1>
                            <p class="text-sm font-semibold tracking-wide" style="color: #f3f1ee;">Philippine National Police • Officer/Personnel Portal</p>
                        </div>
                    </div>
                    <button 
                        @click="returnToLogin"
                        class="text-white font-bold px-6 py-3.5 rounded flex items-center gap-2 hover:opacity-90 transition" style="background: #00397a;"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Login
                    </button>
                </div>
            </div>

            <!-- Form -->
            <div class="bg-white rounded p-6 space-y-6 mb-6 shadow-lg">
                <div class="flex items-center gap-3 p-5 rounded" style="background: #f3f1ee; border-left: 4px solid #004595;">
                    <div class="rounded p-2" style="background: #004595;">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <p class="text-sm font-bold" style="color: #002147;">Fill out this form to record your attendance for today</p>
                </div>

                <!-- Error Message -->
                <div v-if="fetchError" class="border-l-4 p-3 rounded text-sm font-bold" style="background: #fee2e2; border-color: #991b1b; color: #991b1b;">
                    <p>{{ fetchError }}</p>
                </div>

                <!-- Searchable User Selection -->
                <div>
                    <label class="text-sm font-bold uppercase mb-2 flex items-center gap-2" style="color: #002147;">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            placeholder="Type to search or click to view all officers..."
                            class="w-full px-4 py-2.5 text-sm border rounded focus:outline-none focus:ring-2 transition font-medium" style="border-color: #e5e7eb; color: #002147;"
                            autocomplete="off"
                        />
                        
                        <!-- Dropdown List -->
                        <div 
                            v-if="showDropdown && !isLoadingUsers" 
                            class="absolute z-10 w-full mt-2 bg-white border rounded max-h-64 overflow-y-auto" style="border-color: #e5e7eb;"
                        >
                            <div v-if="filteredUsers.length === 0" class="px-4 py-3 text-gray-500 text-sm">
                                No users found
                            </div>
                            <div 
                                v-for="user in filteredUsers" 
                                :key="user.id"
                                @mousedown.prevent="selectUser(user)"
                                class="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm border-b last:border-b-0 transition font-medium text-gray-700"
                                :class="{ 'font-bold': selectedUserId === user.id }" :style="selectedUserId === user.id ? 'background: #f3f1ee; color: #002147;' : ''"
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
                    <div v-if="selectedUserName" class="mt-3 px-4 py-3 rounded text-sm" style="background: #d1fae5; border: 1px solid #10b981;">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <svg class="w-5 h-5" style="color: #10b981;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span class="text-gray-600 font-semibold">Selected:</span> 
                                <span class="font-bold" style="color: #065f46;">{{ selectedUserName }}</span>
                            </div>
                            <button 
                                @click="clearSelection"
                                class="text-white px-3 py-1.5 rounded text-xs font-bold transition hover:opacity-90 flex items-center gap-1" style="background: #dc2626;"
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
                    <label class="text-sm font-bold uppercase mb-2 flex items-center gap-2" style="color: #002147;">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Screenshots <span class="text-red-500">*</span>
                    </label>
                    <div class="border-2 border-dashed rounded p-6 hover:border-gray-400 transition" style="border-color: #e5e7eb; background: #f9fafb;">
                        <input 
                            ref="fileInput"
                            type="file" 
                            accept="image/*"
                            multiple
                            @change="handleFileUpload"
                            class="hidden"
                        />
                        
                        <div v-if="previewImages.length === 0" @click="$refs.fileInput.click()" class="cursor-pointer text-center">
                            <div class="rounded p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3" style="background: #004595;">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <p class="text-sm font-bold text-gray-700">Click to upload screenshots</p>
                            <p class="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 25MB each</p>
                            <p class="text-xs font-bold mt-1" style="color: #004595;">Multiple files supported</p>
                        </div>

                        <div v-else class="space-y-4">
                            <!-- Horizontal scrollable image gallery -->
                            <div class="flex gap-3 overflow-x-auto pb-3">
                                <div v-for="(preview, index) in previewImages" :key="index" class="relative shrink-0 bg-white rounded border hover:border-gray-400 transition group" style="border-color: #e5e7eb;">
                                    <div class="relative">
                                        <img 
                                            @click="zoomImage(preview.url)" 
                                            :src="preview.url" 
                                            alt="Preview" 
                                            class="w-32 h-32 object-cover rounded cursor-zoom-in" 
                                        />
                                        <button 
                                            @click.stop="removeImage(index)"
                                            class="absolute -top-2 -right-2 text-white rounded-full p-1.5 transition hover:opacity-90" style="background: #dc2626;"
                                        >
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-xs p-2 rounded-b">
                                            <p class="truncate px-1 font-semibold">{{ preview.name }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button 
                                @click="$refs.fileInput.click()"
                                class="w-full text-white font-bold py-3 rounded text-sm transition hover:opacity-90 flex items-center justify-center gap-2" style="background: #004595;"
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
            <div class="bg-white rounded p-6 shadow-lg">
                <button 
                    @click="submitForm"
                    :disabled="!isFormValid || isSubmitting"
                    class="w-full py-4 text-white font-bold text-sm uppercase tracking-widest rounded disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition" style="background: #004595;"
                    :class="{ 'cursor-not-allowed opacity-60': !isFormValid || isSubmitting }"
                >
                    <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <svg v-else class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span v-if="isSubmitting">Uploading...</span>
                    <span v-else>Submit Attendance</span>
                </button>
                <div class="mt-5 p-4 rounded text-center" style="background: #f3f1ee;">
                    <p class="text-sm font-bold" style="color: #002147;">
                        <span style="color: #dc2626;">*</span> Required fields must be filled out before submitting
                    </p>
                </div>
            </div>

            <!-- Success Message -->
            <div v-if="showSuccess" class="fixed top-8 left-8 px-6 py-4 rounded z-50 animate-slide-in shadow-2xl" style="background: #10b981; border: 3px solid #059669;">
                <div class="flex items-center gap-3">
                    <div class="rounded-full p-2" style="background: rgba(255, 255, 255, 0.2);">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-white font-bold text-base">Success!</p>
                        <p class="text-white text-sm opacity-90">Attendance submitted successfully</p>
                    </div>
                </div>
            </div>

            <!-- Zoom Modal -->
            <div v-if="showZoomModal" 
                @click="closeZoom" 
                class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            >
                <button 
                    @click="closeZoom"
                    class="absolute top-6 right-6 text-white rounded p-3 transition hover:opacity-90 z-10" style="background: #dc2626;"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <img 
                    :src="zoomedImage" 
                    alt="Zoomed" 
                    class="max-w-full max-h-full object-contain rounded" 
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
    scrollbar-color: #004595 #f3f1ee;
}

.overflow-x-auto::-webkit-scrollbar {
    height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background: #f3f1ee;
    border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background: #004595;
    border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: #002147;
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
