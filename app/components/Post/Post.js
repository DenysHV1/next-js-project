import Link from "next/link.js";

const Post = ({data}) => {
	return       <div className="container">
	<Link href={"/about"}>Go back</Link>
	  <div style={{ margin: "20px 0" }}>
		{data && (
		  <div>
			<h1>{data.title}</h1>
			<p>{data.body}</p>
		  </div>
		)}
	  </div>
  </div>
}

export default Post;