import { test, expect, describe, it } from 'vitest';
import { is_admin_access } from './../src/utils/access_control'

describe('is_admin_access()', () => {
    it('should check if user has access to admin resources', () => {
        expect(is_admin_access({role: "admin"})).toBe(true)
    })

    it('should return false if user has no role', () => {
        expect(is_admin_access({})).toBe(false)
    })
})
