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
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	return (
		<form className={styles.form}>
			<Text as='h2' size={31} weight={800} uppercase>
				Задайте параметры
			</Text>
			<Select
				options={fontFamilyOptions}
				selected={fontFamilyOptions[0]}
				title='шрифт'
				placeholder='Выберите шрифт'
			/>
			<RadioGroup
				options={fontSizeOptions}
				selected={fontSizeOptions[0]}
				name='fontSize'
				title='размер шрифта'
			/>
			<Select
				options={fontColors}
				selected={fontColors[0]}
				title='Цвет шрифта'
				placeholder='Выберите цвет шрифта'
			/>
			<Separator />
			<Select
				options={backgroundColors}
				selected={backgroundColors[0]}
				title='Цвет фона'
				placeholder='Выберите цвет фона'
			/>
			<Select
				options={contentWidthArr}
				selected={contentWidthArr[0]}
				title='Ширина контента'
				placeholder='Выберите ширину контента'
			/>
			<div className={styles.bottomContainer}>
				<Button title='Сбросить' htmlType='reset' type='clear' />
				<Button title='Применить' htmlType='submit' type='apply' />
			</div>
		</form>
	);
};
