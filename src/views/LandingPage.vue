<template>
    <div class="min-h-screen bg-gray-900 text-gray-100">
      <!-- Navigation -->
      <nav class="bg-gray-800/95 backdrop-blur-sm fixed w-full z-50 transition-all duration-300" 
           :class="{ 'shadow-2xl': scrolled }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  NjiaDigital
                </h1>
              </div>
            </div>
  
            <!-- Mobile menu button -->
            <div class="flex items-center md:hidden">
              <button @click="mobileMenuOpen = !mobileMenuOpen" 
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                <svg class="h-6 w-6" :class="{'hidden': mobileMenuOpen, 'block': !mobileMenuOpen}" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg class="h-6 w-6" :class="{'block': mobileMenuOpen, 'hidden': !mobileMenuOpen}" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
  
            <!-- Desktop menu -->
            <div class="hidden md:flex md:items-center md:space-x-4">
              <template v-for="item in menuItems" :key="item.name">
                <RouterLink :to="{name: item.href}" 
                   class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
                   :class="{ 'bg-gray-700': item.current }">
                  {{ item.name }}
                </RouterLink>
              </template>
            </div>
          </div>
        </div>
  
        <!-- Mobile menu -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform -translate-y-4 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-4 opacity-0"
        >
          <div v-if="mobileMenuOpen" class="md:hidden bg-gray-800">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <RouterLink v-for="item in menuItems" 
                 :key="item.name"
                 :to="{name: item.href}"
                 class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
                 :class="{ 'bg-gray-700': item.current }">
                {{ item.name }}
              </RouterLink>
            </div>
          </div>
        </Transition>
      </nav>
  
      <!-- Hero Section -->
      <div class="relative pt-16 overflow-hidden">
        <div class="relative">
          <div class="absolute inset-0">
            <img src="https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd33d49a346d9be0b075ea_65dd12fa299e167d189f00f7-fed9c2116dfcf56370cea3063f4e88fa.jpeg" alt="Tech Background" 
                 class="w-full h-full object-cover filter brightness-50" />
            <div class="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900"></div>
          </div>
  
          <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <Transition
              appear
              enter-active-class="transition duration-1000 ease-out"
              enter-from-class="transform translate-y-8 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
            >
              <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span class="block">Your Digital Journey</span>
                <span class="block text-blue-400">Starts Here</span>
              </h1>
            </Transition>
  
            <Transition
              appear
              enter-active-class="transition duration-1000 delay-300 ease-out"
              enter-from-class="transform translate-y-8 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
            >
              <p class="mt-6 text-xl text-gray-300 max-w-3xl">
                Empowering Kenya's tech community through education, opportunities, and innovation. 
                Join us in shaping the future of technology.
              </p>
            </Transition>
  
            <div class="mt-10 flex flex-wrap gap-4">
              <Transition
                appear
                enter-active-class="transition duration-1000 delay-500 ease-out"
                enter-from-class="transform translate-y-8 opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
              >
                <a href="#" class="inline-flex items-center px-6 py-3 border-0 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </Transition>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Features Section -->
      <div class="py-24 bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">What We Offer</h2>
            <p class="mt-4 text-xl text-gray-400">Everything you need to grow in tech</p>
          </div>
  
          <div class="mt-20">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <template v-for="(feature, index) in features" :key="feature.title">
                <Transition
                  appear
                  :enter-active-class="`transition duration-1000 delay-[${index * 200}ms] ease-out`"
                  enter-from-class="transform translate-y-8 opacity-0"
                  enter-to-class="transform translate-y-0 opacity-100"
                >
                  <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div class="relative px-6 py-8 bg-gray-900 rounded-lg shadow-xl transform transition duration-300 hover:-translate-y-2">
                      <div class="space-y-4">
                        <span class="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-md">
                          <component :is="feature.icon" class="h-6 w-6 text-blue-400" />
                        </span>
                        <h3 class="text-xl font-medium text-white">{{ feature.title }}</h3>
                        <p class="text-gray-400">{{ feature.description }}</p>
                      </div>
                    </div>
                  </div>
                </Transition>
              </template>
            </div>
          </div>
        </div>
      </div>
  
      <!-- CTA Section -->
      <div class="relative bg-gray-900">
        <div class="relative h-80 overflow-hidden">
          <img src="https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd33d49a346d9be0b075ea_65dd12fa299e167d189f00f7-fed9c2116dfcf56370cea3063f4e88fa.jpeg" alt="Technology" 
               class="w-full h-full object-cover filter brightness-50" />
          <div class="absolute inset-0 bg-blue-600 mix-blend-multiply"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          
          <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col items-center justify-center h-full text-center">
            <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span class="block">Ready to dive in?</span>
              <span class="block text-blue-300">Join our tech community today.</span>
            </h2>
            <div class="mt-8">
              <a href="#" 
                 class="inline-flex items-center px-6 py-3 border-0 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Sign up now
                <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="bg-gray-900">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div class="col-span-2 md:col-span-1">
              <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                NjiaDigital
              </h1>
              <p class="mt-4 text-gray-400">
                Empowering Kenya's tech ecosystem through knowledge sharing and community building.
              </p>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul class="mt-4 space-y-4">
                <li v-for="link in footerLinks.resources" :key="link">
                  <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                    {{ link }}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul class="mt-4 space-y-4">
                <li v-for="link in footerLinks.company" :key="link">
                  <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                    {{ link }}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul class="mt-4 space-y-4">
                <li v-for="link in footerLinks.legal" :key="link">
                  <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                    {{ link }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-12 border-t border-gray-800 pt-8">
            <p class="text-base text-gray-400 text-center">
              © 2024 NjiaDigital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { Laptop, Calendar, BookOpen } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
  
  // Reactive state
  const mobileMenuOpen = ref(false);
  const scrolled = ref(false);
  
  // Menu items
  const menuItems = [
    { name: 'Home', href: 'Home', current: true },
    // { name: 'Blog', href: '#', current: false },
    // { name: 'Events', href: '#', current: false },
    { name: 'Resources', href: 'Resources', current: false },
    // { name: 'About', href: '#', current: false }
  ];
  
  // Features data
  const features = [
    {
      title: 'Tech Blog',
      description: 'Stay updated with the latest tech trends and insights from Kenya and beyond.',
      icon: Laptop
    },
    {
      title: 'Tech Events',
      description: 'Discover and participate in local tech events, meetups, and conferences.',
      icon: Calendar
    },
    {
      title: 'Learning Resources',
      description: 'Access quality educational materials and tutorials for your tech journey.',
      icon: BookOpen
    }
  ];
  
  // Footer links
  const footerLinks = {
    resources: ['Blog', 'Events', 'Tutorials', 'Community'],
    company: ['About', 'Careers', 'Contact', 'Partners'],
    legal: ['Privacy', 'Terms', 'Cookie Policy']
  };
  
  // Scroll handler for navbar
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20;
  };
  
  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>