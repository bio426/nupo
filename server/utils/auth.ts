import { Lucia } from "lucia"
import { PostgresJsAdapter } from "@lucia-auth/adapter-postgresql"

import { sql } from "../plugins/database"

const adapter = new PostgresJsAdapter(sql, {
	user: "auth_user",
	session: "user_session",
})

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !import.meta.dev,
		},
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			username: attributes.username,
		}
	},
})

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia
		DatabaseUserAttributes: DatabaseUserAttributes
	}
}

interface DatabaseUserAttributes {
	username: string
}
