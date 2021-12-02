import * as Types from "./ActionTypes";
import {
  getCountriesFromApi,
  getCountriesNeighborsFromApi,
} from "./../../server/Country";
import ShuffleCountries from "../../component/utils/country/ShuffleCountries";
import isExistKeyArrayObjects from "../../component/utils/country/isExistKeyArrayObjects";
import findNeigbors from "../../component/utils/country/findNeighbors";

//fetch All Countries in World
export const fetchCountry = () => {
  return async (dispatch) => {
    await dispatch({ type: Types.COUNTRY_REQUEST });
    try {
      const { data, status } = await getCountriesFromApi();
      if (status === 200) {
        await dispatch({ type: Types.COUNTRY_RECEIVE, payload: data });
        await dispatch(fetchCountriesNeighbors());
      }
    } catch (error) {
      await dispatch({ type: Types.COUNTRY_FAIL, payload: {} });
      console.log("api request error", error);
    }
  };
};

// if change number of contries
export const separateCountries = (count = 10) => {
  return async (dispatch, getState) => {
    const allcountries = [...getState().country.allcountriesinworld];
    const shuffle = ShuffleCountries(allcountries, count);

    dispatch({ type: Types.SEPARATE_COUNTRY, payload: shuffle });
    await dispatch(fetchCountriesNeighbors());
    await dispatch(commonNeighborsUniqeCountry());
  };
};

// fetch neighbors
export const fetchCountriesNeighbors = () => {
  return (dispatch, getState) => {
    const urls = [...getState().country.uniqUrls];
    urls.map((url) => dispatch(fetchCountryNeighbors(url)));
  };
};

export const fetchCountryNeighbors = (url) => {
  return async (dispatch, getState) => {
    await dispatch({ type: Types.COUNTRY_NEIGHBORS_REQUEST });
    try {
      const { data, status } = await getCountriesNeighborsFromApi(url);
      if (status === 200) {
        console.log("foreach", url);
        const countriesNeighborsExist = [
          ...getState().country.countriesNeighbors,
        ];
        // check country is exist  in countriesNeighbors
        const countryWithNeighbors = !isExistKeyArrayObjects(
          countriesNeighborsExist,
          data.names.name
        )
          ? [
              ...countriesNeighborsExist,
              { [data.names.name]: data.neighbors.map((el) => el.name) },
            ]
          : [...countriesNeighborsExist];

        await dispatch({
          type: Types.COUNTRY_NEIGHBORS_RECEIVE,
          payload: countryWithNeighbors,
        });
        await dispatch(commonNeighborsUniqeCountry());
      }
    } catch (error) {
      const countriesNeighbors = [...getState().country.countriesNeighbors];
      await dispatch({
        type: Types.COUNTRY_NEIGHBORS_FAIL,
        payload: countriesNeighbors,
      });
      console.log("api request error", error);
    }
  };
};
//check  uniqecountry They are common neighbors

export const commonNeighborsUniqeCountry = () => {
  return async (dispatch, getState) => {
    const uniqCountries = [...getState().country.uniqCountries];
    const countriesNeighbors = [...getState().country.countriesNeighbors];

    const uniqCountriesWithNeighbors = uniqCountries
      .map((el) =>
        countriesNeighbors.filter((els) => {
          if (Object.keys(els) == el) {
            return els;
          }
        })
      )
      .flat();

    const commomNeighbors = uniqCountries.map((el) => {
      return { [el]: findNeigbors(el, uniqCountriesWithNeighbors) };
    });

    dispatch({
      type: Types.COUNTRY_COMMON_NEIGHBORS,
      payload: commomNeighbors,
    });
  };
};
