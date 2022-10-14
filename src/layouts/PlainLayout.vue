<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

const linksList = [];

export default defineComponent({
  name: "PlainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
