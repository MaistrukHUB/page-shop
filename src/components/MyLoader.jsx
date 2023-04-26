import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
	<ContentLoader
		className={'product-block'}
		speed={2}
		width={260}
		height={450}
		viewBox="0 0 260 450"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="263" rx="11" ry="11" width="260" height="84" />
		<rect x="1" y="405" rx="7" ry="7" width="87" height="26" />
		<rect x="147" y="406" rx="13" ry="13" width="109" height="26" />
		<rect x="0" y="362" rx="13" ry="13" width="260" height="26" />
		<rect x="68" y="384" rx="0" ry="0" width="0" height="9" />
		<rect x="7" y="0" rx="60" ry="60" width="240" height="241" />
		<rect x="147" y="164" rx="0" ry="0" width="37" height="13" />
	</ContentLoader>
)

export default MyLoader