<template>
    <div class="container">
        register Page
        <div class="w-50">
            <input v-model="name" type="text" class="form-control mt-3" placeholder="name">
            <input v-model="email" type="email" class="form-control mt-3" placeholder="email">
            <input v-model="password" type="password" class="form-control mt-3" placeholder="password">
            <input v-model="password_confirmation" type="password" class="form-control mt-3" placeholder="password confirmation">
            <input @click.prevent="store()" type="submit" class="btn btn-success mt-3" value="add">
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterComponent',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        store() {
            this.axios.post('/api/users', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            })
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token);
                    this.$router.push({name: 'personal.index'});
                });
        }
    }
}
</script>

<style scoped>

</style>
