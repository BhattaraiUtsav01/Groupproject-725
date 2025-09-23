/**
 * Seed script: node seeds.js
 * Make sure Mongo is running and .env is set.
 */
const mongoose = require("mongoose");
require("dotenv").config();

const Roommate = require("./models/Roommate");
const Room = require("./models/Room");
const Item = require("./models/Item");
const Finance = require("./models/Finance");

async function run() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  await Promise.all([Roommate.deleteMany({}), Room.deleteMany({}), Item.deleteMany({})]);

  await Roommate.insertMany([
    { name: "Sarah", age: 24, tags: ["Non-smoker", "Early bird", "Clean"], bio: "Looking for quiet roommate near downtown.", budget: { min: 600, max: 800 } },
    { name: "Mike", age: 26, tags: ["Social", "Pet-friendly", "Flexible"], bio: "Outgoing professional seeking similar roommate.", budget: { min: 700, max: 900 } },
    { name: "Emma", age: 22, tags: ["Student", "Vegetarian", "Quiet"], bio: "Looking for female roommate near campus.", budget: { min: 500, max: 650 } }
  ]);

  await Room.insertMany([
    { pricePerWeek: 280, suburb: "Carlton", lifestyle: ["quiet","non smoker","tidy"], image: "" },
    { pricePerWeek: 320, suburb: "Fitzroy", lifestyle: ["social","early riser"], image: "" },
    { pricePerWeek: 250, suburb: "Brunswick", lifestyle: ["quiet","tidy","non smoker"], image: "" },
    { pricePerWeek: 380, suburb: "South Yarra", lifestyle: ["social","tidy"], image: "" },
    { pricePerWeek: 290, suburb: "Carlton", lifestyle: ["early riser","non smoker"], image: "" },
    { pricePerWeek: 340, suburb: "Richmond", lifestyle: ["social","tidy","early riser"], image: "" }
  ]);

  await Item.createIndexes?.();
  await Item.insertMany([
    { title: "Study Desk & Chair Set", description: "Great condition, perfect for students. Desk has drawers.", price: 120, category: "Furniture", sellerEmail: "alex.student@uni.edu", image: "" },
    { title: "MacBook Air 2019", description: "Excellent condition, comes with charger and case.", price: 850, category: "Electronics", sellerEmail: "sarah.m@student.com", image: "" },
    { title: "Engineering Textbooks Bundle", description: "Complete set of first year engineering books.", price: 200, category: "Books", sellerEmail: "mike.eng@gmail.com", image: "" }
  ]);

  await Finance.deleteMany({});
  console.log("Seed complete.");
  await mongoose.disconnect();
}

run().catch(e => { console.error(e); process.exit(1); });
