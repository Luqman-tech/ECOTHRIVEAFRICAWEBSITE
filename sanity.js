import { createClient } from '@sanity/client';

const client = createVlient({
 	projectId: 'process.env.imsiquls',
	dataset: 'process.env.production',
	useCdn: true,
});

export default client;
