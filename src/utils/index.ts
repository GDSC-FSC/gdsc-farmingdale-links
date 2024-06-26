import { toast } from "sonner";

export async function apiJson<T>(
	path: string,
	method = "GET",
	body: object | null = null,
): Promise<ApiJsonResponse<T>> {
	const payload: RequestInit = {
		headers: {
			"Content-Type": "application/json",
		},
		method: method,
	};

	if (body !== null) {
		payload.body = JSON.stringify(body);
	}

	const response = await fetch(path, payload);
	const json = await response.json();

	if (response.status >= 400) {
		toast.error(json.message);
		console.error(json.message);
		return {
			status: response.status,
		};
	}

	return {
		status: 200,
		response: json,
	};
}
