# Real Time Chat Application

## Key Requirements:

1. Real-time messaging using Socket.IO for bidirectional communication.
2. Store messages and user data in MySQL.
3. Track user online status and their activity in the chat window (active or not).
4. Handle events for when a user is online, offline, or online but not in the chat window.

---

## System Components:

1. **Client-Side (Frontend):**
   - Uses Socket.IO client to connect to the server.
   - Sends and receives messages and events.
   - Tracks the user's own state (online, offline, active in chat window).
2. **Server-Side (Backend):**
   - Uses Socket.IO server to manage connections.
   - Handles events from clients and broadcasts messages.
   - Interacts with MySQL for storing messages and user status.
3. **Database (MySQL):**
   - Stores user accounts, messages, and possibly online status (though status is more real-time and may be stored in memory with backup in DB).

---

## Detailed Design:

### 1. User States:

We need to track two main states for each user:

- **Online Status:** Whether the user is connected to the server (online) or not (offline).
- **Activity Status:** If the user is currently active in the chat window (i.e., has the chat window open and focused) or not.
  Thus, for each user we can have:
- **Online and Active:** The user is connected and currently interacting with the chat window. Messages should be delivered in real-time and marked as read immediately if the message is seen.
- **Online but Inactive:** The user is connected but not currently in the chat window (e.g., using another tab or application). The messages should be delivered but not marked as read until the user becomes active.
- **Offline:** The user is not connected. Messages should be stored and delivered when the user comes online.

---

## Socket.IO Event Design

### Client → Server Events

**register**

Payload: { userId: string, authToken: string }

Purpose: Authenticate and link socket to user

---

**privateMessage**

Payload: { to: userId, content: string, timestamp: Date }

Purpose: Send message to recipient

---

**messageAck**

Payload: { messageId: string }

Purpose: Confirm message read

---

**typingStart/typingStop**

Payload: { conversationId: string }

Purpose: Real-time typing indicators

---

**activityChange**

Payload: { isActive: boolean }

Purpose: Update chat window focus state

---

**disconnect (Built-in)**

Purpose: Handle graceful disconnect

### Server → Client Events

**newMessage**

Payload: { id: string, from: userId, content: string, timestamp: Date }

Purpose: Deliver messages to recipients

---

**messageStatus**

Payload: { messageId: string, status: 'delivered' | 'read' }

Purpose: Update message state

---

**presenceUpdate**

Payload: { userId: string, status: 'online' | 'idle' | 'offline' }

Purpose: Broadcast presence changes

---

**typingIndicator**

Payload: { userId: string, isTyping: boolean }

Purpose: Show typing status
