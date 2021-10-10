<template>
  <div>
    <mm-map :backgroundmap-metadata="gridmapMetadata" @cellhover="hoverCell=$event" @click="presentCellDetails($event)">
      <mm-marker :world-point="worldPoint" />
      <!-- <mm-dialog is-open>
        asdf
      </mm-dialog> -->
    </mm-map>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import MMMap from '/src/components/mm-map.vue'
  import MMDialog from '/src/components/mm-dialog.vue'
  import MMMarker from '/src/components/mm-marker.vue'

  import gridmapMetadata from '/sandbox/assets/gridmap-metadata.json'

  import { WorldPoint } from 'morromapper-logic'

  export default defineComponent({
    components: {
      "mm-map": MMMap,
      "mm-marker": MMMarker,
      "mm-dialog": MMDialog
    },
    data() {
      return {
        gridmapMetadata: gridmapMetadata,
        worldPoint: new WorldPoint({
          x: 18913.09, y: -102616.56, z: 356.87198
        })
      };
    }
  });
</script>
