<template>
    <div class="min-h-screen py-6 md:py-12 px-3 md:px-4" style="background: #f5f5f5;">
        <div class="max-w-5xl mx-auto">
            <!-- Header -->
            <div class="rounded-xl p-6 md:p-8 mb-6 md:mb-8 text-white shadow-lg" style="background: #002147; border-bottom: 4px solid #fbbf24;">
                <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
                        <!-- Three logos -->
                        <div class="flex items-center gap-3">
                            <img src="../assets/BCPO1.png" alt="Police Station 1" class="w-12 h-12 md:w-14 md:h-14 object-contain" />
                            <img src="../assets/pnplogo.png" alt="PNP Logo" class="w-12 h-12 md:w-14 md:h-14 object-contain" />
                            <img src="../assets/butuanlogo.png" alt="Butuan City" class="w-12 h-12 md:w-14 md:h-14 object-contain" />
                        </div>
                        <div class="text-center md:text-left md:ml-2">
                            <h1 class="text-xl md:text-2xl font-bold uppercase">Attendance Check-In</h1>
                            <p class="text-xs md:text-sm font-semibold" style="color: #fbbf24;">PNP Police Station 1</p>
                        </div>
                    </div>
                    <button 
                        @click="returnToLogin"
                        class="text-white font-bold px-5 md:px-6 py-2.5 md:py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition w-full md:w-auto justify-center" style="background: #dc2626;"
                    >
                        <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        <span class="text-sm md:text-base">Back to Login</span>
                    </button>
                </div>
            </div>

            <!-- Current Date and Time -->
            <div class="bg-white rounded-xl p-6 mb-6 shadow-md">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="rounded-lg p-3" style="background: #002147;">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-gray-500">Date</p>
                            <p class="text-lg font-bold" style="color: #002147;">{{ currentDate }}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="rounded-lg p-3" style="background: #003d7a;">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-gray-500">Time</p>
                            <p class="text-lg font-bold" style="color: #002147;">{{ currentTime }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form -->
            <div class="bg-white rounded-xl p-5 md:p-6 space-y-5 md:space-y-6 mb-6 shadow-md">
                <div class="flex items-center gap-3 p-3 md:p-4 rounded-lg" style="background: #eff6ff; border-left: 4px solid #002147;">
                    <svg class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style="color: #002147;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p class="text-xs md:text-sm font-bold" style="color: #002147;">Please fill out the form below</p>
                </div>

                <!-- Error Message -->
                <div v-if="fetchError" class="border-l-4 p-3 md:p-4 rounded text-xs md:text-sm font-bold" style="background: #fee2e2; border-color: #dc2626; color: #dc2626;">
                    <p>{{ fetchError }}</p>
                </div>

                <!-- Searchable User Selection -->
                <div>
                    <label class="text-xs md:text-sm font-bold mb-2 flex items-center gap-2" style="color: #002147;">
                        <svg class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        1. Select Your Name <span class="text-red-600">*</span>
                    </label>
                    <div class="relative">
                        <input 
                            v-model="searchQuery" 
                            @focus="showDropdown = true"
                            @blur="hideDropdown"
                            :disabled="isLoadingUsers"
                            type="text" 
                            placeholder="Type to search or click to view all..."
                            class="w-full px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium" style="border-color: #d1d5db; color: #002147;"
                            autocomplete="off"
                        />
                        
                        <!-- Dropdown List -->
                        <div 
                            v-if="showDropdown && !isLoadingUsers" 
                            class="absolute z-10 w-full mt-2 bg-white border-2 rounded-lg max-h-64 overflow-y-auto shadow-lg" style="border-color: #d1d5db;"
                        >
                            <div v-if="filteredUsers.length === 0" class="px-3 md:px-4 py-2.5 md:py-3 text-gray-500 text-xs md:text-sm">
                                No users found
                            </div>
                            <div 
                                v-for="user in filteredUsers" 
                                :key="user.id"
                                @mousedown.prevent="selectUser(user)"
                                class="px-3 md:px-4 py-2.5 md:py-3 hover:bg-blue-50 cursor-pointer text-xs md:text-sm border-b last:border-b-0 transition font-medium text-gray-700"
                                :class="{ 'font-bold bg-blue-100': selectedUserId === user.id }" :style="selectedUserId === user.id ? 'color: #002147;' : ''"
                            >
                                {{ user.rank_full_name }}
                            </div>
                        </div>
                        
                        <!-- Loading indicator -->
                        <div v-if="isLoadingUsers" class="absolute right-3 top-2.5 md:top-3">
                            <svg class="animate-spin h-4 w-4 md:h-5 md:w-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Selected User Display -->
                    <div class="mt-3 px-3 md:px-4 py-2.5 md:py-3 rounded-lg text-xs md:text-sm" style="background: #d1fae5; border: 2px solid #10b981;">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <svg class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style="color: #10b981;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span class="font-bold" style="color: #065f46;">{{ selectedUserName }}</span>
                            </div>
                            <button 
                                @click="clearSelection"
                                class="text-white px-3 py-1.5 rounded text-xs font-bold hover:opacity-90 transition" style="background: #dc2626;"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                    
                    <p v-if="!isLoadingUsers && allUsers.length > 0" class="text-xs text-gray-500 mt-1.5">
                        {{ filteredUsers.length }} of {{ allUsers.length }} users
                    </p>
                </div>

                <!-- Screenshot Upload Field -->
                <div>
                    <label class="text-xs md:text-sm font-bold mb-2 flex items-center gap-2" style="color: #002147;">
                        <svg class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        2. Upload Screenshots <span class="text-red-600">*</span>
                    </label>
                    <div class="border-2 border-dashed rounded-lg p-5 md:p-6 hover:border-gray-400 transition" style="border-color: #d1d5db; background: #fafafa;">
                        <input 
                            ref="fileInput"
                            type="file" 
                            accept="image/*"
                            multiple
                            @change="handleFileUpload"
                            class="hidden"
                        />
                        
                        <div v-if="previewImages.length === 0" @click="$refs.fileInput.click()" class="cursor-pointer text-center">
                            <div class="rounded-lg p-3 md:p-4 mx-auto w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3" style="background: #002147;">
                                <svg class="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <p class="text-xs md:text-sm font-bold text-gray-700">Click to upload</p>
                            <p class="text-xs text-gray-500 mt-2">PNG, JPG (Max 25MB each)</p>
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
                                            class="w-24 h-24 md:w-32 md:h-32 object-cover rounded cursor-zoom-in" 
                                        />
                                        <button 
                                            @click.stop="removeImage(index)"
                                            class="absolute -top-2 -right-2 text-white rounded-full p-1 md:p-1.5 transition hover:opacity-90" style="background: #dc2626;"
                                        >
                                            <svg class="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\n                                            </svg>\n                                        </button>\n                                        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-xs p-1.5 md:p-2 rounded-b">\n                                            <p class="truncate px-1 font-semibold text-xs">{{ preview.name }}</p>\n                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button 
                                @click="$refs.fileInput.click()"
                                class="w-full text-white font-bold py-2.5 md:py-3 rounded text-xs md:text-sm transition hover:opacity-90 flex items-center justify-center gap-2" style="background: #004595;"
                            >
                                <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                                Add More Screenshots
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="bg-white rounded-xl p-5 md:p-6 shadow-md">
                <button 
                    @click="submitForm"
                    :disabled="!isFormValid || isSubmitting"
                    class="w-full py-3 md:py-4 text-white font-bold text-sm md:text-base rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition hover:opacity-90" style="background: #002147;"
                    :class="{ 'cursor-not-allowed opacity-60': !isFormValid || isSubmitting }"
                >
                    <svg v-if="!isSubmitting" class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <svg v-else class="animate-spin w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span v-if="isSubmitting">Uploading...</span>
                    <span v-else>Submit Attendance</span>
                </button>
                <div class="mt-3 md:mt-4 p-3 rounded-lg text-center" style="background: #fef3c7;">
                    <p class="text-xs md:text-sm font-bold" style="color: #92400e;">
                        <span style="color: #dc2626;">*</span> Required fields must be filled out before submitting
                    </p>
                </div>
            </div>

            <!-- Success Message -->
            <div v-if="showSuccess" class="fixed top-4 left-4 right-4 md:top-8 md:left-8 md:right-auto px-5 md:px-6 py-3 md:py-4 rounded-lg z-50 shadow-xl" style="background: #10b981; border: 2px solid #059669;">
                <div class="flex items-center gap-2 md:gap-3">
                    <svg class="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <div>
                        <p class="text-white font-bold text-sm md:text-base">Success!</p>
                        <p class="text-white text-xs md:text-sm">Attendance submitted successfully</p>
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
                    class="absolute top-4 right-4 md:top-6 md:right-6 text-white rounded p-2 md:p-3 transition hover:opacity-90 z-10" style="background: #dc2626;"
                >
                    <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
const currentDate = ref('')
const currentTime = ref('')

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

// Update time every second
const updateDateTime = () => {
    const now = new Date()
    
    // Format date: February 10, 2026
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    currentDate.value = now.toLocaleDateString('en-US', options)
    
    // Format time: 2:30:45 PM
    currentTime.value = now.toLocaleTimeString('en-US')
}

// Fetch users from users table
onMounted(async () => {
    isLoadingUsers.value = true
    fetchError.value = ''
    
    // Initialize date and time
    updateDateTime()
    // Update time every second
    setInterval(updateDateTime, 1000)
    
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
    scrollbar-color: #002147 #e5e7eb;
}

.overflow-x-auto::-webkit-scrollbar {
    height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background: #e5e7eb;
    border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background: #002147;
    border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: #003d7a;
}
</style>
