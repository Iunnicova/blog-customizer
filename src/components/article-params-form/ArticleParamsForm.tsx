import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	ArticleStateType,
	OptionType,
	defaultArticleState,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	setArticleState: (props: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	articleState,
	setArticleState,
}: ArticleParamsFormProps) => {
	const {
		fontFamilyOption,
		fontSizeOption,
		fontColor,
		backgroundColor,
		contentWidth,
	} = { ...articleState };
	const [selectedFontFamily, setSelectedFontFamily] =
		useState(fontFamilyOption);
	const [selectedFontSize, setSelectedFontsize] = useState(fontSizeOption);
	const [selectedFontColor, setSelectedFontColor] = useState(fontColor);
	const [selectedBackgroundColor, setSelectedBackgroundColor] =
		useState(backgroundColor);
	const [selectedContentWidth, setSelectedContentWidth] =
		useState(contentWidth);

	const handleChangefontFamily = (option: OptionType) => {
		setSelectedFontFamily(option);
	};

	const handleChangeFontSize = (option: OptionType) => {
		setSelectedFontsize(option);
	};

	const handleChangeFontColor = (option: OptionType) => {
		setSelectedFontColor(option);
	};

	const handleChangeBackgroundColor = (option: OptionType) => {
		setSelectedBackgroundColor(option);
	};

	const handleChangeContentWidth = (option: OptionType) => {
		setSelectedContentWidth(option);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setArticleState({
			...articleState,
			fontFamilyOption: selectedFontFamily,
			fontSizeOption: selectedFontSize,
			fontColor: selectedFontColor,
			backgroundColor: selectedBackgroundColor,
			contentWidth: selectedContentWidth,
		});
	};

	const handleReturnDefaultSettings = () => {
		setArticleState(defaultArticleState),
			setSelectedFontFamily(defaultArticleState.fontFamilyOption),
			setSelectedFontsize(defaultArticleState.fontSizeOption),
			setSelectedFontColor(defaultArticleState.fontColor),
			setSelectedBackgroundColor(defaultArticleState.backgroundColor),
			setSelectedContentWidth(defaultArticleState.contentWidth);
	};

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit}
			onReset={handleReturnDefaultSettings}>
			<Text as='h2' size={31} weight={800} uppercase>
				Задайте параметры
			</Text>
			<Select
				options={fontFamilyOptions}
				selected={selectedFontFamily}
				title='шрифт'
				placeholder='Выберите шрифт'
				onChange={handleChangefontFamily}
			/>
			<RadioGroup
				options={fontSizeOptions}
				selected={selectedFontSize}
				name='fontSize'
				title='размер шрифта'
				onChange={handleChangeFontSize}
			/>
			<Select
				options={fontColors}
				selected={selectedFontColor}
				title='Цвет шрифта'
				placeholder='Выберите цвет шрифта'
				onChange={handleChangeFontColor}
			/>
			<Separator />
			<Select
				options={backgroundColors}
				selected={selectedBackgroundColor}
				title='Цвет фона'
				placeholder='Выберите цвет фона'
				onChange={handleChangeBackgroundColor}
			/>
			<Select
				options={contentWidthArr}
				selected={selectedContentWidth}
				title='Ширина контента'
				placeholder='Выберите ширину контента'
				onChange={handleChangeContentWidth}
			/>
			<div className={styles.bottomContainer}>
				<Button title='Сбросить' htmlType='reset' type='clear' />
				<Button title='Применить' htmlType='submit' type='apply' />
			</div>
		</form>
	);
};
