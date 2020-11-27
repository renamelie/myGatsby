import React from 'react'
import styles from './story.module.scss'

// import { BGImg } from '@components'

const Story = () => {
	return (
		<section className={styles.content}>
			{/* <BGImg image="welcome3" alt="Image background2" /> */}
			<div className={styles.inner}>Our story</div>
		</section>
	)
}

export default Story
