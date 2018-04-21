const Card = ({ children }) => (
	<div className="cardAdmin">
		<div className="cardHeader">
			<h4 className="title">Banners</h4>
			<p className="sub-title">Home page banner</p>
		</div>
		{children}
	</div>
)

export { Card }