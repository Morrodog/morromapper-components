<!-- Represents an L.Marker placed onto the map using a WorldPoint -->
<template><div></div></template>
<script lang="ts">
  import { defineComponent, h } from 'vue'

  import { WorldPoint } from 'morromapper-logic'

  import leafletPointFromRasterPoint from '/src/utils/leaflet-point-from-raster-point.ts'
  import rasterPointFromWorldPoint   from '/src/utils/raster-point-from-world-point.ts'

  export default defineComponent({
    inject: ['l', 'backgroundmapMetadata'],
    props: {
      worldPoint: {
        type: WorldPoint,
        required: true
      }
    },
    data() {
      return {
        marker: null
      };
    },
    beforeUnmount() {
      this.l().mapInit.then((map) => {
        map.removeLayer(this.marker);
      });
    },
    watch: {
      worldPoint: {
        immediate: true,
        handler(newVal) {
          console.log(newVal);
          this.marker = L.marker(leafletPointFromRasterPoint(rasterPointFromWorldPoint(newVal, this.backgroundmapMetadata)));
          this.l().mapInit.then((map) => {
            this.marker.addTo(map);
          });
        }
      },
      marker(newVal) {
        this.l().mapInit.then((map) => {
          map.removeLayer(this.marker);
          newVal.addTo(map);
        });
      }
    }
  });
</script>
