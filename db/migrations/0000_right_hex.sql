CREATE TABLE `timers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text,
	`goal` text NOT NULL,
	`duration_minutes` integer NOT NULL,
	`elapsed_seconds` integer DEFAULT 0,
	`is_running` integer DEFAULT false,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP
);
