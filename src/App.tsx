import { useEffect, useState } from "react";
import { useNavContext } from "./Context";
import { NavItem } from "./NavItem";
import "./style.scss";

export default function App() {
	const [data, setData] = useState({
		name: "Clement Femi Bazuaye",
		number: 8069916072,
		label: "Set",
	});

	const [state, setState] = useState(false);
	const [show, setShow] = useState(null);
	type key = any;
	const handleShow = (key: key) => {
		if (show === key) {
			setShow(null);
			return;
		}

		setShow(key);
		localStorage.setItem("nav", key);
		localStorage.setItem(
			"myData",
			JSON.stringify({
				name: "Bazz Blaze",
				number: "007",
				label: "Dev",
			})
		);
	};

	useEffect(() => {
		if (localStorage.getItem("nav")) {
			const value = Number(localStorage.getItem("nav"));
			setShow(value);
			console.log(value);
		}
		if (localStorage.getItem("myData")) {
			setData(JSON.parse(localStorage.getItem("myData")));
		}
	}, []);

	const items = [
		{
			title: `Nav Name`,
			children: [
				{ content: `This is an Item` },
				{ content: `this is another item` },
			],
		},
		{
			title: `Nav Name`,
			children: [
				{ content: `This is an Item` },
				{ content: `this is another item` },
			],
		},
	];

	const sideNav = [
		{ navName: "Dashboard", navLink: `/dashboard`, children: [] },
		{
			navName: "Request",

			children: [
				{ navItem: `leave`, navLink: `/leave` },
				{ navItem: `Tools`, navLink: `/tools` },
				{ navItem: `Funds`, navLink: `/funds` },
			],
		},
		{
			navName: "Admin",

			children: [
				{ navItem: `leave`, navLink: `/leave` },
				{ navItem: `Tools`, navLink: `/tools` },
				{ navItem: `Funds`, navLink: `/funds` },
			],
		},
		{
			navName: "Setting",

			children: [
				{ navItem: `leave`, navLink: `/leave` },
				{ navItem: `Tools`, navLink: `/tools` },
				{ navItem: `Funds`, navLink: `/funds` },
			],
		},
		{
			navName: "Management",

			children: [
				{ navItem: `leave`, navLink: `/leave` },
				{ navItem: `Tools`, navLink: `/tools` },
				{ navItem: `Funds`, navLink: `/funds` },
			],
		},
	];

	return (
		<>
			<div className="App">
				<h1>Hello World</h1>
				<p>{data.name}</p>
				<p>{data.number}</p>
				<p>{data.label}</p>

				<div className="accord">
					{items.map((item, key) => {
						return (
							<details key={key}>
								<summary>{item.title}</summary>
								<ul>
									{item.children.map((child, key) => (
										<li key={key}>{child.content}</li>
									))}
								</ul>
							</details>
						);
					})}
				</div>
				<button
					style={{
						marginTop: "1rem",
						backgroundColor: "black",
						color: "white",
						padding: "1rem 2rem",
						borderRadius: "8px",
					}}
					onClick={() => setState(!state)}
				>
					{" "}
					Check Me
				</button>

				<div
					style={{
						marginTop: "2rem",
					}}
					className="nav"
				>
					<nav>
						<ol className="nav-list">
							{sideNav.map((item, key) => {
								console.log("Mapped", key);
								return (
									<NavItem
										handleShow={handleShow}
										item={item}
										show={show}
										id={key}
										key={key}
									/>
								);
							})}
						</ol>
					</nav>
				</div>
			</div>
		</>
	);
}
