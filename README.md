testing for sockets

https://hoppscotch.io/realtime/socketio

The backend must verify the signature using Google's public keys via google-auth-library.

Once verified, the backend can trust:

It was issued by Google (iss)

It’s for your app (aud)

It’s not expired (exp)

It belongs to a real user (sub)

The email is verified

not decode by jwt

---

````js
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const ticket = await client.verifyIdToken({
  idToken: req.body.idToken, // raw JWT from frontend
  audience: process.env.GOOGLE_CLIENT_ID, // Your app’s client ID
});

const payload = ticket.getPayload(); // ✅ safe and verified```
````

| Task                             | `jsonwebtoken`      | `google-auth-library` |
| -------------------------------- | ------------------- | --------------------- |
| Verifies Google token signature  | ❌ *(not automatic)* | ✅ *(built-in)*        |
| Fetches Google public keys       | ❌                   | ✅                     |
| Validates issuer/audience/expiry | ❌                   | ✅                     |
| Safe for verifying Google tokens | ❌                   | ✅ ✅ ✅                 |


TODO : implement authentication