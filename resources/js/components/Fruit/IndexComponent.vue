<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="fruit in fruits" :key="fruit.id">
                    <th scope="row">{{ fruit.id }}</th>
                    <td>{{ fruit.name }}</td>
                    <td>{{ fruit.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from '../../api.js';

export default {
    name: 'IndexComponent',
    data() {
        return {
            fruits: null,
        }
    },
    mounted() {
        this.getFruits();
    },
    methods: {
        getFruits() {
            api.get('/api/auth/fruits/')
                .then(response => {
                    this.fruits = response.data.data;
                });
        }
    },
}
</script>

<style scoped></style>
