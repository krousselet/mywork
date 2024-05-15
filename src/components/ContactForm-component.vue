<template>
<main>
    <form name="contact" method="POST" data-netlify="true" action="https://formspree.io/f/xrgnyjkl">
        <input type="hidden" name="form-name" value="contact" />
        <div class="field-container">
            <label for="name">{{ contactStore.labels[0] }}</label><input type="text" name="name" id="name" required autocomplete="true" />
        </div>
        <div class="field-container">
            <label for="email">{{ contactStore.labels[1] }}</label><input type="email" name="email" required id="email" autocomplete="true" />
        </div>
        <div class="field-container">
            <label for="message">{{ contactStore.labels[2] }}</label><textarea name="message" id="message" required autocomplete="true"></textarea>
        </div>
            <button class="btn button" type="submit">Envoyer</button>
    </form>
</main>
</template>

<script setup>
import { useContactFormStore } from '../stores/ContactFormStore';

const contactStore = useContactFormStore();
</script>

<style lang="scss" scoped>
form {
    display: flex;
    font-size: 16px;
    width: 300px;
    margin-top: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    height: 100%;
    animation: appear .5s ease forwards;
    @media (min-width: 991px) {
        font-size: 32px;
    }

    .field-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 280px;
        margin: 0 auto;
        @media (min-width: 991px) {
        width: 500px
    }

        label, input {
            min-width: 150px;
            max-width: 294px;
            margin-bottom: 25px;
            transform: translateX(-100px);
            animation: translate-x .3s ease forwards;
        }

        input, textarea {
            border: 0;
            border-bottom: 1px solid var(--secondary-color);
            background-color: transparent;
            opacity: .2;

            &:active, &:focus {
                opacity: .5;
            }
        }
        textarea {
            transform: translateX(-100px);
            animation: translate-x .3s ease forwards;
            @media (min-width: 320px) and (max-width: 991px) {
                height: 125px;
                border: 1px solid var(--secondary-color);
                width: 100%;
            }
            @media (min-width: 991px) {
                height: 300px;
    }
        }

    }

    button {
        margin-top: 50px;
    }

}
</style>