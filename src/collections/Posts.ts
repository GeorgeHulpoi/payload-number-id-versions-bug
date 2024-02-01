import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
	slug: 'posts',
	versions: {
		drafts: true,
		maxPerDoc: 5,
	},
	fields: [
		{
			name: 'id',
			type: 'number',
		},
		{
			type: 'text',
			name: 'title',
		},
	],
};

export default Posts;
