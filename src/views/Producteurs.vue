<template>
<h2>Nos Producteurs</h2>

<MapPoints />

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MapPoints from "@/components/MapPoints.vue"; // @ is an alias to /src

@Options({
  components: {
    MapPoints
  },
})
export default class Header extends Vue {}
</script>
