import React from 'react';
import {GetletterMatchingCount} from './'

describe('Letter Matching Count',()=> {
    const secretWord = "party"
    it('should return `0` when no match found',()=>{
        expect(GetletterMatchingCount('fox',secretWord)).toBe(0)
    });
    it('should return `3` when three match found',()=>{
        expect(GetletterMatchingCount('art',secretWord)).toBe(3)
    });
    it('should return `3` when multiple match found',()=>{
        expect(GetletterMatchingCount('raatt',secretWord)).toBe(3)
    });
})