import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './logo.module.scss'

const Logo = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fixed(width: 42, height: 42, quality: 100) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	if (!data.placeholderImage.childImageSharp.fixed) {
		return <div>Picture not found</div>
	}

	return (
		<div className={styles.content}>
			<Link to="/">
				<Img
					className="logo"
					fixed={data.placeholderImage.childImageSharp.fixed}
				/>
			</Link>
		</div>
	)
}

export default Logo
