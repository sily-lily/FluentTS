# 🖥️ fluent-TS
TypeScript types for Roblox-TS, allowing you to effectively use the Fluent library without it being a painful experience.

### 🔌 Installation

```
npm install --save-dev github:richie0866/rbxts-hax
```

---

### 📖 How-To

You can import the Fluent library using the code below,
along with creating a tab:
```ts
const fluent = load_url('https://github.com/mr-suno/Fluent/releases/latest/download/main.lua') as Fluent;

const window = fluent.CreateWindow({
    'Title': 'Starry Universal',
    'SubTitle': 'github.com/mr-suno/Starry',
    'TabWidth': 160,
    'Size': UDim2.fromOffset(625, 570 / divider),
    'Acrylic': false,
    'Theme': 'Darker',
    'MinimizeKey': Enum.KeyCode.LeftControl
});

const tabs = {
    main: window.AddTab({
        Title: 'Main',
        Icon: '' // Visit https://lucide.dev/icons for Icons! (Not all are supported!)
    }),
}

tabs.main.AddButton({
    Title: 'My button',
    Description: 'Press me for a cookie!',
    Callback: () => {
        print('Hello, world!');
    }
});
```
