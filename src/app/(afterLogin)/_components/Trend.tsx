import Link from "next/link";
import styles from "./trend.module.css";

export default function Trend() {
	return (
		<Link
			href={`/search?q=test`}
			className={styles.container}
		>
			<div className={styles.count}>실시간트렌드</div>
			<div className={styles.title}>타이틀</div>
			<div className={styles.count}>1,234 posts</div>
		</Link>
	);
}
