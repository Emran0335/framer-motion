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


<div>
  <pre id="code-block">
    <code>
// Code example
const sessionCache = new WeakMap();
function getUserSession(user) {
  if (sessionCache.has(user)) {
    return sessionCache.get(user);
  }
  const session = { id: user.id, data: `Session data for ${user.name}` };
  sessionCache.set(user, session);
  return session;
}
    </code>
  </pre>
  <button onclick="copyCode()">Copy</button>
</div>

<script>
function copyCode() {
  const code = document.querySelector("#code-block").innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert("Code copied!");
  });
}
</script>