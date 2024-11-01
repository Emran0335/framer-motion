### Simple layout with a button and an animated div using React and Framer Motion. The button triggers a 360 degree rotation on the div when clicked. Let's explain

## 1. Outer Container `<div>`

jsx

```
<div className="flex flex-col justify-center items-center gap-1">
    {/* Button and animated div go here */}
</div>
```

- flex flex-col: Sets up a flex container that arranges items in a column.
- justify-center and items-center: Center the content both vertically and horizontally within the container.
- gap-1: Adds a small space between the button and the animated div for better spacing.

## 2. Button Element

jsx

```
<button
    className="w-full bg-green-400 px-4 py-2 rounded-lg text-gray-800 font-semibold hover:border border-gray-400 hover:bg-green-800 hover:text-gray-200"
    onClick={handleClick}
 >
Flip it!
</button>
```

- w-full: Makes the button take the full width of the container.
- Styling classes:
  - bg-green-400: Sets a green background color.
  - px-4 py-2: Adds padding for size and spacing.
  - rounded-lg: Rounds the button's corners.
  - text-gray-800 and font-semibold: Styles the text with a gray color and a semi-bold font.
- Hover Effects:
  - hover:border and border-gray: Adds a border on hover.
  - hover:bg-green-900 and hover:text-gray-200: Changes the background to a darker green and text to a lighter gray when hovering.

The button's onClick event triggers the handleClick fuction, which starts the animation.

## 3. Animated `<motion.div>`

jsx

```
<motion.div
  className="w-[150px] h-[150px] bg-gray-600 flex justify-center items-center rounded-md"
  variants={{
    initial: {
      rotate: "0deg",
    },
    flip: {
      rotate: "360deg",
    },
  }}
  initial="initial"
  animate={controls}
>
  Hello Again!
</motion.div>
```

- Container Styling: The className includes Tailwind CSS classes to style the div:

  - w-[150px] h-[150px]:Creates a square of 150px by 150px.
  - bg-gray-600: Gives the div a gray background.
  - flex justify-center items-center: Centers the text inside the div.
  - rounded-md: Rounds the corners for a softer appearance.

- Framer Motion Props:
  - variants: Defines two animation states:
    - initial: The div starts with rotate: "0deg", showing no rotation.
    - flip: When activated, the div rotates a full 360 degrees, creating a flipping effect.
  - initial="initial":Sets the div's starting state to "initial" when it first renders.
  - animate={controls}:Binds the div's animation to the controls object. When controls.start("flip") is called (by handleClick), the div rotates according to the "flip" variant's properties.
