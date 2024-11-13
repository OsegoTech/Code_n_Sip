<template>
    <div class="bg-[#0b132b] min-h-screen text-white py-10">
      <!-- Header Section -->
      <div class="container mx-auto text-center mb-10">
        <h1 class="text-4xl font-bold mb-4">🚀 UpSkill</h1>
        <p class="text-gray-300 text-lg">Your journey to learn and explore new skills</p>
      </div>
  
      <!-- MS Learn Links Section -->
      <div class="container mx-auto md:w-3/5 lg:w-2/5 bg-[#1d2d50] rounded-lg p-6 mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-center">MS Learn Resources</h2>
        <div class="space-y-3">
          <a
            v-for="link in links"
            :key="link.title"
            :href="link.link"
            target="_blank"
            class="block bg-[#C2E7D9] px-4 py-3 rounded-lg text-gray-800 hover:bg-[#a3dac7] transition"
          >
            <div class="flex justify-between items-center">
              <p>{{ link.title }}</p>
              <span>🖊️</span>
            </div>
          </a>
        </div>
      </div>
  
      <!-- YouTube Videos Section -->
      <div class="container mx-auto md:w-3/5 lg:w-2/5 bg-[#1d2d50] rounded-lg p-6 mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-center">YouTube Videos</h2>
        <div class="space-y-3">
          <iframe
            v-for="video in videos"
            :key="video.title"
            :src="video.link"
            class="w-full h-48 rounded-lg"
            allowfullscreen
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
  
      <!-- Social Links Section -->
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-semibold mb-4">Connect with Us</h2>
        <div class="flex justify-center space-x-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.link"
            target="_blank"
            class="text-lg hover:text-[#C2E7D9] transition"
          >
            {{ social.icon }}
          </a>
        </div>
      </div>

    </div>
    <div>
      <p class="text-center ">
        Made with ❤️ by <a href="https://github.com/OsegoTech" target="_blank">Omollo</a>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // MS Learn links
  const links = ref([
    {
      title: 'Python for Beginners',
      link: 'https://learn.microsoft.com/en-us/training/paths/beginner-python/?wt.mc_id=studentamb_269632'
    },
    {
      title: 'Python in Space Exploration',
      link: 'https://learn.microsoft.com/en-us/training/paths/introduction-python-space-exploration-nasa/'
    },
    {
      title: 'Azure Static Web Apps',
      link: 'https://learn.microsoft.com/en-us/training/paths/azure-static-web-apps/?wt.mc_id=studentamb_269632'
    },
    {
      title: 'Azure DevOps',
      link: 'https://learn.microsoft.com/en-us/training/paths/evolve-your-devops-practices/?wt.mc_id=studentamb_269632'
    }
  ])
  
  // YouTube video links
  const videos = ref([
    {
      title: 'Deploy Node App to Azure',
      link: 'https://www.youtube.com/embed/rHbs6VLgdv0'
    },
    {
      title: 'Connect MongoDB to Node',
      link: 'https://www.youtube.com/embed/uJlzYLaarNs'
    }
  ])
  
  // Social media links
  const socialLinks = ref([
    {
      name: 'Twitter',
      icon: '🐦',
      link: 'https://twitter.com/osego_baba'
    },
    {
      name: 'LinkedIn',
      icon: '🔗',
      link: 'https://linkedin.com/in/omollo-cliff'
    },
    {
      name: 'GitHub',
      icon: '💻',
      link: 'https://github.com/OsegoTech'
    }
  ])
  </script>
  
  <style scoped>
  /* Optional additional styling */
  </style>
  