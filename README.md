ขั้นตอนที่ 1 — Backend

- ไปที่โฟลเดอร์ `nest-be` และติดตั้งแพ็กเกจ:

```bash
cd backend
npm install
```

- สร้าง migration แรกของฐานข้อมูล (รันคำสั่งนี้เพื่อสร้างไฟล์ migration และปรับฐานข้อมูลในการพัฒนา):

```bash
npx prisma migrate dev --name init
```

ขั้นตอนที่ 2 — Frontend

- ไปที่โฟลเดอร์ `next-fe` และติดตั้งแพ็กเกจ:

```bash
cd frontend
npm install
```

ขั้นตอนที่ 3 — รันด้วย Docker Compose (จากโฟลเดอร์โปรเจกต์หลัก)

```bash
docker compose up -d --build
```
