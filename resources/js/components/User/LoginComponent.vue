<template>
    <div class="container">
        login
        <div class="w-50">
            <input v-model="email" type="email" class="form-control mt-3" placeholder="email">
            <input v-model="password" type="password" class="form-control mt-3" placeholder="password">
            <input @click.prevent="login()" type="submit" class="btn btn-success mt-3" value="add">
            <div class="text-danger" v-if="error">{{ error }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login() {
            this.axios.post('/api/auth/login', {
                email: this.email,
                password: this.password
            })
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token);
                    this.$router.push({name: 'personal.index'});
                })
                .catch(error => {
                    this.error = error.response.data.error;
                });
        }
    }
}
</script>

<style scoped>

</style>
