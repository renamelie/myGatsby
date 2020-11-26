import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './bgImg.module.scss'

const BGImg = ({ image, alt }) => {
	const data = useStaticQuery(graphql`
		query bgImg {
			allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
				edges {
					node {
						id
						name
						childImageSharp {
							fluid(maxWidth: 1920, quality: 80) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	`)

	const match = useMemo(
		() => data.allFile.edges.find(({ node }) => image === node.name),
		[data, image]
	)

	if (!match) {
		return <div>Picture not found</div>
	}

	return (
		<Img
			className={styles.imageBG}
			fluid={match.node.childImageSharp.fluid}
			alt={alt}
		/>
	)
}

BGImg.propTypes = {
	image: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}

export default BGImg
