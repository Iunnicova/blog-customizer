import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	return (
		<form className={styles.form}>
			<div className={styles.bottomContainer}>
				<Button title='Сбросить' htmlType='reset' type='clear' />
				<Button title='Применить' htmlType='submit' type='apply' />
			</div>
		</form>
	);
};
