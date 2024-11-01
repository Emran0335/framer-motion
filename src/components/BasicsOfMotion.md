### Framer Motion is used to animate the appearance and disappearace of a <motion.div> element when a button is clicked. Let's expalin it.

## 1. Container `<div>`

```
<div style={{
    display: "grid",
    placeContent: "center",
    height: "100vh",
    gap: "0.8rem"
}}>
    {/* Children to here */}
</div>
```

\*\* The outermost `<div>` is styled to center its contents both vertically and horizontally

- display: "grid" with placeContent: "center" ensures that everything inside this div is centered.
- height: "100vh" makes the container take the full viewport height.
- gap: "0.8rem" addes spacing between child elements(the button and the animated div).

## 2. Toggle Button (motion.button)

jsx

```
<motion.button
    onCick={()=> setIsVisible(!isVisible)}
    className="bg-green-400 px-4 py-2 rounded-lg text-gray-800 font-semibold"
>
    Show/Hide
</motion.button>
```

##

- This is a toggle button that changes the visibility of the `<motion.div>` when clicked.
- It uses setIsVisible to update isVisible to its opposite value(!isVisible), toggling the div's display.
- Framer Motion's `<motion.button>` wraps the button element, allowing you to animate it directly if needed.
- The className includes Tailwind CSS classes to style the button with a green background, padding, rounded corners, and text styling.

## 3. `<AnimatePresence>` Wrapper

jsx

```
<AnimatePresence mode="popLayout">
    {isVisible && (/* Animated div */)}
</AnimatePresence>
```

- AnimatePresence is a Framer Motion component that allows animations to run when elements are removed from the DOM
- mode="popLayout" is an option that handles layout animations by reordering children when elements are added or removed.
- Inside `<AnimatePresence>`, we conditionally render motion.div only if isVisible is true. This allows the div to animate both when it appears and when it exits.

## 4. Animate `<motion.div>`

jsx

```
<motion.div
 initial={{
    rotate: "0deg",
    scale: 0,
    y: 0
 }}
 animate={{
    rotate: "360deg",
    scale: 1,
    y: [0, 150, -150, 0]
 }}
 exit={{
    rotate: "0deg",
    scale: 0,
    y: 0
 }}
 transition={{
    duration: 1,
    ease: "backInOut",
    times: [0, 0.25, 0.5, 0.85, 1]
 }}
 className="w-[150px] h-[150px] bg-slate-500 rounded-md"
/>
```

This `<motion.div>` is animated based on initial, animate, and exit propperties:

- initial: Specifies the starting state of the div when it appers:
  - rotate: "0deg": No rotation initially.
  - scale: 0: Starts at zero scale(invisible).
  - y: 0: No vertical offset initially.
- animate: Defines the target state while the element is visible:
  - rotate: "360deg": Rotates 360 degrees.
  - scale: 1: Scales up to full size.
  - y: [0, 150, -150, 0]: Moves vertically with specific keyframe positions(from 0 to 150px down, to -150px up, then back to 0).
- exit: Sets the state when the element is removed:
  - rotate: "0deg": Resets to no rotation.
  - scale: 0: Shrinks back to zero scale(invisible).
  - y: 0: Moves back to the initial vertical position.
- transition: Controls the timing and easing of animations:
  - duration: 1: The animation lasts 1 second.
  - ease: "backInOut": Uses a back-and-forth easing style for smooth entry and exit.
  - times: [0, 0.25, 0.5, 0.85, 1]: Specifies keyframes at certain points in the animation, synchronizing with the y positions defined above.
- Tailwind Stying: The className with Tailwind styles gives this div a width of 150px, height of 150px, a slate-gray background, and rounded corners.
