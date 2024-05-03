<template>
    <div>
        <div class="box">
            <h1>Selected Attendees:</h1>
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
import {onMounted, ref} from "vue";
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

onMounted(()=>{
    selectAttendees()
})
</script>

<style lang="scss" scoped></style>