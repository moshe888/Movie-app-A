<template>
  <div class="search-wrapper">
    <input
      v-model="modelValue"
      @input="$emit('update:modelValue', modelValue)"
      placeholder="🔍 Search movie..."
      class="search-input"
    />
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>()
</script>

<style scoped>
.search-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 999px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
    background-color: #fff;
  color: #111;
  border: 1px solid #ccc;
}

.search-input:focus {
  outline: none;
  border-color: #0077cc;
  box-shadow: 0 0 0 3px rgba(0, 119, 204, 0.2);
}
</style>
