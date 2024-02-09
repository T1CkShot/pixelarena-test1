export type Tournament = {
	title: string;
	game: 'PUBG Mobile' | 'Mobile Legends' | 'Call of Duty: Mobile' | 'Clash Royale';
	gameSlug: 'pubgm' | 'mlbb' | 'codm' | 'cr';
	coverImage: string;
	format: '1v1' | '5v5';
	maxParticipant: number;
	currentParticipant: number;
	startDate: string;
};

export const tournaments = [
	{
		title: 'PUBG Mobile Championship',
		game: 'PUBG Mobile',
		gameSlug: 'pubgm',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '5v5',
		maxParticipant: 16,
		currentParticipant: 10,
		startDate: '2024-02-15'
	},
	{
		title: 'PUBG Mobile Spring Showdown',
		game: 'PUBG Mobile',
		gameSlug: 'pubgm',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '5v5',
		maxParticipant: 20,
		currentParticipant: 15,
		startDate: '2024-03-10'
	},
	{
		title: 'PUBG Mobile Elite Cup',
		game: 'PUBG Mobile',
		gameSlug: 'pubgm',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '5v5',
		maxParticipant: 24,
		currentParticipant: 18,
		startDate: '2024-04-05'
	},
	{
		title: 'Mobile Legends Invitational',
		game: 'Mobile Legends',
		gameSlug: 'mlbb',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '5v5',
		maxParticipant: 8,
		currentParticipant: 5,
		startDate: '2024-02-20'
	},
	{
		title: 'Mobile Legends Spring Cup',
		game: 'Mobile Legends',
		gameSlug: 'mlbb',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '5v5',
		maxParticipant: 12,
		currentParticipant: 8,
		startDate: '2024-03-15'
	},
	{
		title: 'Mobile Legends Grand Finals',
		game: 'Mobile Legends',
		gameSlug: 'mlbb',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '5v5',
		maxParticipant: 16,
		currentParticipant: 10,
		startDate: '2024-04-10'
	},
	{
		title: 'Call of Duty: Mobile Showdown',
		game: 'Call of Duty: Mobile',
		gameSlug: 'codm',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '5v5',
		maxParticipant: 12,
		currentParticipant: 7,
		startDate: '2024-02-25'
	},
	{
		title: 'Call of Duty: Mobile Spring Challenge',
		game: 'Call of Duty: Mobile',
		gameSlug: 'codm',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '5v5',
		maxParticipant: 16,
		currentParticipant: 11,
		startDate: '2024-03-20'
	},
	{
		title: 'Call of Duty: Mobile Elite Cup',
		game: 'Call of Duty: Mobile',
		gameSlug: 'codm',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '5v5',
		maxParticipant: 20,
		currentParticipant: 14,
		startDate: '2024-04-15'
	},
	{
		title: 'Clash Royale Solo Tournament',
		game: 'Clash Royale',
		gameSlug: 'cr',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '1v1',
		maxParticipant: 32,
		currentParticipant: 20,
		startDate: '2024-03-01'
	},
	{
		title: 'Clash Royale Spring Cup',
		game: 'Clash Royale',
		gameSlug: 'cr',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '1v1',
		maxParticipant: 48,
		currentParticipant: 30,
		startDate: '2024-03-25'
	},
	{
		title: 'Clash Royale Championship',
		game: 'Clash Royale',
		gameSlug: 'cr',
		coverImage: 'https://placehold.co/600x400/EEE/31343C',
		format: '1v1',
		maxParticipant: 64,
		currentParticipant: 40,
		startDate: '2024-04-20'
	}
];
