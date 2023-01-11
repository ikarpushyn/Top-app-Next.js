import React from 'react';
import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={styles.h1}>{children}</h1>;
		case 'h2':
			return <h2 className={styles.h2}>{children}</h2>;
		case 'h3':
			return <h3 className={styles.h3}>{children}</h3>;

		default:
			return <></>;
	}

	// return (
	// 	<>
	// 		{(tag = 'h1' && <h1>{children}</h1>)}
	// 		{(tag = 'h2' && <h2>{children}</h2>)}
	// 	</>
	// );
};
