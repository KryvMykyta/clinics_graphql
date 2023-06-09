import { sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const clinics = sqliteTable("clinics", {
  longName: text("Long Name Version").notNull(),
  registrationLink: text("Typeform registration link").notNull(),
  PMS: text("PMS").notNull(),
  metaTitle: text("Meta-title").notNull(),
  metaDescription: text("Meta-description").notNull(),
  slug: text("slug").notNull(),
  website: text("Website").notNull(),
  clinicName: text("Clinic Name").notNull(),
  displayOnWeb: text("Display_on_web").notNull(),
  linkToClinicSuburbPage: text("link to clinic suburb page").notNull(),
  fullAdress: text("Full Address").notNull(),
  city: text("City").notNull(),
  suburb: text("Suburb").notNull(),
  state: text("State").notNull(),
  postCode: text("PostCode").notNull(),
  email: text("Email").notNull(),
  phone: text("Phone").notNull(),
  nearby1_txt: text("nearby1_txt").notNull(),
  nearby1_link: text("nearby1_link").notNull(),
  nearby2_txt: text("nearby2_txt").notNull(),
  nearby2_link: text("nearby2_link").notNull(),
  nearby3_txt: text("nearby3_txt").notNull(),
  nearby3_link: text("nearby3_link").notNull(),
  nearby4_txt: text("nearby4_txt").notNull(),
  nearby4_link: text("nearby4_link").notNull(),
  about: text("About Clinic").notNull(),
  lat: real("lat").notNull(),
  lng: real("lng").notNull(),
});
