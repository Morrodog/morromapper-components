<template>
  <div>
    <mm-map :backgroundmap-metadata="gridmapMetadata" @cellhover="hoverCell=$event" @click="presentCellDetails($event)">
      <mm-dialog is-open>
        asdf
      </mm-dialog>
    </mm-map>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import MMMap from '/src/components/mm-map.vue'
  import MMDialog from '/src/components/mm-dialog.vue'

  import gridmapMetadata from '/sandbox/assets/gridmap-metadata.json'

  export default defineComponent({
    components: {
      "mm-map": MMMap,
      "mm-dialog": MMDialog
    },
    data() {
      return {
        gridmapMetadata: gridmapMetadata,
      };
    }
  });
</script>
