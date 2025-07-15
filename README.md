📊 Project Overview

> ⚠️ **Note**: This project is created purely for **educational and practice purposes**. It is not affiliated with any other online freelancers market place platforms.


Build a full-featured online marketplace for freelancers, similar to Fiverr or Upwork, where users can:
Register as freelancers or clients


Create service gigs (freelancers)


Browse and purchase gigs (clients)


Chat between buyer and seller


Handle payments via Stripe(optional)


Leave reviews and manage orders


This project demonstrates real-world experience with multi-role systems, e-commerce logic, payment processing, and role-based dashboards.

🚀 Tech Stack
Frontend:
React.js (or Next.js for SSR)


Tailwind CSS


React Router / Next Router


React Hook Form + Zod/Yup (form validation)


Backend:
Node.js + Express.js


MongoDB + Mongoose/ Supabase


JWT for Auth


Stripe API


Optional:
Cloudinary or Firebase Storage (for image uploads)


Socket.io (for real-time chat)


Multer (for file upload)


Render/Vercel/Netlify for deployment



👜 Use Cases
#
Use Case
Description
1
User Registration & Login
Sign up as a client or freelancer, login with JWT auth/Supabase
2
Create/Edit/Delete Gig
Freelancer posts services with title, description, price, delivery time, images
3
Browse/Search Gigs
Clients search gigs by keyword, category, price
4
Purchase Gig
Client pays using Stripe; order stored in DB(Optional)
5
Order Management
Track order status: Pending, In Progress, Delivered, Completed
6
Messaging
Chat system between client and freelancer
7
Reviews & Ratings
Clients leave feedback and rate after completion
8
Role-Based Dashboard
Different dashboards for client vs freelancer
9
Admin Panel (Optional)
Manage users, gigs, payments (basic CMS)

