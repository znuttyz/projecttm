const Header = ({ title }) => (
	<div className="headerContainerAdmin">
		<div className="headerTitleAdmin"><a>{title}</a></div>
		<ul>
			<li><a>Option</a></li>
			<li><a>Logout</a></li>
		</ul>
	</div>
)

export { Header }