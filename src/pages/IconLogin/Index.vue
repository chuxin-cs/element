<template>
  <div>{{ name }}</div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "IconLogin",
  setup() {
    const name = ref("初心");

    return {
      name,
    };
  },
};
</script>
