<template>
    <form name="contact" method="POST" data-netlify="true" action="https://formspree.io/f/xrgnyjkl">
        <input type="hidden" name="form-name" value="contact" />
        <p>
            <label>Nom: <input type="text" name="name" required /></label>
        </p>
        <p>
            <label>Email: <input type="email" name="email" required /></label>
        </p>
        <p>
            <label>Message: <textarea name="message" required></textarea></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
</template>

<!-- <script setup>
import { useContactFormStore } from '../stores/ContactFormStore';

const contactStore = useContactFormStore();
</script> -->