# Software Requirements Specification (SRS)
## Event Booking System

---

## Table of Contents

1. [Introduction](#introduction)  
   1.1 [Purpose](#purpose)  
   1.2 [Document Conventions](#document-conventions)  
   1.3 [Intended Audience and Reading Suggestions](#intended-audience-and-reading-suggestions)  
   1.4 [Project Scope](#project-scope)  
   1.5 [References](#references)  

2. [Overall Description](#overall-description)  
   2.1 [Product Perspective](#product-perspective)  
   2.2 [Product Features](#product-features)  
   2.3 [User Classes and Characteristics](#user-classes-and-characteristics)  
   2.4 [Operating Environment](#operating-environment)  
   2.5 [Design and Implementation Constraints](#design-and-implementation-constraints)  
   2.6 [Assumptions and Dependencies](#assumptions-and-dependencies)  

3. [System Features](#system-features)  
   3.1 [Functional Requirements](#functional-requirements)  
       3.1.1 [User Accounts & Authentication](#user-accounts--authentication)  
       3.1.2 [Event Management](#event-management)  
       3.1.3 [Event Discovery](#event-discovery)  
       3.1.4 [Ticket Booking](#ticket-booking)  
       3.1.5 [Payments](#payments)  
       3.1.6 [My Tickets](#my-tickets)  
       3.1.7 [Organizer Dashboard](#organizer-dashboard)  
       3.1.8 [Admin Management](#admin-management)  
       3.1.9 [Advanced Features (Phase 2)](#advanced-features-phase-2)  

4. [External Interface Requirements](#external-interface-requirements)  
   4.1 [User Interfaces](#user-interfaces)  
   4.2 [Hardware Interfaces](#hardware-interfaces)  
   4.3 [Software Interfaces](#software-interfaces)  
   4.4 [Communications Interfaces](#communications-interfaces)  

5. [Nonfunctional Requirements](#nonfunctional-requirements)  
   5.1 [Performance Requirements](#performance-requirements)  
   5.2 [Safety Requirements](#safety-requirements)  
   5.3 [Security Requirements](#security-requirements)  

6. [Appendix](#appendix)  

---

## 1. Introduction

### 1.1 Purpose
This document provides a detailed description of the Software Requirements Specification (SRS) for the Event Booking System. It defines functional and nonfunctional requirements to guide developers, testers, project managers, and stakeholders throughout the system development lifecycle.

### 1.2 Document Conventions
- **Bold text** indicates main features or roles  
- *Italic text* highlights important terms  
- Numbered lists represent system requirements  
- "Shall" is used to indicate mandatory requirements  

### 1.3 Intended Audience and Reading Suggestions
This document is intended for:  
- Software developers  
- System analysts  
- Project managers  
- Testers  
- Academic evaluators  

### 1.4 Project Scope
The Event Booking System is a web-based platform that allows users to discover events, book tickets, and make payments online. Event organizers can create and manage events, while administrators oversee system operations, approvals, and security.

### 1.5 References
- IEEE 830 / IEEE 29148 SRS Standard  
- REST API Design Guidelines  
- JWT Authentication Documentation  

---

## 2. Overall Description

### 2.1 Product Perspective
The Event Booking System is a standalone web application that may integrate with external payment gateways. It follows a client-server architecture with RESTful APIs and role-based access control.

### 2.2 Product Features
- User authentication and role management  
- Event creation and approval  
- Event search and discovery  
- Ticket booking and payment processing  
- Organizer and admin dashboards  
- Advanced features such as ticket resale and gift cards  

### 2.3 User Classes and Characteristics
- **Customer**: Browse/search events, book/pay tickets, view purchased tickets  
- **Event Organizer**: Create/manage events, view ticket sales, monitor revenue  
- **Admin**: Manage users, approve/block events, monitor system activity  

### 2.4 Operating Environment
- Web browsers: Chrome, Firefox, Edge  
- Backend server: Java/Spring Boot or similar  
- Database server: MySQL/PostgreSQL  
- Internet-based deployment  

### 2.5 Design and Implementation Constraints
- JWT-based authentication  
- Secure payment handling  
- Role-based access control  
- Compliance with academic project guidelines  

### 2.6 Assumptions and Dependencies
- Users have internet access  
- Payment gateway availability  
- QR code generation library availability  

---

## 3. System Features

### 3.1 Functional Requirements

#### 3.1.1 User Accounts & Authentication
- Users shall register and log in  
- JWT for authentication  
- Roles: Customer, Organizer, Admin  
- Users shall manage profiles  

#### 3.1.2 Event Management
- Organizers create, update, delete events  
- Event details: title, description, venue, date/time, category, ticket price, quantity  
- Admin approves/rejects events  

#### 3.1.3 Event Discovery
- Browse all events  
- Search/filter by keyword, category, location, date  
- Pagination support  

#### 3.1.4 Ticket Booking
- Select ticket quantity  
- Real-time availability check  
- Booking statuses: Pending, Confirmed, Cancelled  
- Each ticket has a unique ID (QR-ready)  

#### 3.1.5 Payments
- Secure payment processing  
- Payment statuses: Pending, Successful, Failed  
- Payments linked to bookings  
- Mock/local payment gateways supported  

#### 3.1.6 My Tickets
- View purchased tickets  
- View booking/payment status  
- Access event details  

#### 3.1.7 Organizer Dashboard
- Manage events  
- View ticket sales and attendees  
- View revenue summaries  

#### 3.1.8 Admin Management
- Manage users  
- Approve/block events  
- Monitor bookings and payments  

#### 3.1.9 Advanced Features (Phase 2)
- Ticket resale with ownership verification  
- Transferable ticket ownership  
- Purchase/redeem gift cards  
- Track gift card balance and expiry  

---

## 4. External Interface Requirements

### 4.1 User Interfaces
- Responsive web-based UI  
- Separate dashboards for Customer, Organizer, Admin  
- Accessible and user-friendly design  

### 4.2 Hardware Interfaces
- No specific hardware requirements  
- Optional QR code scanners for ticket validation  

### 4.3 Software Interfaces
- Payment gateway APIs  
- Email/SMS notifications (optional)  
- QR code generation library  

### 4.4 Communications Interfaces
- HTTPS protocol  
- RESTful API communication  

---

## 5. Nonfunctional Requirements

### 5.1 Performance Requirements
- Support concurrent users  
- Search results load quickly  

### 5.2 Safety Requirements
- Data loss prevention (regular backups)  
- Graceful error handling  

### 5.3 Security Requirements
- Secure JWT authentication  
- HTTPS encryption  
- Role-based access control  
- Protection against common web vulnerabilities  

---

## 6. Appendix

### A. Abbreviations
- JWT: JSON Web Token  
- SRS: Software Requirements Specification  
- UI: User Interface  

### B. Future Enhancements
- Mobile application support  
- Event recommendations  
- Analytics and reporting dashboards  
