import { delay, http, HttpResponse } from "msw";
import { meals } from "@/src/mocks/mockData/meals";
import { emptySummary, summary } from "@/src/mocks/mockData/summary";

// For "live action" mocks replace current response with "currentSummary" response
// let currentSummary = { ...emptySummary }

export const handlers = [
    http.get('/api/meals', async () => {
        return HttpResponse.json(meals)
    }),
    http.post<{ id: string }>('/api/meals/add/:id', async ({ params }) => {
        await delay(850)

        if (params.id === '2') {
            return new HttpResponse(null, { status: 425 })
        }

        // const item = meals.find((meal) => meal.id === params.id)
        //
        // if (!item) {
        //     return new HttpResponse(null, { status: 404 })
        // }
        //
        // currentSummary.totalPrice += item.price
        // currentSummary.totalItems += 1;

        return new HttpResponse(null, { status: 202 })
    }),
    http.get('/api/cart/summary', async () => {
        // ~100 - 400ms
        await delay()

        return HttpResponse.json(summary)
        // return HttpResponse.json(currentSummary)
    }),
    http.get('/api/cart/clear', async () => {
        await delay()
        // currentSummary = { ...emptySummary }
        //
        // return HttpResponse.json(currentSummary)

        return HttpResponse.json(emptySummary)
    })
]
