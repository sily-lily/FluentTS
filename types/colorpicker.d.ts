/// <reference types="@rbxts/types" />

/*

    Includes: .SetHSVFromRGB
              .Display
              .SetValue
              .SetValueRGB
              .OnChanged
              .Destroy
              .Value

*/

export interface ColorPickerOptions {
    Title: string;                      // The title of the color picker.
    Default?: Color3;                   // The default value of the color picker. (optional)
    Callback?: (color: Color3) => void; // Does an action when a color is changed
}

export interface ColorPicker {
    /**
     * Set the HSV values based on RGB input.
     * @param r - Red value (0 - 255)
     * @param g - Green
     * @param b - Blue
     */
    SetHSVFromRGB(r: number, g: number, b: number): void;

    /**
     * Display the color picker.
     */
    Display(): void;

    /**
     * Set the value of the color picker in HSV format.
     * @param h - Hue (0 - 360)
     * @param s - Saturation (0 - 100)
     * @param v - Value or Brightness (0 - 100)
     */
    SetValue(h: number, s: number, v: number): void;

    /**
     * Set the value of the color picker in RGB format.
     * @param r - Red value (0 - 255)
     * @param g - Green value (0 - 255)
     * @param b - Blue value (0 - 255)
     */
    SetValueRGB(r: number, g: number, b: number): void;

    /**
     * Function that's called when the color value changes.
     * @param callback - Function that intakes the new HSV values.
     */
    OnChanged(callback: (color: Color3) => void): void;

    /**
     * Get the currently selected value of the color picker.
     * @returns - The current color value as a `Color3`.
     */
    get Value(): Color3;

    /**
     * Destroy the color picker object.
     */
    Destroy(): void;
}
