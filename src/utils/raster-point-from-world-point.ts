import { WorldPoint, RasterPoint, CELL_SIZE, RasterBackgroundmapMetadata } from 'morromapper-logic'

export default function rasterPointFromWorldPoint(worldPoint: WorldPoint, bm: RasterBackgroundmapMetadata) {
  console.log(worldPoint.x);
  var rasterCellSize = bm.borderWidth + bm.cellSideLength;
  // Should equal the number of pixels from the southeast corner of the origin cell when multiplied by a WorldPoint coordinate.
  var sizeRatio = rasterCellSize/CELL_SIZE;
  // The southeast corner of the origin cell is at the same point as WorldPoint({x: 0, y: 0, z: 0})
  var originCellSouth = bm.originCellTopBorderY  - rasterCellSize - (bm.borderWidth/2);
  var originCellEast = bm.originCellRightBorderX - rasterCellSize - (bm.borderWidth/2);

  return new RasterPoint(
    (originCellEast + (sizeRatio*worldPoint.x)),
    (originCellSouth + (sizeRatio*worldPoint.y)),
    bm
  );
}
