import * as Types from "./../actions/ActionTypes";
import ShuffleCountries from "../../component/utils/country/ShuffleCountries";

const initialState = {
  isFetching: false,
  isLoading: false,
  error: false,
  nextStep: false,
  allcountriesinworld: [],
  separateCountries: [],
  uniqUrls: [],
  uniqCountries: [],
  countriesNeighbors: [],
  commonNeighborsUniqeCountry: [],
};

export const Countries = (state = initialState, action) => {
  switch (action.type) {
    case Types.COUNTRY_REQUEST:
      return { ...state, isFetching: true };
    case Types.COUNTRY_RECEIVE:
      const shuffle = ShuffleCountries(action.payload, 10);
      return {
        ...state,
        isFetching: false,
        nextStep: true,
        allcountriesinworld: action.payload,
        separateCountries: shuffle,
        uniqUrls: shuffle.map((el) => el.url),
        uniqCountries: shuffle.map((el) => el.name),
      };
    case Types.COUNTRY_FAIL:
      return { ...state, isLoading: false, error: true };
    case Types.SEPARATE_COUNTRY:
      return {
        ...state,
        isFetching: false,
        separateCountries: action.payload,
        uniqUrls: action.payload.map((el) => el.url),
        uniqCountries: action.payload.map((el) => el.name),
      };
    case Types.COUNTRY_NEIGHBORS_REQUEST:
      return { ...state, isLoading: true };
    case Types.COUNTRY_NEIGHBORS_RECEIVE:
      return { ...state, isLoading: false, countriesNeighbors: action.payload };
    case Types.COUNTRY_NEIGHBORS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: true,
        countriesNeighbors: action.payload,
      };
    case Types.COUNTRY_COMMON_NEIGHBORS:
      return { ...state, commonNeighborsUniqeCountry: action.payload };
    default:
      return state;
  }
};
