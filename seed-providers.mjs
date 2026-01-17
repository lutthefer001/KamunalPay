import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import "dotenv/config";

const seedProviders = async () => {
  try {
    console.log("🌱 Providers jadvaliga ma'lumot qo'shilmoqda...");

    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    const db = drizzle(connection);

    const providersData = [
      {
        name: "Gaz",
        account_check_api: "https://api.gazprovider.uz/check",
      },
      {
        name: "Svet",
        account_check_api: "https://api.electroprovider.uz/check",
      },
      {
        name: "Suv",
        account_check_api: "https://api.waterprovider.uz/check",
      },
    ];

    for (const provider of providersData) {
      await connection.execute(
        "INSERT INTO providers (name, account_check_api) VALUES (?, ?)",
        [provider.name, provider.account_check_api]
      );
      console.log(`✅ ${provider.name} qo'shildi`);
    }

    console.log("✨ Seed muvaffaqiyatli yakunlandi!");
    await connection.end();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed xatosi:", error);
    process.exit(1);
  }
};

seedProviders();
