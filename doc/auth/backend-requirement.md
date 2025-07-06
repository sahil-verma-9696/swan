```js
// Login Route
app.post("/auth/google", async (req, res) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: req.body.token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload(); // verified payload
    const userId = payload.sub; // unique user ID

    // Save in temporary memory store
    tempUserStore.set(userId, payload);

    // Create signed token
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });

    // Set cookie (HttpOnly for security)
    res.cookie(TOKEN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: false, // change to true if using HTTPS
      sameSite: "lax",
      maxAge: 3600000, // 1 hour
    });

    res.json({ success: true });// only success true sufficient
  } catch (err) {
    res.status(401).json({ error: "Invalid token", details: err.message });
  }
});

// /me route to get current user info
app.get("/me", (req, res) => {
  const token = req.cookies[TOKEN_COOKIE_NAME];
  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const { userId } = jwt.verify(token, JWT_SECRET);
    const user = tempUserStore.get(userId);
    if (!user) {
      return res.status(401).json({ error: "User not found or expired" });
    }
    res.json({ user });
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
});
```
