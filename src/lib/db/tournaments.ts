export type Tournament = {
	title: string;
	game: 'PUBG Mobile' | 'Mobile Legends' | 'Call of Duty: Mobile' | 'Clash Royale';
	gameSlug: 'pubgm' | 'mlbb' | 'codm' | 'cr';
	coverImage: string;
	format: '1v1' | '5v5' | 'Standard';
	prize: number;
	prizeFormat: 'Taka' | 'Pixles';
	entryFee: number;
	entryFeeFormat: 'Taka' | 'Pixles';
	maxParticipant: number;
	currentParticipant: number;
	startDate: string;
};

export const tournaments: Tournament[] = [
	// PUBG Mobile Tournaments
	{
		title: 'PUBG Mobile Championship',
		game: 'PUBG Mobile',
		gameSlug: 'pubgm',
		coverImage: 'https://placehold.co/640x200',
		format: '5v5',
		prize: 10000,
		prizeFormat: 'Taka',
		entryFee: 500,
		entryFeeFormat: 'Taka',
		maxParticipant: 50,
		currentParticipant: 40,
		startDate: '2024-03-01'
	},
	{
		title: 'PUBG Mobile Solo Showdown',
		game: 'PUBG Mobile',
		gameSlug: 'pubgm',
		coverImage: 'https://placehold.co/640x200',
		format: '1v1',
		prize: 5000,
		prizeFormat: 'Taka',
		entryFee: 200,
		entryFeeFormat: 'Taka',
		maxParticipant: 100,
		currentParticipant: 80,
		startDate: '2024-03-15'
	},
	// Add more PUBG Mobile tournaments here...

	// Mobile Legends Tournaments
	{
		title: 'MLBB World Series',
		game: 'Mobile Legends',
		gameSlug: 'mlbb',
		coverImage: 'https://placehold.co/640x200',
		format: '5v5',
		prize: 20000,
		prizeFormat: 'Pixles',
		entryFee: 1000,
		entryFeeFormat: 'Pixles',
		maxParticipant: 32,
		currentParticipant: 28,
		startDate: '2024-04-10'
	},
	{
		title: 'MLBB Solo Showdown',
		game: 'Mobile Legends',
		gameSlug: 'mlbb',
		coverImage: 'https://placehold.co/640x200',
		format: '1v1',
		prize: 10000,
		prizeFormat: 'Pixles',
		entryFee: 500,
		entryFeeFormat: 'Pixles',
		maxParticipant: 64,
		currentParticipant: 60,
		startDate: '2024-04-25'
	},
	// Add more Mobile Legends tournaments here...

	// Call of Duty: Mobile Tournaments
	{
		title: 'CODM Pro League',
		game: 'Call of Duty: Mobile',
		gameSlug: 'codm',
		coverImage: 'https://placehold.co/640x200',
		format: '5v5',
		prize: 15000,
		prizeFormat: 'Taka',
		entryFee: 750,
		entryFeeFormat: 'Taka',
		maxParticipant: 20,
		currentParticipant: 18,
		startDate: '2024-05-05'
	},
	{
		title: 'CODM Battle Royale Challenge',
		game: 'Call of Duty: Mobile',
		gameSlug: 'codm',
		coverImage: 'https://placehold.co/640x200',
		format: 'Standard',
		prize: 8000,
		prizeFormat: 'Taka',
		entryFee: 400,
		entryFeeFormat: 'Taka',
		maxParticipant: 50,
		currentParticipant: 45,
		startDate: '2024-05-20'
	},
	// Add more Call of Duty: Mobile tournaments here...

	// Clash Royale Tournaments
	{
		title: 'Clash Royale Grand Slam',
		game: 'Clash Royale',
		gameSlug: 'cr',
		coverImage: 'https://placehold.co/640x200',
		format: '1v1',
		prize: 30000,
		prizeFormat: 'Pixles',
		entryFee: 1500,
		entryFeeFormat: 'Pixles',
		maxParticipant: 16,
		currentParticipant: 12,
		startDate: '2024-06-01'
	},
	{
		title: 'Clash Royale Team Clash',
		game: 'Clash Royale',
		gameSlug: 'cr',
		coverImage: 'https://placehold.co/640x200',
		format: '5v5',
		prize: 25000,
		prizeFormat: 'Pixles',
		entryFee: 1200,
		entryFeeFormat: 'Pixles',
		maxParticipant: 20,
		currentParticipant: 16,
		startDate: '2024-06-15'
	},
	{
		title: 'PUBG Mobile Elite League',
		game: 'PUBG Mobile',
		gameSlug: 'pubgm',
		coverImage: 'https://placehold.co/640x200',
		format: '5v5',
		prize: 12000,
		prizeFormat: 'Taka',
		entryFee: 600,
		entryFeeFormat: 'Taka',
		maxParticipant: 40,
		currentParticipant: 35,
		startDate: '2024-03-20'
	},
	{
		title: 'PUBG Mobile Squad Showdown',
		game: 'PUBG Mobile',
		gameSlug: 'pubgm',
		coverImage: 'https://placehold.co/640x200',
		format: '5v5',
		prize: 8000,
		prizeFormat: 'Taka',
		entryFee: 400,
		entryFeeFormat: 'Taka',
		maxParticipant: 60,
		currentParticipant: 55,
		startDate: '2024-04-05'
	},
	// Add more PUBG Mobile tournaments here...

	// Additional Mobile Legends Tournaments
	{
		title: 'MLBB Masters Cup',
		game: 'Mobile Legends',
		gameSlug: 'mlbb',
		coverImage: 'https://placehold.co/640x200',
		format: '5v5',
		prize: 25000,
		prizeFormat: 'Pixles',
		entryFee: 1200,
		entryFeeFormat: 'Pixles',
		maxParticipant: 24,
		currentParticipant: 20,
		startDate: '2024-05-01'
	},
	{
		title: 'MLBB Clash of Titans',
		game: 'Mobile Legends',
		gameSlug: 'mlbb',
		coverImage: 'https://placehold.co/640x200',
		format: '5v5',
		prize: 18000,
		prizeFormat: 'Pixles',
		entryFee: 900,
		entryFeeFormat: 'Pixles',
		maxParticipant: 48,
		currentParticipant: 42,
		startDate: '2024-05-15'
	},
	// Add more Mobile Legends tournaments here...

	// Additional Call of Duty: Mobile Tournaments
	{
		title: 'CODM Battle Royale Showdown',
		game: 'Call of Duty: Mobile',
		gameSlug: 'codm',
		coverImage: 'https://placehold.co/640x200',
		format: 'Standard',
		prize: 10000,
		prizeFormat: 'Taka',
		entryFee: 500,
		entryFeeFormat: 'Taka',
		maxParticipant: 30,
		currentParticipant: 25,
		startDate: '2024-06-01'
	},
	{
		title: 'CODM Gunfight Tournament',
		game: 'Call of Duty: Mobile',
		gameSlug: 'codm',
		coverImage: 'https://placehold.co/640x200',
		format: '1v1',
		prize: 6000,
		prizeFormat: 'Taka',
		entryFee: 300,
		entryFeeFormat: 'Taka',
		maxParticipant: 64,
		currentParticipant: 58,
		startDate: '2024-06-10'
	},
	// Add more Call of Duty: Mobile tournaments here...

	// Additional Clash Royale Tournaments
	{
		title: 'Clash Royale Royale Rumble',
		game: 'Clash Royale',
		gameSlug: 'cr',
		coverImage: 'https://placehold.co/640x200',
		format: '1v1',
		prize: 35000,
		prizeFormat: 'Pixles',
		entryFee: 1800,
		entryFeeFormat: 'Pixles',
		maxParticipant: 20,
		currentParticipant: 18,
		startDate: '2024-07-01'
	},
	{
		title: 'Clash Royale Clan Clash',
		game: 'Clash Royale',
		gameSlug: 'cr',
		coverImage: 'https://placehold.co/640x200',
		format: '5v5',
		prize: 30000,
		prizeFormat: 'Pixles',
		entryFee: 1500,
		entryFeeFormat: 'Pixles',
		maxParticipant: 16,
		currentParticipant: 14,
		startDate: '2024-07-15'
	}
];
