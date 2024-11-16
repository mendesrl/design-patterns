<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Hero } from './types/Hero';
import HelloWorld from './components/HelloWorld.vue'
const heroes = ref < Hero[] > ([]);
const loading = ref(true);
const error = ref < string | null > (null);
const token = 'f3f4548cc668c3a1a97fb5bf79567f27';

onMounted(async () => {
  try {
    const response = await axios.get(`https://www.superheroapi.com/api.php/${token}/search/a`);
    heroes.value = response.data.results;
  } catch (err) {
    error.value = 'Erro ao carregar a lista de super-heróis.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <h1>Lista de Super-Heróis</h1>
  <div v-if="loading">Carregando...</div>
  
  <div v-else>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Hero name</th>
            <th>Biography</th>
            <th>Connections</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="hero in heroes" :key="hero.id">
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle h-12 w-12">
                    <img :src="hero.image.url" :alt="hero.name" />
                    alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ hero.name }}</div>
                  <div class="text-sm opacity-50">{{ hero.biography['place-of-birth'] }}</div>
                </div>
              </div>
            </td>
            <td>
              {{ hero.biography['full-name'] }}
              <br />
              <span class="badge badge-ghost badge-sm">{{ hero.biography.publisher }}</span>
            </td>
            <td>{{ hero.connections.relatives }}</td>

          </tr>
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>

  <div v-if="error" class="error">{{ error }}</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
