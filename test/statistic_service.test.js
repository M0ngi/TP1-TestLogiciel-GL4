import { test, expect, describe, it } from 'vitest';
import { statisticService } from './../src/services'


const VALID_RETURNS = {
    CORRECT_AVG: 20.5,
    ABOVE_20_AGE_COUNT: 3,
}
const DATA = [
    {
        createdBy: "user1",
        response: {
            gender: "M",
            age: 20
        }
    },
    {
        createdBy: "user2",
        response: {
            gender: "M",
            age: 21
        }
    },
    {
        createdBy: "user3",
        response: {
            gender: "M",
            age: 18
        }
    },
    {
        createdBy: "user4",
        response: {
            gender: "F",
            age: 23
        }
    },
];

describe('filter_males()', () => {
    it('should return responses from male users only', () => {
        const males = statisticService.filter_males(DATA)
        const users = males.map(x => x.createdBy);

        expect(males).toBeDefined(); // On s'assure que les données ont été renvoyées
        expect(Array.isArray(males)).toBe(true)
        expect(users.sort()).toEqual(["user1", "user2", "user3"].sort())
    })
})

describe('filter_females()', () => {
    it('should return responses from female users only', () => {
        const females = statisticService.filter_females(DATA)
        const users = females.map(x => x.createdBy);

        expect(females).toBeDefined(); // On s'assure que les données ont été renvoyées
        expect(Array.isArray(females)).toBe(true)
        expect(users.sort()).toEqual(["user4"].sort())
    })
})

describe('avg_age()', () => {
    it('should calculate the average age of the given answers', () => {
        const avg = statisticService.avg_age(DATA)
        
        expect(avg).toEqual(VALID_RETURNS.CORRECT_AVG)
    })
})

describe('count_above_age()', () => {
    it('should calculate the number of users older than the given age (20)', () => {
        const count = statisticService.count_above_age(DATA, 20)
        
        expect(count).toEqual(VALID_RETURNS.ABOVE_20_AGE_COUNT)
    })
})
