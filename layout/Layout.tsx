import React, { FunctionComponent } from 'react';
import styles from './Layout.module.css';
import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div>
			<Header />
			<Sidebar />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
