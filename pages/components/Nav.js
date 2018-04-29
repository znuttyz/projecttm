const items = ["หน้าแรก", "เกี่ยวกับเรา", "แบรนด์ของเรา", "ข่าวสาร/โปรโมชั่น", "คู่ค้าสัมพันธ์", "ติดต่อ"]

const Nav = ({ isActive }) => (
	<div className="header">
		<div className="logo">
			<img src="static/images/00-global/tummour.png" />
		</div>
		<div className="navbar">
			<ul>
				<li><a href=""><img src="static/images/00-nav/01.png" /></a></li>
				<li><a href=""><img src="static/images/00-nav/02.png" /></a></li>
				<li><a href=""><img src="static/images/00-nav/03.png" /></a></li>
				<li><a href=""><img src="static/images/00-nav/04.png" /></a></li>
				<li><a href=""><img src="static/images/00-nav/05.png" /></a></li>
			</ul>
		</div>
	</div>
)


export { Nav }
