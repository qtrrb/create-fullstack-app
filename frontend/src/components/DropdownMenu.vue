<template>
  <div class="dropdown">
    <slot name="toggle"></slot>
    <div class="dropdown-menu">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style>
.dropdown {
  position: relative;
}

.dropdown-menu {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: calc(100% - 0.5rem);
  right: 0;
  min-width: 10rem;
  padding: 0.5rem;
  display: block;
  border-radius: 0.3rem;
  background-color: #fafaf9;
  border: 1px solid #e5e7eb;
  transition: top 0.08s, visibility 0s, opacity 0.08s;
}

.dropdown:hover .dropdown-menu {
  visibility: visible;
  top: 100%;

  opacity: 1;
}
</style>
