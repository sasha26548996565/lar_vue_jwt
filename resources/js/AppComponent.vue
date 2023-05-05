<template>
    <div class="container">
        <router-link :to="{name: 'index'}">Home</router-link> <br>
        <router-link :to="{name: 'fruit.index'}">fr list</router-link><br>
        <template v-if="accessToken">
            <router-link :to="{name: 'personal.index'}">personal</router-link>
            <a href="#" @click.prevent="logout()">Logout</a>
        </template>
        <template v-else>
            <router-link :to="{name: 'user.register'}">Register</router-link>
            <router-link :to="{name: 'user.login'}">Login</router-link>
        </template>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
import api from '../js/api.js';


export default {
    name: 'AppComponent',
    data() {
        return {
            accessToken: '',
        }
    },
    mounted() {
        this.getAccessToken();
    },
    updated() {
        this.getAccessToken();
    },
    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token');
        },
        logout() {
            api.post('/api/auth/logout')
                .then(response => {
                    localStorage.removeItem('access_token');
                    this.$router.push({name: 'user.login'});
                })
        }
    }
}
</script>

<style scoped>

</style>
