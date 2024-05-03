<template>
    <div>
        <div class="text-black"
            style="display: flex; align-items: center; justify-content: space-between; width: 700px; margin:  20px auto; ">
            <router-link
                style="background-color: white; padding: 10px 15px; border-radius: 15px; text-decoration: none;"
                to="/">Home</router-link>
            <router-link
                style="background-color: white; padding: 10px 15px; border-radius: 15px; text-decoration: none;"
                to="/members">Registered Members</router-link>

        </div>
        <div class="">
            <h1 class="">Selected Attendees:</h1>
            <ul>
                <li v-for="attendee in selectedAttendees" :key="attendee.id" class="list">
                    <p style="width: 200px;">{{ attendee.name }}</p>
                    <p style="width: 500px;">{{ attendee.specialization }}</p>
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