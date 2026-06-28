import { http, HttpResponse } from 'msw'
import { Meals } from "@/src/mocks/mockData/meals";

export const handlers = [
    http.get('/api/meals', () => {
        return HttpResponse.json(Meals)
    }),
]
