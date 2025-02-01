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
		fontColor: fontColorOption,
		backgroundColor: backgroundColorOption,
		contentWidth: contentWidthOption,
	} = { ...articleState };

	const [fontFamily, setFontFamily] = useState<OptionType>(fontFamilyOption);
	const [fontSize, setFontsize] = useState<OptionType>(fontSizeOption);
	const [fontColor, setFontColor] = useState<OptionType>(fontColorOption);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		backgroundColorOption
	);
	const [contentWidth, setContentWidth] =
		useState<OptionType>(contentWidthOption);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setArticleState({
			...articleState,
			fontFamilyOption: fontFamily,
			fontSizeOption: fontSize,
			fontColor: fontColor,
			backgroundColor: backgroundColor,
			contentWidth: contentWidth,
		});
	};

	const handleReturnDefaultSettings = () => {
		setArticleState(defaultArticleState),
			setFontFamily(defaultArticleState.fontFamilyOption),
			setFontsize(defaultArticleState.fontSizeOption),
			setFontColor(defaultArticleState.fontColor),
			setBackgroundColor(defaultArticleState.backgroundColor),
			setContentWidth(defaultArticleState.contentWidth);
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
				selected={fontFamily}
				title='шрифт'
				placeholder='Выберите шрифт'
				onChange={(option) => setFontFamily(option)}
			/>
			<RadioGroup
				options={fontSizeOptions}
				selected={fontSize}
				name='fontSize'
				title='размер шрифта'
				onChange={(option) => setFontsize(option)}
			/>
			<Select
				options={fontColors}
				selected={fontColor}
				title='Цвет шрифта'
				placeholder='Выберите цвет шрифта'
				onChange={(option) => setFontColor(option)}
			/>
			<Separator />
			<Select
				options={backgroundColors}
				selected={backgroundColor}
				title='Цвет фона'
				placeholder='Выберите цвет фона'
				onChange={(option) => setBackgroundColor(option)}
			/>
			<Select
				options={contentWidthArr}
				selected={contentWidth}
				title='Ширина контента'
				placeholder='Выберите ширину контента'
				onChange={(option) => setContentWidth(option)}
			/>
			<div className={styles.bottomContainer}>
				<Button title='Сбросить' htmlType='reset' type='clear' />
				<Button title='Применить' htmlType='submit' type='apply' />
			</div>
		</form>
	);
};
