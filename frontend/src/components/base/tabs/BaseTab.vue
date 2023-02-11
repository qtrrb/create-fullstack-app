<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  tabs: { type: Array<string>, required: true },
});

const currentTab = ref<string>(props.tabs[0]);

defineExpose({
  currentTab,
});
</script>

<template>
  <div class="tab-container">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="currentTab == tab ? 'focus' : 'plain'"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
  </div>
</template>

<style scoped>
.tab-container {
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  border: #e5e7eb 1px solid;
  border-radius: 8px;
  padding: 0 3px;
}

.tab-container >>> button {
  border-radius: 5px;
}

button {
  box-sizing: border-box;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
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

.focus {
  background-color: #1c1917;
  color: #fafaf9;
  border: #1c1917 1px solid;
}
</style>
