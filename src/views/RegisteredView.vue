<template>
    <div>
        <div class="box">
            <h1>Registered Members</h1>
            <ul>
                <li v-for="attendee in attendees" :key="attendee.id" class="list">
                    <p style="width: 200px;">{{ attendee.name }}</p>
                    <p style="width: 500px;">{{ attendee.specialization }}</p>
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