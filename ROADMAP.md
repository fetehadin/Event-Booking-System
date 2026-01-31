## 4-Week Project Roadmap

This roadmap follows a clear **Database → Backend → Frontend → Finalization** flow and is scoped for a first full-stack project focused on educational and value-based events.

### Week 1: Database & System Design ✅ (Completed)

**Goal**: Establish a solid data foundation.

**Deliverables**
- ER diagram finalized
- PostgreSQL database created
- Tables implemented:
  - Users
  - Events
  - Tickets
  - Bookings
  - Payments
- Primary & foreign keys defined
- Constraints and defaults applied

**Outcome**  
The database is stable and ready to be consumed by the backend.

### Week 2: Backend Setup & Core Infrastructure

**Goal**: Create a working backend connected to the database.

**Deliverables**
- Node.js + Express project initialized
- Clean backend folder structure
- Environment variables configured
- PostgreSQL connection implemented
- Global middleware setup (JSON parsing, error handling)
- Health/test endpoint to verify server & DB connection

**Outcome**  
Running backend server successfully connected to PostgreSQL.

### Week 3: Backend Features & Business Logic

**Goal**: Implement core system functionality.

**Deliverables**
- User registration and login APIs
- JWT-based authentication
- Role-based access control (User, Organizer, Admin)
- **Event management**:
  - The organizer can create and manage events
  - Admin can approve or reject events
  - Only approved events are publicly visible
- **Ticket & booking system**:
  - Ticket creation per event
  - Ticket booking with quantity validation
  - Booking records linked to users and events

**Outcome**  
Fully functional backend APIs are tested and working.

### Week 4: Frontend Integration & Finalization

**Goal**: Deliver a usable end-to-end system.

**Deliverables**
- Frontend implemented (simple and clean)
- Event listing and event details pages
- User authentication flow (login/register)
- Ticket booking flow from UI
- Frontend connected to backend APIs
- **Final polish**:
  - Basic validation and error handling
  - API documentation
  - Updated README with project overview and setup steps

**Outcome**  
Complete full-stack Event Booking System ready for review and submission.

---
