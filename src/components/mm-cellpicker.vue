<template>
  <div>
    <mm-map :backgroundmap-metadata="backgroundmapMetadata" @click="toggleCellSelection($event)">
      <mm-blob v-for="selectedCell in selectedCells" :cells="[selectedCell]" color="#000000" :has-border="true" />
    </mm-map>
  </div>
</template>
<script>
  import { defineComponent } from 'vue'

  import MMBlob from './mm-blob.vue'
  import MMMap  from './mm-map.vue'

  import cellpickerColor from '../constants/cellpicker-color.ts'

  import { CellXY } from 'morromapper-logic'
  
  export default defineComponent({
    components: {
      'mm-map': MMMap,
      'mm-blob': MMBlob,
    },
    props: {
      backgroundmapMetadata: {
        type: Object,
        required: true
      },
      /**
       * Expects to be used with a 2-way binding (i.e. `v-model:selected-cells="..."`)
       */
      selectedCells: {
        type: Array,
        required: true
      }
    },
    methods: {
      toggleCellSelection(cell) {
        var selectedCellIndex = this.selectedCells.findIndex((selectedCell) => {
          return (cell.x === selectedCell.x && cell.y === selectedCell.y);
        });
        if(selectedCellIndex !== -1) {
          this.autoSelectedCells.splice(selectedCellIndex, 1);
        } else {
          this.autoSelectedCells.push(cell);
        }
      }
    },
    computed: {
      autoSelectedCells: {
        get() {
          return this.selectedCells;
        },
        set(newVal) {
          this.$emit('update:selectedCells', newVal);
        },
      },
    }
  })
</script>
