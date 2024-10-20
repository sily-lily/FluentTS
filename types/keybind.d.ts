/*

    Includes: .GetState
              .SetValue
              .OnClick
              .OnChanged
              .DoClick
              .Destroy

*/

export interface KeybindOptions {
    Title: string;                                   // The title (header) of the keybind.
    Mode: "Always" | "Toggle" | "Hold";              // The mode used for the keybind. (no explanation on what they do)
    Default: string;                                 // The default key for the keybind. (not an Enum, auto converts)
    Callback: (value: boolean) => void;              // Function called when the keybind is pressed.
    ChangedCallback: (newKey: string) => void;       // The function called when the keybind changes.
}

export interface Keybind {
    /**
     * Gets the current state of the keybind.
     * @returns - A boolean indicating whether the keybind is active or not.
     */
    GetState(): boolean;

    /**
     * Sets the keybind value and mode.
     * @param key - The key to bind. (e.g., "LeftControl", "MB2" for MouseButton2)
     */
    SetValue(key: string): void;

    /**
     * Registers a function to be called when the keybind is pressed.
     * @param callback - Customizable function to call.
     */
    OnClick(callback: () => void): void;

    /**
     * Registers a function to be called when the keybind value changes.
     * @param callback - Customizable function that calls when you modify the keybind value.
     */
    OnChanged(callback: (value: string) => void): void;

    /**
     * Simulates a click event on the keybind.
     */
    DoClick(): void;

    /**
     * Destroys the keybind object.
     */
    Destroy(): void;
}
