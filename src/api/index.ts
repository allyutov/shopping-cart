import type { CityType, CountryType } from "@/types/user";
import { useUserStore } from "@/stores/user";

export function getToken() {
  return fetch("https://www.universal-tutorial.com/api/getaccesstoken/", {
    headers: {
      Accept: "application/json",
      "api-token":
        "z0_r4pPU6LC6w1HWGx2O0itHuXR5xGMIenxQEjvLurtT9PIMklXzKyZx4NOCDq0NpYc",
      "user-email": import.meta.env.VITE_API_MAIL,
    },
  })
    .then((payload) => payload.json())
    .then((token) => token);
}

export function getCountries(val: string): Promise<CountryType[]> {
  const USER = useUserStore();

  return fetch("https://www.universal-tutorial.com/api/countries/", {
    headers: {
      Authorization: `Bearer ${USER.token}`,
      Accept: "application/json",
    },
  })
    .then((payload) => payload.json())
    .then((result: CountryType[]) => {
      const countries = result.filter(
        (o) => o.country_name.indexOf(val) !== -1
      );

      return countries.map((country: CountryType) => ({
        id: country.country_phone_code,
        name: country.country_name,
      }));
    })
    .catch((error) => error);
}

export function getRegions(country: string, val: string): Promise<CityType[]> {
  const USER = useUserStore();

  return fetch(`https://www.universal-tutorial.com/api/states/${country}`, {
    headers: {
      Authorization: `Bearer ${USER.token}`,
      Accept: "application/json",
    },
  })
    .then((payload) => payload.json())
    .then((result: CityType[]) => {
      const cities = result.filter((o) => o.state_name.indexOf(val) !== -1);

      return cities.map((city: CityType) => ({
        name: city.state_name,
      }));
    })
    .catch((error) => error);
}
