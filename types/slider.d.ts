/*

    Includes: .OnChanged
              .SetValue
              .Destroy

*/

export interface SliderOptions {
    Title: string;                          // The title (header) of the slider.
    Description?: string;                   // The description of the slider, what it's about. (optional)
    Default: number;                        // The default (starting) value for the slider. (min through max) (optional)
    Min: number;                            // The minimum value for the slider.
    Max: number;                            //     maximum
    Rounding: number;                       // Where the decimal is placed. (Lua index starts at 1) (optional)
    Callback: (value: number) => void;      // The function that is called when the slider changes.
}

export interface Slider {
    /**
     * Registers a function to be called when the slider value changes.
     * @param callback - Just another.. customizable function.
     */
    OnChanged(callback: (value: number) => void): void;

    /**
     * Sets a new value for the slider.
     * @param value - The new value for the slider. (min through max)
     */
    SetValue(value: number): void;

    /**
     * Destroys the slider object.
     */
    Destroy(): void;
}
