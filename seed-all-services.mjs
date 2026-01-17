import { drizzle } from "drizzle-orm/mysql2";
import { providers } from "./drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

const allServices = [
  // Utilities
  { name: "Gaz", serviceCategory: "utilities" },
  { name: "Svet", serviceCategory: "utilities" },
  { name: "Suv", serviceCategory: "utilities" },
  
  // Mobile operators
  { name: "Beeline", serviceCategory: "mobile" },
  { name: "UMS", serviceCategory: "mobile" },
  { name: "Ucell", serviceCategory: "mobile" },
  { name: "Perfectum", serviceCategory: "mobile" },
  
  // Internet providers
  { name: "Uzinfocom", serviceCategory: "internet" },
  { name: "Samarqand Telecom", serviceCategory: "internet" },
  { name: "Bukhara Telecom", serviceCategory: "internet" },
  
  // TV services
  { name: "Webtv.uz", serviceCategory: "tv" },
  { name: "Televedeniye", serviceCategory: "tv" },
  
  // Landline
  { name: "Telefoniya", serviceCategory: "landline" },
  
  // Other services
  { name: "Platinum Connect", serviceCategory: "other" },
  { name: "Megaskidka.uz", serviceCategory: "other" },
  { name: "Do'st yordami", serviceCategory: "other" },
  { name: "Saytlar hosting", serviceCategory: "hosting" },
  { name: "Kartadan kartaga", serviceCategory: "transfer" },
];

async function seedServices() {
  try {
    console.log("Seeding all services...");
    
    for (const service of allServices) {
      await db.insert(providers).values({
        name: service.name,
        serviceCategory: service.serviceCategory,
      });
      console.log(`✓ Added: ${service.name} (${service.serviceCategory})`);
    }
    
    console.log("\n✅ All services seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding services:", error);
    process.exit(1);
  }
}

seedServices();
