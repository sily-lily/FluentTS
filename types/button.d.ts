export interface ButtonOptions {
    Title: string;          // The title (header) of the button object.
    Description?: string;   // Optional description for the button.
    Callback: () => void;   // Function to call when the button is pressed.
}