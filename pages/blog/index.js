import Head from "next/head";
import Link from "next/link";

function Blog() {
	return (
		<>
			<Head>
				<title>My Blog!</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div>Welcome, blog reader!</div>
			<Link href="/">
				<a>
					<p>Go back home</p>
				</a>
			</Link>
			<Link href="/pokemon">
				<a>
					<p>Go to the pokemon page</p>
				</a>
			</Link>
		</>
	);
}

export default Blog;
