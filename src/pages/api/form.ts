import type { APIRoute } from "astro";

export const POST: APIRoute = async (context) => {
	const db = context.locals.runtime.env.portfolio_contact_form_db;

	try {
		const data = await context.request.formData();
		const name = data.get("name");
		const email = data.get("email");
		const message = data.get("message");

		if (!name || !email || !message) {
			return new Response("All fields are required", { status: 400 });
		}

		await db
			.prepare(
				"INSERT INTO submissions (name, email, message, timestamp) VALUES (?, ?, ?, ?)",
			)
			.bind(name, email, message, new Date().toISOString())
			.run();

		return new Response(JSON.stringify({ message: "Submission successful!" }), {
			status: 200,
		});
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ message: "Something went wrong!" }), {
			status: 500,
		});
	}
};

export const prerender = false;
