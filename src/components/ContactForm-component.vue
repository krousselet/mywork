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
    width: 90%;
    height: 100%;
    padding: 5px;
    margin-top: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    height: 100%;
    animation: appear .5s ease forwards;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.075);
    border-radius: 7px;
    position: relative;
    @media (min-width: 991px) and (max-width: 1499px) {
        font-size: 32px;
        width: 75%;
    }
    @media (min-width: 1499px) and (max-width: 3080px) {
        font-size: 32px;
        width: 50%;
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
            width: 300px;
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
                border-bottom: 1px solid var(--secondary-color);
                width: 100%;
            }
            @media (min-width: 991px) {
                height: 300px;
            }
        }

    }

    button {
        margin-top: 50px;
        @media (min-width: 991px) {
                padding: 25px;
            }
    }

}
</style>