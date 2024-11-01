### Framer Motion is used to animate the appearance and disappearace of a <motion.div> element when a button is clicked. Let's expalin it.

## 1. Container <div>

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

- \*\* The outermost <div> is styled to center its contents both vertically and horizontally
- display: "grid" with placeContent: "center" ensures that everything inside this div is centered.
- height: "100vh" makes the container take the full viewport height.
- gap: "0.8rem" addes spacing between child elements(the button and the animated div).

## 2. Toggle Button (motion.button)

```
jsx
<motion.button
    onCick={()=> setIsVisible(!isVisible)}
    className="bg-green-400 px-4 py-2 rounded-lg text-gray-800 font-semibold"
>
    Show/Hide
</motion.button>
```
