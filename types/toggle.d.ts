/*

    Includes: .OnChanged
              .SetValue
              .Destroy

*/

export interface ToggleOptions {
    Title: string;      // The title (header) of the toggle.
    Default: boolean;   // The default state of the toggle. (true or false)
}

export interface Toggle {
    /**
     * Registers a function to be called when the toggle state changes.
     * @param callback - Customizable function to call.
     */
    OnChanged(callback: () => void): void;

    /**
     * Sets the value of the toggle:
     * @param value - The new value for the toggle. (true or false)
     */
    SetValue(value: boolean): void;

    /**
     * Destroys the toggle object.
     */
    Destroy(): void;
}