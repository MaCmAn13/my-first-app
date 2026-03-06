import { email1 } from "./email-1-willkommen";
import { email2 } from "./email-2-haeufigster-fehler";
import { email3 } from "./email-3-kundenbeispiel";
import { email4 } from "./email-4-produkt-feature";
import { email5 } from "./email-5-demo-cta";

export const welcomeSeries = [email1, email2, email3, email4, email5] as const;

export type WelcomeEmail = (typeof welcomeSeries)[number];

export { email1, email2, email3, email4, email5 };
