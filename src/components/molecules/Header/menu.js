import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { navLinks } from '@config'
import styles from './menu.module.scss'
import { GlobalStateContext, GlobalDispatchContext } from '@context'

import { Hamburger } from '@components'

const Menu = () => {
	const state = useContext(GlobalStateContext)
	const dispatch = useContext(GlobalDispatchContext)

	return (
		<div className={styles.contentMenu}>
			<Hamburger />
			{/* {state.isOpen && ( */}
			<nav
				className={
					state.isOpen ? `${styles.isOpen} + ${styles.navMenu}` : styles.navMenu
				}
			>
				{navLinks && (
					<ul className={styles.ulMenu}>
						{navLinks.map(({ name }) => (
							<li className={styles.liMenu} key={name}>
								<Link
									to={`/${name}/`}
									onClick={() => {
										dispatch({ type: 'TOGGLE_OPEN' })
									}}
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
				)}
			</nav>
			{/* )} */}
		</div>
	)
}

export default Menu
