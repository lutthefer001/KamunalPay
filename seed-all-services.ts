import { drizzle } from "drizzle-orm/mysql2";
import { providers } from "./drizzle/schema";

const db = drizzle(process.env.DATABASE_URL!);

const allServices = [
  // Utilities
  { name: "Gaz", serviceCategory: "utilities" as const },
  { name: "Svet", serviceCategory: "utilities" as const },
  { name: "Suv", serviceCategory: "utilities" as const },
  
  // Mobile operators
  { name: "Beeline", serviceCategory: "mobile" as const },
  { name: "UMS", serviceCategory: "mobile" as const },
  { name: "Ucell", serviceCategory: "mobile" as const },
  { name: "Perfectum", serviceCategory: "mobile" as const },
  
  // Internet providers
  { name: "Uzinfocom", serviceCategory: "internet" as const },
  { name: "Samarqand Telecom", serviceCategory: "internet" as const },
  { name: "Bukhara Telecom", serviceCategory: "internet" as const },
  
  // TV services
  { name: "Webtv.uz", serviceCategory: "tv" as const },
  { name: "Televedeniye", serviceCategory: "tv" as const },
  
  // Landline
  { name: "Telefoniya", serviceCategory: "landline" as const },
  
  // Other services
  { name: "Platinum Connect", serviceCategory: "other" as const },
  { name: "Megaskidka.uz", serviceCategory: "other" as const },
  { name: "Do'st yordami", serviceCategory: "other" as const },
  { name: "Saytlar hosting", serviceCategory: "hosting" as const },
  { name: "Kartadan kartaga", serviceCategory: "transfer" as const },
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
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding services:", error);
    process.exit(1);
  }
}

seedServices();
