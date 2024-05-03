<template>
    <div>
        <div class="container">
            <div>
                <div v-if="isFormOpen" class=" box">
                    <h1>Event Attendees</h1>

                    <form id="attendee-form" @submit.prevent="addAttendee">
                        <label for="name">Name:</label>
                        <input type="text" id="name" v-model="attendee.name" required><br>

                        <br>
                        <label for="gender">Gender:</label>
                        <select id="gender" v-model="attendee.gender">

                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select><br>
                        <br>
                        <label for="specialization">Field of Specialization:</label>
                        <input type="text" id="specialization" v-model="attendee.specialization"><br>

                        <span v-if="loading" class="loader"></span>
                        <button v-else type="submit">Add Attendee</button>
                    </form>
                </div>
                <div class="box" v-else>
                    <h1>Selected Attendees:</h1>
                    <ul>
                        <li v-for="attendee in selectedAttendees" :key="attendee.id" class="list">
                            <p style="width: 200px;">{{ attendee.name }}</p>
                            <p style="width: 500px;">{{ attendee.specialization }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="timer" v-if="isFormOpen">
            <h4>Registration Closes in</h4>
            <p>{{ countdown }}</p>
        </div>
    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const isFormOpen = ref(true);
const countdown = ref('');
const loading = ref(false);

const attendee = ref({
    name: '',
    gender: 'Female', // default gender
    specialization: ''
});



const selectedAttendees = ref([]);




const addAttendee = async () => {

    try {
        loading.value = true;
        console.log('Adding attendee:', attendee.value);
        const response = await axios.post('http://localhost:3000/api/attendees', attendee.value);
        selectedAttendees.value.push(response.data); // Assuming the endpoint returns the added attendee
        attendee.value = { name: '', gender: 'male', specialization: '' }; // Reset form fields
    } catch (error) {
        console.error('Error adding attendee:', error);
    } finally {
        loading.value = false;
    }
};



const selectAttendees = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/random-attendees');
        selectedAttendees.value = response.data;
    } catch (error) {
        console.error('Error fetching attendees:', error);
    }
}


const updateTime = () => {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(19, 0, 0, 0); // Set time to 7:00 PM today
    if (now < targetTime) {
        const timeDifference = targetTime - now;
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        countdown.value = `${hours}h ${minutes}m ${seconds}s`;
    } else {
        isFormOpen.value = false; // If the target time has already passed, close the form
    }
};



onMounted(() => {
    selectAttendees()
    setInterval(updateTime, 1000); // Update time every second
});


</script>

<style scoped></style>