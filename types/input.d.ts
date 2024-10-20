/*

    Includes: .OnChanged
              .Destroy

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
     * Registers a funciton to be called when the input value changes.
     * @param callback - Function that runs code you tell it to.
     */
    OnChanged(callback: (value: string) => void): void;

    /**
     * Destroys the input object.
     */
    Destroy(): void;

    /**
     * The current value of the input field. (string or number, depends on Numeric)
     */
    Value: string | number;
}
