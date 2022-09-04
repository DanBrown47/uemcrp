import { AppBar, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"
import { classes, Root } from "./styles"

const Navbar = ({ user, setUser }) => {
	return (
		<Root className={classes.root} logoutVisible={user ? "block" : "none"}>
			<AppBar className={classes.appbar}>
				<Link className={classes.brand} to="/">
					<img src={logo} alt="logo" className={classes.icon} />
					<Typography className={classes.logo}>UNIVERSITY OF ENGINEERING & MANAGEMENT, KOLKATA</Typography>
					<Typography className={classes.logo2}>UEM KOLKATA</Typography>
				</Link>
				<Button className={classes.logout} onClick={() => setUser(null)}>LOGOUT</Button>
			</AppBar>
		</Root>
	)
}

export default Navbar
