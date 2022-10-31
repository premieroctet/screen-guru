import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isValidURL } from '../utils/utils';
import { InputSubmit, InputText } from './elements';
import ErrorPanel from '../components/ErrorPanel/ErrorPanel';
import SettingsPanel from '../components/SettingsPanel';
import { useRouter } from 'next/router';
import { stateType } from '../models/app';

const Home = () => {
	const urlInputRef = useRef<any>(null);
	const [hasInvalidUrl, setHasInvalidUrl] = useState(false);
	const router = useRouter();

	const dispatch = useDispatch();
	const { updateUrl, setLoading, clear } = dispatch.app;

	const isReady = useSelector((state: { app: stateType }) => state.app.isReady);
	const isLoading = useSelector((state: { app: stateType }) => state.app.isLoading);
	const hasError = useSelector((state: { app: stateType }) => state.app.hasError);
	const url = useSelector((state: { app: stateType }) => state.app.url);

	useEffect(() => {
		if (urlInputRef.current) {
			urlInputRef.current.focus();
		}

		clear();

		const { url } = router.query;

		if (url && isValidURL(url!.toString())) {
			updateUrl(url);
		}
	}, []);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateUrl(e.target.value);
		setHasInvalidUrl(false);
	};

	const handleOnSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (isValidURL(url)) {
			setLoading();
			router.push('/screenshot');
		} else {
			setHasInvalidUrl(true);
		}
	};

	return (
		<>
			{hasError && <ErrorPanel />}

			{!isLoading && !isReady && (
				<form onSubmit={handleOnSubmit}>
					<InputText
						autoCorrect="off"
						autoCapitalize="none"
						ref={urlInputRef}
						placeholder="Website URL"
						value={url}
						onChange={handleOnChange}
						type="text"
						invalidUrl={hasInvalidUrl}
						autoComplete="off"
					/>

					<InputSubmit value="Create" type="submit" />

					<SettingsPanel />
				</form>
			)}
		</>
	);
};

export default Home;
