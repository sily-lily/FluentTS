declare module "_Color3" {
    export class Color3 {
        r: number;
        g: number;
        b: number;

        constructor(r: number, g: number, b: number);

        /**
         * Create a `Color3` object from RGB values. (red, green, blue)
         * @param r - Red (0 - 255)
         * @param g - Green (0 - 255)
         * @param b - Blue (0 - 255)
         */
        static fromRGB(r: number, g: number, b: number): Color3;
    }
}
