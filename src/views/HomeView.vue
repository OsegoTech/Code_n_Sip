<template>
    <div>
        <div class="container">
            <div>
                <div class=" box">
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
                        <button v-else type="submit" :disabled="!isFormOpen">Add Attendee</button>
                        <div class="text-black" style="display: flex; align-items: center; justify-content: space-between;">
                            <router-link style="background-color: white; padding: 10px 15px; border-radius: 15px; text-decoration: none;" to="/members">Registered Members</router-link>
                            <router-link style="background-color: white; padding: 10px 15px; border-radius: 15px; text-decoration: none;" to="/selected">Selected Members</router-link>

                        </div>
                    </form>
                </div>

            </div>
        </div>
        <div class="timer" v-if="!isFormOpen">
            <h4>Registration Closes in</h4>
            <p>{{ countdown }}</p>
        </div>
    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

const isFormOpen = ref(true);
const countdown = ref('');
const loading = ref(false);
const submittedOnce = ref(false);
const newAttendee = ref({});

// Function to check if the form has been submitted once
const checkSubmissionStatus = () => {
    if (localStorage.getItem('submittedOnce')) {
        submittedOnce.value = true;
        isFormOpen.value = false; // Close the form if submitted once
    }
};

const attendee = ref({
    name: '',
    gender: 'Female', // default gender
    specialization: ''
});
const addAttendee = async () => {
    if (submittedOnce.value) {
        toast.error('You have already submitted the form');
        return;
    }

    try {
        loading.value = true;
        console.log('Adding attendee:', attendee.value);
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/attendees`, attendee.value);
        newAttendee.value.push(response.data); // Assuming the endpoint returns the added attendee
        toast.success('Hooraay! you could be selected😀');
        attendee.value = { name: '', gender: 'male', specialization: '' }; // Reset form fields
        localStorage.setItem('submittedOnce', true); // Set the submittedOnce flag in localStorage
    } catch (error) {
        console.error('Error adding attendee:', error);
    } finally {
        loading.value = false;
    }
};






const updateTime = () => {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(22, 0, 0, 0); // Set time to 7:00 PM today
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
    checkSubmissionStatus();
    setInterval(updateTime, 1000); // Update time every second
});


</script>

<style scoped></style>