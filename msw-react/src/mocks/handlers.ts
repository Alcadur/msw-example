import { delay, http, HttpResponse } from "msw";
import { Meals } from "@/src/mocks/mockData/meals";

export const handlers = [
    http.get('/api/meals', () => {
        return HttpResponse.json(Meals)
    }),
    http.post<{ id: string }>('/api/meals/add/:id', async ({ params }) => {
        await delay(850)

        if (params.id === '2') {
            return new HttpResponse(null, { status: 425 })
        }

        return new HttpResponse(null, { status: 202 })
    }),
]
