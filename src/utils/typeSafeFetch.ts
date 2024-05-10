export async function fetchData<JSON>(
	input: RequestInfo,
	init?: RequestInit,
): Promise<JSON> {
	const response = await fetch(input, init);
	if (!response.ok) {
		const json = await response.json();
		const errorMessage = json.error || response.statusText;
		throw new Error(errorMessage);
	}
	return response.json();
}
