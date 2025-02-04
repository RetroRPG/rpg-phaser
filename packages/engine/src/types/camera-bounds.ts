/**
 * Define the bounds of the Camera. The bounds are an axis-aligned rectangle.
 *
 * The Camera bounds controls where the Camera can scroll to, stopping it from scrolling off the
 * edges and into blank space. It does not limit the placement of Game Objects, or where
 * the Camera viewport can be positioned.
 *
 * Temporarily disable the bounds by changing the boolean `Camera.useBounds`.
 *
 * Clear the bounds entirely by calling `Camera.removeBounds`.
 *
 * If you set bounds that are smaller than the viewport it will stop the Camera from being
 * able to scroll. The bounds can be positioned where-ever you wish. By default they are from
 * 0x0 to the canvas width x height. This means that the coordinate 0x0 is the top left of
 * the Camera bounds. However, you can position them anywhere. So if you wanted a game world
 * that was 2048x2048 in size, with 0x0 being the center of it, you can set the bounds x/y
 * to be -1024, -1024, with a width and height of 2048. Depending on your game you may find
 * it easier for 0x0 to be the top-left of the bounds, or you may wish 0x0 to be the middle.
 */
export interface CameraBounds {
    /** The top-left x coordinate of the bounds. */
    x: number;
    /** The top-left y coordinate of the bounds. */
    y: number;
    /** The width of the bounds, in pixels. */
    width: number;
    /** The height of the bounds, in pixels. */
    height: number;
    /** If `true` the Camera will automatically be centered on the new bounds. Default false. */
    centerOn?: boolean;
};