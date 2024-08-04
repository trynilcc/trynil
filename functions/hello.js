export async function onRequest(context) {
	const { cc } = context.env;
	const stmt = cc.prepare("SELECT * FROM tn_user");
	const { results } = await stmt.all();
	const output = JSON.stringify(results);
	return new Response(`${output}`);
}

