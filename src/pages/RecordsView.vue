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
          style="background: #004595; border-left: 4px solid #ffffff"
        >
          <div class="flex items-center gap-3">
            <div class="rounded-lg p-2" style="background: rgba(255, 255, 255, 0.1)">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
            </div>
            <span class="font-bold text-sm uppercase tracking-wider">Records</span>
          </div>
        </router-link>

        <router-link
          to="/activities"
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
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                ></path>
              </svg>
            </div>
            <span class="text-sm font-semibold uppercase tracking-wider" style="color: #f3f1ee"
              >Activities</span
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
            </div>
            <div>
              <h1 class="text-base sm:text-lg lg:text-xl font-bold mb-1" style="color: #002147">
                Attendance Records
              </h1>
              <p class="text-xs sm:text-xs font-semibold" style="color: #00397a">
                View all attendance records from all activities
              </p>
            </div>
          </div>
        </div>

        <!-- Filter and Tabs Section -->
        <div class="bg-white rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-4 shadow-sm">
          <div
            class="flex flex-col lg:flex-row gap-3 lg:gap-4 items-start lg:items-end justify-between"
          >
            <!-- Row 1: Tabs (Left) -->
            <div class="flex flex-wrap gap-2 w-full lg:w-auto">
              <!-- WITH ATTENDANCE -->
              <button
                @click="activeTab = 'with-attendance'"
                :class="
                  activeTab === 'with-attendance' ? 'text-white shadow-lg' : 'bg-white border-2'
                "
                :style="
                  activeTab === 'with-attendance'
                    ? 'background: #004595; color: #ffffff;'
                    : 'background: #ffffff; color: #002147; border-color: #e5e7eb;'
                "
                class="flex-1 sm:flex-none w-full sm:w-auto px-3 py-2.5 rounded-lg font-bold text-xs uppercase flex items-center justify-center gap-2 transition"
              >
                <span>With Attendance</span>
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-bold"
                  :style="
                    activeTab === 'with-attendance'
                      ? 'background: #ffffff; color: #004595;'
                      : 'background: #e0f2fe; color: #0369a1;'
                  "
                >
                  {{ filteredRecords.length }}
                </span>
              </button>

              <!-- WITHOUT ATTENDANCE -->
              <button
                @click="activeTab = 'without-attendance'"
                :class="
                  activeTab === 'without-attendance' ? 'text-white shadow-lg' : 'bg-white border-2'
                "
                :style="
                  activeTab === 'without-attendance'
                    ? 'background: #ef4444; color: #ffffff;'
                    : 'background: #ffffff; color: #002147; border-color: #e5e7eb;'
                "
                class="flex-1 sm:flex-none w-full sm:w-auto px-3 py-2.5 rounded-lg font-bold text-xs uppercase flex items-center justify-center gap-2 transition"
              >
                <span>Without Attendance</span>
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-bold"
                  :style="
                    activeTab === 'without-attendance'
                      ? 'background: #ffffff; color: #ef4444;'
                      : 'background: #fee2e2; color: #991b1b;'
                  "
                >
                  {{ officersWithoutAttendance.length }}
                </span>
              </button>
            </div>

            <!-- Row 2: Filters (Right) -->
            <div
              class="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto items-start sm:items-end"
            >
              <!-- ACTIVITY -->
              <div v-if="allActivities.length > 0" class="flex flex-col gap-1.5 w-full sm:w-auto">
                <label
                  class="text-xs font-bold uppercase flex items-center gap-1.5"
                  style="color: #002147"
                >
                  <div class="rounded p-1 flex-shrink-0" style="background: #f3f1ee">
                    <svg
                      class="w-3 h-3"
                      style="color: #10b981"
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
                  Activity
                </label>
                <select
                  v-model="selectedActivityFilter"
                  class="w-full sm:w-auto px-3 py-2.5 border-2 rounded-lg text-xs font-medium transition focus:outline-none"
                  style="border-color: #e5e7eb; color: #002147"
                  @change="filterRecords"
                >
                  <option :value="null">All Activities</option>
                  <option v-for="activity in allActivities" :key="activity.id" :value="activity.id">
                    {{ activity.name }}
                  </option>
                </select>
              </div>

              <!-- CLEAR BUTTON -->
              <button
                @click="resetFilters"
                class="w-full sm:w-auto px-4 py-2.5 rounded-lg text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition hover:opacity-90 hover:shadow-md"
                style="background: #00397a"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Clear
              </button>
            </div>
          </div>
        </div>

        <!-- Tab Content -->
        <!-- With Attendance Tab -->
        <div
          v-if="activeTab === 'with-attendance'"
          class="bg-white rounded overflow-hidden shadow-sm"
        >
          <div class="p-3 sm:p-4 md:p-5 lg:p-6 border-b" style="background: #004595">
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 md:gap-4"
            >
              <div class="flex-1 min-w-0">
                <h2
                  class="text-xs sm:text-sm md:text-base font-bold flex items-center gap-1.5 sm:gap-2 md:gap-3 text-white break-words"
                >
                  <svg
                    class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  All Attendance Records
                </h2>
                <p class="text-xs mt-1" style="color: #e0e7ff">
                  Showing {{ filteredRecords.length }} records
                </p>
              </div>
              <div
                v-if="filteredRecords.length > 0"
                class="flex flex-row gap-1.5 sm:gap-2 w-full sm:w-auto"
              >
                <button
                  @click="previewWithAttendanceReport"
                  class="bg-white px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 rounded font-bold text-xs uppercase flex items-center justify-center gap-1.5 sm:gap-2 hover:opacity-90"
                  style="color: #004595"
                >
                  <svg
                    class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  <span>Preview</span>
                </button>
                <button
                  @click="showDownloadFormatModal('with-attendance')"
                  class="bg-white px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 rounded font-bold text-xs uppercase flex items-center justify-center gap-1.5 sm:gap-2 hover:opacity-90 flex-1 xs:flex-none"
                  style="color: #004595"
                >
                  <svg
                    class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
          <div
            class="p-3 sm:p-4 md:p-5 lg:p-6 border-b"
            style="background: #f3f1ee; border-color: #e5e7eb"
          >
            <p class="text-xs" style="color: #6b7280"></p>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="text-white text-xs" style="background: #002147">
                <tr>
                  <th
                    class="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-center font-bold uppercase w-8 sm:w-10"
                  >
                    #
                  </th>
                  <th class="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-bold uppercase">
                    Date & Time
                  </th>
                  <th class="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-bold uppercase">
                    Name
                  </th>
                  <th class="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-bold uppercase">
                    Status
                  </th>
                  <th class="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-bold uppercase">
                    Images
                  </th>
                  <th class="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-bold uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-100 text-xs">
                <tr
                  v-for="(record, index) in filteredRecords"
                  :key="record.id"
                  class="hover:bg-gray-50"
                >
                  <td class="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-gray-900 text-center font-bold">
                    {{ index + 1 }}
                  </td>
                  <td class="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-gray-900">
                    {{ record.date }}
                  </td>
                  <td class="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-gray-900">
                    {{ record.name }}
                  </td>
                  <td class="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
                    <span
                      v-if="record.status === true"
                      class="px-2 sm:px-2.5 py-0.5 inline-flex text-xs font-bold rounded"
                      style="background: #d1fae5; color: #065f46"
                    >
                      ✓ Complied
                    </span>
                    <span
                      v-else
                      class="px-2 sm:px-2.5 py-0.5 inline-flex text-xs font-bold rounded"
                      style="background: #fee2e2; color: #991b1b"
                    >
                      ✗ Uncomplied
                    </span>
                  </td>
                  <td class="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
                    <div class="flex gap-1 flex-wrap">
                      <div
                        v-for="(imgUrl, idx) in record.screenshots
                          ? record.screenshots.split(',').slice(0, 3)
                          : []"
                        :key="idx"
                        class="relative group"
                      >
                        <img
                          :src="imgUrl.trim()"
                          :alt="`Image ${idx + 1}`"
                          class="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded cursor-pointer object-cover border border-gray-200 hover:border-blue-400 transition"
                          @click="previewReport(record)"
                        />
                        <div
                          class="absolute bottom-full left-0 mb-2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10"
                        >
                          Image {{ idx + 1 }}
                        </div>
                      </div>
                      <span
                        v-if="(record.screenshots ? record.screenshots.split(',').length : 0) > 3"
                        class="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 flex items-center justify-center text-xs font-bold rounded bg-gray-200 text-gray-700 border border-gray-300"
                      >
                        +{{ (record.screenshots ? record.screenshots.split(',').length : 0) - 3 }}
                      </span>
                    </div>
                  </td>
                  <td class="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
                    <div class="flex flex-col gap-1">
                      <button
                        @click="previewReport(record)"
                        class="text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded font-bold flex items-center justify-center gap-1 sm:gap-2 text-xs"
                        style="background: #004595"
                      >
                        <svg
                          class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                        <span class="hidden xs:inline">Preview</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr v-if="filteredRecords.length === 0">
                  <td
                    colspan="7"
                    class="px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 text-center text-gray-500"
                  >
                    <div class="flex flex-col items-center">
                      <div class="bg-gray-100 rounded-full p-2 sm:p-3 md:p-4 mb-2 sm:mb-3">
                        <svg
                          class="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                      </div>
                      <p class="font-semibold text-xs sm:text-sm text-gray-700">No records found</p>
                      <p class="text-xs text-gray-500 mt-1">Try adjusting your date filter</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Without Attendance Tab -->
        <div
          v-if="activeTab === 'without-attendance'"
          class="bg-white rounded p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm"
        >
          <div
            class="mb-3 sm:mb-4 md:mb-5 lg:mb-6 rounded p-3 sm:p-4 md:p-5 lg:p-6 text-white"
            style="background: #ef4444"
          >
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 md:gap-4"
            >
              <div class="flex-1 min-w-0">
                <h2
                  class="text-sm sm:text-base md:text-lg font-bold flex items-center gap-1.5 sm:gap-2 md:gap-3 break-words"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                  Officers Without Attendance
                </h2>
                <p class="text-xs sm:text-sm mt-1">
                  {{ officersWithoutAttendance.length }} officer(s) without attendance
                </p>
              </div>
              <div
                v-if="officersWithoutAttendance.length > 0"
                class="flex flex-row gap-1.5 sm:gap-2 w-full sm:w-auto"
              >
                <button
                  @click="previewWithoutAttendanceReport"
                  class="bg-white px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 rounded font-bold text-xs uppercase flex items-center justify-center gap-1.5 sm:gap-2 hover:opacity-90"
                  style="color: #004595"
                >
                  <svg
                    class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  <span>Preview</span>
                </button>
                <button
                  @click="showDownloadFormatModal('without-attendance')"
                  class="bg-white px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 rounded font-bold text-xs uppercase flex items-center justify-center gap-1.5 sm:gap-2 hover:opacity-90 flex-1 xs:flex-none"
                  style="color: #004595"
                >
                  <svg
                    class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>

          <div v-if="officersWithoutAttendance.length > 0">
            <div
              class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
            >
              <div
                v-for="officer in officersWithoutAttendance"
                :key="officer.id"
                class="rounded p-2 sm:p-3 md:p-4"
                style="border: 1px solid #ef4444; background: #fef2f2"
              >
                <div class="flex items-center gap-2 sm:gap-3">
                  <div class="rounded p-1.5 sm:p-2 flex-shrink-0" style="background: #ef4444">
                    <svg
                      class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-bold text-gray-900 text-xs sm:text-sm break-words">
                      {{ officer.rank_full_name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="text-center py-6 sm:py-8 md:py-12 rounded"
            style="background: #f0fdf4; border: 1px solid #86efac"
          >
            <div
              class="rounded-full p-2 sm:p-3 md:p-4 mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center mb-2 sm:mb-3 md:mb-4"
              style="background: #10b981"
            >
              <svg
                class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
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
            <p class="text-gray-800 text-xs sm:text-sm md:text-base font-bold">
              All officers have submitted attendance!
            </p>
            <p class="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">
              100% attendance for the selected date
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <div
      v-if="showPreviewModal"
      class="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-4"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
      @click.self="closePreview"
    >
      <div
        class="bg-white rounded-lg max-w-6xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
      >
        <!-- Modal Header -->
        <div
          class="sticky top-0 bg-white border-b-2 p-4 sm:p-5 lg:p-6 flex justify-between items-center z-10"
          style="border-color: #004595"
        >
          <div class="flex items-center gap-2 sm:gap-3">
            <div class="rounded-lg p-1.5 sm:p-2" style="background: #004595">
              <svg
                class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h2 class="text-lg sm:text-xl lg:text-2xl font-bold" style="color: #002147">
              Document Preview
            </h2>
          </div>
          <button
            @click="closePreview"
            class="rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              style="color: #002147"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Preview Content -->
        <div class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8" style="background: #f3f1ee">
          <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
            <div v-html="previewContent"></div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div
          class="sticky bottom-0 bg-white border-t-2 p-4 sm:p-5 lg:p-6 flex flex-col sm:flex-row justify-end gap-2 sm:gap-3"
          style="border-color: #004595"
        >
          <button
            @click="showPreviewFormatModal"
            class="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase hover:opacity-90 transition flex items-center justify-center gap-2"
            style="background: #004595; color: #ffffff"
          >
            <svg
              class="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Download Report
          </button>
          <button
            @click="closePreview"
            class="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase hover:opacity-90 transition flex items-center justify-center gap-2"
            style="background: #6b7280; color: #ffffff"
          >
            <svg
              class="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Download Format Selection Modal -->
    <div
      v-if="showDownloadModal"
      class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
    >
      <!-- Backdrop overlay -->
      <div @click="showDownloadModal = false" class="absolute inset-0"></div>

      <!-- Modal dialog -->
      <div
        @click.stop
        class="relative bg-white rounded-2xl max-w-md w-full mx-3 sm:mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <!-- Modal Header with icon -->
        <div class="px-6 sm:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center">
          <div
            class="rounded-full p-3 sm:p-4 mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6"
            style="background: #f0f9ff; border: 2px solid #004595"
          >
            <svg
              class="w-7 h-7 sm:w-8 sm:h-8"
              style="color: #004595"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl font-bold uppercase tracking-wide" style="color: #002147">
            Select Download Format
          </h3>
          <p class="text-xs sm:text-sm mt-2" style="color: #6b7280">Choose your preferred format</p>
        </div>

        <!-- Modal Body -->
        <div class="px-6 sm:px-8 py-4 sm:py-6 space-y-3">
          <!-- Word Format -->
          <button
            @click="downloadInFormat('word')"
            class="w-full p-4 rounded-lg border-2 transition hover:shadow-md hover:scale-105 transform duration-200"
            style="background: #f0f9ff; border-color: #004595; color: #002147"
          >
            <div class="flex items-center gap-3">
              <div class="rounded-lg p-2" style="background: #004595">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="font-bold text-left">Word (.docx)</p>
                <p class="text-xs text-gray-500 text-left">Microsoft Word format</p>
              </div>
            </div>
          </button>

          <!-- Excel Format -->
          <button
            @click="downloadInFormat('excel')"
            class="w-full p-4 rounded-lg border-2 transition hover:shadow-md hover:scale-105 transform duration-200"
            style="background: #f0fdf4; border-color: #10b981; color: #065f46"
          >
            <div class="flex items-center gap-3">
              <div class="rounded-lg p-2" style="background: #10b981">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="font-bold text-left">Excel (.xlsx)</p>
                <p class="text-xs text-gray-500 text-left">Microsoft Excel format</p>
              </div>
            </div>
          </button>
        </div>

        <!-- Modal Footer -->
        <div class="px-6 sm:px-8 py-4 border-t bg-gray-50 flex justify-center gap-3">
          <button
            @click="showDownloadModal = false"
            class="px-6 py-2.5 rounded-lg font-bold text-sm uppercase transition-all duration-200 hover:shadow-lg border-2"
            style="background: #f3f1ee; color: #002147; border-color: #e5e7eb"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- Preview Format Selection Modal -->
    <div
      v-if="showPreviewFormatModalDialog"
      class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
      @click="showPreviewFormatModalDialog = false"
    >
      <!-- Modal dialog -->
      <div
        @click.stop
        class="relative bg-white rounded-2xl max-w-md w-full mx-3 sm:mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <!-- Modal Header with icon -->
        <div class="px-6 sm:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center">
          <div
            class="rounded-full p-3 sm:p-4 mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6"
            style="background: #f0f9ff; border: 2px solid #004595"
          >
            <svg
              class="w-7 h-7 sm:w-8 sm:h-8"
              style="color: #004595"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl font-bold uppercase tracking-wide" style="color: #002147">
            Select Download Format
          </h3>
          <p class="text-xs sm:text-sm mt-2" style="color: #6b7280">Choose your preferred format</p>
        </div>

        <!-- Modal Body -->
        <div class="px-6 sm:px-8 py-4 sm:py-6 space-y-3">
          <!-- Format Options -->
          <div class="space-y-3">
            <!-- Word Format -->
            <button
              @click="downloadPreviewInFormat('word')"
              class="w-full p-4 rounded-lg border-2 transition hover:shadow-md hover:scale-105 transform duration-200"
              style="background: #f0f9ff; border-color: #004595; color: #002147"
            >
              <div class="flex items-center gap-3">
                <div class="rounded-lg p-2" style="background: #004595">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="font-bold text-left">Word (.docx)</p>
                  <p class="text-xs text-gray-500 text-left">Microsoft Word format</p>
                </div>
              </div>
            </button>

            <!-- Excel Format -->
            <button
              @click="downloadPreviewInFormat('excel')"
              class="w-full p-4 rounded-lg border-2 transition hover:shadow-md hover:scale-105 transform duration-200"
              style="background: #f0fdf4; border-color: #10b981; color: #065f46"
            >
              <div class="flex items-center gap-3">
                <div class="rounded-lg p-2" style="background: #10b981">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="font-bold text-left">Excel (.xlsx)</p>
                  <p class="text-xs text-gray-500 text-left">Microsoft Excel format</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="px-6 sm:px-8 py-4 border-t bg-gray-50 flex justify-center gap-3">
          <button
            @click="showPreviewFormatModalDialog = false"
            class="px-6 py-2.5 rounded-lg font-bold text-sm uppercase transition-all duration-200 hover:shadow-lg border-2"
            style="background: #f3f1ee; color: #002147; border-color: #e5e7eb"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- Logout Confirmation Modal -->
    <div
      v-if="showLogoutConfirm"
      class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
    >
      <!-- Backdrop overlay -->
      <div @click="showLogoutConfirm = false" class="absolute inset-0 bg-opacity-40"></div>

      <!-- Modal dialog -->
      <div
        @click.stop
        class="relative bg-white rounded-2xl max-w-md w-full mx-3 sm:mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <!-- Modal Header with centered icon -->
        <div class="px-6 sm:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center">
          <div
            class="rounded-full p-3 sm:p-4 mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6"
            style="background: #fee2e2; border: 2px solid #dc2626"
          >
            <svg
              class="w-7 h-7 sm:w-8 sm:h-8"
              style="color: #dc2626"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl font-bold uppercase tracking-wide" style="color: #002147">
            Logout Confirmation
          </h3>
          <p class="text-xs sm:text-sm mt-2" style="color: #6b7280">
            Are you sure you want to logout?
          </p>
        </div>

        <!-- Modal Body -->
        <div class="px-6 sm:px-8 py-5 sm:py-6">
          <p class="text-xs sm:text-sm leading-relaxed text-center mb-4" style="color: #4b5563">
            You will be signed out from the admin dashboard and redirected to the login page.
          </p>

          <div
            class="rounded-lg p-3 sm:p-4 mb-6 border-l-4"
            style="background: #f0f9ff; border-left-color: #002147"
          >
            <div class="flex items-center gap-2">
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                style="color: #002147"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="text-xs font-semibold" style="color: #002147">
                You can login again anytime
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col gap-2 justify-center">
            <button
              @click="handleLogout"
              class="px-6 py-2.5 rounded-lg font-bold text-sm uppercase transition-all duration-200 hover:shadow-lg hover:scale-105 transform text-white"
              style="background: #dc2626"
            >
              Logout
            </button>
            <button
              @click="showLogoutConfirm = false"
              class="px-6 py-2.5 rounded-lg font-bold text-sm uppercase transition-all duration-200 hover:shadow-lg border-2"
              style="background: #f3f1ee; color: #002147; border-color: #e5e7eb"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Bottom Navigation -->
    <nav
      class="lg:hidden fixed bottom-0 left-0 right-0 z-50"
      style="box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08)"
    >
      <!-- Top Border Gradient -->
      <div
        class="h-1"
        style="background: linear-gradient(90deg, #002147 0%, #004595 50%, #002147 100%)"
      ></div>

      <div class="grid grid-cols-4 h-16 sm:h-18" style="background: #ffffff">
        <!-- Overview -->
        <router-link
          to="/admin-dashboard"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300"
        >
          <div
            class="absolute inset-0 bg-gray-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
          ></div>
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300"
            style="color: #6b7280"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            ></path>
          </svg>
          <span
            class="text-[10px] sm:text-xs font-semibold relative z-10 tracking-wide"
            style="color: #6b7280"
            >Overview</span
          >
        </router-link>

        <!-- Records -->
        <div
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 transition-all duration-300"
          style="
            border-color: #004595;
            background: linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%);
          "
        >
          <div
            class="absolute inset-0 bg-blue-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
          ></div>
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 relative z-10 transform transition-transform duration-300"
            style="color: #004595"
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
          <span
            class="text-[10px] sm:text-xs font-bold relative z-10 tracking-wide"
            style="color: #003d82"
            >Records</span
          >
        </div>

        <!-- Officers -->
        <router-link
          to="/officers"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300"
        >
          <div
            class="absolute inset-0 bg-gray-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
          ></div>
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300"
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
          <span
            class="text-[10px] sm:text-xs font-semibold relative z-10 tracking-wide"
            style="color: #6b7280"
            >Officers</span
          >
        </router-link>

        <!-- Logout -->
        <button
          @click="showLogoutConfirm = true"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300"
        >
          <div
            class="absolute inset-0 bg-red-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
          ></div>
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300"
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
          <span
            class="text-[10px] sm:text-xs font-semibold relative z-10 tracking-wide"
            style="color: #dc2626"
            >Logout</span
          >
        </button>
      </div>
    </nav>

    <!-- Error Alert Modal -->
    <div
      v-if="showErrorModal"
      class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
    >
      <!-- Backdrop overlay -->
      <div @click="showErrorModal = false" class="absolute inset-0"></div>

      <!-- Modal dialog -->
      <div
        @click.stop
        class="relative bg-white rounded-2xl max-w-md w-full mx-3 sm:mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <!-- Modal Header with centered error icon -->
        <div class="px-6 sm:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center">
          <div
            class="rounded-full p-3 sm:p-4 mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6"
            style="background: #fee2e2; border: 2px solid #ef4444"
          >
            <svg
              class="w-7 h-7 sm:w-8 sm:h-8"
              style="color: #ef4444"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl font-bold uppercase tracking-wide" style="color: #002147">
            Error
          </h3>
          <p class="text-xs sm:text-sm mt-2" style="color: #6b7280">Something went wrong</p>
        </div>

        <!-- Modal Body -->
        <div class="px-6 sm:px-8 py-5 sm:py-6">
          <p class="text-xs sm:text-sm leading-relaxed text-center mb-6" style="color: #4b5563">
            {{ errorMessage }}
          </p>

          <!-- Action Button -->
          <div class="flex justify-center">
            <button
              @click="showErrorModal = false"
              class="px-6 py-2.5 rounded-lg font-bold text-sm uppercase transition-all duration-200 hover:shadow-lg hover:scale-105 transform text-white"
              style="background: #ef4444"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { supabase } from '../supabaseClient'
import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  ImageRun,
  Packer,
  Table,
  TableRow,
  TableCell,
  VerticalAlign,
  BorderStyle,
  WidthType,
} from 'docx'
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'

const router = useRouter()
const route = useRoute()

// Activity filter
const activeTab = ref('with-attendance')

// Activity filter
const allActivities = ref([])
const selectedActivityFilter = ref(null)

// All records
const allRecords = ref([])
const filteredRecords = ref([])
const allUsers = ref([])
const filteredAttendanceUserIds = ref([])

// Preview modal state
const showPreviewModal = ref(false)
const previewContent = ref('')
const previewRecord = ref(null)
const showLogoutConfirm = ref(false)
const isWithoutAttendancePreview = ref(false)

// Download format modal state
const showDownloadModal = ref(false)
const downloadType = ref(null) // 'with-attendance' or 'without-attendance'

// Preview format modal state
const showPreviewFormatModalDialog = ref(false)
const previewDownloadType = ref(null) // 'individual-record', 'with-attendance', or 'without-attendance'

// Error modal state
const showErrorModal = ref(false)
const errorMessage = ref('')

// Officers without attendance
const officersWithoutAttendance = computed(() => {
  return allUsers.value.filter((user) => !filteredAttendanceUserIds.value.includes(user.id))
})

// Note: Date filter removed - all records are now displayed

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

    // Fetch all activities
    const { data: activities, error: activitiesError } = await supabase
      .from('activities')
      .select('id, name')
      .order('created_at', { ascending: false })

    if (activitiesError) throw activitiesError
    allActivities.value = activities || []

    // Check if activity_id is in the URL query (convert to number)
    if (route.query.activity_id) {
      selectedActivityFilter.value = Number(route.query.activity_id)
    }

    // Fetch all attendance
    const { data: attendance, error } = await supabase
      .from('submittedprof')
      .select(
        `
                *,
                users (
                    id,
                    rank_full_name
                )
            `,
      )
      .order('created_at', { ascending: false })

    if (error) throw error

    allRecords.value = (attendance || [])
      .map((record) => ({
        id: record.id,
        date: new Date(record.created_at).toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }),
        dateObj: new Date(record.created_at),
        rank: record.users?.rank_full_name?.split(' ')[0] || 'N/A',
        name: record.users?.rank_full_name || 'Unknown',
        fullRankName: record.users?.rank_full_name || 'Unknown',
        userId: record.user_id,
        activityId: record.activity_id,
        status: record.status === true,
        screenshots: record.screenshots || '',
      }))
      .sort((a, b) => {
        // Sort by date and time (earliest first)
        return a.dateObj - b.dateObj
      })

    filterRecords()
  } catch (error) {
    console.error('Error fetching records:', error)
  }
}

// Filter records by selected activity (date filter removed - show all records)
const filterRecords = () => {
  let filtered = allRecords.value

  // Filter by activity if selected (convert to number for proper comparison)
  if (selectedActivityFilter.value) {
    const activityId = Number(selectedActivityFilter.value)
    filtered = filtered.filter((record) => record.activityId === activityId)
  }

  // Sort by date and time (earliest first)
  const sorted = [...filtered].sort((a, b) => {
    return a.dateObj - b.dateObj
  })

  filteredRecords.value = sorted
  filteredAttendanceUserIds.value = sorted.map((r) => r.userId)
}

// Reset filters
const resetFilters = () => {
  selectedActivityFilter.value = null
  // Sort by date and time (earliest first)
  const sorted = [...allRecords.value].sort((a, b) => {
    return a.dateObj - b.dateObj
  })
  filteredRecords.value = sorted
  filteredAttendanceUserIds.value = sorted.map((r) => r.userId)
}

// Preview report functions
const previewReport = async (record) => {
  try {
    previewRecord.value = record
    isWithoutAttendancePreview.value = false

    // Parse screenshots URLs (comma-separated)
    const screenshotUrls = record.screenshots
      ? record.screenshots
          .split(',')
          .map((url) => url.trim())
          .filter((url) => url)
      : []

    const imagesHTML =
      screenshotUrls.length > 0
        ? `
            <div style="margin-top: 30px;">
                <h3 style="color: #002147; font-size: 18px; margin-bottom: 20px; border-bottom: 2px solid #004595; padding-bottom: 10px; font-weight: bold;">
                    📸 Uploaded Images (${screenshotUrls.length})
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    ${screenshotUrls
                      .map(
                        (url, index) => `
                        <div style="text-align: center; background: #f3f1ee; padding: 15px; border-radius: 8px; border: 2px solid #004595;">
                            <p style="font-weight: bold; color: #002147; margin-bottom: 10px; font-size: 14px;">Image ${index + 1}</p>
                            <img src="${url}" alt="Attendance Image ${index + 1}" 
                                style="width: 100%; height: auto; border-radius: 8px; border: 3px solid #002147; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
                        </div>
                    `,
                      )
                      .join('')}
                </div>
            </div>
        `
        : '<div style="text-align: center; padding: 40px; background: #fee2e2; border-radius: 8px; border: 2px solid #ef4444; margin-top: 30px;"><p style="color: #991b1b; font-weight: bold; font-size: 16px;">No images uploaded for this attendance record</p></div>'

    const previewHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 20px; background: linear-gradient(135deg, #002147 0%, #004595 100%); padding: 20px; border-radius: 8px;">
                    <h1 style="color: #ffffff; font-size: 20px; margin-bottom: 6px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
                    <h2 style="color: #f3f1ee; font-size: 16px; margin-bottom: 3px;">Attendance Report Preview</h2>
                    <p style="color: #e0e7ff; font-size: 12px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <div style="border: 2px solid #004595; border-radius: 8px; padding: 18px; margin-bottom: 20px; background: linear-gradient(to bottom, #ffffff 0%, #f3f1ee 100%); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    <h3 style="color: #002147; font-size: 16px; margin-bottom: 15px; border-bottom: 2px solid #004595; padding-bottom: 8px; font-weight: bold;">👮 Officer Information</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #002147; width: 160px; font-size: 13px;">Officer Name:</td>
                            <td style="padding: 8px; color: #374151; font-size: 13px;">${record.fullRankName || record.name || 'N/A'}</td>
                        </tr>
                        <tr style="background: rgba(0, 69, 149, 0.05);">
                            <td style="padding: 8px; font-weight: bold; color: #002147; font-size: 13px;">Attendance Date:</td>
                            <td style="padding: 8px; color: #374151; font-size: 13px;">${record.date || 'N/A'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #002147; font-size: 13px;">Status:</td>
                            <td style="padding: 8px;">
                                <span style="display: inline-block; padding: 4px 12px; border-radius: 4px; font-weight: bold; font-size: 12px; ${
                                  record.status === true
                                    ? 'background: #d1fae5; color: #065f46; border: 2px solid #10b981;'
                                    : 'background: #fee2e2; color: #991b1b; border: 2px solid #ef4444;'
                                }">
                                    ${record.status === true ? '✓ Complied' : '✗ Uncomplied'}
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
                
                ${imagesHTML}
                
                <div style="text-align: center; padding-top: 15px; border-top: 2px solid #e5e7eb; margin-top: 25px;">
                    <p style="color: #6b7280; font-size: 11px; font-weight: 500;">This is an official document preview from the PNP Attendance Monitoring System</p>
                    <p style="color: #9ca3af; font-size: 10px; margin-top: 3px;">For official use only</p>
                </div>
            </div>
        `

    previewContent.value = previewHTML
    showPreviewModal.value = true
  } catch (error) {
    console.error('Error generating preview:', error)
    showErrorModalFunc('Error generating preview. Please try again.')
  }
}

const previewWithoutAttendanceReport = () => {
  try {
    previewRecord.value = null
    isWithoutAttendancePreview.value = true

    const officersHTML = officersWithoutAttendance.value
      .map(
        (officer, index) => `
            <tr style="${index % 2 === 0 ? 'background: #f9fafb;' : 'background: #ffffff;'}">
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 600; color: #374151; font-size: 11px;">${index + 1}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; color: #1f2937; font-weight: 500; font-size: 11px;">${officer.rank_full_name || 'N/A'}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 11px;">${officer.badge_number || 'N/A'}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">
                    <span style="display: inline-block; padding: 3px 8px; border-radius: 3px; font-weight: bold; font-size: 10px; background: #fee2e2; color: #991b1b; border: 1.5px solid #ef4444;">✗ Uncomplied</span>
                </td>
            </tr>
        `,
      )
      .join('')

    const previewHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 15px; background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 12px; border-radius: 6px;">
                    <h1 style="color: #ffffff; font-size: 16px; margin-bottom: 4px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
                    <h2 style="color: #fee2e2; font-size: 13px; margin-bottom: 2px; font-weight: bold;">Officers Without Attendance Report</h2>
                    <p style="color: #fecaca; font-size: 10px;">Report Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p style="color: #fecaca; font-size: 10px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <div style="border: 2px solid #ef4444; border-radius: 6px; padding: 10px; margin-bottom: 15px; background: linear-gradient(to right, #fee2e2 0%, #fef2f2 100%); box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="background: #dc2626; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: #ffffff; font-size: 16px; font-weight: bold;">⚠️</span>
                        </div>
                        <div>
                            <p style="color: #991b1b; font-weight: bold; font-size: 12px; margin: 0;">
                                Total Officers Without Attendance: ${officersWithoutAttendance.value.length}
                            </p>
                            <p style="color: #b91c1c; font-size: 10px; margin: 2px 0 0 0;">
                                These officers have not submitted their attendance for the selected date
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style="background: #ffffff; border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #002147 0%, #004595 100%);">
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 50px; color: #ffffff; font-weight: bold; font-size: 11px;">#</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: left; color: #ffffff; font-weight: bold; font-size: 11px;">RANK & FULL NAME</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 120px; color: #ffffff; font-weight: bold; font-size: 11px;">BADGE NUMBER</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 100px; color: #ffffff; font-weight: bold; font-size: 11px;">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${officersHTML}
                        </tbody>
                    </table>
                </div>
                
                <div style="text-align: center; padding-top: 15px; border-top: 2px solid #e5e7eb; margin-top: 25px;">
                    <p style="color: #6b7280; font-size: 11px; font-weight: 500;">This is an official document preview from the PNP Attendance Monitoring System</p>
                    <p style="color: #9ca3af; font-size: 10px; margin-top: 3px;">For official use only</p>
                </div>
            </div>
        `

    previewContent.value = previewHTML
    showPreviewModal.value = true
  } catch (error) {
    console.error('Error generating preview:', error)
    showErrorModalFunc('Error generating preview. Please try again.')
  }
}

// Download from preview modal
const downloadFromPreview = () => {
  if (isWithoutAttendancePreview.value && previewRecord.value === null) {
    // If it's a with-attendance OR without-attendance bulk preview without a specific record
    if (activeTab.value === 'without-attendance') {
      downloadWithoutAttendanceReport()
    } else {
      downloadWithAttendanceReport()
    }
  } else if (previewRecord.value) {
    downloadWordReport(previewRecord.value)
  }
}

// Download Word report for individual attendance record
const downloadWordReport = async (record) => {
  try {
    const activityName = getActivityNameById(record.activityId)

    // Parse screenshots URLs (comma-separated)
    const screenshotUrls = record.screenshots
      ? record.screenshots
          .split(',')
          .map((url) => url.trim())
          .filter((url) => url)
      : []

    // Convert images to ImageRun elements with smaller size for table
    const imageElements = []
    for (let i = 0; i < screenshotUrls.length; i++) {
      try {
        const response = await fetch(screenshotUrls[i])
        const blob = await response.blob()
        const buffer = await blob.arrayBuffer()
        imageElements.push({
          type: 'image',
          data: buffer,
          index: i + 1,
        })
      } catch (error) {
        console.error(`Error loading image ${i}:`, error)
      }
    }

    // Create image cells for the table
    const imageCells =
      imageElements.length > 0
        ? [
            new TableCell({
              children: [
                new Paragraph({
                  text: `Images (${imageElements.length})`,
                  bold: true,
                  alignment: AlignmentType.CENTER,
                }),
                ...imageElements.map(
                  (img) =>
                    new Paragraph({
                      children: [
                        new ImageRun({
                          data: img.data,
                          transformation: {
                            width: 120,
                            height: 120,
                          },
                        }),
                      ],
                      spacing: { after: 100 },
                      alignment: AlignmentType.CENTER,
                    }),
                ),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
          ]
        : [
            new TableCell({
              children: [
                new Paragraph({
                  text: 'No Images',
                  alignment: AlignmentType.CENTER,
                  italics: true,
                }),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
          ]

    // Create table for record details and images
    const detailsTable = new Table({
      rows: [
        new TableRow({
          height: { value: 500, rule: 'atLeast' },
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: 'Officer Information',
                  bold: true,
                  heading: HeadingLevel.HEADING_3,
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Name: ',
                      bold: true,
                    }),
                    new TextRun(record.fullRankName || record.name || 'N/A'),
                  ],
                  spacing: { after: 100 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Activity: ',
                      bold: true,
                    }),
                    new TextRun(activityName),
                  ],
                  spacing: { after: 100 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Date: ',
                      bold: true,
                    }),
                    new TextRun(record.date || 'N/A'),
                  ],
                  spacing: { after: 100 },
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Status: ',
                      bold: true,
                    }),
                    new TextRun(record.status === true ? 'Complied' : 'Uncomplied'),
                  ],
                }),
              ],
              verticalAlign: VerticalAlign.TOP,
              width: { size: 30, type: 'percentage' },
            }),
            ...imageCells,
          ],
        }),
      ],
      width: { size: 100, type: WidthType.PERCENTAGE },
    })

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 720,
                right: 720,
                bottom: 720,
                left: 720,
              },
            },
          },
          children: [
            new Paragraph({
              text: 'PHILIPPINE NATIONAL POLICE',
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),
            new Paragraph({
              text: 'Attendance Report',
              heading: HeadingLevel.HEADING_2,
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 },
            }),
            detailsTable,
            new Paragraph({
              text: '',
              spacing: { after: 200 },
            }),
            new Paragraph({
              text: `Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
              alignment: AlignmentType.CENTER,
              italics: true,
              size: 18,
            }),
          ],
        },
      ],
    })

    const blob = await Packer.toBlob(doc)
    const fileName = `${activityName}_${record.fullRankName || record.name || 'Officer'}_${record.date}.docx`
    saveAs(blob, fileName)
  } catch (error) {
    console.error('Error generating Word document:', error)
    showErrorModalFunc('Error generating Word document. Please try again.')
  }
}

// Download Word report for officers without attendance
const downloadWithoutAttendanceReport = async () => {
  try {
    const activityName = getActivityNameById(selectedActivityFilter.value)

    // Create table rows with officers without attendance
    const tableRows = [
      new TableRow({
        height: { value: 400, rule: 'atLeast' },
        children: [
          new TableCell({
            children: [new Paragraph({ text: '#', bold: true, alignment: AlignmentType.CENTER })],
            verticalAlign: VerticalAlign.CENTER,
          }),
          new TableCell({
            children: [new Paragraph({ text: 'Rank & Full Name', bold: true })],
            verticalAlign: VerticalAlign.CENTER,
          }),
          new TableCell({
            children: [
              new Paragraph({ text: 'Badge Number', bold: true, alignment: AlignmentType.CENTER }),
            ],
            verticalAlign: VerticalAlign.CENTER,
          }),
          new TableCell({
            children: [
              new Paragraph({ text: 'Status', bold: true, alignment: AlignmentType.CENTER }),
            ],
            verticalAlign: VerticalAlign.CENTER,
          }),
        ],
      }),
      ...officersWithoutAttendance.value.map(
        (officer, index) =>
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({ text: `${index + 1}`, alignment: AlignmentType.CENTER }),
                ],
              }),
              new TableCell({
                children: [new Paragraph({ text: officer.rank_full_name || 'N/A' })],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: officer.badge_number || 'N/A',
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: 'Uncomplied',
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
            ],
          }),
      ),
    ]

    const noAttendanceTable = new Table({
      rows: tableRows,
      width: { size: 100, type: WidthType.PERCENTAGE },
    })

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 720,
                right: 720,
                bottom: 720,
                left: 720,
              },
            },
          },
          children: [
            new Paragraph({
              text: 'PHILIPPINE NATIONAL POLICE',
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),
            new Paragraph({
              text: 'Officers Without Attendance Report',
              heading: HeadingLevel.HEADING_2,
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),
            new Paragraph({
              text: `Activity: ${activityName}`,
              heading: HeadingLevel.HEADING_3,
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Report Generated: ',
                  bold: true,
                }),
                new TextRun(
                  new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }),
                ),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Total Officers Without Attendance: ${officersWithoutAttendance.value.length}`,
                  bold: true,
                }),
              ],
              spacing: { after: 300 },
            }),
            noAttendanceTable,
            new Paragraph({
              text: '',
              spacing: { after: 200 },
            }),
            new Paragraph({
              text: `Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
              alignment: AlignmentType.CENTER,
              italics: true,
              size: 18,
            }),
          ],
        },
      ],
    })

    const blob = await Packer.toBlob(doc)
    const fileName = `${activityName}_Without_Attendance_${new Date().toLocaleDateString('en-US')}.docx`
    saveAs(blob, fileName)
  } catch (error) {
    console.error('Error generating Word document:', error)
    showErrorModalFunc('Error generating Word document. Please try again.')
  }
}

// Show download format selection modal
const showDownloadFormatModal = (type) => {
  downloadType.value = type
  showDownloadModal.value = true
}

// Handle format selection and download
const downloadInFormat = (format) => {
  showDownloadModal.value = false

  if (format === 'word') {
    if (downloadType.value === 'with-attendance') {
      downloadWithAttendanceReport()
    } else {
      downloadWithoutAttendanceReport()
    }
  } else if (format === 'excel') {
    if (downloadType.value === 'with-attendance') {
      downloadWithAttendanceExcel()
    } else {
      downloadWithoutAttendanceExcel()
    }
  }
}

// Show preview format selection modal
const showPreviewFormatModal = () => {
  if (previewRecord.value) {
    previewDownloadType.value = 'individual-record'
  } else if (isWithoutAttendancePreview.value && activeTab.value === 'without-attendance') {
    previewDownloadType.value = 'without-attendance'
  } else {
    previewDownloadType.value = 'with-attendance'
  }
  showPreviewFormatModalDialog.value = true
}

// Handle preview format selection and download
const downloadPreviewInFormat = (format) => {
  showPreviewFormatModal.value = false

  if (format === 'word') {
    downloadFromPreview()
  } else if (format === 'excel') {
    downloadPreviewExcel()
  }
}

// Download individual record as Excel from preview
const downloadPreviewExcel = () => {
  try {
    const activityName = getActivityNameById(selectedActivityFilter.value)

    if (previewDownloadType.value === 'individual-record' && previewRecord.value) {
      // Single record Excel export with images
      const record = previewRecord.value
      const screenshotUrls = record.screenshots
        ? record.screenshots
            .split(',')
            .map((url) => url.trim())
            .filter((url) => url)
        : []

      // Create multiple rows if there are images
      const rows = [
        {
          'Officer Name': record.fullRankName || record.name || 'N/A',
          Activity: activityName,
          'Date & Time': record.date || 'N/A',
          Status: record.status === true ? 'Complied' : 'Uncomplied',
          'Image Count': screenshotUrls.length,
          'Image URLs': screenshotUrls.join(' | '),
        },
      ]

      const ws = XLSX.utils.json_to_sheet(rows)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'Attendance Record')
      ws['!cols'] = [{ wch: 30 }, { wch: 25 }, { wch: 25 }, { wch: 15 }, { wch: 12 }, { wch: 50 }]

      const fileName = `${activityName}_${record.fullRankName || record.name || 'Officer'}_${record.date}.xlsx`
      XLSX.writeFile(wb, fileName)
    } else if (previewDownloadType.value === 'without-attendance') {
      downloadWithoutAttendanceExcel()
    } else {
      downloadWithAttendanceExcel()
    }
  } catch (error) {
    console.error('Error generating Excel document:', error)
    showErrorModalFunc('Error generating Excel document. Please try again.')
  }
}

// Excel download for with-attendance records
const downloadWithAttendanceExcel = () => {
  try {
    const activityName = getActivityNameById(selectedActivityFilter.value)

    const data = filteredRecords.value.map((record, index) => {
      const screenshotUrls = record.screenshots
        ? record.screenshots
            .split(',')
            .map((url) => url.trim())
            .filter((url) => url)
        : []

      return {
        '#': index + 1,
        'Rank & Full Name': record.fullRankName || record.name || 'N/A',
        'Date & Time': record.date || 'N/A',
        Status: 'Complied',
        'Image Count': screenshotUrls.length,
        'Image URLs': screenshotUrls.join(' | '),
      }
    })

    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'With Attendance')

    // Add header styling (set column widths)
    ws['!cols'] = [
      { wch: 5 }, // # column
      { wch: 30 }, // Rank & Full Name
      { wch: 25 }, // Date & Time
      { wch: 12 }, // Status
      { wch: 12 }, // Image Count
      { wch: 50 }, // Image URLs
    ]

    const fileName = `${activityName}_With_Attendance_${new Date().toLocaleDateString('en-US')}.xlsx`
    XLSX.writeFile(wb, fileName)
  } catch (error) {
    console.error('Error generating Excel document:', error)
    showErrorModalFunc('Error generating Excel document. Please try again.')
  }
}

// Excel download for without-attendance records
const downloadWithoutAttendanceExcel = () => {
  try {
    const activityName = getActivityNameById(selectedActivityFilter.value)

    const data = officersWithoutAttendance.value.map((officer, index) => ({
      '#': index + 1,
      'Rank & Full Name': officer.rank_full_name || 'N/A',
      'Badge Number': officer.badge_number || 'N/A',
      Status: 'Uncomplied',
    }))

    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Without Attendance')

    // Add header styling (set column widths)
    ws['!cols'] = [
      { wch: 5 }, // # column
      { wch: 30 }, // Rank & Full Name
      { wch: 20 }, // Badge Number
      { wch: 15 }, // Status
    ]

    const fileName = `${activityName}_Without_Attendance_${new Date().toLocaleDateString('en-US')}.xlsx`
    XLSX.writeFile(wb, fileName)
  } catch (error) {
    console.error('Error generating Excel document:', error)
    showErrorModalFunc('Error generating Excel document. Please try again.')
  }
}

const closePreview = () => {
  showPreviewModal.value = false
  previewContent.value = ''
  previewRecord.value = null
  isWithoutAttendancePreview.value = false
}

const showErrorModalFunc = (message) => {
  errorMessage.value = message
  showErrorModal.value = true
}

// Preview report for officers with attendance
const previewWithAttendanceReport = () => {
  try {
    previewRecord.value = null
    isWithoutAttendancePreview.value = false

    const recordsHTML = filteredRecords.value
      .map(
        (record, index) => `
            <tr style="${index % 2 === 0 ? 'background: #f9fafb;' : 'background: #ffffff;'}">
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 600; color: #374151; font-size: 11px;">${index + 1}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; color: #1f2937; font-weight: 500; font-size: 11px;">${record.fullRankName || record.name || 'N/A'}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; color: #6b7280; font-size: 11px;">${record.date || 'N/A'}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">
                    <span style="display: inline-block; padding: 3px 8px; border-radius: 3px; font-weight: bold; font-size: 10px; background: #d1fae5; color: #065f46; border: 1.5px solid #10b981;">✓ Complied</span>
                </td>
            </tr>
        `,
      )
      .join('')

    const previewHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 15px; background: linear-gradient(135deg, #004595 0%, #002147 100%); padding: 12px; border-radius: 6px;">
                    <h1 style="color: #ffffff; font-size: 16px; margin-bottom: 4px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
                    <h2 style="color: #e0e7ff; font-size: 13px; margin-bottom: 2px; font-weight: bold;">Officers With Attendance Report</h2>
                    <p style="color: #c7d2fe; font-size: 10px;">Report Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p style="color: #c7d2fe; font-size: 10px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <div style="border: 2px solid #004595; border-radius: 6px; padding: 10px; margin-bottom: 15px; background: linear-gradient(to right, #dcfce7 0%, #f0fdf4 100%); box-shadow: 0 2px 4px rgba(0, 69, 149, 0.2);">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="background: #10b981; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: #ffffff; font-size: 16px; font-weight: bold;">✓</span>
                        </div>
                        <div>
                            <p style="color: #065f46; font-weight: bold; font-size: 12px; margin: 0;">
                                Total Officers With Attendance: ${filteredRecords.value.length}
                            </p>
                            <p style="color: #059669; font-size: 10px; margin: 2px 0 0 0;">
                                These officers have submitted their attendance for the selected date
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style="background: #ffffff; border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #002147 0%, #004595 100%);">
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 50px; color: #ffffff; font-weight: bold; font-size: 11px;">#</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: left; color: #ffffff; font-weight: bold; font-size: 11px;">RANK & FULL NAME</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: left; color: #ffffff; font-weight: bold; font-size: 11px;">DATE & TIME</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 100px; color: #ffffff; font-weight: bold; font-size: 11px;">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${recordsHTML}
                        </tbody>
                    </table>
                </div>
                
                <div style="text-align: center; padding-top: 15px; border-top: 2px solid #e5e7eb; margin-top: 25px;">
                    <p style="color: #6b7280; font-size: 11px; font-weight: 500;">This is an official document preview from the PNP Attendance Monitoring System</p>
                    <p style="color: #9ca3af; font-size: 10px; margin-top: 3px;">For official use only</p>
                </div>
            </div>
        `

    previewContent.value = previewHTML
    showPreviewModal.value = true
    isWithoutAttendancePreview.value = true // Mark as with-attendance preview for download handler
  } catch (error) {
    console.error('Error generating preview:', error)
    showErrorModalFunc('Error generating preview. Please try again.')
  }
}

// Helper function to get activity name by ID
const getActivityNameById = (activityId) => {
  const activity = allActivities.value.find((a) => a.id === activityId)
  return activity ? activity.name : 'All Activities'
}

// Download Word report for officers with attendance
const downloadWithAttendanceReport = async () => {
  try {
    const activityName = getActivityNameById(selectedActivityFilter.value)

    // Create table rows with attendance records
    const tableRows = [
      new TableRow({
        height: { value: 400, rule: 'atLeast' },
        children: [
          new TableCell({
            children: [new Paragraph({ text: '#', bold: true, alignment: AlignmentType.CENTER })],
            verticalAlign: VerticalAlign.CENTER,
          }),
          new TableCell({
            children: [new Paragraph({ text: 'Rank & Full Name', bold: true })],
            verticalAlign: VerticalAlign.CENTER,
          }),
          new TableCell({
            children: [
              new Paragraph({ text: 'Date & Time', bold: true, alignment: AlignmentType.CENTER }),
            ],
            verticalAlign: VerticalAlign.CENTER,
          }),
          new TableCell({
            children: [
              new Paragraph({ text: 'Status', bold: true, alignment: AlignmentType.CENTER }),
            ],
            verticalAlign: VerticalAlign.CENTER,
          }),
        ],
      }),
      ...filteredRecords.value.map(
        (record, index) =>
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({ text: `${index + 1}`, alignment: AlignmentType.CENTER }),
                ],
              }),
              new TableCell({
                children: [new Paragraph({ text: record.fullRankName || record.name || 'N/A' })],
              }),
              new TableCell({
                children: [
                  new Paragraph({ text: record.date || 'N/A', alignment: AlignmentType.CENTER }),
                ],
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    text: record.status === true ? 'Complied' : 'Uncomplied',
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
            ],
          }),
      ),
    ]

    const attendanceTable = new Table({
      rows: tableRows,
      width: { size: 100, type: WidthType.PERCENTAGE },
    })

    // Collect all images from all records
    const allImages = []
    for (const record of filteredRecords.value) {
      const screenshotUrls = record.screenshots
        ? record.screenshots
            .split(',')
            .map((url) => url.trim())
            .filter((url) => url)
        : []

      for (let i = 0; i < screenshotUrls.length; i++) {
        try {
          const response = await fetch(screenshotUrls[i])
          const blob = await response.blob()
          const buffer = await blob.arrayBuffer()
          allImages.push({
            data: buffer,
            officerName: record.fullRankName || record.name || 'Unknown',
            date: record.date,
            imageIndex: i + 1,
          })
        } catch (error) {
          console.warn(`Failed to fetch image for ${record.fullRankName}:`, error)
        }
      }
    }

    // Create image collage section
    const imageGalleryChildren = [
      new Paragraph({
        text: 'PHILIPPINE NATIONAL POLICE',
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: 'Attendance Evidence - Image Gallery',
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: `Activity: ${activityName}`,
        heading: HeadingLevel.HEADING_3,
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `Total Images: ${allImages.length}`,
            bold: true,
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
      }),
    ]

    // Group images dynamically based on available space
    // Standard page: 11" height - 1" top/bottom margins - ~1.2" for headers = ~8.8" available
    // Image cell height: 120px image + 50px text = ~1.2" per row
    // This allows 5-6 rows to fit per page. Using 5 rows for good balance (20 images/page)
    // If more space available on later pages, can adjust to 6 rows (24 images/page)
    let imagesPerPage = 20 // 5 rows x 4 columns default

    for (let i = 0; i < allImages.length; i += imagesPerPage) {
      const pageImages = allImages.slice(i, Math.min(i + imagesPerPage, allImages.length))

      // For the last page, if there are remaining images and enough space, increase rows to fit more
      const isLastPage = i + imagesPerPage >= allImages.length
      const remainingImages = allImages.length - i
      const canFitSixRows = remainingImages <= 24 && remainingImages > 20

      // Adjust images for last page if it can fit 6 rows and have remaining images
      if (isLastPage && canFitSixRows) {
        imagesPerPage = remainingImages // Fit all remaining images
      }

      const pageImagesToUse = allImages.slice(i, Math.min(i + imagesPerPage, allImages.length))

      // Create 4-column table for images
      const imageRows = []
      for (let j = 0; j < pageImagesToUse.length; j += 4) {
        const img1 = pageImagesToUse[j]
        const img2 = pageImagesToUse[j + 1]
        const img3 = pageImagesToUse[j + 2]
        const img4 = pageImagesToUse[j + 3]

        const createImageCell = (img) => {
          if (!img) {
            return new TableCell({
              children: [new Paragraph({ text: '' })],
              borders: {
                top: { style: BorderStyle.NONE },
                bottom: { style: BorderStyle.NONE },
                left: { style: BorderStyle.NONE },
                right: { style: BorderStyle.NONE },
              },
            })
          }

          return new TableCell({
            children: [
              new Paragraph({
                children: [
                  new ImageRun({
                    data: img.data,
                    transformation: {
                      width: 120,
                      height: 120,
                    },
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
              new Paragraph({
                text: `${img.officerName}`,
                alignment: AlignmentType.CENTER,
                spacing: { after: 15 },
                size: 18,
                bold: true,
              }),
              new Paragraph({
                text: `${img.date}`,
                alignment: AlignmentType.CENTER,
                size: 16,
              }),
            ],
            borders: {
              top: { style: BorderStyle.SINGLE, size: 6, color: '004595' },
              bottom: { style: BorderStyle.SINGLE, size: 6, color: '004595' },
              left: { style: BorderStyle.SINGLE, size: 6, color: '004595' },
              right: { style: BorderStyle.SINGLE, size: 6, color: '004595' },
            },
          })
        }

        imageRows.push(
          new TableRow({
            children: [
              createImageCell(img1),
              createImageCell(img2),
              createImageCell(img3),
              createImageCell(img4),
            ],
          }),
        )
      }

      // Add table to gallery
      imageGalleryChildren.push(
        new Table({
          rows: imageRows,
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),
      )

      // Add page break if there are more images to come
      if (i + imagesPerPage < allImages.length) {
        imageGalleryChildren.push(
          new Paragraph({
            text: '',
            pageBreakBefore: true,
          }),
        )
      }
    }

    const sections = [
      {
        properties: {
          page: {
            margin: {
              top: 720,
              right: 720,
              bottom: 720,
              left: 720,
            },
          },
        },
        children: [
          new Paragraph({
            text: 'PHILIPPINE NATIONAL POLICE',
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),
          new Paragraph({
            text: 'Officers With Attendance Report',
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),
          new Paragraph({
            text: `Activity: ${activityName}`,
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Report Generated: ',
                bold: true,
              }),
              new TextRun(
                new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }),
              ),
            ],
            spacing: { after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Total Records: ${filteredRecords.value.length}`,
                bold: true,
              }),
            ],
            spacing: { after: 300 },
          }),
          attendanceTable,
          new Paragraph({
            text: '',
            pageBreakBefore: true,
          }),
          ...imageGalleryChildren,
          new Paragraph({
            text: `Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
            alignment: AlignmentType.CENTER,
            italics: true,
            size: 18,
          }),
        ],
      },
    ]

    const doc = new Document({
      sections: sections,
    })

    const blob = await Packer.toBlob(doc)
    const fileName = `${activityName}_With_Attendance_${new Date().toLocaleDateString('en-US')}.docx`
    saveAs(blob, fileName)
  } catch (error) {
    console.error('Error generating Word document:', error)
    showErrorModalFunc('Error generating Word document. Please try again.')
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

  await fetchRecords()
})
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
