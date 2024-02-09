export type Game = {
	title: string;
	slug: string;
	cardImage: string;
};

export const games: Game[] = [
	{
		title: 'PUBG Mobile',
		slug: 'pubgm',
		cardImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1njn.png'
	},
	{
		title: 'Mobile Legends',
		slug: 'mlbb',
		cardImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co7lqm.png'
	},
	{
		title: 'Call of Duty: Mobile',
		slug: 'codm',
		cardImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1vqe.png'
	},
	{
		title: 'Clash Royale',
		slug: 'cr',
		cardImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1mb7.png'
	}
];
