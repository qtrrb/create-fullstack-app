<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="switch">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
    />
    <span class="slider round"></span>
  </label>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 3.5rem;
  height: 2em;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e5e7eb;
  -webkit-transition: 0.1s;
  transition: 0.1s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 1.5rem;
  width: 1.5rem;
  left: 0.25rem;
  bottom: 0.25rem;
  background-color: #fafaf9;
  -webkit-transition: 0.1s;
  transition: 0.1s;
}
input:checked + .slider {
  background-color: #1c1917;
}
input:checked + .slider:before {
  -webkit-transform: translateX(1.5rem);
  -ms-transform: translateX(1.5rem);
  transform: translateX(1.5rem);
}
.slider.round {
  border-radius: 99999px;
}
.slider.round:before {
  border-radius: 99999px;
}
</style>
