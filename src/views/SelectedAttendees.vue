<template>
    <div class="w-screen]">
        <div
            class="mx-5 text-black justify-between flex flex-col md:flex-row gap-3 w-full md:w-full lg:w-1/2 md:mx-auto mt-4">
            <router-link class="bg-white text-black px-4 w-full py-3 rounded-lg border-none" to="/">Home</router-link>
            <router-link class="bg-white text-black px-4 w-full py-3 rounded-lg border-none" to="/members">Registered
                Members</router-link>

        </div>
        <div class="">
            <h1 class="text-4xl font-bold text-center my-3">Selected Attendees: <small class="text-xs">Haha, 😆 this is
                    for fun, first come first serve it is</small></h1>
            <ul class="px-2 flex flex-col md:flex-row gap-3">
                <li v-for="attendee in selectedAttendees" :key="attendee.id"
                    class="w-full md:w-[500px] flex flex-col bg-gray-600 hover:bg-blue-700 md:flex-row my-1 px-3 py-2 rounded-lg">
                    <p style="width: 200px;">😇{{ attendee.name }}</p>
                    <p style="width: 500px;">☕{{ attendee.specialization }}</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const selectedAttendees = ref([]);
const selectAttendees = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/random-attendees`);
        selectedAttendees.value = response.data;
    } catch (error) {
        console.error('Error fetching attendees:', error);
    }
}

onMounted(() => {
    selectAttendees()
})
</script>

<style lang="scss" scoped></style>