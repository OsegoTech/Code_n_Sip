<template>
    <div class="w-screen">
        <div class="text-black justify-between flex flex-col md:flex-row gap-3 w-full md:w-full lg:w-1/2 mx-auto mt-4"
            style=" ">
            <router-link
                style="background-color: white; padding: 10px 15px; border-radius: 15px; text-decoration: none;"
                to="/">Home</router-link>
            <button class="bg-white" style="padding: 10px 15px; border-radius: 15px;">Total {{ attendees.length
                }}</button>
            <router-link
                style="background-color: white; padding: 10px 15px; border-radius: 15px; text-decoration: none;"
                to="/selected">Selected Members</router-link>

        </div>
        <div class="">
            <h1 class="text-4xl font-bold text-center my-3">Registered Members</h1>
            <ul class="px-2 flex flex-col md:flex-row gap-3">
                <li v-for="attendee in attendees" :key="attendee.id" class="w-full md:w-[500px] flex flex-col bg-gray-600 hover:bg-blue-700 md:flex-row my-1 px-3 py-2 rounded-lg">
                    <p class="w-[200px] ">👩‍💻-{{ attendee.name }}</p>
                    <p class="w-[500px] ">🧨{{ attendee.specialization }}</p>
                </li>
            </ul>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const attendees = ref([]);
const fetchAttendees = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/attendees`);
        attendees.value = response.data;
    } catch (error) {
        console.error('Error fetching attendees:', error);
    }
};

onMounted(() => {
    fetchAttendees();
});

</script>

<style lang="scss" scoped></style>