import { delay, http, HttpResponse } from "msw";
import { meals } from "@/src/mocks/mockData/meals";
import { emptySummary, summary } from "@/src/mocks/mockData/summary";

export const handlers = [
    http.get('/api/meals', async () => {
        return HttpResponse.json(meals)
    }),
    http.post<{ id: string }>('/api/meals/add/:id', async ({ params }) => {
        await delay(850)

        if (params.id === '2') {
            return new HttpResponse(null, { status: 425 })
        }

        return new HttpResponse(null, { status: 202 })
    }),
    http.get('/api/cart/summary', async () => {
        await delay()

        return HttpResponse.json(summary)
    }),
    http.get('/api/cart/clear', async () => {
        await delay()
        return HttpResponse.json(emptySummary)
    })
]
