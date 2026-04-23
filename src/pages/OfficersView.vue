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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h1 class="text-lg sm:text-xl lg:text-2xl font-bold mb-1" style="color: #002147">
                Officers & Personnel
              </h1>
              <p class="text-xs sm:text-sm font-semibold" style="color: #00397a">
                Manage and view all registered officers
              </p>
            </div>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="bg-white rounded-lg p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6 shadow-sm">
          <div class="flex items-center gap-3">
            <div class="rounded-lg p-2" style="background: #f3f1ee">
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                style="color: #004595"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search officers by rank or name..."
              class="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition text-xs sm:text-sm font-medium"
              style="border-color: #e5e7eb; color: #002147"
            />
          </div>
        </div>

        <!-- Status Filter Tabs -->
        <div class="bg-white rounded-lg p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6 shadow-sm">
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              @click="statusFilter = 'all'"
              class="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-200"
              :style="
                statusFilter === 'all'
                  ? 'background: #004595; color: white;'
                  : 'background: #f3f1ee; color: #002147;'
              "
            >
              <div class="flex items-center justify-center gap-2">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                All ({{ officers.length }})
              </div>
            </button>
            <button
              @click="statusFilter = 'complied'"
              class="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-200"
              :style="
                statusFilter === 'complied'
                  ? 'background: #10b981; color: white;'
                  : 'background: #f3f1ee; color: #002147;'
              "
            >
              <div class="flex items-center justify-center gap-2">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                complied ({{ compliedOfficers.length }})
              </div>
            </button>
            <button
              @click="statusFilter = 'noncompliant'"
              class="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-200"
              :style="
                statusFilter === 'noncompliant'
                  ? 'background: #ef4444; color: white;'
                  : 'background: #f3f1ee; color: #002147;'
              "
            >
              <div class="flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                noncompliant ({{ noncompliantOfficers.length }})
              </div>
            </button>
          </div>
        </div>

        <!-- Officers Grid and Recent Check-ins -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-6">
          <!-- Officers Grid -->
          <div class="lg:col-span-2 bg-white rounded-lg overflow-hidden shadow-sm">
            <div
              class="p-4 sm:p-5 lg:p-6 border-b"
              style="background: #f3f1ee; border-color: #e5e7eb"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="rounded-lg p-2" style="background: #004595">
                    <svg
                      class="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
                  <div>
                    <h2 class="text-sm sm:text-base font-bold" style="color: #002147">
                      {{
                        statusFilter === 'all'
                          ? 'All Officers'
                          : statusFilter === 'complied'
                            ? 'complied Officers'
                            : 'noncompliant Officers'
                      }}
                    </h2>
                    <p class="text-xs sm:text-sm font-semibold" style="color: #00397a">
                      {{ displayedOfficers.length }} officers found
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span
                    class="text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full"
                    :style="
                      statusFilter === 'all'
                        ? 'background: #f3f1ee; color: #002147;'
                        : statusFilter === 'complied'
                          ? 'background: #dcfce7; color: #166534;'
                          : 'background: #fee2e2; color: #991b1b;'
                    "
                  >
                    {{
                      statusFilter === 'all'
                        ? 'Viewing All'
                        : statusFilter === 'complied'
                          ? 'complied'
                          : 'noncompliant'
                    }}
                  </span>
                  <button
                    @click="showAddModal = true"
                    class="py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-200 flex items-center gap-1.5 hover:shadow-lg"
                    style="background: #004595; color: white"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      ></path>
                    </svg>
                    <span class="hidden sm:inline">Add Officer</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="p-4 sm:p-5 lg:p-6 max-h-96 sm:max-h-[500px] overflow-y-auto">
              <div
                v-if="displayedOfficers.length > 0"
                class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                <div
                  v-for="officer in displayedOfficers"
                  :key="officer.id"
                  class="border-2 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-200"
                  style="background: #ffffff; border-color: #e5e7eb"
                >
                  <div class="flex items-start gap-3">
                    <div class="rounded-lg p-2" style="background: #f3f1ee">
                      <svg
                        class="w-4 h-4 sm:w-5 sm:h-5"
                        style="color: #002147"
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
                      <p
                        class="font-bold text-xs sm:text-sm mb-1.5 sm:mb-2 truncate"
                        style="color: #002147"
                      >
                        {{ officer.rank_full_name }}
                      </p>
                      <span
                        class="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold uppercase"
                        :style="
                          officer.hasAttendanceToday
                            ? 'background: #dcfce7; color: #15803d;'
                            : 'background: #fee2e2; color: #991b1b;'
                        "
                      >
                        <span
                          class="w-1.5 h-1.5 rounded-full"
                          :style="
                            officer.hasAttendanceToday
                              ? 'background: #15803d;'
                              : 'background: #991b1b;'
                          "
                        ></span>
                        {{ officer.hasAttendanceToday ? 'complied' : 'noncompliant' }}
                      </span>
                    </div>
                    <div class="flex gap-1.5">
                      <button
                        @click="openEditModal(officer)"
                        class="p-2 rounded-lg hover:scale-110 transition-all duration-200"
                        style="background: #f0f9ff; color: #004595"
                        title="Edit officer"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          ></path>
                        </svg>
                      </button>
                      <button
                        @click="openDeleteConfirm(officer)"
                        class="p-2 rounded-lg hover:scale-110 transition-all duration-200"
                        style="background: #fee2e2; color: #dc2626"
                        title="Delete officer"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else class="text-center py-12">
                <div
                  class="rounded p-3 mx-auto w-12 h-12 flex items-center justify-center mb-3 sm:mb-4"
                  style="background: #f3f1ee"
                >
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7"
                    style="color: #9ca3af"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <p class="font-bold text-xs sm:text-sm mb-1" style="color: #002147">
                  No officers found
                </p>
                <p class="text-xs sm:text-sm" style="color: #6b7280">Try adjusting your search</p>
              </div>
            </div>
          </div>

          <!-- Recent Check-ins Timeline -->
          <div class="lg:col-span-1 bg-white rounded-lg overflow-hidden shadow-sm">
            <div
              class="p-4 sm:p-5 lg:p-6 border-b"
              style="background: #f0fdf4; border-color: #e5e7eb"
            >
              <div class="flex items-center gap-3">
                <div class="rounded-lg p-2" style="background: #10b981">
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 class="text-sm sm:text-base font-bold" style="color: #002147">
                    Recent Check-ins
                  </h2>
                  <p class="text-xs sm:text-sm font-semibold" style="color: #166534">
                    Latest activity
                  </p>
                </div>
              </div>
            </div>

            <div class="p-4 sm:p-5 lg:p-6 max-h-96 sm:max-h-[500px] overflow-y-auto">
              <div v-if="recentCheckIns.length > 0" class="space-y-2 sm:space-y-3">
                <div
                  v-for="checkIn in recentCheckIns"
                  :key="checkIn.id"
                  class="flex items-center gap-3 p-3 sm:p-4 rounded-lg border-l-4 hover:shadow-md transition-all duration-200"
                  style="background: #fefefe; border-left-color: #10b981; border: 1px solid #e5e7eb"
                >
                  <div class="flex-shrink-0">
                    <div class="rounded-full p-2 sm:p-3" style="background: #dcfce7">
                      <svg
                        class="w-4 h-4 sm:w-5 sm:h-5"
                        style="color: #10b981"
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
                  </div>
                  <div class="flex-1 min-w-0">
                    <p
                      class="font-bold text-xs sm:text-sm mb-0.5 sm:mb-1 truncate"
                      style="color: #002147"
                    >
                      {{ checkIn.officerName }}
                    </p>
                    <p class="text-xs sm:text-sm font-semibold" style="color: #10b981">
                      {{ formatTime(checkIn.created_at) }}
                    </p>
                  </div>
                  <span
                    class="text-xs sm:text-sm font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full"
                    style="background: #dcfce7; color: #166534"
                  >
                    ✓
                  </span>
                </div>
              </div>
              <div v-else class="text-center py-8">
                <div
                  class="rounded-full p-3 mx-auto w-fit mb-2 sm:mb-3"
                  style="background: #f3f1ee"
                >
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7"
                    style="color: #9ca3af"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <p class="text-xs sm:text-sm font-bold" style="color: #002147">No check-ins yet</p>
                <p class="text-xs sm:text-sm mt-1" style="color: #9ca3af">
                  Activity will appear here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Officer Modal -->
    <div
      v-if="showAddModal"
      class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
    >
      <div @click="showAddModal = false" class="absolute inset-0 bg-opacity-40"></div>
      <div
        @click.stop
        class="relative bg-white rounded-2xl max-w-md w-full mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <div
          class="relative px-8 pt-8 pb-6"
          style="background: linear-gradient(135deg, #002147 0%, #004595 100%)"
        >
          <h3 class="text-xl font-bold text-white uppercase tracking-wide flex items-center gap-3">
            <div class="rounded-lg p-2.5" style="background: rgba(255, 255, 255, 0.15)">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                ></path>
              </svg>
            </div>
            Add Officer
          </h3>
        </div>

        <div class="px-8 py-6">
          <div class="mb-5">
            <label class="block text-sm font-bold mb-2" style="color: #002147">Officer Name</label>
            <input
              v-model="newOfficer.name"
              type="text"
              placeholder="Enter full officer name and rank"
              class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm font-medium"
              style="border-color: #e5e7eb; color: #002147"
              @keyup.enter="addOfficer"
            />
          </div>

          <div class="mb-5">
            <label class="block text-sm font-bold mb-2" style="color: #002147">Badge Number</label>
            <input
              v-model="newOfficer.badge_number"
              type="text"
              placeholder="Enter badge number"
              class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm font-medium"
              style="border-color: #e5e7eb; color: #002147"
              @keyup.enter="addOfficer"
            />
          </div>

          <div class="flex gap-3">
            <button
              @click="showAddModal = false"
              class="flex-1 font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg border-2"
              style="background: #ffffff; color: #002147; border-color: #e5e7eb"
            >
              Cancel
            </button>
            <button
              @click="addOfficer"
              class="flex-1 text-white font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg"
              style="background: #004595"
            >
              Add Officer
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Officer Modal -->
    <div
      v-if="showEditModal"
      class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
    >
      <div @click="showEditModal = false" class="absolute inset-0 bg-opacity-40"></div>
      <div
        @click.stop
        class="relative bg-white rounded-2xl max-w-md w-full mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <div
          class="relative px-8 pt-8 pb-6"
          style="background: linear-gradient(135deg, #002147 0%, #004595 100%)"
        >
          <h3 class="text-xl font-bold text-white uppercase tracking-wide flex items-center gap-3">
            <div class="rounded-lg p-2.5" style="background: rgba(255, 255, 255, 0.15)">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </div>
            Edit Officer
          </h3>
        </div>

        <div class="px-8 py-6">
          <div class="mb-5">
            <label class="block text-sm font-bold mb-2" style="color: #002147">Officer Name</label>
            <input
              v-model="editingOfficer.name"
              type="text"
              placeholder="Enter officer name and rank"
              class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm font-medium"
              style="border-color: #e5e7eb; color: #002147"
              @keyup.enter="updateOfficer"
            />
          </div>

          <div class="mb-5">
            <label class="block text-sm font-bold mb-2" style="color: #002147">Badge Number</label>
            <input
              v-model="editingOfficer.badge_number"
              type="text"
              placeholder="Enter badge number"
              class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 text-sm font-medium"
              style="border-color: #e5e7eb; color: #002147"
              @keyup.enter="updateOfficer"
            />
          </div>

          <div class="flex gap-3">
            <button
              @click="showEditModal = false"
              class="flex-1 font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg border-2"
              style="background: #ffffff; color: #002147; border-color: #e5e7eb"
            >
              Cancel
            </button>
            <button
              @click="updateOfficer"
              class="flex-1 text-white font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg"
              style="background: #004595"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="showDeleteConfirm"
      class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
    >
      <div @click="showDeleteConfirm = false" class="absolute inset-0 bg-opacity-40"></div>
      <div
        @click.stop
        class="relative bg-white rounded-2xl max-w-md w-full mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <div
          class="relative px-8 pt-8 pb-6"
          style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%)"
        >
          <h3 class="text-xl font-bold text-white uppercase tracking-wide flex items-center gap-3">
            <div class="rounded-lg p-2.5" style="background: rgba(255, 255, 255, 0.15)">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </div>
            Delete Officer
          </h3>
        </div>

        <div class="px-8 py-6">
          <div class="flex items-start gap-4 mb-6">
            <div class="flex-shrink-0">
              <div class="rounded-full p-3" style="background: #fef2f2">
                <svg
                  class="h-7 w-7"
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
            </div>
            <div class="flex-1">
              <h4 class="text-base font-bold mb-2" style="color: #002147">
                Delete "{{ deletingOfficer?.rank_full_name }}"?
              </h4>
              <p class="text-sm leading-relaxed" style="color: #6b7280">
                This action cannot be undone. The officer record will be permanently removed from
                the system.
              </p>
            </div>
          </div>

          <div class="flex gap-3">
            <button
              @click="showDeleteConfirm = false"
              class="flex-1 font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg border-2"
              style="background: #ffffff; color: #002147; border-color: #e5e7eb"
            >
              Cancel
            </button>
            <button
              @click="deleteOfficer"
              class="flex-1 text-white font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg"
              style="background: #dc2626"
            >
              Delete
            </button>
          </div>
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
        class="relative bg-white rounded-2xl max-w-md w-full mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <!-- Modal Header with gradient -->
        <div
          class="relative px-8 pt-8 pb-6"
          style="background: linear-gradient(135deg, #002147 0%, #004595 100%)"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="rounded-lg p-2.5" style="background: rgba(255, 255, 255, 0.15)">
                <svg
                  class="w-6 h-6 text-white"
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
              </div>
              <h3 class="text-xl font-bold text-white uppercase tracking-wide">
                Logout Confirmation
              </h3>
            </div>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="px-8 py-6">
          <div class="flex items-start gap-4 mb-6">
            <div class="flex-shrink-0">
              <div class="rounded-full p-3" style="background: #fef2f2">
                <svg
                  class="h-7 w-7"
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
            </div>
            <div class="flex-1">
              <h4 class="text-base font-bold mb-2" style="color: #002147">
                Are you sure you want to logout?
              </h4>
              <p class="text-sm leading-relaxed" style="color: #6b7280">
                You will be signed out from the admin dashboard and redirected to the login page.
              </p>
            </div>
          </div>

          <!-- Important Info Box -->
          <div
            class="rounded-lg p-4 mb-6 border-l-4"
            style="background: #f0f9ff; border-left-color: #002147"
          >
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" style="color: #002147" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="text-xs font-semibold" style="color: #002147">
                You can login again anytime using your credentials
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3">
            <button
              @click="showLogoutConfirm = false"
              class="flex-1 font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg border-2"
              style="background: #ffffff; color: #002147; border-color: #e5e7eb"
            >
              <div class="flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Cancel
              </div>
            </button>
            <button
              @click="handleLogout"
              class="flex-1 text-white font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg"
              style="background: #dc2626"
            >
              <div class="flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                Logout
              </div>
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

      <div class="grid grid-cols-4 h-16" style="background: #ffffff">
        <!-- Overview -->
        <router-link
          to="/admin-dashboard"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300"
        >
          <div
            class="absolute inset-0 bg-gray-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
          ></div>
          <svg
            class="w-6 h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300"
            style="color: #6b7280"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            ></path>
          </svg>
          <span class="text-xs font-semibold relative z-10 tracking-wide" style="color: #6b7280"
            >Overview</span
          >
        </router-link>

        <!-- Records -->
        <router-link
          to="/records"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300"
        >
          <div
            class="absolute inset-0 bg-gray-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
          ></div>
          <svg
            class="w-6 h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300"
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
          <span class="text-xs font-semibold relative z-10 tracking-wide" style="color: #6b7280"
            >Records</span
          >
        </router-link>

        <!-- Officers -->
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
            class="w-6 h-6 mb-0.5 relative z-10 transform transition-transform duration-300"
            style="color: #004595"
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
          <span class="text-xs font-bold relative z-10 tracking-wide" style="color: #003d82"
            >Officers</span
          >
        </div>

        <!-- Logout -->
        <button
          @click="showLogoutConfirm = true"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent active:scale-95 transition-all duration-300"
        >
          <div
            class="absolute inset-0 bg-red-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
          ></div>
          <svg
            class="w-6 h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300"
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
          <span class="text-xs font-semibold relative z-10 tracking-wide" style="color: #dc2626"
            >Logout</span
          >
        </button>
      </div>
    </nav>

    <!-- Alert Modal -->
    <AlertModal />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabaseClient'
import { useAlert } from '../composables/useAlert'
import AlertModal from '../components/ui/AlertModal.vue'

const router = useRouter()
const { showSuccess, showError } = useAlert()

// Data
const officers = ref([])
const searchQuery = ref('')
const todayAttendanceUserIds = ref([])
const statusFilter = ref('all')
const recentCheckIns = ref([])
const showLogoutConfirm = ref(false)
const showAddModal = ref(false)
const showEditModal = ref(false)
const showDeleteConfirm = ref(false)
const newOfficer = ref({ name: '', badge_number: '' })
const editingOfficer = ref({ id: null, name: '', badge_number: '' })
const deletingOfficer = ref(null)

// Computed
const compliedOfficers = computed(() => {
  return officers.value.filter((o) => o.hasAttendanceToday)
})

const noncompliantOfficers = computed(() => {
  return officers.value.filter((o) => !o.hasAttendanceToday)
})

const filteredOfficers = computed(() => {
  let filtered = officers.value

  // Apply status filter
  if (statusFilter.value === 'complied') {
    filtered = compliedOfficers.value
  } else if (statusFilter.value === 'noncompliant') {
    filtered = noncompliantOfficers.value
  }

  // Apply search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((officer) => officer.rank_full_name.toLowerCase().includes(query))
  }

  return filtered
})

const displayedOfficers = computed(() => filteredOfficers.value)

// Format time helper
const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

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
      .select(
        `
                *,
                users (
                    id,
                    rank_full_name
                )
            `,
      )
      .gte('created_at', today.toISOString())
      .lt('created_at', tomorrow.toISOString())
      .order('created_at', { ascending: false })

    if (attendanceError) throw attendanceError

    todayAttendanceUserIds.value = attendance?.map((a) => a.user_id) || []

    // Map recent check-ins with officer names
    recentCheckIns.value = (attendance || []).slice(0, 10).map((record) => ({
      id: record.id,
      officerName: record.users?.rank_full_name || 'Unknown Officer',
      created_at: record.created_at,
      user_id: record.user_id,
    }))

    // Map officers with attendance status
    officers.value = (users || []).map((user) => ({
      ...user,
      hasAttendanceToday: todayAttendanceUserIds.value.includes(user.id),
    }))
  } catch (error) {
    console.error('Error fetching officers:', error)
  }
}

// Open edit modal
const openEditModal = (officer) => {
  editingOfficer.value = {
    id: officer.id,
    name: officer.rank_full_name,
    badge_number: officer.badge_number || '',
  }
  showEditModal.value = true
}

// Open delete confirmation
const openDeleteConfirm = (officer) => {
  deletingOfficer.value = officer
  showDeleteConfirm.value = true
}

// Add new officer
const addOfficer = async () => {
  if (!newOfficer.value.name.trim()) {
    showError({ title: 'Validation Error', message: 'Please enter an officer name' })
    return
  }

  try {
    const officerData = {
      rank_full_name: newOfficer.value.name.trim(),
    }

    // Only include badge_number if provided
    if (newOfficer.value.badge_number.trim()) {
      officerData.badge_number = newOfficer.value.badge_number.trim()
    }

    const { data, error } = await supabase.from('users').insert([officerData]).select()

    if (error) throw error

    // Add to local officers list
    officers.value.push({
      ...data[0],
      hasAttendanceToday: false,
    })

    // Reset form and close modal
    newOfficer.value = { name: '', badge_number: '' }
    showAddModal.value = false
    showSuccess({ title: 'Success', message: 'Officer added successfully!' })
  } catch (error) {
    console.error('Error adding officer:', error)
    showError({ title: 'Error', message: 'Failed to add officer: ' + error.message })
  }
}

// Update officer
const updateOfficer = async () => {
  if (!editingOfficer.value.name.trim()) {
    showError({ title: 'Validation Error', message: 'Please enter an officer name' })
    return
  }

  try {
    const updateData = {
      rank_full_name: editingOfficer.value.name.trim(),
    }

    // Only include badge_number if provided
    if (editingOfficer.value.badge_number.trim()) {
      updateData.badge_number = editingOfficer.value.badge_number.trim()
    }

    const { error } = await supabase
      .from('users')
      .update(updateData)
      .eq('id', editingOfficer.value.id)

    if (error) throw error

    // Update local list
    const index = officers.value.findIndex((o) => o.id === editingOfficer.value.id)
    if (index !== -1) {
      officers.value[index].rank_full_name = editingOfficer.value.name.trim()
      if (editingOfficer.value.badge_number.trim()) {
        officers.value[index].badge_number = editingOfficer.value.badge_number.trim()
      }
    }

    // Reset and close modal
    editingOfficer.value = { id: null, name: '', badge_number: '' }
    showEditModal.value = false
    showSuccess({ title: 'Success', message: 'Officer updated successfully!' })
  } catch (error) {
    console.error('Error updating officer:', error)
    showError({ title: 'Error', message: 'Failed to update officer: ' + error.message })
  }
}

// Delete officer
const deleteOfficer = async () => {
  if (!deletingOfficer.value) return

  try {
    // Delete from Supabase
    const { error } = await supabase.from('users').delete().eq('id', deletingOfficer.value.id)

    if (error) {
      console.error('Supabase delete error:', error)
      throw error
    }

    console.log('Officer deleted from Supabase:', deletingOfficer.value.id)

    // Remove from local list
    officers.value = officers.value.filter((o) => o.id !== deletingOfficer.value.id)

    // Reset and close modal
    deletingOfficer.value = null
    showDeleteConfirm.value = false
    showSuccess({ title: 'Success', message: 'Officer deleted successfully!' })
  } catch (error) {
    console.error('Error deleting officer:', error)
    showError({ title: 'Error', message: 'Failed to delete officer: ' + error.message })
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

  await fetchOfficers()
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
