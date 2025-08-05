export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return res.status(500).json({ error: "Failed to fetch reviews", status: data.status });
    }

    const reviews = data.result.reviews || [];
    const rating = data.result.rating;
    const total = data.result.user_ratings_total;

    return res.status(200).json({ rating, total, reviews });
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
}