import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import styles from './Sidebar.module.scss';
import { ArrowButton } from 'src/ui/arrow-button';

export interface ISidebarProps {
	children: ReactNode;
}

export const Sidebar = ({ children }: ISidebarProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={clsx(styles.sidebar, { [styles.sidebar_open]: isOpen })}>
				{children}
			</aside>
		</>
	);
};
