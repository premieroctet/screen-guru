const DEFAULT_BACKGROUND = '#E9D460';

const INITIAL_STATE = {
  isLoading: false,
  isReady: false,
  hasError: false,
  url: '',
  color: DEFAULT_BACKGROUND,
  noBackground: false,
};

export default {
  state: INITIAL_STATE,
  reducers: {
    setImageError(state) {
      return { ...state, hasError: true, isLoading: false };
    },

    setImageLoaded(state) {
      return { ...state, isReady: true, isLoading: false, hasError: false };
    },

    updateUrl(state, url) {
      return { ...state, url };
    },

    updateColor(state, color) {
      return { ...state, color: color.hex };
    },

    setLoading(state) {
      return { ...state, isLoading: true, hasError: false };
    },

    toggleNoBackground(state) {
      return { ...state, noBackground: !state.noBackground };
    },

    clear(state) {
      return { ...INITIAL_STATE, hasError: state.hasError };
    },
  },
};
