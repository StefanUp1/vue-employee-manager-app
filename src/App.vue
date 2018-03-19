<template>
    <div id="app">
        <app-navbar></app-navbar>
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
    
export default {
    name: 'App',
    components: {
        appNavbar: Navbar
    }
}
</script>

