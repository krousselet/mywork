<template>
    <main>
        <div class="title-container">
            <h2>{{ generalStore.pages[2].label }}</h2>
        </div>
    </main>
    
</template>
<script setup>
import { useGeneralStore } from '@/stores/GeneralStore';
const generalStore = useGeneralStore();
</script>