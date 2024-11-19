// src/db/schema.ts
import {
  pgTable,
  serial,
  text,
  varchar,
  pgEnum,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

// Enum for user roles
export const RoleEnum = pgEnum("role", ["admin", "user", "moderator"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: RoleEnum("role").notNull().default("user"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const tickets = pgTable("tickets", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  status: varchar("status", { length: 50 }).default("open"),
  user_id: integer("user_id")
    .references(() => users.id)
    .notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});
