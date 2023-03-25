interface props {
	handleShow: (key: number) => void;
	id: number;
	show: number | null;
	item: {
		navLink?: string;
		navName: string;
		children: { navLink: string; navItem: string }[];
	};
}

export const NavItem = ({ handleShow, id, show, item }: props) => {
	console.log("nav-item", id);

	return (
		<li
			onClick={() => handleShow(id)}
			className={show === id ? `nav-item show` : `nav-item`}
		>
			<div className="label">
				<a href={item.navLink}>{item.navName}</a>
				<span className="icon">{show === id ? "-" : "+"}</span>
			</div>
			<ol className="sub-item">
				{item.children.map((item, key) => {
					return (
						<li key={key}>
							<a href={item.navLink}>{item.navItem}</a>
						</li>
					);
				})}
			</ol>
		</li>
	);
};
