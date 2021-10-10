import { BACKGROUNDMAP_BOUND_LENGTH, RasterPoint } from 'morromapper-logic'

/**
 * Returns Leaflet coordinates to represent a given RasterPoint in [y, x] format.
 */
export default function leafletPointFromRasterPoint(rasterPoint: RasterPoint) {
  var bm = rasterPoint.backgroundmap;
  return [
    rasterPoint.y*(BACKGROUNDMAP_BOUND_LENGTH/bm.heightPixels),
    rasterPoint.x*(BACKGROUNDMAP_BOUND_LENGTH/bm.widthPixels)
  ];
}
