<template>
  <div class="min-h-screen" style="background: #f3f1ee">
    <!-- Sidebar - Desktop Only -->
    <div
      class="hidden lg:flex fixed left-0 top-0 h-screen w-64 text-white flex-col shadow-2xl z-40"
      style="background: linear-gradient(180deg, #001a3a 0%, #002147 50%, #00295a 100%)"
    >
      <!-- Sidebar Header -->
      <div class="p-6 border-b border-white/10">
        <div class="flex flex-col items-center text-center gap-4">
          <div class="rounded-full p-4" style="background: #f3f1ee">
            <img src="../assets/pnplogo.png" alt="PNP Logo" class="w-20 h-20 object-contain" />
          </div>
          <div>
            <h1 class="text-lg font-bold text-white uppercase tracking-wide">
              Admin<br />Dashboard
            </h1>
            <p class="text-xs mt-2 font-semibold" style="color: #f3f1ee">
              Police Attendance System
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <div class="flex-1 p-5 space-y-3">
        <router-link
          to="/admin-dashboard"
          class="block p-4 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer group"
        >
          <div class="flex items-center gap-3">
            <div
              class="rounded-lg p-2 group-hover:bg-white/10 transition"
              style="background: rgba(255, 255, 255, 0.05)"
            >
              <svg class="w-5 h-5" style="color: #f3f1ee" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                ></path>
              </svg>
            </div>
            <span class="text-sm font-semibold uppercase tracking-wider" style="color: #f3f1ee"
              >Overview</span
            >
          </div>
        </router-link>

        <router-link
          to="/records"
          class="block p-4 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer group"
        >
          <div class="flex items-center gap-3">
            <div
              class="rounded-lg p-2 group-hover:bg-white/10 transition"
              style="background: rgba(255, 255, 255, 0.05)"
            >
              <svg
                class="w-5 h-5"
                style="color: #f3f1ee"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
            </div>
            <span class="text-sm font-semibold uppercase tracking-wider" style="color: #f3f1ee"
              >Records</span
            >
          </div>
        </router-link>

        <router-link
          to="/officers"
          class="block p-4 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer group"
        >
          <div class="flex items-center gap-3">
            <div
              class="rounded-lg p-2 group-hover:bg-white/10 transition"
              style="background: rgba(255, 255, 255, 0.05)"
            >
              <svg
                class="w-5 h-5"
                style="color: #f3f1ee"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <span class="text-sm font-semibold uppercase tracking-wider" style="color: #f3f1ee"
              >Officers</span
            >
          </div>
        </router-link>

        <div
          class="rounded-lg p-4 border-l-4 shadow-lg"
          style="background: #004595; border-left-color: #ffffff"
        >
          <div class="flex items-center gap-3">
            <div class="rounded-lg p-2" style="background: rgba(255, 255, 255, 0.1)">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                ></path>
              </svg>
            </div>
            <span class="font-bold text-sm uppercase tracking-wider">Activities</span>
          </div>
        </div>
      </div>

      <!-- Logout Button -->
      <div class="p-5 border-t border-white/10 mt-auto">
        <button
          @click="handleLogout"
          class="w-full text-white py-3.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-90"
          style="background: #dc2626"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          Logout
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="lg:ml-64 min-h-screen overflow-auto pb-20 lg:pb-0">
      <div class="p-4 sm:p-6 lg:p-8">
        <!-- Page Header -->
        <div
          class="mb-6 lg:mb-8 p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm"
          style="background: #ffffff; border-left: 4px solid #004595"
        >
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="rounded-full p-2 sm:p-3" style="background: #f3f1ee">
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8"
                style="color: #002147"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                ></path>
              </svg>
            </div>
            <div>
              <h1 class="text-lg sm:text-xl lg:text-2xl font-bold mb-1" style="color: #002147">
                Activity Management
              </h1>
              <p class="text-xs sm:text-sm font-semibold" style="color: #00397a">
                Create and manage attendance activities
              </p>
            </div>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white rounded-lg p-5 shadow-sm border-l-4" style="border-color: #004595">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-xs sm:text-sm font-semibold text-gray-500">Total Activities</p>
                <p class="text-2xl font-bold mt-2" style="color: #002147">
                  {{ activities.length }}
                </p>
              </div>
              <div class="rounded-lg p-3" style="background: #eff6ff">
                <svg
                  class="w-6 h-6 sm:w-8 sm:h-8"
                  style="color: #004595"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg p-5 shadow-sm border-l-4" style="border-color: #10b981">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-xs sm:text-sm font-semibold text-gray-500">Total Submissions</p>
                <p class="text-2xl font-bold mt-2" style="color: #065f46">{{ totalSubmissions }}</p>
              </div>
              <div class="rounded-lg p-3" style="background: #f0fdf4">
                <svg
                  class="w-6 h-6 sm:w-8 sm:h-8"
                  style="color: #10b981"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg p-5 shadow-sm border-l-4" style="border-color: #fbbf24">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-xs sm:text-sm font-semibold text-gray-500">Active Activities</p>
                <p class="text-2xl font-bold mt-2" style="color: #92400e">
                  {{ activities.length }}
                </p>
              </div>
              <div class="rounded-lg p-3" style="background: #fef3c7">
                <svg
                  class="w-6 h-6 sm:w-8 sm:h-8"
                  style="color: #fbbf24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Create New Activity Form -->
        <div class="bg-white rounded-lg p-6 shadow-sm mb-6">
          <div class="flex items-center gap-3 mb-6">
            <div class="rounded-lg p-2" style="background: #004595">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </div>
            <h2 class="text-lg font-bold" style="color: #002147">Create New Activity</h2>
          </div>

          <div class="space-y-4">
            <div>
              <label class="text-sm font-bold mb-2 flex items-center gap-2" style="color: #002147">
                Activity Name <span class="text-red-600">*</span>
              </label>
              <input
                v-model="newActivity.name"
                type="text"
                placeholder="e.g., Morning Formation, Seminar Attendance..."
                class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm"
                style="border-color: #e5e7eb; color: #002147"
              />
            </div>

            <div>
              <label class="text-sm font-bold mb-2 flex items-center gap-2" style="color: #002147">
                Description (Optional)
              </label>
              <textarea
                v-model="newActivity.description"
                placeholder="Add details about this activity..."
                class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm"
                style="border-color: #e5e7eb; color: #002147"
                rows="3"
              ></textarea>
            </div>
            <div>
              <label class="text-sm font-bold mb-2 flex items-center gap-2" style="color: #002147">
                Maximum Submissions Per Officer <span class="text-red-600">*</span>
              </label>
              <input
                v-model.number="newActivity.maxSubmissions"
                type="number"
                min="1"
                max="100"
                placeholder="e.g., 1, 3, 5..."
                class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm"
                style="border-color: #e5e7eb; color: #002147"
              />
              <p class="text-xs text-gray-500 mt-1">
                Set how many times each officer can submit for this activity
              </p>
            </div>
            <div>
              <label class="text-sm font-bold mb-2 flex items-center gap-2" style="color: #002147">
                Maximum Submissions Per Officer <span class="text-red-600">*</span>
              </label>
              <input
                v-model.number="newActivity.maxSubmissions"
                type="number"
                min="1"
                max="100"
                placeholder="e.g., 1, 3, 5..."
                class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm"
                style="border-color: #e5e7eb; color: #002147"
              />
              <p class="text-xs text-gray-500 mt-1">
                Set how many times each officer can submit for this activity
              </p>
            </div>

            <button
              @click="createActivity"
              :disabled="!newActivity.name || isCreating"
              class="w-full py-3 text-white font-bold rounded-lg text-sm transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:opacity-90"
              style="background: #004595"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
              <span v-if="isCreating">Creating...</span>
              <span v-else>Create Activity</span>
            </button>
          </div>
        </div>

        <!-- Activities List -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="p-6 border-b" style="background: #f3f1ee; border-color: #e5e7eb">
            <h2 class="text-lg font-bold flex items-center gap-2" style="color: #002147">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
              All Activities ({{ activities.length }})
            </h2>
          </div>

          <div v-if="activities.length === 0" class="p-8 text-center">
            <div
              class="rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4"
              style="background: #f3f1ee"
            >
              <svg
                class="w-8 h-8"
                style="color: #9ca3af"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <p class="font-bold text-gray-700">No activities created yet</p>
            <p class="text-sm text-gray-500 mt-1">Create your first activity to get started</p>
          </div>

          <div v-else class="divide-y" style="border-color: #e5e7eb">
            <div
              v-for="activity in activities"
              :key="activity.id"
              class="p-6 hover:bg-gray-50 transition"
            >
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-bold mb-2" style="color: #002147">{{ activity.name }}</h3>
                  <p v-if="activity.description" class="text-sm text-gray-600 mb-3">
                    {{ activity.description }}
                  </p>
                  <div class="flex flex-wrap gap-3 text-xs mb-3">
                    <div class="px-3 py-1 rounded-full" style="background: #eff6ff; color: #0369a1">
                      ID: {{ activity.id }}
                    </div>
                    <div class="px-3 py-1 rounded-full" style="background: #f0fdf4; color: #15803d">
                      Created: {{ formatDate(activity.created_at) }}
                    </div>
                  </div>

                  <!-- Attendance Link Display -->
                  <div
                    class="flex items-center gap-2 p-3 rounded-lg border-2 mt-3"
                    style="background: #f9fafb; border-color: #e5e7eb"
                  >
                    <svg
                      class="w-5 h-5 flex-shrink-0"
                      style="color: #004595"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      ></path>
                    </svg>
                    <input
                      type="text"
                      :value="generateAttendanceLink(activity.id)"
                      readonly
                      class="flex-1 px-3 py-2 text-xs border-none rounded bg-transparent"
                      style="color: #004595; font-family: monospace"
                    />
                    <button
                      @click="copyToClipboard(generateAttendanceLink(activity.id))"
                      class="px-3 py-2 rounded text-white text-xs font-bold transition hover:opacity-90"
                      style="background: #10b981"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div class="flex flex-col gap-2 flex-shrink-0">
                  <button
                    @click="viewActivitySubmissions(activity.id)"
                    class="px-4 py-2 rounded text-white text-xs font-bold transition hover:opacity-90"
                    style="background: #004595"
                  >
                    View Submissions
                  </button>
                  <button
                    @click="downloadActivityAsZip(activity.id, activity.name)"
                    class="px-4 py-2 rounded text-white text-xs font-bold transition hover:opacity-90 flex items-center justify-center gap-2"
                    style="background: #10b981"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      ></path>
                    </svg>
                    Download ZIP
                  </button>
                  <button
                    @click="deleteActivity(activity.id)"
                    class="px-4 py-2 rounded text-white text-xs font-bold transition hover:opacity-90"
                    style="background: #dc2626"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Bottom Navigation -->
    <nav
      class="lg:hidden fixed bottom-0 left-0 right-0 z-50"
      style="box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08)"
    >
      <div
        class="h-1"
        style="background: linear-gradient(90deg, #002147 0%, #004595 50%, #002147 100%)"
      ></div>

      <div class="grid grid-cols-4 h-16" style="background: #ffffff">
        <router-link
          to="/admin-dashboard"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300"
        >
          <svg
            class="w-6 h-6 mb-0.5"
            style="color: #6b7280"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            ></path>
          </svg>
          <span class="text-xs font-semibold" style="color: #6b7280">Overview</span>
        </router-link>

        <router-link
          to="/records"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300"
        >
          <svg
            class="w-6 h-6 mb-0.5"
            style="color: #6b7280"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            ></path>
          </svg>
          <span class="text-xs font-semibold" style="color: #6b7280">Records</span>
        </router-link>

        <router-link
          to="/officers"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300"
        >
          <svg
            class="w-6 h-6 mb-0.5"
            style="color: #6b7280"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span class="text-xs font-semibold" style="color: #6b7280">Officers</span>
        </router-link>

        <button
          @click="handleLogout"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300"
        >
          <svg
            class="w-6 h-6 mb-0.5"
            style="color: #dc2626"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          <span class="text-xs font-semibold" style="color: #dc2626">Logout</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabaseClient'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

const router = useRouter()
const activities = ref([])
const newActivity = ref({ name: '', description: '', maxSubmissions: 1 })
const isCreating = ref(false)
const isLoadingActivities = ref(false)
const totalSubmissions = ref(0)

// Create a new activity
const createActivity = async () => {
  if (!newActivity.value.name.trim()) {
    alert('Please enter an activity name')
    return
  }

  isCreating.value = true

  try {
    const { data, error } = await supabase
      .from('activities')
      .insert({
        name: newActivity.value.name,
        description: newActivity.value.description || null,
        max_submissions: newActivity.value.maxSubmissions || 1,
        created_at: new Date().toISOString(),
      })
      .select()

    if (error) throw error

    activities.value.push(data[0])
    newActivity.value = { name: '', description: '', maxSubmissions: 1 }
    alert('Activity created successfully!')
  } catch (err) {
    console.error('Error creating activity:', err)
    alert('Failed to create activity: ' + err.message)
  } finally {
    isCreating.value = false
  }
}

// Generate attendance link for activity
const generateAttendanceLink = (activityId) => {
  const baseUrl = window.location.origin
  return `${baseUrl}/#/user-dashboard?activity_id=${activityId}`
}

// Copy link to clipboard
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('Link copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

// View submissions for activity
const viewActivitySubmissions = (activityId) => {
  router.push(`/records?activity_id=${activityId}`)
}

// Download activity as ZIP with all submissions and images organized by officer
const downloadActivityAsZip = async (activityId, activityName) => {
  try {
    // Show loading indicator
    alert('Starting download... This may take a moment.')

    const zip = new JSZip()

    // Fetch all submissions for this activity
    const { data: submissions, error: submissionsError } = await supabase
      .from('submittedprof')
      .select('id, user_id, screenshots, created_at')
      .eq('activity_id', activityId)

    if (submissionsError) throw submissionsError

    if (!submissions || submissions.length === 0) {
      alert('No submissions found for this activity')
      return
    }

    // Fetch user data for reference
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('id, rank_full_name, badge_number')

    if (usersError) throw usersError

    // Create users map for quick lookup
    const usersMap = new Map(users.map((u) => [u.id, u]))

    // Group submissions by officer
    const submissionsByOfficer = new Map()

    for (const submission of submissions) {
      const user = usersMap.get(submission.user_id)
      const officerName = user?.rank_full_name || 'Unknown Officer'

      if (!submissionsByOfficer.has(officerName)) {
        submissionsByOfficer.set(officerName, [])
      }
      submissionsByOfficer.get(officerName).push(submission)
    }

    // Create a CSV file with submission data
    let csvContent = 'Officer Name,Badge Number,Submission ID,Date Submitted,Number of Images\n'

    // Process each officer and their submissions
    for (const [officerName, officerSubmissions] of submissionsByOfficer) {
      const user =
        submissionsByOfficer.size > 0 ? users.find((u) => u.rank_full_name === officerName) : null
      const badgeNumber = user?.badge_number || 'N/A'

      // Create officer folder
      const officerFolderName = officerName.replace(/[^a-z0-9]/gi, '_').toLowerCase()

      for (const submission of officerSubmissions) {
        const submittedDate = new Date(submission.created_at).toLocaleString()
        const screenshotUrls = submission.screenshots ? submission.screenshots.split(',') : []

        // Add row to CSV
        csvContent += `"${officerName}","${badgeNumber}",${submission.id},"${submittedDate}",${screenshotUrls.length}\n`

        // Download and add images to officer's folder
        for (let i = 0; i < screenshotUrls.length; i++) {
          const imageUrl = screenshotUrls[i].trim()
          if (!imageUrl) continue

          try {
            const response = await fetch(imageUrl)
            const blob = await response.blob()
            const fileExtension = imageUrl.includes('.png') ? 'png' : 'jpg'
            const fileName = `image_${i + 1}.${fileExtension}`

            // Add to officer's folder
            zip.file(`${officerFolderName}/${fileName}`, blob)

            console.log(`Downloaded: ${officerFolderName}/${fileName}`)
          } catch (err) {
            console.warn(`Failed to download image ${i + 1} for submission ${submission.id}:`, err)
          }
        }
      }
    }

    // Add activity info file
    const activityInfo = `Activity: ${activityName}
Activity ID: ${activityId}
Total Officers: ${submissionsByOfficer.size}
Total Submissions: ${submissions.length}
Download Date: ${new Date().toLocaleString()}

Officer Count: ${submissionsByOfficer.size}
Officers: ${Array.from(submissionsByOfficer.keys()).join(', ')}
`
    zip.file('ACTIVITY_INFO.txt', activityInfo)

    // Add CSV file
    zip.file('submissions.csv', csvContent)

    // Generate ZIP file
    const content = await zip.generateAsync({ type: 'blob' })

    // Download the ZIP file
    const filename = `${activityName.replace(/\s+/g, '_')}_attendance_${new Date().getTime()}.zip`
    saveAs(content, filename)

    alert(
      `ZIP file downloaded successfully!\n\n${submissionsByOfficer.size} officers, ${submissions.length} submissions included`,
    )
  } catch (err) {
    console.error('Error downloading activity as ZIP:', err)
    alert('Failed to download activity: ' + err.message)
  }
}

// Delete activity
const deleteActivity = async (activityId) => {
  if (
    !confirm(
      'Are you sure you want to delete this activity? This will not delete existing submissions.',
    )
  ) {
    return
  }

  try {
    const { error } = await supabase.from('activities').delete().eq('id', activityId)

    if (error) throw error

    activities.value = activities.value.filter((a) => a.id !== activityId)
    alert('Activity deleted successfully!')
  } catch (err) {
    console.error('Error deleting activity:', err)
    alert('Failed to delete activity: ' + err.message)
  }
}

// Format date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

// Load activities
const loadActivities = async () => {
  isLoadingActivities.value = true

  try {
    // Fetch activities
    const { data: activitiesData, error: activitiesError } = await supabase
      .from('activities')
      .select('*')
      .order('created_at', { ascending: false })

    if (activitiesError) throw activitiesError
    activities.value = activitiesData || []

    // Calculate total submissions
    const { data: submissionData, error: submissionError } = await supabase
      .from('submittedprof')
      .select('id', { count: 'exact' })

    if (submissionError) throw submissionError
    totalSubmissions.value = submissionData?.length || 0
  } catch (err) {
    console.error('Error loading activities:', err)
    alert('Failed to load activities: ' + err.message)
  } finally {
    isLoadingActivities.value = false
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
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    router.push('/')
    return
  }

  await loadActivities()
})
</script>

<style scoped>
/* Smooth transitions */
button {
  transition: all 0.3s ease;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
}

input,
textarea {
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #004595;
  box-shadow: 0 0 0 3px rgba(0, 69, 149, 0.1);
}
</style>
