/*

    Includes: .OnChanged
              .Destroy
              .Value

*/

export interface InputOptions {
    Title: string;                                  // Title of the input.
    Description?: string;                           // Explains what the input is actually about. (optional)
    Default?: string;                               // The default value for the input. (optional)
    Placeholder?: string;                           // Text that shows before a response is added. (optional)
    Numeric?: boolean;                              // Whether numbers-only is allowed. (optional)
    Finished?: boolean;                             // Whether the callback is only triggered by pressing 'enter'. (optional)
    Callback: (value: string | number) => void;     // Function that runs code when the input changes.
}

export interface Input {
    /**
     * Registers a function to be called when the input value changes.
     * @param callback - Function that runs code you tell it to.
     */
    OnChanged(callback: (value: string | number) => void): void;

    /**
     * Destroys the input object.
     */
    Destroy(): void;

    /**
     * Gets the current value of the input field.
     * @returns - The current value (string or number, depending on Numeric).
     */
    get Value(): string | number;

    /**
     * Sets a new value for the input field.
     * @param value - The new value for the input.
     */
    SetValue(value: string | number): void;
}
