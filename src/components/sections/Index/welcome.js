import React from 'react'
import styles from './welcome.module.scss'

import { BGImg } from '@components'

const Welcome = () => {
	return (
		<div className={styles.content}>
			<BGImg image="welcome2" alt="Image background" />
			<div className={styles.inner}>Welcome</div>
		</div>
	)
}

export default Welcome
