<template>
  <div
    class="border-gray-300 border-2 rounded hover:bg-gray-300 filter hover:shadow-2xl h-64 w-80 p-2"
  >
    <div class="text-xl">
      <slot name="title"></slot>
    </div>
    <div class="text-gray-400">
      <slot name="subtitle"></slot>
    </div>
    <div class="mt-2">
      <slot></slot>
    </div>
    <div class="mt-8">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
