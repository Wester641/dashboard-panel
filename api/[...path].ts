import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Получаем путь после /api/
    const path = req.url?.replace("/api/", "") || "";

    // Строим полный URL к вашему backend
    const url = `http://165.227.142.6/api/v1/${path}`;

    console.log("Proxying request to:", url);

    // Подготавливаем body для POST/PUT/DELETE запросов
    let body: string | undefined = undefined; // ✅ ИСПРАВЛЕНО
    if (req.method !== "GET" && req.method !== "HEAD") {
      body = JSON.stringify(req.body);
    }

    // Делаем запрос к вашему API
    const response = await fetch(url, {
      method: req.method || "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const data = await response.json();

    // Устанавливаем CORS headers (на всякий случай)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Обрабатываем OPTIONS запрос (preflight)
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({
      error: "Internal proxy error",
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
