# Pungutan CRUD API

API untuk mengelola data **Pungutan**, yang meliputi operasi CRUD (Create, Read, Update, Delete). API ini memungkinkan pengguna untuk menambahkan, melihat, memperbarui, dan menghapus data **Pungutan** yang mencakup perhitungan nilai **FOB**, **CIF**, dan **CIF Rp**.

## Struktur Proyek


## Fitur

- **Create**: Menambahkan data Pungutan baru dengan perhitungan **FOB**, **CIF**, dan **CIF Rp**.
- **Read**: Mendapatkan daftar semua data Pungutan
- **ReadById**: Mendapatkan daftar data Pungutan berdasarkan ID
- **Update**: Memperbarui data Pungutan berdasarkan ID.
- **Delete**: Menghapus data Pungutan berdasarkan ID.

## Instalasi

1. **Clone Repositori**

   Clone repositori ini ke komputer lokal Anda menggunakan perintah berikut:

   ```bash
   git clone https://github.com/aaridhon19/INSW_BE.git
   cd pungutan-api
   ```
   
2. **Install**
   Install dependensi yang diperlukan dengan perintah berikut :

   ```bash
   npm i 
   ```
   
3. **Konfigurasi .env (Jika mau)**

   ```bash 
   PORT=3100
   ``` 

4. **Jalankan Aplikasi**
   Menjalankan aplikasi dengan perintah berikut : 
   ```bash 
   npm run dev
   ```

## Endpoint API 

1. **POST/api/dataPungutan**
2. **GET/api/dataPungutan**
3. **GET/api/dataPungutan/:id**
4. **PUT/api/dataPungutan/:id**
5. **DELETE/api/dataPungutan/:id**

## Teknologi 

1. Node.js dengan menggunakan Express untuk backend server
2. Sequelize untuk ORM dan koneksi ke PostgreSQL
3. PostgreSQL untuk database
4. Dotenv untuk pengaturan environment variables
5. Cors untuk menangani CORS
6. Nodemon untuk development server
