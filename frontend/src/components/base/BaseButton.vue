<script setup lang="ts">
defineProps<{
  size?: "lg" | "md" | "sm";
  variant?:
    | "solid"
    | "outline"
    | "soft"
    | "plain"
    | "danger"
    | "suggest"
    | "warning";
  href?: string;
}>();
</script>

<template>
  <a :class="[size, variant]" :href="href" v-if="href"><slot></slot></a>
  <button :class="[size, variant]" v-else><slot></slot></button>
</template>

<style scoped>
button {
  display: inline-flex;
  box-sizing: border-box;
  background-color: #1c1917;
  color: #fafaf9;
  border: #1c1917 1px solid;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  transition-property: color, background-color, border;
  transition-duration: 0.3s;
}

button:hover {
  background-color: #fafaf9;
  color: #1c1917;
}

button >>> svg {
  margin-right: 0.5rem;
}

a {
  display: inline-flex;
  box-sizing: border-box;
  background-color: #1c1917;
  color: #fafaf9;
  border: #1c1917 1px solid;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  transition-property: color, background-color, border;
  transition-duration: 0.3s;
}

a:hover {
  background-color: #fafaf9;
  color: #1c1917;
}

a >>> svg {
  margin-right: 0.5rem;
}

.lg {
  height: 3rem;
}

.md {
  height: 2.5rem;
}

.sm {
  height: 2rem;
}

.solid {
  background-color: #1c1917;
  color: #fafaf9;
  border: #1c1917 1px solid;
}

.solid:hover {
  background-color: #fafaf9;
  color: #1c1917;
}

.outline {
  background-color: transparent;
  color: #1c1917;
  border: #e5e7eb 1px solid;
}

.outline:hover {
  background-color: #f3f4f6;
}

.soft {
  background-color: #f3f4f6;
  color: #1c1917;
  border: #f3f4f6 1px solid;
}

.soft:hover {
  background-color: #e5e7eb;
  border: #e5e7eb 1px solid;
}

.plain {
  background-color: transparent;
  color: #1c1917;
  border: transparent 1px solid;
}

.plain:hover {
  background-color: #f3f4f6;
  border: #f3f4f6 1px solid;
}

.danger {
  background-color: #fee2e2;
  color: #ef4444;
  border: #ef4444 1px solid;
}

.danger:hover {
  background-color: #fecaca;
  color: #ef4444;
}

.suggest {
  background-color: #dcfce7;
  color: #22c55e;
  border: #22c55e 1px solid;
}

.suggest:hover {
  background-color: #bbf7d0;
  color: #22c55e;
}
.warning {
  background-color: #fef9c3;
  color: #eab308;
  border: #eab308 1px solid;
}

.warning:hover {
  background-color: #fef08a;
  color: #eab308;
}
</style>
