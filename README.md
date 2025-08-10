
---

# 📌 URL Shortener Application

A **full-stack URL shortener** built with **React (Frontend)**, **Node.js + Express (Backend)**, **MongoDB (Database)**, and deployed on **AWS EC2**.
This app allows users to **shorten URLs**, track visits, and provides an **Admin Dashboard** to view analytics.

---

## 🚀 Features

### 🔗 User Features

* Shorten any long URL in seconds.
* Clickable shortened links.
* Track visit counts for each URL.
* Simple & clean UI.

### 🛠 Admin Features

* View **all shortened URLs** in a table.
* See **original URLs, visit counts, and creation dates**.
* Links are clickable and open in a new tab.
* Responsive table with hover effects.

---

## 📂 Project Structure

```
📦 url-shortener-app
 ┣ 📂 backend       # Node.js + Express + MongoDB API
 ┣ 📂 frontend      # React.js client app
 ┣ 📜 README.md     # Project documentation
 ┗ 📜 package.json
```

---

## ⚙️ Tech Stack

### **Frontend**

* React.js
* Axios (API calls)
* Inline CSS + Styled Components

### **Backend**

* Node.js
* Express.js
* MongoDB with Mongoose
* CORS enabled for API calls

### **Database**

* MongoDB Atlas (Cloud Database)

### **Deployment**

* AWS EC2 (Ubuntu)
* PM2 (Node.js process manager)
* Nginx (Reverse Proxy)

---

## 🖥 Frontend Setup (React)

### 1️⃣ Navigate to frontend folder

```bash
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm start
```

📌 **Frontend Features**

* `App.js` → Main app structure.
* `AdminPage.js` → Shows all shortened URLs with styling.
* `ShortenerForm.js` → Form to shorten URLs.
* API calls made using Axios to `http://localhost:5000/api`.

---

## ⚙️ Backend Setup (Node.js + Express)

### 1️⃣ Navigate to backend folder

```bash
cd backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
BASE_URL=http://localhost:5000
```

### 4️⃣ Start backend server

```bash
npm start
```

📌 **Backend Features**

* **Routes**

  * `POST /api/shorten` → Create short URL.
  * `GET /:shortcode` → Redirect to original URL & update visit count.
  * `GET /api/admin/urls` → Get all URLs (for admin dashboard).
* **MongoDB Models**

  * Stores `short_code`, `original_url`, `visit_count`, and `createdAt`.
* **Middleware**

  * CORS enabled for cross-origin requests.

---

## 🗄 MongoDB Setup

1. Create an account at **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**.
2. Create a new **cluster**.
3. Create a **database** and **collection** (e.g., `urls`).
4. Get the **MongoDB connection string**.
5. Replace `MONGO_URI` in `.env` with your connection string.

---

## ☁️ AWS EC2 Deployment

### **1️⃣ Launch EC2 Instance**

* Select **Ubuntu Server**.
* Configure security group → Allow ports **80 (HTTP)**, **22 (SSH)**, and **5000 (Backend)**.

### **2️⃣ SSH into EC2**

```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### **3️⃣ Install Required Packages**

```bash
sudo apt update
sudo apt install nodejs npm nginx
```

### **4️⃣ Clone Repository**

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### **5️⃣ Install & Run Backend**

```bash
cd backend
npm install
npm run build
pm2 start server.js
```

### **6️⃣ Install & Run Frontend**

```bash
cd frontend
npm install
npm run build
```

### **7️⃣ Configure Nginx**

```bash
sudo nano /etc/nginx/sites-available/default
```

Example Nginx config:

```nginx
server {
    listen 80;

    location / {
        root /home/ubuntu/url-shortener/frontend/build;
        index index.html;
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:5000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Then restart:

```bash
sudo systemctl restart nginx
```
image 
<img width="935" height="435" alt="image1" src="https://github.com/user-attachments/assets/98bdffc4-c996-414f-b003-640e8e7baada" />
<img width="939" height="428" alt="image2" src="https://github.com/user-attachments/assets/8db6ded0-6678-4dd8-a415-43ddbbb0529b" />

---
video link-
https://drive.google.com/file/d/12sItaB-vn8LIinHoTmZV50XxVlCnp2lI/view?usp=drivesdk


