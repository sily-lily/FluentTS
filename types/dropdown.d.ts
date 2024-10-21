/*

    Includes: .Open
              .Close
              .Display
              .GetActiveValues
              .BuildDropdownList
              .SetValues
              .OnChanged
              .SetValue
              .Destroy

*/

export interface DropdownOptions {
    Title: string;                                  // The title (header) of the dropdown.
    Values: string[];                               // Array of values to display in the dropdown.
    Multi?: boolean;                                // Allow multiple selections. (multiple choices) (optional)
    Default?: string;                               // Default selected value, by index or value. (optional)
    Callback: (value: string | number) => void;     // Function that runs code when the input changes.
}

export interface Dropdown {
    /**
     * Opens the dropdown menu.
     */
    Open(): void;

    /**
     * Closes the dropdown menu.
     */
    Close(): void;

    /**
     * Display the dropdown
     * --> If you asked me, I couldn't tell you what this does..
     */
    Display(): void;

    /**
     * Returns the currently active values of the dropdown.
     * @returns - An array of active values (if multie is true) or a single active value.
     */
    GetActiveValues(): string | string[];

    /**
     * Builds the dropdown list based on the provided values.
     */
    BuildDropdownList(): void;

    /**
     * Sets the available values for the dropdown.
     * @param values - Array of strings representing the dropdown options.
     */
    SetValues(values: string[]): void;

    /**
     * Registers a function to be called when the dropdown value changes.
     * @param callback - Customizable function to call when the selected value is changed.
     */
    OnChanged(callback: (value: string | string[]) => void): void;

    /**
     * Sets the current value of the dropdown.
     * --> Remember, only values that exist on the list can be selected.
     * @param value - The value to select.
     */
    SetValue(value: string): void;

    /**
     * Destroys the dropdown object.
     */
    Destroy(): void;
}
