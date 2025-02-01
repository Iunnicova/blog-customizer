import clsx from 'clsx';
import { ReactNode, useState, useRef } from 'react';
import styles from './Sidebar.module.scss';
import { ArrowButton } from 'src/ui/arrow-button';
import { useOutsideClickClose } from '../../ui/select/hooks/useOutsideClickClose';
export interface ISidebarProps {
	children: ReactNode;
}

export const Sidebar = ({ children }: ISidebarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef<HTMLDivElement | null>(null);
	useOutsideClickClose({
		isOpen: isOpen,
		rootRef: sidebarRef,
		onClose: () => setIsOpen(false),
	});
	return (
		<div ref={sidebarRef}>
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
		</div>
	);
};
