const DEFAULT_BACKGROUND = '#E9D460';

export interface stateType {
	isLoading: boolean;
	isReady: boolean;
	hasError: boolean;
	url: string;
	color: string;
	noBackground: boolean;
}

const INITIAL_STATE: stateType = {
	isLoading: false,
	isReady: false,
	hasError: false,
	url: '',
	color: DEFAULT_BACKGROUND,
	noBackground: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	state: INITIAL_STATE,
	reducers: {
		setImageError(state: stateType) {
			return { ...state, hasError: true, isLoading: false };
		},

		setImageLoaded(state: stateType) {
			return { ...state, isReady: true, isLoading: false, hasError: false };
		},

		updateUrl(state: stateType, url: string) {
			return { ...state, url };
		},

		updateColor(state: stateType, color: { hex: string }) {
			return { ...state, color: color.hex };
		},

		setLoading(state: stateType) {
			return { ...state, isLoading: true, hasError: false };
		},

		toggleNoBackground(state: stateType) {
			return { ...state, noBackground: !state.noBackground };
		},

		clear(state: stateType) {
			return { ...INITIAL_STATE, hasError: state.hasError };
		},
	},
};
