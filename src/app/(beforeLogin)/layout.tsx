import React from "react";
import styles from "@/app/(beforeLogin)/_component/main.module.css";

interface BeforeLayoutProps {
	children: React.ReactNode;
	modal: React.ReactNode;
}

const BeforeLayout = ({ children, modal }: BeforeLayoutProps) => {
	return (
		<div className={styles.container}>
			{children}
			{modal}
		</div>
	);
};

export default BeforeLayout;
