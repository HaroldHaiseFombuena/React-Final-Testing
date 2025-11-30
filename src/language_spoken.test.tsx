import { it, expect,describe} from '@jest/globals';
import { countryExtractor, countryListLookup } from './language_spoken';

describe("Country Extractor Function", () => {
    it("converts array of country data objects to array of countries", () => {
        const CountriesAllData = [
            { name: "Argentina", capital: "Buenos Aires" },
            { name: "Belize", capital: "Belmopan" },
            { name: "Bolivia", capital: "Sucre" }
        ];
        
        const expectedValue = ["Argentina", "Belize", "Bolivia"];

        const CountryName = countryExtractor(CountriesAllData);

        expect(CountryName).toEqual(expectedValue);
        expect(CountryName[0]).toEqual("Argentina"); 
        expect(CountryName).toContain("Belize");
        expect(CountryName[2]).toBe("Bolivia");
        expect(CountryName[3]).toBeUndefined();
    });
});
describe("Country List Lookup Function", () => {
    it("fetches list of countries where language is spoken",async () => {
        const alpha2Code = "en";  // Example alpha-2 code for testing  
        const countries = await countryListLookup(alpha2Code);
        expect(countries).toContain("Australia");
        expect(countries).toContain("Belize");
        expect(countries?.length).toBeGreaterThan(10);
    });
});

