# Software Requirements Specification (SRS)  
## Event Booking Platform

---

## Table of Contents

1. Introduction  
2. Overall Description  
3. System Architecture  
4. Functional Requirements  
5. External Interface Requirements  
6. Nonfunctional Requirements  
7. Data Requirements  
8. System Constraints & Risks  
9. Future Roadmap  

---

## 1. Introduction

### 1.1 Purpose  
This document defines the functional and nonfunctional requirements for **Event Booking Platform**, a full-stack event booking platform designed to streamline event discovery, booking, and management through a unified, scalable system.

It serves as a reference for developers, stakeholders, and evaluators to ensure clarity, consistency, and completeness during development.

---

### 1.2 Scope  

**Event Booking Platform** replaces fragmented event systems (posters, manual booking, scattered communication) with a centralized platform that enables:
- Users to discover and book educational and value-driven events  
- Organizers to create, manage, and track events  
- Admins to monitor, moderate, and control the system  

The system emphasizes:
- Real-time updates  
- Role-based access control  
- Scalable backend architecture  
- Clean and modern user experience  
---

### 1.3 Intended Audience  

- Full-stack developers  
- Backend engineers  
- UI/UX designers  
- Project evaluators  
- Future collaborators  

---

### 1.4 Definitions  

- **User**: A customer who browses and books events  
- **Organizer**: A user who creates and manages events  
- **Admin**: A system controller with full privileges  
- **Booking**: A reservation of one or more tickets  
- **Ticket**: A unique entry linked to a booking  

---

## 2. Overall Description

### 2.1 Product Perspective  

EduEveEvent Booking Platform is a **full-stack web application** built with:

- **Frontend**: Next.js (React-based)  
- **Backend**: Node.js (REST API)  
- **Database**: PostgreSQL  
- **Auth**: JWT-based authentication  

It follows a **client-server architecture** with clear separation of concerns.

---

### 2.2 Core Features  

- Authentication & role management  
- Event lifecycle management  
- Smart event discovery  
- Real-time ticket booking system  
- Payment integration (extensible)  
- Notification system  
- Admin moderation tools  

---

### 2.3 User Roles  

#### 1. User (Customer)
- Discover events  
- Book tickets  
- Track bookings  

#### 2. Organizer
- Create/manage events  
- Monitor sales and attendance  

#### 3. Admin
- Approve/reject events  
- Manage users and system activity  

---

### 2.4 Operating Environment  

- Modern browsers (Chrome, Firefox, Edge)  
- Cloud-based deployment (future-ready)  
- REST API over HTTPS  

---

## 3. System Architecture

### 3.1 High-Level Architecture  

- **Frontend Layer** (Next.js UI)  
- **API Layer** (Node.js backend)  
- **Business Logic Layer**  
- **Database Layer** (PostgreSQL)  

---

### 3.2 Key Architectural Principles  

- Separation of concerns  
- Stateless APIs  
- Secure authentication (JWT)  
- Scalable modular design  
- RESTful communication  

---

### 3.3 Data Flow Overview  

1. User interacts with UI  
2. UI sends request to API  
3. API validates and processes request  
4. Database stores/retrieves data  
5. Response returned to user  

---

## 4. Functional Requirements

### 4.1 Authentication & Authorization  

- Users shall register and log in securely  
- The system shall use JWT for authentication  
- Role-based access control shall be enforced  
- Users shall update profile information  

---

### 4.2 Event Management  

- Organizers shall create, edit, and delete events  
- Events shall include:
  - Title  
  - Description  
  - Category  
  - Location  
  - Date & time  
  - Ticket price  
  - Capacity  

- Admin shall approve or reject events before publishing  

---

### 4.3 Event Discovery  

- Users shall browse available events  
- The system shall support:
  - Search by keyword  
  - Filter by category, date, location  
  - Pagination  

---

### 4.4 Booking System  

- Users shall select ticket quantity  
- System shall validate availability in real-time  
- Booking statuses:
  - Pending  
  - Confirmed  
  - Cancelled  

- Each ticket shall have a unique identifier (QR-ready)  

---

### 4.5 Payment System  

- System shall support payment processing (mock or real)  
- Payment statuses:
  - Pending  
  - Successful  
  - Failed  

- Payments shall be linked to bookings  

---

### 4.6 Ticket Management  

- Users shall view purchased tickets  
- Tickets shall include:
  - Event details  
  - Booking status  
  - Payment status  

---

### 4.7 Organizer Dashboard  

- View all created events  
- Track ticket sales  
- Monitor revenue and attendance  

---

### 4.8 Admin Panel  

- Manage users (block/unblock)  
- Approve or reject events  
- Monitor bookings and payments  

---

### 4.9 Notifications System  

- System shall send notifications for:
  - Booking confirmation  
  - Payment updates  
  - Event approval/rejection  

- Delivery methods (extensible):
  - Email  
  - In-app notifications  

---

## 5. External Interface Requirements

### 5.1 User Interface  

- Responsive and modern UI  
- Role-based dashboards  
- Clean event browsing experience  

---

### 5.2 Software Interfaces  

- Payment gateway APIs (future integration)  
- Email notification services  
- QR code generation library  

---

### 5.3 Communication Interfaces  

- HTTPS protocol  
- RESTful APIs (JSON format)  

---

## 6. Nonfunctional Requirements

### 6.1 Performance  

- System shall support concurrent users  
- API responses should be under 500ms (target)  
- Efficient database queries  

---

### 6.2 Scalability  

- System shall support horizontal scaling  
- Modular backend design for future microservices  

---

### 6.3 Security  

- JWT-based authentication  
- Password hashing (bcrypt)  
- HTTPS encryption  
- Protection against:
  - SQL Injection  
  - XSS  
  - CSRF  

---

### 6.4 Reliability  

- System shall ensure high availability  
- Graceful error handling  
- Logging and monitoring support  

---

### 6.5 Usability  

- Intuitive navigation  
- Minimal learning curve  
- Mobile-responsive design  

---

## 7. Data Requirements

### 7.1 Core Entities  

- Users  
- Events  
- Bookings  
- Tickets  
- Payments  

---

### 7.2 Data Integrity  

- Foreign key relationships enforced  
- Transaction handling for bookings/payments  
- Consistency between ticket availability and bookings  

---

## 8. System Constraints & Risks

### Constraints  

- Dependence on external payment gateways  
- Internet connectivity required  
- JWT expiration handling  

### Risks  

- High traffic causing performance issues  
- Payment failures  
- Data inconsistency in concurrent bookings  

---

## 9. Future Roadmap

### Phase 2 Enhancements  

- Ticket resale system  
- Ticket transfer between users  
- Gift cards & wallet system  
- Event recommendation engine  
- Analytics dashboard  
