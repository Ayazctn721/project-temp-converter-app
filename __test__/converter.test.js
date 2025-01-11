import { describe, it, expect, test } from "vitest";
import { celsiusToFahrenheit, fahrenheitToCelsius, celsiusToKelvin, kelvinToCelsius, fahrenheitToKelvin, kelvinToFahrenheit } from "../src/coverter.js";

describe("celsiusToFahrenheit tests", () => {
    // 0°C = 32°F
    it('should convert 0°C to 32°F', () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
    })
    // 100°C = 212°F
    it('should convert 100°C to 212°F', () => {
        expect(celsiusToFahrenheit(100)).toBe(212);
    });
    // -40°C = -40°F
    it('should convert -40°C to -40°F', () => {
        expect(celsiusToFahrenheit(-40)).toBe(-40);
    });

    it('should handle precision for decimal values', () => {
        expect(celsiusToFahrenheit(0.1)).toBeCloseTo(32.18);
    });
});

describe("fahrenheitToCelsius tests", () => {
    // 32°F = 0°C
    it('should convert 32°F to 0°C', () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    })
    // -100°F = -73.33°C
    it('should convert -100°F to -73.33°C', () => {
        expect(fahrenheitToCelsius(-100)).toBe(-73.33);
    });

});

describe("celsiusToKelvin tests", () => {
    // 0°C = 273.15K
    it('should convert 0°C to 273.15K', () => {
        expect(celsiusToKelvin(0)).toBe(273.15);
    })
    // -500°C can not convert to Kelvin
    it('should convert -500°C to -226.85°C', () => {
        expect(celsiusToKelvin(-500)).toBe(-226.85);
    })
    // 100°C = 373.15K
    it('should convert 100°C to 373.15K', () => {
        expect(celsiusToKelvin(100)).toBe('373.15'); // error
    });
});

describe("kelvinToCelsius tests", () => {
    // 273.15K = 0°C
    it('should convert 273.15K to 0°C', () => {
        expect(kelvinToCelsius(273.15)).toBe(0);
    })

// k can not be negative
    it('should convert -26.85K to -300°C', () => {
        expect(kelvinToCelsius(-26.85)).toBe(-300);
    });

    // 373.15K = 100°C
    it('should convert 373.15K to 100°C', () => {
        expect(kelvinToCelsius(373.15)).toBe(100);
    });

    // string
    it("should convert '373.15'K to '100'°C", () => {
        expect(kelvinToCelsius('373.15')).toBe(100);
    });
});

describe("fahrenheitToKelvin tests", () => {
    // 32°F = 273.15K
    it('should convert 32°F to 273.15K', () => {
        expect(fahrenheitToKelvin(32)).toBe(273.15);
    })
    // -100°F = 16.67K
    it('should convert -100°F to 16.67K', () => {
        expect(fahrenheitToKelvin(-100)).toBe(199.82);
    });
    //null and undefined
    it('null and undefined', () => {
        expect(null).toBeNull();
        expect(undefined).toBeUndefined();
    });
});

describe("kelvinToFahrenheit tests", () => {
    // 273.15K = 32°F
    it('should convert 273.15K to 32°F', () => {
        expect(kelvinToFahrenheit(273.15)).toBe(32);
    })
    // 16.67K = -100°F
    it('should convert 16.67K to -100°F', () => {
        expect(kelvinToFahrenheit(16.67)).toBe(-100); // error bc toBe(-429.66)
    });
    // true and false
    it('truthy and falsy ', () => {
        expect(true).toBeFalsy(); // error bc toBe(true)
    });
    it('truthy and falsy ', () => {
        expect(false).toBeFalsy();
    });

});




