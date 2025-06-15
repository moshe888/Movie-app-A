<template>
  <input
    v-model="modelValue"
    @input="$emit('update:modelValue', modelValue)"
    placeholder="search movie..."
    class="search-input"
  />
</template>

<script setup lang="ts">
const modelValue = defineModel<string>()
</script>

<style scoped>
.search-input {
  width: 85%;
  padding: 0.5rem;
  margin: 1rem 0;
  font-size: 1rem;
  /* border: 1px solid #ccc; */
  border-radius: 4px;
}
</style>
