<template>
  <component :is="as"> {{ label }} </component>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  as: string
}>()
</script>
