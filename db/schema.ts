import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const timers = sqliteTable('timers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: text('user_id'),
  goal: text('goal').notNull(),
  durationMinutes: integer('duration_minutes').notNull(),
  elapsedSeconds: integer('elapsed_seconds').default(0),
  isRunning: integer('is_running', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`)
});